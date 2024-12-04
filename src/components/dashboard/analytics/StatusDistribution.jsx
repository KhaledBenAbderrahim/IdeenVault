import React from 'react';
import { Doughnut } from 'react-chartjs-2';

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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12, family: 'Inter' }
        }
      }
    },
    cutout: '70%'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Status Verteilung</h3>
      <div className="h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}