
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check if user is authenticated or still loading
    if (!isLoading && !isAuthenticated) {
      // If this is the home page, just show the login modal
      if (location.pathname === '/') {
        setShowLoginModal(false);
      } else {
        setShowLoginModal(true);
      }
    }
  }, [isAuthenticated, isLoading, navigate, location.pathname]);

  const handleCloseLoginModal = () => {
    // If user cancels login, redirect them to homepage
    if (!isAuthenticated && location.pathname !== '/') {
      navigate('/');
    }
    setShowLoginModal(false);
  };

  // If still loading auth state, show nothing to prevent flash
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If user is authenticated, render the protected content
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // If not authenticated and not on home page, show the login modal
  // and the home page content will be shown underneath
  return (
    <>
      {location.pathname === '/' ? children : null}
      <LoginModal isOpen={showLoginModal} onClose={handleCloseLoginModal} />
    </>
  );
};

export default ProtectedRoute;
