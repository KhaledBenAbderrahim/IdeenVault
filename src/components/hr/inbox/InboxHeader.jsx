import React from 'react';
import { motion } from 'framer-motion';

export default function InboxHeader({ pendingCount, filter, onFilterChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ideenpostfach</h1>
          <p className="mt-1 text-gray-600">
            Verwalten Sie neue Ideeneinreichungen und Aktualisierungen
          </p>
        </div>
        {pendingCount > 0 && (
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              {pendingCount} neue {pendingCount === 1 ? 'Idee' : 'Ideen'}
            </span>
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => onFilterChange('pending')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'pending' 
              ? 'bg-emerald-100 text-emerald-800' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Ausstehend
        </button>
        <button
          onClick={() => onFilterChange('reviewed')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'reviewed'
              ? 'bg-emerald-100 text-emerald-800'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Bearbeitet
        </button>
      </div>
    </motion.div>
  );
}