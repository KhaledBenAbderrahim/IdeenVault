import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function DiscussionDetails({ discussion, onClose }) {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [comments, setComments] = useState(mockComments);
  const [isLiked, setIsLiked] = useState(false);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    if (replyTo) {
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === replyTo.id
            ? {
                ...comment,
                replies: [...comment.replies, {
                  id: Date.now(),
                  author: user.name,
                  avatar: user.avatar,
                  content: newComment,
                  timestamp: "gerade eben",
                  likes: 0
                }]
              }
            : comment
        )
      );
      setReplyTo(null);
    } else {
      setComments(prevComments => [{
        id: Date.now(),
        author: user.name,
        avatar: user.avatar,
        content: newComment,
        timestamp: "gerade eben",
        likes: 0,
        replies: []
      }, ...prevComments]);
    }
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
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="relative mx-auto w-full h-full sm:h-auto sm:top-20 sm:max-w-4xl bg-white sm:rounded-lg shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-700 whitespace-pre-wrap">{discussion.preview}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {discussion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-1 text-xs sm:text-sm ${
                      isLiked ? 'text-emerald-600' : 'text-gray-500'
                    } hover:text-emerald-600 transition-colors`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{discussion.likes + (isLiked ? 1 : 0)}</span>
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
          </div>

          {/* Comments */}
          <div className="space-y-4">
            {/* New Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-6">
              <div className="flex items-start space-x-2 sm:space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={replyTo ? `Antwort an ${replyTo.author}...` : "Schreiben Sie einen Kommentar..."}
                    className="input-field min-h-[80px] sm:min-h-[100px] text-sm"
                  />
                  <div className="flex justify-end mt-2">
                    {replyTo && (
                      <button
                        type="button"
                        onClick={() => setReplyTo(null)}
                        className="mr-2 text-xs sm:text-sm text-gray-500 hover:text-gray-700"
                      >
                        Antwort abbrechen
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={!newComment.trim()}
                      className="btn-primary text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4"
                    >
                      <span>Kommentar senden</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
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
                        <span className="font-medium text-xs sm:text-sm text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">{comment.content}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <button className="text-xs sm:text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                          {comment.likes} Likes
                        </button>
                        <button
                          onClick={() => setReplyTo(comment)}
                          className="text-xs sm:text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                        >
                          Antworten
                        </button>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies?.length > 0 && (
                      <div className="mt-2 sm:mt-4 ml-4 sm:ml-6 space-y-2 sm:space-y-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex space-x-2 sm:space-x-4">
                            <img
                              src={reply.avatar}
                              alt={reply.author}
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                            />
                            <div className="flex-1 bg-gray-50 rounded-lg p-3 sm:p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-xs sm:text-sm text-gray-900">{reply.author}</span>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-700">{reply.content}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <button className="text-xs sm:text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                                  {reply.likes} Likes
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}