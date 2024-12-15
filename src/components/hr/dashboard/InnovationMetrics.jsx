import React from 'react';
import { motion } from 'framer-motion';
import { Line, Bar, Scatter } from 'react-chartjs-2';
import { 
  getMonthlySubmissions, 
  getSuccessRate, 
  getRiskAttractiveness 
} from '../utils/dataUtils';
import '../utils/chartSetup';
import { lineChartOptions, barChartOptions, scatterChartOptions } from '../utils/chartSetup';

export default function InnovationMetrics() {
  const monthlyStats = getMonthlySubmissions();
  const successStats = getSuccessRate();
  const riskData = getRiskAttractiveness();

  // Monthly submission trends data
  const monthlyData = {
    labels: monthlyStats.labels,
    datasets: [{
      label: 'Neue Ideen',
      data: monthlyStats.data,
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };

  // Success rate data
  const successData = {
    labels: successStats.labels,
    datasets: [{
      label: 'Status',
      data: successStats.data,
      backgroundColor: [
        'rgb(16, 185, 129)',
        'rgb(59, 130, 246)',
        'rgb(239, 68, 68)'
      ]
    }]
  };

  // Risk vs Attractiveness data
  const riskVsAttractivenessData = {
    datasets: [{
      label: 'Ideen',
      data: riskData,
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monatliche Einreichungen</h3>
        <div className="h-64">
          <Line data={monthlyData} options={lineChartOptions} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Erfolgsquote</h3>
        <div className="h-64">
          <Bar data={successData} options={barChartOptions} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Risiko vs. Attraktivität</h3>
        <div className="h-64">
          <Scatter data={riskVsAttractivenessData} options={scatterChartOptions} />
        </div>
      </motion.div>
    </div>
  );
}