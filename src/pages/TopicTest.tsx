
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TestQuestion } from '@/components/TestQuestion';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { allQuestions, topicNames } from '@/data/questions';

interface Answer {
  questionId: number;
  answerIndex: number;
}

const TopicTest = () => {
  const { topic = '' } = useParams<{topic: string}>();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionSet, setQuestionSet] = useState<any[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Validate topic exists
    if (!allQuestions[topic]) {
      toast.error('Topic not found');
      navigate('/topic-selection');
      return;
    }

    // Get previously used question IDs for this topic
    const usedQuestionsKey = `${topic}UsedQuestions`;
    const usedQuestionIdsStr = localStorage.getItem(usedQuestionsKey);
    const usedQuestionIds = usedQuestionIdsStr ? JSON.parse(usedQuestionIdsStr) : [];
    
    // Get all available questions for this topic
    const allTopicQuestions = allQuestions[topic] || [];
    
    // Filter out previously used questions if possible
    let availableQuestions = allTopicQuestions.filter(q => !usedQuestionIds.includes(q.id));
    
    // If we don't have enough unused questions, reset and use all questions
    if (availableQuestions.length < 5) {
      availableQuestions = allTopicQuestions;
      localStorage.setItem(usedQuestionsKey, JSON.stringify([]));
    }
    
    // Randomly select 5 questions (or fewer if not enough available)
    const selectedQuestions = [];
    const tempAvailable = [...availableQuestions];
    const questionsToSelect = Math.min(5, tempAvailable.length);
    
    for (let i = 0; i < questionsToSelect; i++) {
      const randomIndex = Math.floor(Math.random() * tempAvailable.length);
      // Add new sequential question number (1-5) for display purposes
      const questionWithUpdatedNumber = {
        ...tempAvailable[randomIndex],
        displayNumber: i + 1  // Add a displayNumber property for sequential display
      };
      selectedQuestions.push(questionWithUpdatedNumber);
      // Remove selected question from temp array to avoid duplicates
      tempAvailable.splice(randomIndex, 1);
    }
    
    // Save selected question IDs to indicate they've been used
    const newUsedIds = [
      ...usedQuestionIds,
      ...selectedQuestions.map(q => q.id)
    ];
    localStorage.setItem(usedQuestionsKey, JSON.stringify(newUsedIds));
    
    // Set the question set for this test
    setQuestionSet(selectedQuestions);
  }, [topic, navigate]);

  const handleAnswerSubmit = (id: number, answerIndex: number) => {
    setAnswers(prev => [...prev.filter(a => a.questionId !== id), { questionId: id, answerIndex }]);
    
    // Store if the answer was correct for progress tracking
    const currentQuestion = questionSet[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;
    sessionStorage.setItem(`${topic}Result_${id}`, isCorrect.toString());
    
    // If not the last question, advance to next question
    if (currentQuestionIndex < questionSet.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };
  
  const handleSubmitTest = () => {
    // Check if all questions are answered
    if (answers.length < questionSet.length) {
      toast.error('Please answer all questions before submitting');
      return;
    }
    
    // Store answers in session storage for results page
    sessionStorage.setItem(`${topic}Answers`, JSON.stringify(answers));
    
    // Navigate to results page
    navigate(`/mock-test/${topic}/results`);
  };
  
  // If topic doesn't exist or questions aren't loaded
  if (questionSet.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-3xl font-bold tracking-tight">{topicNames[topic]} Interview</h1>
            <p className="text-muted-foreground">
              Answer each multiple-choice question. Select the best option and submit your answer.
            </p>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div 
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(answers.length / questionSet.length) * 100}%` }} 
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questionSet.length}
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Only show current question */}
            <TestQuestion
              key={questionSet[currentQuestionIndex].id}
              question={{
                ...questionSet[currentQuestionIndex],
                displayNumber: currentQuestionIndex + 1 // Use displayNumber for showing sequence
              }}
              onAnswerSubmit={handleAnswerSubmit}
              userAnswerIndex={answers.find(a => a.questionId === questionSet[currentQuestionIndex].id)?.answerIndex}
              className="animate-fade-up"
            />
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                className="secondary-button"
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              
              {currentQuestionIndex < questionSet.length - 1 ? (
                <button
                  onClick={() => {
                    if (answers.find(a => a.questionId === questionSet[currentQuestionIndex].id)) {
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      toast.error('Please answer the current question before proceeding');
                    }
                  }}
                  className="primary-button"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmitTest}
                  className="primary-button"
                  disabled={answers.length < questionSet.length}
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>
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

export default TopicTest;
