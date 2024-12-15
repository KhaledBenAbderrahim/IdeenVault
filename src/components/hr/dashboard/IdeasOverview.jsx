import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IdeaCard from './IdeaCard';
import { 
  filterAndSortIdeas, 
  getInnovationTypes, 
  getLatestIdeas 
} from '../utils/dataUtils';

export default function IdeasOverview() {
  const [sortBy, setSortBy] = useState('date');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const innovationTypes = getInnovationTypes();
  const latestIdeas = getLatestIdeas();
  
  const filteredIdeas = filterAndSortIdeas(latestIdeas, {
    searchTerm,
    sortBy,
    filterType
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Neueste Ideen</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Suchen..."
            className="input-field text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="input-field text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Nach Datum</option>
            <option value="priority">Nach Priorität</option>
            <option value="phase">Nach Phase</option>
          </select>
          <select
            className="input-field text-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Alle Typen</option>
            {innovationTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredIdeas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <IdeaCard idea={idea} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}