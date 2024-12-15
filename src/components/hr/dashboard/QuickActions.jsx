import React from 'react';
import { motion } from 'framer-motion';
import { 
  ViewfinderCircleIcon,
  ArrowPathIcon,
  DocumentArrowDownIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function QuickActions() {
  const actions = [
    {
      title: 'Alle Ideen',
      icon: ViewfinderCircleIcon,
      onClick: () => console.log('View all ideas')
    },
    {
      title: 'Nach Typ sortieren',
      icon: ArrowPathIcon,
      onClick: () => console.log('Sort by type')
    },
    {
      title: 'Report exportieren',
      icon: DocumentArrowDownIcon,
      onClick: () => console.log('Export report')
    },
    {
      title: 'Erfolgsgeschichten',
      icon: StarIcon,
      onClick: () => console.log('View success stories')
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {actions.map((action, index) => (
        <motion.button
          key={action.title}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors"
          onClick={action.onClick}
        >
          <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mb-2" />
          <span className="text-xs sm:text-sm text-gray-700 text-center">{action.title}</span>
        </motion.button>
      ))}
    </div>
  );
}