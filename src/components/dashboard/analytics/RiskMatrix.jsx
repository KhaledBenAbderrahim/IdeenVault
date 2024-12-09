import React from 'react';
import { motion } from 'framer-motion';
import { Scatter } from 'react-chartjs-2';
import { getScatterConfig } from './utils/chartConfigs';
import './utils/chartSetup';

export default function RiskMatrix({ ideas }) {
  const data = {
    datasets: [{
      label: 'Ideen nach Risiko und Attraktivität',
      data: ideas.map(idea => ({
        x: idea.risk,
        y: idea.attractiveness,
        title: idea.title,
        priority: idea.priority,
        phase: idea.phase
      })),
      backgroundColor: ideas.map(idea => {
        switch(idea.priority) {
          case 'Hoch': return 'rgba(16, 185, 129, 0.8)';
          case 'Mittel': return 'rgba(16, 185, 129, 0.6)';
          default: return 'rgba(16, 185, 129, 0.4)';
        }
      }),
      borderColor: 'rgba(16, 185, 129, 1)',
      pointRadius: window.innerWidth < 640 ? 4 : 6,
      pointHoverRadius: window.innerWidth < 640 ? 6 : 8,
      borderWidth: 2,
      pointStyle: 'circle',
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      showLine: false
    }]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200"
    >
      <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">
        Risiko vs. Attraktivität Matrix
      </h3>
      <div className="h-[250px] sm:h-[300px] lg:h-[400px]">
        <Scatter data={data} options={getScatterConfig(window.innerWidth < 640)} />
      </div>
    </motion.div>
  );
}