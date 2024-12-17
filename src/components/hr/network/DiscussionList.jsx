import React from 'react';
import { motion } from 'framer-motion';
import ModeratorDiscussionCard from './components/ModeratorDiscussionCard';

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
      const matchesSearch = (
        discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const matchesTopic = !topicFilter || discussion.topic === topicFilter;
      return matchesSearch && matchesTopic;
    })
    .sort((a, b) => {
      // Convert date strings to timestamps for comparison
      const dateA = new Date(a.date.replace('vor ', '')).getTime();
      const dateB = new Date(b.date.replace('vor ', '')).getTime();

      switch (sortBy) {
        case 'newest':
          // For relative dates like "vor 2 Stunden", reverse the comparison
          if (a.date.includes('vor') && b.date.includes('vor')) {
            const timeA = parseInt(a.date.match(/\d+/)[0]);
            const timeB = parseInt(b.date.match(/\d+/)[0]);
            return timeB - timeA;
          }
          return dateB - dateA;
        case 'oldest':
          if (a.date.includes('vor') && b.date.includes('vor')) {
            const timeA = parseInt(a.date.match(/\d+/)[0]);
            const timeB = parseInt(b.date.match(/\d+/)[0]);
            return timeA - timeB;
          }
          return dateA - dateB;
        case 'popular':
          return b.likes - a.likes;
        case 'active':
          return b.replies - a.replies;
        case 'comments':
          return (b.comments?.length || 0) - (a.comments?.length || 0);
        default:
          return 0;
      }
    });

  if (filteredDiscussions.length === 0) {
    return (
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
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {filteredDiscussions.map((discussion) => (
        <motion.div
          key={discussion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ModeratorDiscussionCard
            discussion={discussion}
            onClick={() => onSelectDiscussion(discussion)}
            onDelete={onDeleteDiscussion}
          />
        </motion.div>
      ))}
    </div>
  );
}