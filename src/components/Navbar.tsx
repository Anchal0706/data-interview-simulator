
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-border/60 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-semibold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          DataCrack
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/mock-test" className="text-foreground/80 hover:text-foreground transition-colors">
            Mock Test
          </Link>
          <Link to="/progress" className="text-foreground/80 hover:text-foreground transition-colors">
            Progress
          </Link>
          <Link to="/sources" className="text-foreground/80 hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </div>
        
        <Link 
          to="/mock-test" 
          className="primary-button"
        >
          Start Practice
        </Link>
      </div>
    </nav>
  );
}
