
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TestQuestion } from '@/components/TestQuestion';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { allQuestions, topicNames } from '@/data/questions';
import { Check, X, BarChart } from 'lucide-react';

interface Answer {
  questionId: number;
  answerIndex: number;
}

interface QuestionResult {
  question: any;
  userAnswerIndex: number;
  isCorrect: boolean;
}

const TestResults = () => {
  const { topic = '' } = useParams<{topic: string}>();
  const navigate = useNavigate();
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  
  const topicName = topicNames[topic] || 'Unknown Topic';
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Validate topic exists
    if (!allQuestions[topic]) {
      toast.error('Topic not found');
      navigate('/topic-selection');
      return;
    }
    
    // Get answers from session storage
    const storedAnswers = sessionStorage.getItem(`${topic}Answers`);
    if (!storedAnswers) {
      toast.error('No test data found');
      navigate(`/mock-test/${topic}`);
      return;
    }
    
    try {
      const answers: Answer[] = JSON.parse(storedAnswers);
      
      // Get the question set used for this test
      // In a real app, you'd store this in session storage when taking the test
      // For this example, we'll get the questions from the global questions
      const questionIds = answers.map(a => a.questionId);
      const questionSet = [];
      
      // Find the questions that were answered
      for (const q of allQuestions[topic] || []) {
        if (questionIds.includes(q.id)) {
          questionSet.push(q);
        }
      }
      
      evaluateAnswers(answers, questionSet);
    } catch (e) {
      toast.error('Error loading test results');
      navigate(`/mock-test/${topic}`);
    }
  }, [topic, navigate]);
  
  const evaluateAnswers = (answers: Answer[], questionSet: any[]) => {
    // Evaluate each answer
    const questionResults = questionSet.map(question => {
      const answer = answers.find(a => a.questionId === question.id);
      if (!answer) return null;
      
      const isCorrect = answer.answerIndex === question.correctAnswerIndex;
      
      return {
        question,
        userAnswerIndex: answer.answerIndex,
        isCorrect
      };
    }).filter(Boolean) as QuestionResult[];
    
    setResults(questionResults);
    
    // Calculate score
    const correctCount = questionResults.filter(r => r.isCorrect).length;
    setScore({
      correct: correctCount,
      total: questionSet.length
    });
    
    // Show toast with score
    toast.success('Test results ready', {
      description: `You scored ${correctCount} out of ${questionSet.length} questions.`,
      position: 'bottom-center',
      duration: 5000
    });
  };
  
  // Calculate performance by difficulty
  const getPerformanceByDifficulty = () => {
    const byDifficulty: {[key: string]: {correct: number, total: number}} = {
      easy: {correct: 0, total: 0},
      medium: {correct: 0, total: 0},
      hard: {correct: 0, total: 0}
    };
    
    results.forEach(result => {
      const difficulty = result.question.difficulty;
      byDifficulty[difficulty].total++;
      if (result.isCorrect) {
        byDifficulty[difficulty].correct++;
      }
    });
    
    return byDifficulty;
  };
  
  // If results aren't loaded yet
  if (results.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold">Calculating your results...</h1>
        </div>
      </div>
    );
  }

  const performanceByDifficulty = getPerformanceByDifficulty();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-3xl font-bold tracking-tight">{topicName} Interview Results</h1>
          </div>
          
          {/* Results summary */}
          <div className="glass-card rounded-xl p-8 mb-12 animate-fade-down">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Score</h2>
                <div className="text-5xl font-bold text-primary">
                  {score.correct} / {score.total}
                </div>
                <p className="text-muted-foreground">
                  {score.correct === score.total 
                    ? "Perfect score! You're ready for that interview!" 
                    : score.correct >= score.total * 0.8
                    ? "Great job! You're well prepared."
                    : score.correct >= score.total * 0.6
                    ? "Good effort. Review the areas for improvement."
                    : "Keep practicing. Review the detailed feedback below."}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Performance by Difficulty</h3>
                <div className="space-y-3">
                  {['easy', 'medium', 'hard'].map(difficulty => (
                    <div key={difficulty}>
                      <div className="flex justify-between mb-1">
                        <span className="capitalize">{difficulty}</span>
                        <span>{performanceByDifficulty[difficulty].correct}/{performanceByDifficulty[difficulty].total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            difficulty === 'easy' ? 'bg-green-500' : 
                            difficulty === 'medium' ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}
                          style={{ 
                            width: `${(performanceByDifficulty[difficulty].correct / 
                              (performanceByDifficulty[difficulty].total || 1)) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <Link to="/topic-selection" className="secondary-button">
                Try Another Topic
              </Link>
              <Link to={`/mock-test/${topic}`} className="primary-button">
                Retake This Test
              </Link>
              <Link to="/progress" className="secondary-button flex items-center gap-2">
                <BarChart size={18} />
                View Progress
              </Link>
            </div>
          </div>
          
          {/* Detailed question results */}
          <h2 className="text-2xl font-bold mb-6">Detailed Feedback</h2>
          <div className="space-y-8">
            {results.map((result) => (
              <TestQuestion
                key={result.question.id}
                question={result.question}
                onAnswerSubmit={() => {}} // No-op since we're just displaying
                userAnswerIndex={result.userAnswerIndex}
                showFeedback={true}
                feedback={{
                  isCorrect: result.isCorrect,
                  correctAnswerIndex: result.question.correctAnswerIndex,
                  explanation: result.question.explanation
                }}
                className="animate-fade-up"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataScienceInterviewPrep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TestResults;
