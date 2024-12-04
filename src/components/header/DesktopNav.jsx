import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTop } from '../../utils/scrollUtils';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function DesktopNav({ handleNavigation }) {
  return (
    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
      <motion.button 
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={(e) => handleNavigation(e, '/')}
        className="nav-link text-base lg:text-lg hover:text-emerald-600 transition-colors"
      >
        Startseite
      </motion.button>
      <motion.button 
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={(e) => handleNavigation(e, '/features')}
        className="nav-link text-base lg:text-lg hover:text-emerald-600 transition-colors"
      >
        Funktionen
      </motion.button>
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Link 
          to="/about" 
          className="nav-link text-base lg:text-lg hover:text-emerald-600 transition-colors"
          onClick={() => scrollToTop()}
        >
          Über uns
        </Link>
      </motion.div>
    </div>
  );
}