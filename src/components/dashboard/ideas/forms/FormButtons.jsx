import React from 'react';
import { motion } from 'framer-motion';

export default function FormButtons({ onBack, onNext, nextLabel = 'Weiter', backLabel = 'Zurück' }) {
  return (
    <div className="flex justify-end space-x-4 pt-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onBack}
        className="btn-secondary"
      >
        <span>{backLabel}</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="btn-primary"
      >
        <span className="flex items-center">
          {nextLabel}
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </motion.button>
    </div>
  );
}