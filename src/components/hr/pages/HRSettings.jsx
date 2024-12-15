import React from 'react';
import { motion } from 'framer-motion';

export default function HRSettings() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h1 className="text-2xl font-bold text-gray-900">HR Settings</h1>
        <p className="mt-2 text-gray-600">
          Verwaltung der HR-Einstellungen
        </p>
      </motion.div>
      
      {/* Add your HR Settings content here */}
    </div>
  );
}