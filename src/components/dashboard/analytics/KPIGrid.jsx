import React from 'react';
import { motion } from 'framer-motion';
import KPICard from './KPICard';
import { LightBulbIcon, BoltIcon, ExclamationTriangleIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function KPIGrid({ metrics }) {
  const kpis = [
    {
      title: "Gesamtideen",
      value: metrics.totalIdeas,
      icon: <LightBulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />,
      trendValue: 15
    },
    {
      title: "Aktive Ideen",
      value: metrics.activeIdeas,
      icon: <BoltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />,
      trendValue: 8
    },
    {
      title: "Durchschn. Risiko",
      value: metrics.avgRisk,
      icon: <ExclamationTriangleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />,
      trendValue: -5
    },
    {
      title: "Durchschn. Attraktivität",
      value: metrics.avgAttractiveness,
      icon: <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />,
      trendValue: 12
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <KPICard {...kpi} />
        </motion.div>
      ))}
    </div>
  );
}