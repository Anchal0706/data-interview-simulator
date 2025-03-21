
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, LogIn } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  // Function to handle protected link clicks
  const handleProtectedLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setLoginModalOpen(true);
    }
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
          {isAuthenticated ? (
            <>
              <Link 
                to="/mock-test" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Mock Test
              </Link>
              <Link 
                to="/progress" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Progress
              </Link>
              <Link 
                to="/sources" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </Link>
            </>
          ) : (
            <>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setLoginModalOpen(true);
                }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Mock Test
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setLoginModalOpen(true);
                }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Progress
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setLoginModalOpen(true);
                }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Resources
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setLoginModalOpen(true);
                }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setLoginModalOpen(true);
                }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </a>
            </>
          )}
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
        
        {/* Authentication Actions */}
        <div className="flex items-center space-x-4">
          {/* CTA Button - Hide on mobile when menu is open */}
          {(!isMobile || !mobileMenuOpen) && (
            <>
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <button 
                  onClick={() => setLoginModalOpen(true)}
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <LogIn size={18} />
                  <span className="hidden md:inline">Log in</span>
                </button>
              )}
              {isAuthenticated ? (
                <Link 
                  to="/mock-test" 
                  className="primary-button md:block"
                >
                  Start Practice
                </Link>
              ) : (
                <button 
                  onClick={() => setLoginModalOpen(true)}
                  className="primary-button md:block"
                >
                  Start Practice
                </button>
              )}
            </>
          )}
        </div>
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
          
          {isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                Mock Test
              </a>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                Progress
              </a>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                Resources
              </a>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                Contact
              </a>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                About
              </a>
            </>
          )}
          
          {isAuthenticated ? (
            <Link 
              to="/progress" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Account
            </Link>
          ) : (
            <button
              onClick={() => {
                setLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left"
            >
              Log in
            </button>
          )}
          
          {isAuthenticated ? (
            <Link 
              to="/mock-test" 
              className="primary-button w-full text-center py-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Practice
            </Link>
          ) : (
            <button 
              onClick={() => {
                setLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="primary-button w-full text-center py-2.5"
            >
              Start Practice
            </button>
          )}
        </div>
      )}
      
      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </nav>
  );
}
