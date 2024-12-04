import React from 'react';
import { motion } from 'framer-motion';

const backgroundVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0"
      >
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-40 sm:w-80 h-40 sm:h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div 
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-40 sm:w-80 h-40 sm:h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-80 h-40 sm:h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </motion.div>
    </div>
  );
}