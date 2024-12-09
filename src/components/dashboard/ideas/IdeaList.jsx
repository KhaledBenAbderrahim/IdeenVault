import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IdeaCard from './IdeaCard';

export default function IdeaList({ ideas, onSelectIdea }) {
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

      {ideas.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Keine Ideen gefunden. Passen Sie Ihre Filter an oder erstellen Sie eine neue Idee.
          </p>
        </motion.div>
      )}
    </div>
  );
}