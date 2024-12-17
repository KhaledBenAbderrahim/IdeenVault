import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import ModeratorActions from './ModeratorActions';

const ModeratorComment = forwardRef(({ comment, onDelete, onLike, showDeleteButton }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex space-x-3 sm:space-x-4"
    >
      <img
        src={comment.avatar}
        alt={comment.author}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
      />
      <div className="flex-1">
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-xs sm:text-sm text-gray-900">
                {comment.author}
              </span>
              {comment.isHR && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-emerald-100 text-emerald-800">
                  HR Team
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] sm:text-xs text-gray-500">
                {comment.timestamp}
              </span>
              {showDeleteButton && (
                <ModeratorActions onDelete={onDelete} />
              )}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 break-words">{comment.content}</p>
          <div className="mt-2 flex items-center space-x-4">
            <button
              onClick={() => onLike(comment.id)}
              className={`flex items-center space-x-1 text-xs sm:text-sm ${
                comment.isLiked ? 'text-emerald-600' : 'text-gray-500'
              } hover:text-emerald-600 transition-colors`}
            >
              <svg className="w-4 h-4" fill={comment.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{comment.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ModeratorComment.displayName = 'ModeratorComment';

export default ModeratorComment;