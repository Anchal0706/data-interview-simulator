import React from 'react';
import Navbar from '@/components/Navbar';
import { FeatureCard } from '@/components/FeatureCard';
import { Link } from 'react-router-dom';
import { BrainCircuit, LineChart, Trophy, BookOpen, Code, Database } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Measure Your Skill for Data Science Interview
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practice with topic-specific interview questions and receive detailed feedback to improve your skills.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/topic-selection" className="primary-button text-lg px-6 py-3">
                Start Practicing
              </Link>
              <Link to="/about" className="secondary-button text-lg px-6 py-3">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Topic preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <Link to="/mock-test/python" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Code size={24} />
              </div>
              <span className="font-medium">Python</span>
            </Link>
            
            <Link to="/mock-test/statistics" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <LineChart size={24} />
              </div>
              <span className="font-medium">Statistics</span>
            </Link>
            
            <Link to="/mock-test/data_science" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Database size={24} />
              </div>
              <span className="font-medium">Data Science</span>
            </Link>
            
            <Link to="/mock-test/machine_learning" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <BrainCircuit size={24} />
              </div>
              <span className="font-medium">ML</span>
            </Link>
            
            <Link to="/mock-test/sql" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Database size={24} />
              </div>
              <span className="font-medium">SQL</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use DataInterviewPro?</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="Topic-Specific Practice"
              description="Focus on individual areas like Python, Statistics, Machine Learning, and SQL to target your weaknesses."
              icon={<BookOpen size={24} />}
            />
            
            <FeatureCard
              title="Realistic Interview Questions"
              description="Practice with questions commonly asked by top tech companies in real data science interviews."
              icon={<BrainCircuit size={24} />}
            />
            
            <FeatureCard
              title="Detailed Performance Analysis"
              description="Get comprehensive feedback on your answers and track your progress across different topics."
              icon={<LineChart size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          
          <div className="glass-card p-8 rounded-xl">
            <p className="text-lg italic mb-6">
              "The topic-based approach helped me identify my weak areas and focus my preparation. 
              After practicing with DataInterviewPro for three weeks, I aced my interview and landed my dream job!"
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                JS
              </div>
              <div className="text-left">
                <p className="font-semibold">Jamie Smith</p>
                <p className="text-sm text-muted-foreground">Data Scientist at TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Ready to Ace Your Interview?</h2>
          <p className="text-xl text-muted-foreground">
            Start practicing now and build the confidence you need to succeed.
          </p>
          <Link to="/topic-selection" className="primary-button text-lg px-8 py-3 inline-block">
            Choose a Topic & Start
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DataInterviewPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
