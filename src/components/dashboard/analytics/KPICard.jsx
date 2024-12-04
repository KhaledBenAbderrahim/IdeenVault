import React from 'react';
import { motion } from 'framer-motion';

export default function KPICard({ title, value, icon, trend, trendValue }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-emerald-100 rounded-lg">
            {icon}
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <h3 className="text-2xl font-bold text-emerald-600">{value}</h3>
          </div>
        </div>
        {trend && (
          <div className={`flex items-center ${
            trendValue > 0 ? 'text-emerald-600' : 'text-red-600'
          }`}>
            <span className="text-sm font-medium">
              {trendValue > 0 ? '+' : ''}{trendValue}%
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}