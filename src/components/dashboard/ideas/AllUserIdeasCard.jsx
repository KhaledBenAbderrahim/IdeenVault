import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, LightBulbIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/solid';

export default function AllUserIdeasCard({ idea, onClick }) {
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

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Aktiv': return 'bg-emerald-100 text-emerald-800 ring-emerald-600/20';
      case 'In Entwicklung': return 'bg-blue-100 text-blue-800 ring-blue-600/20';
      case 'Offen': return 'bg-amber-100 text-amber-800 ring-amber-600/20';
      default: return 'bg-gray-100 text-gray-800 ring-gray-600/20';
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
      whileHover={{ 
        scale: 1.005,
        transition: { type: "spring", stiffness: 300, damping: 25 }
      }}
      whileTap={{ scale: 0.995 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-emerald-200 transition-all duration-300 cursor-pointer p-4 sm:p-6 bg-white hover:shadow-lg hover:shadow-emerald-100/40"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex flex-wrap gap-2 items-center mb-1">
              <motion.h3 
                className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300"
              >
                {idea.title}
              </motion.h3>
              {idea.priority === 'Hoch' && (
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <StarIcon className="h-4 w-4 text-amber-400 flex-shrink-0" />
                </motion.div>
              )}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{idea.shortTitle}</p>
          </div>
          <motion.span 
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusBadgeColor(idea.status)} transition-all duration-300 group-hover:shadow-sm`}
            whileHover={{ scale: 1.05 }}
          >
            {idea.status}
          </motion.span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">{idea.description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          {/* Risk and Attractiveness */}
          <motion.div 
            className="space-y-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              <span className="font-medium">Risiko:</span>
              <span className="ml-1">{idea.risk.toFixed(1)}</span>
            </div>
            <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              <span className="font-medium">Attraktivität:</span>
              <span className="ml-1">{idea.attractiveness.toFixed(1)}</span>
            </div>
          </motion.div>

          {/* Creator and Priority */}
          <motion.div 
            className="space-y-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              <span className="font-medium">Ersteller:</span>
              <span className="ml-1 truncate">{idea.creator}</span>
            </div>
            <div className={`inline-flex items-center px-2 py-0.5 rounded-md ${getPriorityColor(idea.priority)} group-hover:shadow-sm transition-all duration-300`}>
              <span className="font-medium">Priorität:</span>
              <span className="ml-1">{idea.priority}</span>
            </div>
          </motion.div>

          {/* Phase and Date */}
          <motion.div 
            className="col-span-2 sm:col-span-1 space-y-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center space-x-1 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {getPhaseIcon(idea.phase)}
              </motion.div>
              <span className="font-medium">Phase:</span>
              <span>{idea.phase}</span>
            </div>
            <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              <span className="font-medium">Erstellt:</span>
              <span className="ml-1">{formatDate(idea.createdAt)}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}