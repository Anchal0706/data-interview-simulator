
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import { Mail, MessageSquare, Send, MapPin, Phone, Clock, Users, Building } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success('Thank you for your feedback!', {
        description: 'We will get back to you as soon as possible.',
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions, suggestions, or feedback about our platform? We'd love to hear from you!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@datainterview.pro</p>
                      <p className="text-muted-foreground">info@datainterview.pro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 765-4321</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">
                        123 Data Street, Suite 456<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                        Weekend: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6">About Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Team</h3>
                      <p className="text-muted-foreground">
                        A diverse team of data scientists, educators, and developers passionate about helping others succeed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Building size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To provide accessible, high-quality practice resources for data science interview preparation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Feedback about the platform"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="I'd like to provide feedback about..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24-48 business hours. Thank you for your patience!
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-lg shadow-lg p-8 animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg">How can I report technical issues with the platform?</h3>
                    <p className="text-muted-foreground">
                      Please use the contact form above and select "Technical Issue" as the subject. Include as much detail as possible, including your browser and the specific problem you're experiencing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">Do you offer custom practice packages for companies?</h3>
                    <p className="text-muted-foreground">
                      Yes! We offer customized interview preparation solutions for organizations. Please contact our business team at business@datainterview.pro for more information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">How can I suggest new topics or questions?</h3>
                    <p className="text-muted-foreground">
                      We welcome suggestions! Please use the contact form with the subject "Content Suggestion" and provide details about your recommendation.
                    </p>
                  </div>
                </div>
              </div>
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

export default Contact;
