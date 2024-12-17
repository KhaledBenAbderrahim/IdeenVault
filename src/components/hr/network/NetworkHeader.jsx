import React from 'react';
import { motion } from 'framer-motion';
import { ArrowsUpDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function NetworkHeader({
  totalDiscussions,
  sortOrder,
  onSortChange,
  showFilters,
  onToggleFilters,
  onStartDiscussion
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(120deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)`
          }}
        />
      </div>

      <div className="relative px-4 sm:px-8 py-6 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Diskussionen
              <span className="ml-2 text-lg font-normal text-gray-500">
                ({totalDiscussions} Einträge)
              </span>
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Moderieren und verwalten Sie Diskussionen
            </p>
          </div>
          <div className="flex w-full sm:w-auto space-x-3">
            <div className="relative flex-1 sm:flex-none">
              <select
                className="w-full sm:w-auto appearance-none pl-8 pr-10 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                value={sortOrder}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="newest">Neueste zuerst</option>
                <option value="oldest">Älteste zuerst</option>
                <option value="popular">Beliebteste</option>
                <option value="active">Aktivste</option>
              </select>
              <ArrowsUpDownIcon className="h-5 w-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
            </div>
            <button
              onClick={onToggleFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filter {showFilters ? 'ausblenden' : 'anzeigen'}
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartDiscussion}
              className="btn-primary text-sm py-2 px-4"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Neue Diskussion
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}