import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HRDiscussionDetails({ 
  discussion, 
  onClose, 
  onDeleteComment,
  onDeleteDiscussion,
  onAddComment,
  onToggleLike
}) {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: "HR Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hr",
      content: newComment,
      timestamp: "gerade eben",
      likes: 0,
      isHR: true
    };

    onAddComment(discussion.id, comment);
    setNewComment('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative top-0 sm:top-20 mx-auto p-4 sm:p-8 border w-full max-w-4xl shadow-lg rounded-lg bg-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src={discussion.avatar}
              alt={discussion.author}
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
            />
            <div>
              <h2 className="text-base sm:text-2xl font-bold text-gray-900">{discussion.title}</h2>
              <p className="text-xs sm:text-sm text-gray-500">
                von {discussion.author} • {discussion.date}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteDiscussion(discussion.id);
                onClose();
              }}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-6 mb-4 sm:mb-6">
          <p className="text-xs sm:text-base text-gray-700 whitespace-pre-wrap">{discussion.preview}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {discussion.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLike(discussion.id);
                }}
                className={`flex items-center space-x-1 text-xs sm:text-sm ${
                  discussion.isLiked ? 'text-emerald-600' : 'text-gray-500'
                } hover:text-emerald-600 transition-colors`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill={discussion.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{discussion.likes}</span>
              </button>
              <span className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{discussion.replies}</span>
              </span>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              {discussion.topic}
            </span>
          </div>
        </div>

        {/* Comments */}
        <div className="space-y-4">
          {/* New Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-6">
            <div className="flex items-start space-x-2 sm:space-x-4">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=hr"
                alt="HR"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Schreiben Sie einen Kommentar als HR Team..."
                  className="input-field min-h-[80px] sm:min-h-[100px] text-xs sm:text-base"
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="btn-primary text-xs sm:text-base py-1.5 sm:py-2 px-3 sm:px-4"
                  >
                    <span>Kommentar senden</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Comments List */}
          {discussion.comments?.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex space-x-2 sm:space-x-4"
            >
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
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
                      {(comment.isHR || discussion.author === "HR Team") && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteComment(discussion.id, comment.id);
                          }}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">{comment.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}