import React from 'react';
import { motion } from 'framer-motion';
import HRDiscussionCard from './HRDiscussionCard';

export default function DiscussionList({
  discussions,
  onSelectDiscussion,
  onDeleteDiscussion,
  searchTerm,
  topicFilter,
  sortBy
}) {
  const filteredDiscussions = discussions
    .filter(discussion => {
      const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          discussion.preview.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTopic = !topicFilter || discussion.topic === topicFilter;
      return matchesSearch && matchesTopic;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'popular') return b.likes - a.likes;
      if (sortBy === 'active') return b.replies - a.replies;
      return 0;
    });

  return (
    <div className="divide-y divide-gray-200">
      {filteredDiscussions.map((discussion) => (
        <motion.div
          key={discussion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HRDiscussionCard
            discussion={discussion}
            onClick={() => onSelectDiscussion(discussion)}
            onDelete={() => onDeleteDiscussion(discussion.id)}
          />
        </motion.div>
      ))}

      {filteredDiscussions.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Keine Diskussionen gefunden. Passen Sie Ihre Filter an.
          </p>
        </motion.div>
      )}
    </div>
  );
}