import React from 'react';
import { motion } from 'framer-motion';
import InboxCard from './InboxCard';

export default function InboxList({ ideas, onSelectIdea }) {
  if (ideas.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-sm p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
          <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <p className="text-gray-600">
          Keine Ideen zur Überprüfung vorhanden.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ideas.map((idea) => (
        <InboxCard
          key={idea.id}
          idea={idea}
          onClick={() => onSelectIdea(idea)}
        />
      ))}
    </div>
  );
}