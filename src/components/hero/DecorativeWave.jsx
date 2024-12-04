import React from 'react';
import { motion } from 'framer-motion';

export default function DecorativeWave() {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 w-full transform translate-y-1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <svg 
        className="w-full h-auto" 
        viewBox="0 0 1440 120" 
        fill="none" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" 
          fill="#f0fdf4"
        />
      </svg>
    </motion.div>
  );
}