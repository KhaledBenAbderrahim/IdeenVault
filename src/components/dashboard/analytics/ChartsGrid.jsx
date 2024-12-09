import React from 'react';
import { motion } from 'framer-motion';
import StatusDistribution from './StatusDistribution';
import PhaseProgress from './PhaseProgress';
import RadarChart from './RadarChart';
import '../analytics/utils/chartSetup';

export default function ChartsGrid({ metrics, phaseData, radarData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200"
      >
        <StatusDistribution
          data={{
            activeIdeas: metrics.activeIdeas,
            inProgressIdeas: metrics.inProgressIdeas,
            openIdeas: metrics.openIdeas
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200"
      >
        <PhaseProgress data={phaseData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 md:col-span-2 lg:col-span-1"
      >
        <RadarChart data={radarData} />
      </motion.div>
    </div>
  );
}