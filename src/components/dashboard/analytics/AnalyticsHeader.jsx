import React from 'react';
import { motion } from 'framer-motion';

export default function AnalyticsHeader() {
  return (
    <div className="py-3 sm:py-4">
      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-2xl font-bold text-gray-900"
      >
        Analytics Dashboard
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-1 text-xs sm:text-sm text-gray-500"
      >
        Überblick über die wichtigsten Leistungskennzahlen und Trends
      </motion.p>
    </div>
  );
}