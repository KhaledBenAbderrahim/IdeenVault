import React from 'react';
import { motion } from 'framer-motion';

const colorClasses = {
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  amber: 'bg-amber-500'
};

export default function StatCard({ title, value, icon: Icon, trend, trendValue, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-sm p-3 sm:p-4 border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div className={`p-1.5 sm:p-2 rounded-lg ${colorClasses[color]} bg-opacity-10`}>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${color}-600`} />
        </div>
        <div className={`text-xs sm:text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trendValue}
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        <h3 className="text-base sm:text-lg font-semibold text-emerald-600">{value}</h3>
        <p className="text-xs sm:text-sm text-gray-500">{title}</p>
      </div>
    </motion.div>
  );
}