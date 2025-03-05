import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '@/components/Navbar';
import { topicNames } from '@/data/questions';
import { AlertTriangle, TrendingUp, Lightbulb, Bookmark } from 'lucide-react';

// Define the progress data structure
interface TopicProgress {
  topicId: string;
  name: string;
  correct: number;
  incorrect: number;
  total: number;
  lastAttempted?: string;
}

const Progress = () => {
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState<TopicProgress[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Get topic data from localStorage on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    loadProgressData();
  }, []);

  const loadProgressData = () => {
    setLoading(true);
    // Create progress data array from localStorage
    const topicData: TopicProgress[] = [];
    
    // Get all topic keys
    Object.keys(topicNames).forEach(topicId => {
      // Get data from localStorage for this topic if exists
      const answersKey = `${topicId}Answers`;
      const storedAnswers = sessionStorage.getItem(answersKey);
      
      if (storedAnswers) {
        try {
          const answers = JSON.parse(storedAnswers);
          
          // Count correct and incorrect answers
          let correctCount = 0;
          answers.forEach((answer: {questionId: number, answerIndex: number}) => {
            // Get the correct answer by fetching from questions data
            // This is a simplified approach - in a real app, you might store results differently
            const isCorrect = sessionStorage.getItem(`${topicId}Result_${answer.questionId}`) === "true";
            if (isCorrect) correctCount++;
          });
          
          topicData.push({
            topicId,
            name: topicNames[topicId as keyof typeof topicNames],
            correct: correctCount,
            incorrect: answers.length - correctCount,
            total: answers.length,
            lastAttempted: new Date().toISOString()
          });
        } catch (e) {
          console.error(`Error parsing ${topicId} answers:`, e);
        }
      } else {
        // Add empty data for topics not yet attempted
        topicData.push({
          topicId,
          name: topicNames[topicId as keyof typeof topicNames],
          correct: 0,
          incorrect: 0,
          total: 0
        });
      }
    });
    
    setProgressData(topicData);
    setLoading(false);
    
    // Select first topic with data if available
    const topicWithData = topicData.find(t => t.total > 0);
    if (topicWithData) {
      setSelectedTopic(topicWithData.topicId);
    }
  };

  // Get overall data for chart
  const getOverallData = () => {
    const totalCorrect = progressData.reduce((sum, topic) => sum + topic.correct, 0);
    const totalIncorrect = progressData.reduce((sum, topic) => sum + topic.incorrect, 0);
    const totalAttempted = totalCorrect + totalIncorrect;
    
    if (totalAttempted === 0) return [];
    
    return [
      { name: 'Correct', value: totalCorrect },
      { name: 'Incorrect', value: totalIncorrect },
    ];
  };

  // Bar chart data for each topic
  const getTopicsData = () => {
    return progressData
      .filter(topic => topic.total > 0)
      .map(topic => ({
        name: topic.name,
        correct: topic.correct,
        incorrect: topic.incorrect,
        accuracy: topic.total > 0 ? Math.round((topic.correct / topic.total) * 100) : 0
      }));
  };

  // Get performance details for selected topic
  const getSelectedTopicDetails = () => {
    if (!selectedTopic) return null;
    
    const topic = progressData.find(t => t.topicId === selectedTopic);
    if (!topic || topic.total === 0) return null;
    
    const accuracy = Math.round((topic.correct / topic.total) * 100);
    
    let status = 'Needs Improvement';
    let recommendation = 'Focus on studying the fundamentals of this topic.';
    
    if (accuracy >= 80) {
      status = 'Excellent';
      recommendation = 'You have mastered this topic! Keep up the good work.';
    } else if (accuracy >= 60) {
      status = 'Good';
      recommendation = 'You\'re doing well, but can improve with more practice.';
    } else if (accuracy >= 40) {
      status = 'Average';
      recommendation = 'Keep practicing and focus on your weak areas.';
    }
    
    return {
      topic,
      accuracy,
      status,
      recommendation
    };
  };

  // Light pastel colors for charts
  const COLORS = {
    correct: '#D3E4FD',    // Light pastel blue
    incorrect: '#FFDEE2'    // Light pastel red
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Your Progress Dashboard</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track your performance across different interview topics and identify areas for improvement.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading your progress data...</p>
              </div>
            </div>
          ) : progressData.every(topic => topic.total === 0) ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <AlertTriangle size={48} className="text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">No Progress Data Yet</h2>
              <p className="text-muted-foreground mb-6">
                You haven't completed any practice tests yet. Take some tests to see your progress!
              </p>
              <button 
                onClick={() => navigate('/topic-selection')}
                className="primary-button mx-auto"
              >
                Start Practicing
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Overall Progress */}
              <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6">Overall Performance</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex justify-center items-center">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={getOverallData()}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Questions" fill={COLORS.correct} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="space-y-4 flex flex-col justify-center">
                    <h3 className="text-xl font-medium">Your Statistics</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Total Questions</p>
                        <p className="text-2xl font-bold">
                          {progressData.reduce((sum, topic) => sum + topic.total, 0)}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Topics Attempted</p>
                        <p className="text-2xl font-bold">
                          {progressData.filter(topic => topic.total > 0).length}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Correct Answers</p>
                        <p className="text-2xl font-bold text-primary">
                          {progressData.reduce((sum, topic) => sum + topic.correct, 0)}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Overall Accuracy</p>
                        <p className="text-2xl font-bold">
                          {progressData.reduce((sum, topic) => sum + topic.total, 0) > 0 ? 
                            Math.round((progressData.reduce((sum, topic) => sum + topic.correct, 0) / 
                            progressData.reduce((sum, topic) => sum + topic.total, 0)) * 100) : 0}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Topic-wise Performance */}
              <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6">Topic-wise Performance</h2>
                
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={getTopicsData()}
                    margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="correct" name="Correct" stackId="a" fill={COLORS.correct} />
                    <Bar dataKey="incorrect" name="Incorrect" stackId="a" fill={COLORS.incorrect} />
                  </BarChart>
                </ResponsiveContainer>
                
                <div className="mt-6">
                  <p className="text-muted-foreground">
                    Select a topic to see detailed performance and recommendations.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4">
                    {progressData.map(topic => (
                      <button
                        key={topic.topicId}
                        onClick={() => setSelectedTopic(topic.topicId)}
                        className={`p-2 text-sm rounded-md transition-colors ${
                          selectedTopic === topic.topicId 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-gray-100 hover:bg-gray-200'
                        } ${topic.total === 0 ? 'opacity-50' : ''}`}
                        disabled={topic.total === 0}
                      >
                        {topic.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Selected Topic Details */}
              {getSelectedTopicDetails() && (
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                  <h2 className="text-2xl font-semibold mb-6">
                    {getSelectedTopicDetails()?.topic.name} Performance Details
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <TrendingUp size={32} className="text-primary mb-2" />
                      <h3 className="text-lg font-medium">Accuracy</h3>
                      <p className="text-3xl font-bold mt-1">{getSelectedTopicDetails()?.accuracy}%</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {getSelectedTopicDetails()?.topic.correct} correct out of {getSelectedTopicDetails()?.topic.total} questions
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <AlertTriangle size={32} className="text-yellow-500 mb-2" />
                      <h3 className="text-lg font-medium">Status</h3>
                      <p className="text-xl font-semibold mt-1">{getSelectedTopicDetails()?.status}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Based on your performance in this topic
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Lightbulb size={32} className="text-amber-500 mb-2" />
                      <h3 className="text-lg font-medium">Recommendation</h3>
                      <p className="text-sm mt-1">{getSelectedTopicDetails()?.recommendation}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => navigate(`/mock-test/${getSelectedTopicDetails()?.topic.topicId}`)}
                      className="primary-button flex items-center gap-2"
                    >
                      <Bookmark size={18} />
                      Practice Again
                    </button>
                  </div>
                </div>
              )}
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

export default Progress;
