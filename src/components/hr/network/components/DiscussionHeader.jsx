import React from 'react';
import { motion } from 'framer-motion';

export default function DiscussionHeader({
  discussion,
  onClose,
  onDelete,
  onToggleLike
}) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-10 p-4 sm:p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <img
            src={discussion.avatar}
            alt={discussion.author}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{discussion.title}</h2>
            <p className="text-sm text-gray-500">
              von {discussion.author} • {discussion.date}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggleLike(discussion.id)}
            className={`p-2 rounded-full ${
              discussion.isLiked ? 'text-emerald-600' : 'text-gray-400'
            } hover:bg-gray-100 transition-colors`}
          >
            <svg className="w-5 h-5" fill={discussion.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onDelete(discussion.id)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}