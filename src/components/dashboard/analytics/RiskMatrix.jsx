import React from 'react';
import { motion } from 'framer-motion';
import { Scatter } from 'react-chartjs-2';

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
      pointRadius: 6,
      pointHoverRadius: 8,
      borderWidth: 2,
      pointStyle: 'circle',
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      showLine: false
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const { x, y, title, priority, phase } = context.raw;
            return [
              `Titel: ${title}`,
              `Risiko: ${x}`,
              `Attraktivität: ${y}`,
              `Priorität: ${priority}`,
              `Phase: ${phase}`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        reverse: true,
        title: {
          display: true,
          text: 'Risiko',
          font: { size: 12, weight: 'bold', family: 'Inter' }
        },
        min: 0.5,
        max: 3.5,
        grid: { display: false }
      },
      y: {
        title: {
          display: true,
          text: 'Attraktivität',
          font: { size: 12, weight: 'bold', family: 'Inter' }
        },
        min: 1,
        max: 3.5,
        grid: { display: false }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-lg shadow p-4 sm:p-6"
    >
      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
        Risiko vs. Attraktivität Matrix
      </h3>
      <div className="h-64 sm:h-96">
        <Scatter data={data} options={options} />
      </div>
    </motion.div>
  );
}