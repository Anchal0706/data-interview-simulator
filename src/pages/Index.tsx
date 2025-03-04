
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { FeatureCard } from '@/components/FeatureCard';
import { FileText, CheckSquare, GraduationCap, BrainCircuit, Database, Lightbulb } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-up">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Practice Makes Perfect
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Master Your Data Science <br className="hidden md:block" />
              <span className="text-gradient">Interview Skills</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Prepare confidently with realistic mock interviews featuring the most commonly asked data science questions. Get instant feedback to improve your answers.
            </p>
            <div className="pt-4">
              <Link to="/mock-test" className="primary-button text-base px-8 py-3">
                Start Mock Interview
              </Link>
              <Link to="/about" className="secondary-button text-base ml-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold tracking-tight">Why Practice With Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to help you master the technical interview process with realistic practice and immediate feedback.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Realistic Questions" 
              description="Practice with questions frequently asked in actual data science interviews."
              icon={<FileText className="w-5 h-5" />}
              className="animate-fade-up" 
              />
            <FeatureCard 
              title="Instant Feedback" 
              description="Get immediate feedback on your answers to identify improvement areas."
              icon={<CheckSquare className="w-5 h-5" />}
              className="animate-fade-up [animation-delay:100ms]" 
            />
            <FeatureCard 
              title="Career Advancement" 
              description="Develop the skills and confidence needed to ace your dream job interviews."
              icon={<GraduationCap className="w-5 h-5" />}
              className="animate-fade-up [animation-delay:200ms]" 
            />
            <FeatureCard 
              title="ML & AI Concepts" 
              description="Master foundational and advanced machine learning concepts and algorithms."
              icon={<BrainCircuit className="w-5 h-5" />}
              className="animate-fade-up [animation-delay:300ms]" 
            />
            <FeatureCard 
              title="SQL & Data Engineering" 
              description="Sharpen your data manipulation and database skills with practical examples."
              icon={<Database className="w-5 h-5" />}
              className="animate-fade-up [animation-delay:400ms]" 
            />
            <FeatureCard 
              title="Problem Solving" 
              description="Improve your analytical thinking and problem-solving approach to technical challenges."
              icon={<Lightbulb className="w-5 h-5" />}
              className="animate-fade-up [animation-delay:500ms]" 
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Ace Your Interview?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start practicing now with our carefully curated data science interview questions and give yourself the competitive edge.
          </p>
          <Link to="/mock-test" className="primary-button text-base px-8 py-3 inline-block">
            Begin Mock Interview
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
