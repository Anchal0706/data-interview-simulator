
import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { FeatureCard } from '@/components/FeatureCard';
import { BrainCircuit, Code, BookOpen, Trophy, BookMarked, Globe, Construction, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight">About DataInterviewPro</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An initiative by Akanksha and Anchal to help aspiring data professionals 
              prepare for technical interviews with practical, realistic practice questions.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Founders Section (New) */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-center">Our Founders</h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Akanksha</h3>
                  <p className="text-muted-foreground mb-4">
                    A passionate data scientist with experience in machine learning and 
                    statistical analysis. Having gone through numerous technical interviews,
                    Akanksha recognized the need for structured interview preparation resources
                    for data professionals.
                  </p>
                  <div className="flex items-center text-primary">
                    <Rocket size={18} className="mr-2" />
                    <span className="font-medium">Co-founder & Data Science Expert</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Anchal</h3>
                  <p className="text-muted-foreground mb-4">
                    With a background in software engineering and data engineering, Anchal
                    brings technical expertise and a deep understanding of industry interview
                    processes. Her focus is on building practical tools that help candidates
                    develop real-world skills.
                  </p>
                  <div className="flex items-center text-primary">
                    <Rocket size={18} className="mr-2" />
                    <span className="font-medium">Co-founder & Technical Lead</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Mission Statement */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">Our Mission</h2>
              <p className="text-lg text-center max-w-3xl mx-auto">
                We're on a mission to democratize data science education by providing accessible, 
                high-quality practice materials for technical interviews. Our goal is to help you 
                build confidence, identify knowledge gaps, and ultimately land your dream job.
              </p>
            </section>
            
            {/* Website Status Section (New) */}
            <section className="space-y-6 bg-blue-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                  <Construction size={36} />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-center">Under Development</h2>
              <p className="text-center max-w-3xl mx-auto">
                DataInterviewPro is currently under active development. We're continuously adding
                new features, practice questions, and resources. Thank you for your patience as we
                work to create the best possible interview preparation platform for data professionals.
              </p>
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  Have suggestions or feedback? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
                </p>
              </div>
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
