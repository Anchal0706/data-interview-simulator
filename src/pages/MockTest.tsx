
import { useState, useEffect } from 'react';
import { mockTestQuestions, Question } from '@/data/questions';
import { TestQuestion } from '@/components/TestQuestion';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

interface QuestionFeedback {
  [id: number]: {
    isCorrect: boolean;
    correctAnswer: string;
    explanation: string;
  };
}

const MockTest = () => {
  const [answers, setAnswers] = useState<{[id: number]: string}>({});
  const [feedback, setFeedback] = useState<QuestionFeedback>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState<{correct: number, total: number}>({ correct: 0, total: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerSubmit = (id: number, answer: string) => {
    setAnswers(prev => ({...prev, [id]: answer}));
    
    // Simple evaluation - in a real app, this would be more sophisticated
    const question = mockTestQuestions.find(q => q.id === id);
    if (!question) return;
    
    const isCorrect = evaluateAnswer(answer, question.correctAnswer);
    
    setFeedback(prev => ({
      ...prev, 
      [id]: {
        isCorrect,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation
      }
    }));
    
    toast(isCorrect ? 'Correct answer!' : 'Incorrect answer', {
      description: isCorrect 
        ? 'Great job! Keep going.' 
        : 'Review the feedback to learn the correct answer.',
      position: 'bottom-center',
      duration: 3000
    });
    
    // Check if all questions are answered
    const answeredCount = Object.keys(answers).length + 1; // +1 for current answer
    if (answeredCount === mockTestQuestions.length) {
      calculateFinalScore();
    }
  };
  
  const evaluateAnswer = (userAnswer: string, correctAnswer: string): boolean => {
    // This is a simplified evaluation. In a real app, you might use:
    // - NLP techniques for more sophisticated text comparison
    // - Keyword matching for technical terms
    // - Semantic similarity metrics
    
    // Convert to lowercase and remove punctuation for comparison
    const normalizeText = (text: string) => 
      text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    const normalizedUser = normalizeText(userAnswer);
    const normalizedCorrect = normalizeText(correctAnswer);
    
    // Check if key terms from the correct answer appear in user answer
    const keyTerms = normalizedCorrect.split(' ')
      .filter(word => word.length > 4) // Only consider significant words
      .slice(0, 5); // Take the first few key terms
      
    const matchCount = keyTerms.filter(term => normalizedUser.includes(term)).length;
    const matchRatio = matchCount / keyTerms.length;
    
    return matchRatio >= 0.4; // Consider it correct if 40% of key terms match
  };
  
  const calculateFinalScore = () => {
    const correctAnswers = Object.values(feedback).filter(f => f.isCorrect).length;
    setScore({
      correct: correctAnswers,
      total: mockTestQuestions.length
    });
    setIsCompleted(true);
    
    toast.success('Mock test completed!', {
      description: `You scored ${correctAnswers} out of ${mockTestQuestions.length} questions.`,
      position: 'bottom-center',
      duration: 5000
    });
  };
  
  const resetTest = () => {
    setAnswers({});
    setFeedback({});
    setIsCompleted(false);
    setScore({ correct: 0, total: 0 });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-3xl font-bold tracking-tight">Data Science Mock Interview</h1>
            <p className="text-muted-foreground">
              Answer each question as you would in a real interview. You'll receive immediate feedback after submitting each answer.
            </p>
          </div>
          
          {isCompleted && (
            <div className="glass-card rounded-xl p-8 text-center space-y-6 mb-12 animate-fade-down">
              <h2 className="text-2xl font-bold">Your Results</h2>
              <div className="text-5xl font-bold text-primary">
                {score.correct} / {score.total}
              </div>
              <p className="text-muted-foreground">
                {score.correct === score.total 
                  ? "Perfect score! You're ready for that interview!" 
                  : `You've done well! Review your answers to improve further.`}
              </p>
              <button onClick={resetTest} className="primary-button mt-4">
                Restart Test
              </button>
            </div>
          )}
          
          <div className="space-y-8">
            {mockTestQuestions.map((question) => (
              <TestQuestion
                key={question.id}
                question={question}
                onAnswerSubmit={handleAnswerSubmit}
                feedback={feedback[question.id]}
                className="animate-fade-up"
              />
            ))}
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

export default MockTest;
