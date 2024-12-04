import React from 'react';
import { motion } from 'framer-motion';

export default function DiscussionFilters({
  searchTerm,
  setSearchTerm,
  topicFilter,
  setTopicFilter,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Diskussionen durchsuchen..."
            className="input-field text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="input-field text-sm sm:text-base"
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
          >
            <option value="">Alle Themen</option>
            <option value="Technologie">Technologie</option>
            <option value="Nachhaltigkeit">Nachhaltigkeit</option>
            <option value="Methoden">Methoden</option>
          </select>
          <select
            className="input-field text-sm sm:text-base"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Neueste</option>
            <option value="popular">Beliebteste</option>
            <option value="active">Aktivste</option>
          </select>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-primary whitespace-nowrap text-sm sm:text-base"
        >
          <span className="flex items-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Diskussion starten
          </span>
        </button>
      </div>
    </div>
  );
}