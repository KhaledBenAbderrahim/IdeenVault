import React from 'react';
import { motion } from 'framer-motion';
import StatusDistribution from './StatusDistribution';
import PhaseProgress from './PhaseProgress';
import RadarChart from './RadarChart';

export default function ChartsGrid({ metrics, phaseData, radarData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <PhaseProgress data={phaseData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 lg:col-span-1"
      >
        <RadarChart data={radarData} />
      </motion.div>
    </div>
  );
}