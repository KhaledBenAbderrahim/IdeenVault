import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { scrollToElement, scrollToTop } from '../utils/scrollUtils';
import MobileMenu from './MobileMenu';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import DesktopAuth from './header/DesktopAuth';
import MobileMenuButton from './header/MobileMenuButton';

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
    setIsMobileMenuOpen(false);
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
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16 items-center">
            <Logo handleNavigation={handleNavigation} />
            <DesktopNav handleNavigation={handleNavigation} />
            <DesktopAuth />
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            onNavigate={scrollToTop}
            handleNavigation={handleNavigation}
          />
        )}
      </AnimatePresence>
    </>
  );
}