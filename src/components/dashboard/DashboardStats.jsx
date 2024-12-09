import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function DashboardStats({ totalIdeas, approvedIdeas }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Total Ideas Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="relative overflow-hidden rounded-xl shadow-lg"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600" />
        <div className="absolute inset-0 bg-grid-white/[0.1]" />
        
        {/* Content */}
        <div className="relative p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm sm:text-base font-medium">Gesamt Ideen</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {totalIdeas}
              </h3>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <LightBulbIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/20">
            <p className="text-xs sm:text-sm text-emerald-100">
              Alle Ihre Ideen
            </p>
          </div>
        </div>
      </motion.div>

      {/* Approved Ideas Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100"
      >
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50" />
        
        {/* Content */}
        <div className="relative p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm sm:text-base font-medium">Angenommene Ideen</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                {approvedIdeas}
              </h3>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 rounded-xl flex items-center justify-center"
            >
              <CheckBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            </motion.div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-1">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-xs sm:text-sm text-gray-500">
                Von HR bestätigt
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}