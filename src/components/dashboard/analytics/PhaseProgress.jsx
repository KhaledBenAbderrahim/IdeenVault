import React from 'react';
import { Line } from 'react-chartjs-2';

export default function PhaseProgress({ data }) {
  const chartData = {
    labels: ['Konzept', 'Entwicklung', 'Test', 'Produktion'],
    datasets: [{
      label: 'Ideen pro Phase',
      data: data,
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: 'rgb(16, 185, 129)',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Phase Fortschritt</h3>
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}