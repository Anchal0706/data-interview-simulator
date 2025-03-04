
import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { FeatureCard } from '@/components/FeatureCard';
import { BrainCircuit, Code, BookOpen, Trophy, BookMarked, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight">About DataInterviewPro</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your ultimate companion for data science interview preparation.
              We help aspiring data professionals ace their technical interviews with 
              practical, realistic practice questions.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Mission Statement */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">Our Mission</h2>
              <p className="text-lg text-center max-w-3xl mx-auto">
                We're on a mission to democratize data science education by providing accessible, 
                high-quality practice materials for technical interviews. Our goal is to help you 
                build confidence, identify knowledge gaps, and ultimately land your dream job.
              </p>
            </section>
            
            {/* Features */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-center">Why Practice With Us</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <FeatureCard
                  title="Structured Learning Path"
                  description="Our questions are carefully curated to cover key concepts that appear in real interviews."
                  icon={<BookMarked size={24} />}
                />
                
                <FeatureCard
                  title="Multiple Topics"
                  description="Practice across various domains including Python, Statistics, SQL, and Machine Learning."
                  icon={<Globe size={24} />}
                />
                
                <FeatureCard
                  title="Skill Assessment"
                  description="Get detailed feedback on your answers and identify areas for improvement."
                  icon={<Trophy size={24} />}
                />
                
                <FeatureCard
                  title="Real-world Questions"
                  description="Our questions mirror the style and difficulty of those asked by top tech companies."
                  icon={<BrainCircuit size={24} />}
                />
              </div>
            </section>
            
            {/* Topics */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-center">Topics We Cover</h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-2 p-6 rounded-lg bg-white shadow-sm">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Python</h3>
                  <p className="text-muted-foreground text-sm">
                    Data structures, functions, libraries, and programming best practices
                  </p>
                </div>
                
                <div className="text-center space-y-2 p-6 rounded-lg bg-white shadow-sm">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Statistics</h3>
                  <p className="text-muted-foreground text-sm">
                    Probability, distributions, hypothesis testing, and statistical inference
                  </p>
                </div>
                
                <div className="text-center space-y-2 p-6 rounded-lg bg-white shadow-sm">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <BrainCircuit size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Machine Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Algorithms, model evaluation, feature engineering, and best practices
                  </p>
                </div>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="text-center space-y-6 mt-12">
              <h2 className="text-3xl font-bold">Ready to Test Your Skills?</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Start practicing now with our topic-specific mock interviews and build the 
                confidence you need to ace your next data science interview.
              </p>
              <div className="mt-8">
                <Link to="/topic-selection" className="primary-button text-lg px-8 py-3">
                  Start Practicing
                </Link>
              </div>
            </section>
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

export default About;
