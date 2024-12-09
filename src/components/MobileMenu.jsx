import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  onNavigate,
  handleNavigation 
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link 
                  to="/"
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400"
                  onClick={(e) => handleNavigation(e, '/')}
                >
                  Ideenspeicher
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                <button
                  onClick={(e) => {
                    handleNavigation(e, '/');
                    onClose();
                  }}
                  className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Startseite
                </button>
                <button
                  onClick={(e) => {
                    handleNavigation(e, '/features');
                    onClose();
                  }}
                  className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Funktionen
                </button>
                <Link
                  to="/about"
                  onClick={() => {
                    onNavigate();
                    onClose();
                  }}
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  Über uns
                </Link>
              </nav>

              {/* Auth Buttons */}
              <div className="p-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/login"
                    onClick={onClose}
                    className="text-center px-4 py-2 text-base font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Anmelden
                  </Link>
                  <Link
                    to="/register"
                    onClick={onClose}
                    className="text-center px-4 py-2 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                  >
                    Registrieren
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}