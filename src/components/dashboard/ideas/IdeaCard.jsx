import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, LightBulbIcon, BeakerIcon, ChartBarIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function IdeaCard({ idea, onClick }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
    <div 
      className="group hover:bg-gray-50/50 transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            {/* Title and Status */}
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors truncate">
                {idea.title}
              </h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusBadgeColor(idea.status)}`}>
                {idea.status}
              </span>
              {idea.priority === 'Hoch' && (
                <StarIcon className="h-5 w-5 text-amber-400" />
              )}
            </div>

            {/* Description */}
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{idea.description}</p>

            {/* Details Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Risk and Attractiveness */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium">Risiko:</span>
                  <span className="ml-2">{idea.risk.toFixed(1)}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium">Attraktivität:</span>
                  <span className="ml-2">{idea.attractiveness.toFixed(1)}</span>
                </div>
              </div>

              {/* Creator and Priority */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium">Ersteller:</span>
                  <span className="ml-2">{idea.creator}</span>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded-md text-sm ${getPriorityColor(idea.priority)}`}>
                  <span className="font-medium">Priorität:</span>
                  <span className="ml-2">{idea.priority}</span>
                </div>
              </div>

              {/* Phase and Creation Date */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  {getPhaseIcon(idea.phase)}
                  <span className="font-medium">Phase:</span>
                  <span>{idea.phase}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium">Erstellt:</span>
                  <span className="ml-2">{formatDate(idea.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>

          <ChevronRightIcon className="h-6 w-6 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0 ml-4" />
        </div>
      </div>
    </div>
  );
}