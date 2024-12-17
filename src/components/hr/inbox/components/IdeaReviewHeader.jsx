import React from 'react';
import { motion } from 'framer-motion';

export default function IdeaReviewHeader({
  idea,
  onClose,
  onContactOwner,
  onVisionToggle,
  showVision
}) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">{idea.title}</h2>
            <p className="text-sm text-gray-500">{idea.shortTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactOwner}
            className="flex-1 sm:flex-none btn-secondary text-xs sm:text-sm py-2 px-3 sm:px-4"
          >
            <span className="flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Ideeninhaber kontaktieren
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onVisionToggle}
            className="flex-1 sm:flex-none btn-secondary text-xs sm:text-sm py-2 px-3 sm:px-4"
          >
            <span className="flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {showVision ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                )}
              </svg>
              {showVision ? 'Zurück zu Details' : 'KI Vision anzeigen'}
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}