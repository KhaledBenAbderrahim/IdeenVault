import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function DesktopAuth() {
  return (
    <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Link 
          to="/login" 
          className="px-3 py-2 text-base lg:text-lg text-gray-700 hover:text-emerald-600 transition-colors"
        >
          <span>Anmelden</span>
        </Link>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          to="/register"
          className="inline-flex items-center justify-center px-4 py-2 text-base lg:text-lg font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md active:transform active:scale-95 touch-manipulation"
        >
          <span>Registrieren</span>
        </Link>
      </motion.div>
    </div>
  );
}