import React from 'react';
import { motion } from 'framer-motion';
import { mockIdeas } from '../../data/mockIdeas';
import AnalyticsHeader from './analytics/AnalyticsHeader';
import KPIGrid from './analytics/KPIGrid';
import ChartsGrid from './analytics/ChartsGrid';
import RiskMatrix from './analytics/RiskMatrix';
import { calculateMetrics } from './analytics/utils/metricCalculations';

export default function Analytics() {
  // Calculate metrics using utility function
  const metrics = calculateMetrics(mockIdeas);

  // Calculate phase distribution
  const phases = ['Konzept', 'Entwicklung', 'Test', 'Produktion'];
  const phaseData = phases.map(phase => 
    mockIdeas.filter(idea => idea.phase === phase).length
  );

  // Radar chart data
  const radarData = {
    current: [4.2, 3.8, 3.5, 4.0, 3.2, 4.5],
    benchmark: [3.8, 3.5, 3.8, 3.5, 3.0, 4.0]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 sm:space-y-6 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6"
    >
      <AnalyticsHeader />
      <KPIGrid metrics={metrics} />
      <ChartsGrid 
        metrics={metrics}
        phaseData={phaseData}
        radarData={radarData}
      />
      <RiskMatrix ideas={mockIdeas} />
    </motion.div>
  );
}