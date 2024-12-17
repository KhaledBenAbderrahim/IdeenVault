import React from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../../dashboard/ideas/filters/SearchInput';

const topics = [
  { value: '', label: 'Alle Themen' },
  { value: 'Technologie', label: 'Technologie' },
  { value: 'Nachhaltigkeit', label: 'Nachhaltigkeit' },
  { value: 'Methoden', label: 'Methoden' },
  { value: 'Innovation', label: 'Innovation' },
  { value: 'HR', label: 'HR' }
];

const sortOptions = [
  { value: 'newest', label: 'Neueste zuerst' },
  { value: 'oldest', label: 'Älteste zuerst' },
  { value: 'popular', label: 'Beliebteste' },
  { value: 'active', label: 'Aktivste' },
  { value: 'comments', label: 'Meiste Kommentare' }
];

export default function NetworkFilters({
  searchTerm,
  setSearchTerm,
  topicFilter,
  setTopicFilter,
  sortBy,
  setSortBy,
  showFilters
}) {
  return (
    <div className="border-b border-gray-200 bg-gray-50/50">
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
          
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <div className="relative flex-1">
                <select
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                  value={topicFilter}
                  onChange={(e) => setTopicFilter(e.target.value)}
                >
                  {topics.map(topic => (
                    <option key={topic.value} value={topic.value}>
                      {topic.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
              </div>

              <div className="relative flex-1">
                <select
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}