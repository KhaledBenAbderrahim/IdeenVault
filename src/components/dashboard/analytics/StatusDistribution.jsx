import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './utils/chartSetup';

export default function StatusDistribution({ data }) {
  const chartData = {
    labels: ['Aktiv', 'In Entwicklung', 'Offen'],
    datasets: [{
      data: [data.activeIdeas, data.inProgressIdeas, data.openIdeas],
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)'
      ],
      borderColor: 'white',
      borderWidth: 2
    }]
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: window.innerWidth < 640 ? 10 : 20,
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
            family: 'Inter'
          }
        }
      }
    }
  };

  return (
    <div>
      <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">
        Status Verteilung
      </h3>
      <div className="h-[200px] sm:h-[250px]">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}