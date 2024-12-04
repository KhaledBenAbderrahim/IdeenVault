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
      pointRadius: window.innerWidth < 640 ? 3 : 4,
      pointHoverRadius: window.innerWidth < 640 ? 4 : 6
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
        },
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
            family: 'Inter'
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
            family: 'Inter'
          }
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-4">Phase Fortschritt</h3>
      <div className="h-48 sm:h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}