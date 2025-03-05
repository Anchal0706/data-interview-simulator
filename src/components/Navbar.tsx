
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
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
        
        {/* Desktop Navigation */}
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
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        )}
        
        {/* CTA Button - Hide on mobile when menu is open */}
        {(!isMobile || !mobileMenuOpen) && (
          <Link 
            to="/mock-test" 
            className="primary-button md:block"
          >
            Start Practice
          </Link>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden animate-slide-down absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md border-b border-border/60 p-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/mock-test" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Mock Test
          </Link>
          <Link 
            to="/progress" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Progress
          </Link>
          <Link 
            to="/sources" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="text-foreground/80 hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/mock-test" 
            className="primary-button w-full text-center py-2.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Practice
          </Link>
        </div>
      )}
    </nav>
  );
}
