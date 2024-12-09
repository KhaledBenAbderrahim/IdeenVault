import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IdeaCard from './IdeaCard';

export default function IdeaList({ ideas, onSelectIdea, showAll, setShowAll }) {
  return (
    <div className="divide-y divide-gray-200">
      <AnimatePresence>
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <IdeaCard idea={idea} onClick={() => onSelectIdea(idea)} />
          </motion.div>
        ))}
      </AnimatePresence>

      {ideas.length > 5 && (
        <div className="p-4 bg-gray-50/50">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Weniger anzeigen' : `${ideas.length - 5} weitere Ideen anzeigen`}
          </motion.button>
        </div>
      )}
    </div>
  );
}