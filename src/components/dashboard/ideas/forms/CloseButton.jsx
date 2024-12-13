import React from 'react';
import { motion } from 'framer-motion';

export default function CloseButton({ onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, rotate: 90 }}
      whileTap={{ scale: 0.95 }}
      className={`absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-500 
        hover:bg-gray-100 rounded-full transition-colors z-50 ${className}`}
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </motion.button>
  );
}