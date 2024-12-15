import React from 'react';
import { motion } from 'framer-motion';

export default function NetworkHeader({
  totalDiscussions,
  sortOrder,
  onSortChange,
  showFilters,
  onToggleFilters,
  onStartDiscussion
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(120deg, 
                rgba(16, 185, 129, 0.1) 0%,
                rgba(16, 185, 129, 0.05) 50%,
                rgba(255, 255, 255, 0.1) 100%
              )
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-8 py-6 sm:py-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-3 py-1"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm text-emerald-700 font-medium">Innovation Network</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-emerald-600 bg-clip-text text-transparent"
              >
                Innovationsnetzwerk & Diskussionen
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-lg text-gray-600"
              >
                Moderieren Sie Diskussionen und fördern Sie den Austausch von Ideen
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center sm:justify-start"
            >
              <button
                onClick={onStartDiscussion}
                className="btn-primary group touch-manipulation text-sm sm:text-base"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Neue Diskussion starten
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}