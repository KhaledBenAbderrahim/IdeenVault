import React from 'react';
import { ArrowsUpDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function IdeaHeader({
  totalIdeas,
  sortOrder,
  onSortChange,
  showFilters,
  onToggleFilters
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 py-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Ideen
          <span className="ml-2 text-lg font-normal text-gray-500">
            ({totalIdeas} Einträge)
          </span>
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Verwalten und entdecken Sie innovative Ideen
        </p>
      </div>
      <div className="flex w-full sm:w-auto space-x-3">
        <div className="relative flex-1 sm:flex-none">
          <select
            className="w-full sm:w-auto appearance-none pl-8 pr-10 py-3 sm:py-2 border border-gray-300 rounded-lg text-base sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="newest">Neueste zuerst</option>
            <option value="oldest">Älteste zuerst</option>
            <option value="lastUpdated">Zuletzt aktualisiert</option>
          </select>
          <ArrowsUpDownIcon className="h-5 w-5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <button
          onClick={onToggleFilters}
          className="inline-flex items-center px-4 py-3 sm:py-2 border border-gray-300 shadow-sm text-base sm:text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        >
          <FunnelIcon className="h-5 w-5 mr-2" />
          Filter {showFilters ? 'ausblenden' : 'anzeigen'}
        </button>
      </div>
    </div>
  );
}