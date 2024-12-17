import React from 'react';
import { motion } from 'framer-motion';
import { useHRDashboard } from '../../../hooks/useHRDashboard';
import IdeaMetricsGrid from '../analytics/IdeaMetricsGrid';
import IdeaCharts from '../analytics/IdeaCharts';

export default function HRReviewBoard() {
  const { metrics } = useHRDashboard();

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <h1 className="text-2xl font-bold text-gray-900">Innovation Dashboard</h1>
        <p className="mt-1 text-gray-600">
          Übersicht und Analyse aller Innovationsvorschläge
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <IdeaMetricsGrid metrics={metrics} />

      {/* Charts */}
      <IdeaCharts metrics={metrics} />
    </div>
  );
}