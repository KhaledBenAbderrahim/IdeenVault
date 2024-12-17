import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DiscussionContent from './components/DiscussionContent';
import DiscussionHeader from './components/DiscussionHeader';

export default function HRDiscussionDetails({
  discussion,
  onClose,
  onDeleteComment,
  onDeleteDiscussion,
  onAddComment,
  onToggleLike,
  onLikeComment
}) {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    onAddComment(discussion.id, {
      id: Date.now(),
      content: newComment,
      timestamp: "gerade eben",
      likes: 0
    });
    setNewComment('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-xl shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <DiscussionHeader
            discussion={discussion}
            onClose={onClose}
            onDelete={onDeleteDiscussion}
            onToggleLike={onToggleLike}
          />

          <DiscussionContent
            discussion={discussion}
            newComment={newComment}
            setNewComment={setNewComment}
            onSubmitComment={handleSubmitComment}
            onDeleteComment={onDeleteComment}
            onLikeComment={onLikeComment}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}