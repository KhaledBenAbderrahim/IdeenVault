import React from 'react';
import { motion } from 'framer-motion';

export default function IdeaCard({ idea }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Hoch': return 'bg-red-100 text-red-800';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800';
      case 'Niedrig': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'Konzept': return 'bg-blue-100 text-blue-800';
      case 'Entwicklung': return 'bg-purple-100 text-purple-800';
      case 'Test': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-4 rounded-lg border border-gray-100 hover:border-emerald-200 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900">{idea.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{idea.type}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPhaseColor(idea.phase)}`}>
            {idea.phase}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(idea.priority)}`}>
            {idea.priority}
          </span>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600 line-clamp-2">
        {idea.description}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
        <span>Erstellt: {new Date(idea.createdAt).toLocaleDateString()}</span>
        <div className="flex items-center space-x-2">
          <span>Risiko: {idea.risk.toFixed(1)}</span>
          <span>•</span>
          <span>Attraktivität: {idea.attractiveness.toFixed(1)}</span>
        </div>
      </div>
    </motion.div>
  );
}