
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { FeatureCard } from '@/components/FeatureCard';
import { topicNames } from '@/data/questions';
import { Code, BookOpen, Database, BrainCircuit, GitBranch } from 'lucide-react';

const TopicSelection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Topic cards with icons
  const topicCards = [
    { 
      id: 'python', 
      name: topicNames.python, 
      icon: <Code size={24} />,
      description: "Test your Python knowledge with questions covering data structures, functions, libraries, and more."
    },
    { 
      id: 'statistics', 
      name: topicNames.statistics, 
      icon: <BookOpen size={24} />,
      description: "Evaluate your statistical knowledge with questions on probability, distributions, hypothesis testing, and more."
    },
    { 
      id: 'data_science', 
      name: topicNames.data_science, 
      icon: <Database size={24} />,
      description: "Test your data science knowledge covering concepts like data wrangling, visualization, and analysis."
    },
    { 
      id: 'machine_learning', 
      name: topicNames.machine_learning, 
      icon: <BrainCircuit size={24} />,
      description: "Challenge yourself with machine learning questions about algorithms, model evaluation, and best practices."
    },
    { 
      id: 'sql', 
      name: topicNames.sql, 
      icon: <GitBranch size={24} />,
      description: "Test your SQL knowledge with questions on queries, joins, aggregations, and database concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight">Choose Your Interview Topic</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select a topic below to start a mock interview. Each test contains 5 questions ranging from easy to hard. 
              You'll receive detailed feedback after completing all questions.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topicCards.map((topic) => (
              <Link to={`/mock-test/${topic.id}`} key={topic.id}>
                <FeatureCard
                  title={topic.name}
                  description={topic.description}
                  icon={topic.icon}
                  className="h-full cursor-pointer hover:bg-primary/5"
                />
              </Link>
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

export default TopicSelection;
