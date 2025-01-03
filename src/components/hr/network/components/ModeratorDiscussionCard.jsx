import React from 'react';
import { motion } from 'framer-motion';

export default function ModeratorDiscussionCard({ discussion, onClick, onDelete }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="group bg-white p-4 sm:p-6 hover:bg-gray-50/50 transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <img
            src={discussion.avatar}
            alt={discussion.author}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {discussion.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              von {discussion.author} • {discussion.date}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            {discussion.topic}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(discussion);
            }}
            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 line-clamp-2">
        {discussion.preview}
      </p>

      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
        {discussion.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-gray-500 text-xs sm:text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {discussion.likes}
          </span>
          <span className="flex items-center text-gray-500 text-xs sm:text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {discussion.replies}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="text-emerald-600 hover:text-emerald-700 text-xs sm:text-sm font-medium transition-colors"
        >
          Diskussion moderieren →
        </button>
      </div>
    </motion.div>
  );
}