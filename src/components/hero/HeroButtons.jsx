import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export default function HeroButtons() {
  return (
    <motion.div 
      className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="w-full sm:w-auto"
      >
        <Link 
          to="/register" 
          className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 font-medium text-white bg-emerald-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300 active:transform active:scale-95 touch-manipulation"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-500 transition-all duration-300 group-hover:opacity-90"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-emerald-400 opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative z-20">Jetzt starten</span>
        </Link>
      </motion.div>

      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="w-full sm:w-auto"
      >
        <Link 
          to="/about" 
          className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 font-medium text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transform transition-all duration-300 active:transform active:scale-95 touch-manipulation"
        >
          <span className="relative z-20">Mehr erfahren</span>
          <motion.svg 
            className="ml-2 w-5 h-5"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </motion.svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}