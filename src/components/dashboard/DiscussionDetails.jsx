import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

// Mock comments data
const mockComments = [
  {
    id: 1,
    author: "Neo Anderson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neo",
    content: "Die Integration von KI in HR-Prozesse ist definitiv der richtige Weg. Wir sollten aber auch die ethischen Aspekte berücksichtigen.",
    timestamp: "vor 2 Stunden",
    likes: 8,
    replies: [
      {
        id: 11,
        author: "Trinity Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=trinity",
        content: "Absolut richtig! Besonders wichtig ist die Transparenz der KI-Entscheidungen.",
        timestamp: "vor 1 Stunde",
        likes: 3
      }
    ]
  },
  {
    id: 2,
    author: "Morpheus Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=morpheus",
    content: "Wir haben bereits erste Tests mit KI-gestützten Bewerbungsprozessen durchgeführt. Die Ergebnisse sind vielversprechend!",
    timestamp: "vor 3 Stunden",
    likes: 12,
    replies: []
  }
];

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative top-20 mx-auto p-8 border w-full max-w-4xl shadow-lg rounded-lg bg-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <img
                src={discussion.avatar}
                alt={discussion.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{discussion.title}</h2>
                <p className="text-sm text-gray-500">
                  von {discussion.author} • {discussion.date}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {discussion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Discussion Content */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <p className="text-gray-700 whitespace-pre-wrap">{discussion.preview}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-1 text-sm ${
                  isLiked ? 'text-emerald-600' : 'text-gray-500'
                } hover:text-emerald-600 transition-colors`}
              >
                <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{discussion.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <span className="flex items-center space-x-1 text-sm text-gray-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* New Comment Form */}
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="flex items-start space-x-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={replyTo ? `Antwort an ${replyTo.author}...` : "Schreiben Sie einen Kommentar..."}
                className="input-field min-h-[100px]"
              />
              <div className="flex justify-between items-center mt-2">
                {replyTo && (
                  <button
                    type="button"
                    onClick={() => setReplyTo(null)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Antwort abbrechen
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="btn-primary ml-auto"
                >
                  <span>Kommentar senden</span>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="flex space-x-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{comment.author}</span>
                      <span className="text-sm text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                        {comment.likes} Likes
                      </button>
                      <button
                        onClick={() => setReplyTo(comment)}
                        className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                      >
                        Antworten
                      </button>
                    </div>
                  </div>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-4 ml-6 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex space-x-4">
                          <img
                            src={reply.avatar}
                            alt={reply.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex-1 bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">{reply.author}</span>
                              <span className="text-sm text-gray-500">{reply.timestamp}</span>
                            </div>
                            <p className="text-gray-700">{reply.content}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <button className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
                                {reply.likes} Likes
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}