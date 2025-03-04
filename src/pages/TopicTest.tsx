
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TestQuestion } from '@/components/TestQuestion';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { allQuestions, topicNames } from '@/data/questions';

interface Answer {
  questionId: number;
  userAnswer: string;
}

const TopicTest = () => {
  const { topic = '' } = useParams<{topic: string}>();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const questions = allQuestions[topic] || [];
  const topicName = topicNames[topic] || 'Unknown Topic';
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Validate topic exists
    if (!allQuestions[topic]) {
      toast.error('Topic not found');
      navigate('/topic-selection');
    }
  }, [topic, navigate]);

  const handleAnswerSubmit = (id: number, answer: string) => {
    setAnswers(prev => [...prev.filter(a => a.questionId !== id), { questionId: id, userAnswer: answer }]);
    
    // If not the last question, advance to next question
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };
  
  const handleSubmitTest = () => {
    // Check if all questions are answered
    if (answers.length < questions.length) {
      toast.error('Please answer all questions before submitting');
      return;
    }
    
    // Store answers in session storage for results page
    sessionStorage.setItem(`${topic}Answers`, JSON.stringify(answers));
    
    // Navigate to results page
    navigate(`/mock-test/${topic}/results`);
  };
  
  // If topic doesn't exist or questions aren't loaded
  if (questions.length === 0) {
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
            <h1 className="text-3xl font-bold tracking-tight">{topicName} Interview</h1>
            <p className="text-muted-foreground">
              Answer each question as you would in a real interview. Progress through all questions and submit at the end for feedback.
            </p>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div 
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(answers.length / questions.length) * 100}%` }} 
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Only show current question */}
            <TestQuestion
              key={questions[currentQuestionIndex].id}
              question={questions[currentQuestionIndex]}
              onAnswerSubmit={handleAnswerSubmit}
              userAnswer={answers.find(a => a.questionId === questions[currentQuestionIndex].id)?.userAnswer}
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
              
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={() => {
                    if (answers.find(a => a.questionId === questions[currentQuestionIndex].id)) {
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
                  disabled={answers.length < questions.length}
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
          <p>&copy; {new Date().getFullYear()} DataInterviewPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TopicTest;
