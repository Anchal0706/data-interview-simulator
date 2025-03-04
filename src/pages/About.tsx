
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-3xl font-bold tracking-tight">About DataInterviewPro</h1>
            <p className="text-muted-foreground">
              We help data science candidates prepare for interviews through realistic practice and immediate feedback.
            </p>
          </div>
          
          <div className="space-y-12 animate-fade-up">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p>
                At DataInterviewPro, we believe that everyone deserves access to high-quality interview preparation resources. Our mission is to level the playing field by providing realistic practice experiences for data science candidates at all levels, from entry-level analysts to senior scientists.
              </p>
              <p>
                We're passionate about helping individuals showcase their true potential during interviews by focusing on the technical skills and problem-solving abilities that matter most in the data science field.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Why Practice With Us</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Industry-Relevant Questions</strong> - Our questions are sourced from actual interviews at leading tech companies and startups.</li>
                <li><strong>Immediate Feedback</strong> - Learn from your mistakes in real-time with detailed explanations and correct answers.</li>
                <li><strong>Comprehensive Coverage</strong> - Practice across various data science domains including machine learning, statistics, SQL, and problem-solving.</li>
                <li><strong>Zero Pressure Environment</strong> - Build confidence by practicing in a stress-free setting before your high-stakes interviews.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>Take the Mock Test</strong> - Answer a series of data science interview questions.</li>
                <li><strong>Submit Your Answers</strong> - Provide responses as you would in a real interview.</li>
                <li><strong>Receive Instant Feedback</strong> - Get immediate feedback on each answer, including the correct solution and explanation.</li>
                <li><strong>Review Your Performance</strong> - Analyze your results to identify areas for improvement.</li>
                <li><strong>Practice Regularly</strong> - Return often to reinforce your knowledge and build confidence.</li>
              </ol>
            </section>
            
            <div className="text-center pt-8">
              <Link to="/mock-test" className="primary-button">
                Start Practicing Now
              </Link>
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

export default About;
