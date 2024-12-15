import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  XCircleIcon 
} from '@heroicons/react/24/outline';

export default function InboxStats({ stats }) {
  const kpis = [
    {
      title: "Angenommene Ideen",
      value: stats.approved,
      icon: CheckCircleIcon,
      color: "emerald"
    },
    {
      title: "Offene Ideen",
      value: stats.pending,
      icon: ClockIcon,
      color: "amber"
    },
    {
      title: "Abgelehnte Ideen",
      value: stats.rejected,
      icon: XCircleIcon,
      color: "red"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-lg bg-${kpi.color}-100`}>
              <kpi.icon className={`w-6 h-6 text-${kpi.color}-600`} />
            </div>
            <span className={`text-${kpi.color}-600 text-lg font-semibold`}>
              {kpi.value}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{kpi.title}</p>
        </motion.div>
      ))}
    </div>
  );
}