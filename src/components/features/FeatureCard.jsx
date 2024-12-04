import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ feature }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 touch-manipulation"
    >
      <div className="relative z-10">
        <div className="flex items-center">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-500 group-hover:bg-emerald-600 transition-colors duration-300">
            <motion.div 
              className="text-white"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
              </svg>
            </motion.div>
          </div>
          <span className="ml-3 sm:ml-4 text-xs sm:text-sm font-medium text-emerald-600">
            {feature.category}
          </span>
        </div>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
          {feature.title}
        </h3>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        aria-hidden="true"
      />
    </motion.div>
  );
}