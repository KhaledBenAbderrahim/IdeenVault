import React from 'react';
import { motion } from 'framer-motion';

export default function DiscussionHeader() {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-6">
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
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 150%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% -50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-8 py-8 sm:py-12">
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
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm text-emerald-700 font-medium">IdeenTalk</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-emerald-600 bg-clip-text text-transparent"
              >
                Tauschen Sie Gedanken aus, teilen Sie Erfahrungen
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-lg text-gray-600"
              >
                und gestalten Sie gemeinsam die Zukunft der Innovation
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}