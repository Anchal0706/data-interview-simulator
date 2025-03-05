
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestQuestion } from '@/components/TestQuestion';
import Navbar from '@/components/Navbar';
import { allQuestions, topicNames } from '@/data/questions';

// Create combined test questions from all topics
const createMockTestQuestions = () => {
  const mockQuestions = [];
  const topicsArray = Object.keys(allQuestions);
  
  // Get 1-2 random questions from each topic
  for (const topic of topicsArray) {
    const topicQuestions = allQuestions[topic];
    if (topicQuestions && topicQuestions.length > 0) {
      // Get 1-2 random questions
      const numToSelect = Math.min(2, topicQuestions.length);
      const selectedIndices = new Set<number>();
      
      while (selectedIndices.size < numToSelect) {
        const randIndex = Math.floor(Math.random() * topicQuestions.length);
        selectedIndices.add(randIndex);
      }
      
      // Add selected questions
      Array.from(selectedIndices).forEach(index => {
        mockQuestions.push({
          ...topicQuestions[index],
          topicName: topicNames[topic]
        });
      });
    }
  }
  
  // Shuffle all questions
  for (let i = mockQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mockQuestions[i], mockQuestions[j]] = [mockQuestions[j], mockQuestions[i]];
  }
  
  // Add sequential display numbers
  return mockQuestions.map((q, index) => ({
    ...q,
    displayNumber: index + 1
  }));
};

const MockTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{id: number, answerIndex: number}[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [feedbacks, setFeedbacks] = useState<{
    [key: number]: {
      isCorrect: boolean;
      correctAnswerIndex: number;
      explanation: string;
    }
  }>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const mockQuestions = createMockTestQuestions();
    setQuestions(mockQuestions);
  }, []);
  
  const handleAnswerSubmit = (id: number, answerIndex: number) => {
    const questionIndex = questions.findIndex(q => q.id === id);
    const question = questions[questionIndex];
    const isCorrect = answerIndex === question.correctAnswerIndex;
    
    // Save answer and feedback
    setAnswers(prev => [...prev.filter(a => a.id !== id), { id, answerIndex }]);
    setFeedbacks(prev => ({
      ...prev,
      [id]: {
        isCorrect,
        correctAnswerIndex: question.correctAnswerIndex,
        explanation: question.explanation
      }
    }));
    
    // Track for progress page
    sessionStorage.setItem(`mockResult_${id}`, isCorrect.toString());
    
    // Move to next question after a short delay
    if (currentQuestionIndex < questions.length - 1 && !testCompleted) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        window.scrollTo(0, 0);
      }, 800);
    }
  };
  
  const handleTestComplete = () => {
    setTestCompleted(true);
    
    // Save mock test results for progress tracking
    const mockResults = answers.map(answer => {
      const question = questions.find(q => q.id === answer.id);
      return {
        questionId: answer.id,
        answerIndex: answer.answerIndex,
        topic: question.topic,
        isCorrect: answer.answerIndex === question.correctAnswerIndex
      };
    });
    
    sessionStorage.setItem('mockTestResults', JSON.stringify(mockResults));
    
    // Navigate to results page
    navigate('/mock-test/results');
  };
  
  // If questions aren't loaded yet
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <Navbar />
        <div className="pt-32 pb-20 px-6 flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-3xl font-bold">Full Mock Interview</h1>
            <p className="text-muted-foreground">
              This mock test includes questions from all topics to simulate a real interview.
            </p>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div 
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(answers.length / questions.length) * 100}%` }} 
              ></div>
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
              <span>{answers.length} answered</span>
            </div>
          </div>
          
          {testCompleted ? (
            <div className="space-y-12">
              <h2 className="text-2xl font-bold text-center">Review Your Answers</h2>
              
              {questions.map((question, index) => (
                <TestQuestion
                  key={question.id}
                  question={question}
                  onAnswerSubmit={() => {}} // No-op since we're in review mode
                  userAnswerIndex={answers.find(a => a.id === question.id)?.answerIndex}
                  feedback={feedbacks[question.id]}
                  showFeedback={true}
                />
              ))}
              
              <div className="flex justify-center">
                <button
                  onClick={() => navigate('/progress')}
                  className="primary-button"
                >
                  View Progress Dashboard
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <TestQuestion
                question={questions[currentQuestionIndex]}
                onAnswerSubmit={handleAnswerSubmit}
                userAnswerIndex={answers.find(a => a.id === questions[currentQuestionIndex].id)?.answerIndex}
                feedback={feedbacks[questions[currentQuestionIndex].id]}
                showFeedback={!!feedbacks[questions[currentQuestionIndex].id]}
              />
              
              <div className="flex flex-wrap justify-between gap-4 mt-8">
                <button
                  onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                  className="secondary-button"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                
                <div className="flex gap-4">
                  {currentQuestionIndex < questions.length - 1 ? (
                    <button
                      onClick={() => {
                        if (answers.find(a => a.id === questions[currentQuestionIndex].id)) {
                          setCurrentQuestionIndex(currentQuestionIndex + 1);
                          window.scrollTo(0, 0);
                        }
                      }}
                      className="primary-button"
                      disabled={!answers.find(a => a.id === questions[currentQuestionIndex].id)}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleTestComplete}
                      className="primary-button"
                      disabled={answers.length < questions.length}
                    >
                      Complete Test
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataCrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MockTest;
