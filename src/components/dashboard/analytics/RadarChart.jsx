import React from 'react';
import { Radar } from 'react-chartjs-2';

export default function RadarChart({ data }) {
  const chartData = {
    labels: ['Originalität', 'Marktpotenzial', 'Umsetzbarkeit', 'Innovation', 'Nachhaltigkeit', 'KI-Integration'],
    datasets: [
      {
        label: 'Aktuelle Ideen',
        data: data.current,
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(16, 185, 129)',
        pointRadius: window.innerWidth < 640 ? 2 : 3
      },
      {
        label: 'Benchmark',
        data: data.benchmark,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 102, 241)',
        pointRadius: window.innerWidth < 640 ? 2 : 3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 8 : 10,
            family: 'Inter'
          }
        },
        pointLabels: {
          font: {
            size: window.innerWidth < 640 ? 8 : 10,
            family: 'Inter'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: window.innerWidth < 640 ? 10 : 20,
          usePointStyle: true,
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
      <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-4">Ideenbewertung im Vergleich</h3>
      <div className="h-48 sm:h-64">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
}