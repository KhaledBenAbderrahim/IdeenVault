import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

export default function IdeaMetricsGrid({ metrics }) {
  const cards = [
    {
      title: 'Gesamt Ideen',
      value: metrics.total,
      change: '+15%',
      icon: LightBulbIcon,
      color: 'emerald'
    },
    {
      title: 'Aktive Ideen',
      value: metrics.active,
      change: '+8%',
      icon: RocketLaunchIcon,
      color: 'blue'
    },
    {
      title: 'In Entwicklung',
      value: metrics.inDevelopment,
      change: '+12%',
      icon: ChartBarIcon,
      color: 'indigo'
    },
    {
      title: 'Neue Ideen',
      value: metrics.monthlyTrends.data[metrics.monthlyTrends.data.length - 1],
      change: '+5%',
      icon: SparklesIcon,
      color: 'amber'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-lg bg-${card.color}-100`}>
              <card.icon className={`w-6 h-6 text-${card.color}-600`} />
            </div>
            <span className={`text-${card.color}-600 text-lg font-semibold`}>
              {card.value}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{card.title}</h3>
          <p className={`mt-1 text-sm text-${card.color}-600`}>
            {card.change} seit letztem Monat
          </p>
        </motion.div>
      ))}
    </div>
  );
}