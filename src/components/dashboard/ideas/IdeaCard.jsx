import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, LightBulbIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/solid';

export default function IdeaCard({ idea, onClick }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Hoch': return 'text-red-600 bg-red-50';
      case 'Mittel': return 'text-yellow-600 bg-yellow-50';
      case 'Niedrig': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPhaseIcon = (phase) => {
    switch (phase) {
      case 'Konzept': return <LightBulbIcon className="h-4 w-4" />;
      case 'Entwicklung': return <BeakerIcon className="h-4 w-4" />;
      case 'Test': return <ChartBarIcon className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-6 border border-gray-100"
    >
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex flex-wrap gap-2 items-center mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {idea.title}
              </h3>
              {idea.priority === 'Hoch' && (
                <StarIcon className="h-4 w-4 text-amber-400 flex-shrink-0" />
              )}
            </div>
            <p className="text-xs sm:text-sm text-gray-500">{idea.shortTitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{idea.description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          {/* Risk and Attractiveness */}
          <div className="space-y-1">
            <div className="flex items-center text-gray-500">
              <span className="font-medium">Risiko:</span>
              <span className="ml-1">{idea.risk.toFixed(1)}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <span className="font-medium">Attraktivität:</span>
              <span className="ml-1">{idea.attractiveness.toFixed(1)}</span>
            </div>
          </div>

          {/* Creator and Priority */}
          <div className="space-y-1">
            <div className="flex items-center text-gray-500">
              <span className="font-medium">Ersteller:</span>
              <span className="ml-1 truncate">{idea.creator}</span>
            </div>
            <div className={`inline-flex items-center px-2 py-0.5 rounded-md ${getPriorityColor(idea.priority)}`}>
              <span className="font-medium">Priorität:</span>
              <span className="ml-1">{idea.priority}</span>
            </div>
          </div>

          {/* Phase and Date */}
          <div className="col-span-2 sm:col-span-1 space-y-1">
            <div className="flex items-center space-x-1 text-gray-500">
              {getPhaseIcon(idea.phase)}
              <span className="font-medium">Phase:</span>
              <span>{idea.phase}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <span className="font-medium">Erstellt:</span>
              <span className="ml-1">{formatDate(idea.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <div className="pt-3 border-t border-gray-100 flex justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
          >
            Details anzeigen →
          </button>
        </div>
      </div>
    </motion.div>
  );
}