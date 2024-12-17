import React from 'react';
import { motion } from 'framer-motion';
import { Line, Doughnut, Scatter } from 'react-chartjs-2';
import { lineChartConfig, doughnutChartConfig, scatterChartConfig } from './utils/chartConfigs';

export default function IdeaCharts({ metrics }) {
  const monthlyTrendsData = {
    labels: metrics.monthlyTrends.labels,
    datasets: [{
      label: 'Neue Ideen',
      data: metrics.monthlyTrends.data,
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };

  const phaseDistributionData = {
    labels: ['Konzept', 'Entwicklung', 'Test', 'Produktion'],
    datasets: [{
      data: [
        metrics.phases.concept,
        metrics.phases.development,
        metrics.phases.test,
        metrics.phases.production
      ],
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(99, 102, 241, 0.8)'
      ]
    }]
  };

  const riskAttractivenessData = {
    datasets: [{
      label: 'Ideen',
      data: metrics.riskAttractiveness,
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
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monatliche Trends</h3>
        <div className="h-64">
          <Line data={monthlyTrendsData} options={lineChartConfig} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Phasenverteilung</h3>
        <div className="h-64">
          <Doughnut data={phaseDistributionData} options={doughnutChartConfig} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 lg:col-span-2"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Risiko vs. Attraktivität</h3>
        <div className="h-96">
          <Scatter data={riskAttractivenessData} options={scatterChartConfig} />
        </div>
      </motion.div>
    </div>
  );
}