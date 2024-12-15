import React from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../../dashboard/ideas/filters/SearchInput';

export default function NetworkFilters({
  searchTerm,
  setSearchTerm,
  topicFilter,
  setTopicFilter,
  showFilters
}) {
  return (
    <div className="border-b border-gray-200 bg-gray-50/50">
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
          
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex-1"
            >
              <select
                className="input-field"
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
              >
                <option value="">Alle Themen</option>
                <option value="Technologie">Technologie</option>
                <option value="Nachhaltigkeit">Nachhaltigkeit</option>
                <option value="Methoden">Methoden</option>
              </select>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}