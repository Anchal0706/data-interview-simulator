
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TestQuestion } from '@/components/TestQuestion';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { allQuestions, topicNames } from '@/data/questions';
import { Check, X, BarChart } from 'lucide-react';

interface Answer {
  questionId: number;
  userAnswer: string;
}

interface QuestionResult {
  question: any;
  userAnswer: string;
  isCorrect: boolean;
}

const TestResults = () => {
  const { topic = '' } = useParams<{topic: string}>();
  const navigate = useNavigate();
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  
  const questions = allQuestions[topic] || [];
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
      evaluateAnswers(answers);
    } catch (e) {
      toast.error('Error loading test results');
      navigate(`/mock-test/${topic}`);
    }
  }, [topic, navigate]);
  
  const evaluateAnswers = (answers: Answer[]) => {
    // Evaluate each answer
    const questionResults = questions.map(question => {
      const answer = answers.find(a => a.questionId === question.id);
      if (!answer) return null;
      
      const isCorrect = evaluateAnswer(answer.userAnswer, question.correctAnswer);
      
      return {
        question,
        userAnswer: answer.userAnswer,
        isCorrect
      };
    }).filter(Boolean) as QuestionResult[];
    
    setResults(questionResults);
    
    // Calculate score
    const correctCount = questionResults.filter(r => r.isCorrect).length;
    setScore({
      correct: correctCount,
      total: questions.length
    });
    
    // Show toast with score
    toast.success('Test results ready', {
      description: `You scored ${correctCount} out of ${questions.length} questions.`,
      position: 'bottom-center',
      duration: 5000
    });
  };
  
  const evaluateAnswer = (userAnswer: string, correctAnswer: string): boolean => {
    // Same simplified evaluation logic as before
    const normalizeText = (text: string) => 
      text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    
    const normalizedUser = normalizeText(userAnswer);
    const normalizedCorrect = normalizeText(correctAnswer);
    
    const keyTerms = normalizedCorrect.split(' ')
      .filter(word => word.length > 4)
      .slice(0, 5);
      
    const matchCount = keyTerms.filter(term => normalizedUser.includes(term)).length;
    const matchRatio = matchCount / keyTerms.length;
    
    return matchRatio >= 0.4;
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
                userAnswer={result.userAnswer}
                showFeedback={true}
                feedback={{
                  isCorrect: result.isCorrect,
                  correctAnswer: result.question.correctAnswer,
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
          <p>&copy; {new Date().getFullYear()} DataInterviewPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TestResults;
