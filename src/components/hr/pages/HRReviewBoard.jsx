import React from 'react';
import { motion } from 'framer-motion';
import InnovationStats from '../dashboard/InnovationStats';
import IdeasOverview from '../dashboard/IdeasOverview';
import InnovationMetrics from '../dashboard/InnovationMetrics';
import QuickActions from '../dashboard/QuickActions';

export default function HRReviewBoard() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Innovation Dashboard</h1>
        <p className="mt-1 text-sm sm:text-base text-gray-600">
          Übersicht und Verwaltung aller Innovationsvorschläge
        </p>
      </motion.div>

      {/* Innovation Statistics */}
      <InnovationStats />

      {/* Quick Actions */}
      <QuickActions />

      {/* Ideas Overview */}
      <IdeasOverview />

      {/* Innovation Metrics */}
      <InnovationMetrics />
    </div>
  );
}