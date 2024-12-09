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
    </div>
  );
}