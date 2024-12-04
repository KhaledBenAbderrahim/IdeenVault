import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement, scrollToTop } from '../utils/scrollUtils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (path === '/') {
          scrollToElement('hero');
        } else {
          scrollToElement('features');
        }
      }, 100);
    } else {
      if (path === '/') {
        scrollToElement('hero');
      } else {
        scrollToElement('features');
      }
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400"
                onClick={(e) => handleNavigation(e, '/')}
              >
                IdeenVault
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={(e) => handleNavigation(e, '/')}
                className="nav-link"
              >
                Startseite
              </button>
              <button 
                onClick={(e) => handleNavigation(e, '/features')}
                className="nav-link"
              >
                Funktionen
              </button>
              <Link 
                to="/about" 
                className="nav-link"
                onClick={() => scrollToTop()}
              >
                Über uns
              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <span>Anmelden</span>
              </Link>
              <Link
                to="/register"
                className="btn-primary"
              >
                <span>Registrieren</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                <span className="sr-only">Menü öffnen</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToTop}
        handleNavigation={handleNavigation}
      />
    </>
  );
}