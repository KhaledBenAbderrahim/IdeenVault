import React from 'react';
import { motion } from 'framer-motion';

export default function ApprovedIdeaCard({ idea, onClick }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Hoch': return 'text-red-600 bg-red-50';
      case 'Mittel': return 'text-yellow-600 bg-yellow-50';
      case 'Niedrig': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group bg-gradient-to-br from-emerald-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-6 border border-emerald-100"
    >
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
              {idea.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{idea.shortTitle}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            Angenommen
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{idea.description}</p>

        {/* Details */}
        <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="space-y-2">
            <div className="flex items-center text-gray-500">
              <span className="font-medium">Phase:</span>
              <span className="ml-1">{idea.phase}</span>
            </div>
            <div className={`inline-flex items-center px-2 py-0.5 rounded-md ${getPriorityColor(idea.priority)}`}>
              <span className="font-medium">Priorität:</span>
              <span className="ml-1">{idea.priority}</span>
            </div>
          </div>
          <div className="space-y-2 text-right">
            <div className="text-gray-500">
              <span className="font-medium">Erstellt:</span>
              <span className="ml-1">{formatDate(idea.createdAt)}</span>
            </div>
            <div className="text-gray-500">
              <span className="font-medium">Typ:</span>
              <span className="ml-1">{idea.type}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-emerald-100 flex justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="px-3 py-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            Details anzeigen →
          </button>
        </div>
      </div>
    </motion.div>
  );
}