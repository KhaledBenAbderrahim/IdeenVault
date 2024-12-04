import React from 'react';
import { motion } from 'framer-motion';
import SearchInput from './filters/SearchInput';
import DateFilter from './filters/DateFilter';
import FilterSelect from './filters/FilterSelect';

const statusOptions = [
  { value: '', label: 'Alle Status' },
  { value: 'Aktiv', label: 'Aktiv' },
  { value: 'In Entwicklung', label: 'In Entwicklung' },
  { value: 'Offen', label: 'Offen' }
];

const priorityOptions = [
  { value: '', label: 'Alle Prioritäten' },
  { value: 'Hoch', label: 'Hoch' },
  { value: 'Mittel', label: 'Mittel' },
  { value: 'Niedrig', label: 'Niedrig' }
];

const phaseOptions = [
  { value: '', label: 'Alle Phasen' },
  { value: 'Konzept', label: 'Konzept' },
  { value: 'Entwicklung', label: 'Entwicklung' },
  { value: 'Test', label: 'Test' }
];

export default function IdeaFilters({ 
  searchTerm, 
  setSearchTerm,
  dateFilter,
  setDateFilter,
  statusFilter,
  setStatusFilter,
  creatorFilter,
  setCreatorFilter,
  priorityFilter,
  setPriorityFilter,
  phaseFilter,
  setPhaseFilter,
  showFilters 
}) {
  return (
    <div className="border-b border-gray-200 bg-gray-50/50">
      <div className="p-4 space-y-4">
        <div className="flex flex-col space-y-4">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
          <DateFilter value={dateFilter} onChange={setDateFilter} />
        </div>

        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-4 mt-4"
          >
            <FilterSelect
              label="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              options={statusOptions}
            />
            <FilterSelect
              label="Ideengeber"
              value={creatorFilter}
              onChange={setCreatorFilter}
              placeholder="Nach Ideengeber suchen..."
            />
            <FilterSelect
              label="Priorität"
              value={priorityFilter}
              onChange={setPriorityFilter}
              options={priorityOptions}
            />
            <FilterSelect
              label="Phase"
              value={phaseFilter}
              onChange={setPhaseFilter}
              options={phaseOptions}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}