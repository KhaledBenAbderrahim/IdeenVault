import React from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';
import { 
  DocumentTextIcon, 
  RocketLaunchIcon, 
  CheckCircleIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';
import { getIdeaCounts, getTrendData } from '../utils/dataUtils';

export default function InnovationStats() {
  const counts = getIdeaCounts();
  const trends = getTrendData();

  const stats = [
    {
      title: 'Gesamt Ideen',
      value: counts.total.toString(),
      change: `${trends.trend}%`,
      icon: DocumentTextIcon,
      color: 'emerald'
    },
    {
      title: 'Aktive Entwicklung',
      value: counts.inDevelopment.toString(),
      change: '+8%',
      icon: RocketLaunchIcon,
      color: 'blue'
    },
    {
      title: 'Erfolgreich',
      value: counts.successful.toString(),
      change: '+15%',
      icon: CheckCircleIcon,
      color: 'green'
    },
    {
      title: 'Neue Ideen',
      value: counts.newIdeas.toString(),
      change: '+5%',
      icon: SparklesIcon,
      color: 'amber'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <StatCard {...stat} />
        </motion.div>
      ))}
    </div>
  );
}