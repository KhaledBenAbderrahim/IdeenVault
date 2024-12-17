import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModeratorComment from './ModeratorComment';

export default function DiscussionContent({
  discussion,
  newComment,
  setNewComment,
  onSubmitComment,
  onDeleteComment,
  onLikeComment
}) {
  return (
    <div className="p-4 sm:p-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6">
        <p className="text-sm sm:text-base text-gray-700 whitespace-pre-wrap">
          {discussion.preview}
        </p>
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
      </div>

      <div className="space-y-4">
        {/* New Comment Form */}
        <form onSubmit={onSubmitComment} className="mb-6">
          <div className="flex items-start space-x-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=hr"
              alt="HR"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Schreiben Sie einen Kommentar als HR Team..."
                className="input-field min-h-[80px] sm:min-h-[100px] text-sm"
              />
              <div className="flex justify-end mt-2">
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
        <AnimatePresence mode="popLayout">
          {discussion.comments?.map((comment) => (
            <ModeratorComment
              key={comment.id}
              comment={comment}
              onDelete={() => onDeleteComment(discussion.id, comment.id)}
              onLike={() => onLikeComment(discussion.id, comment.id)}
              showDeleteButton={true} // Always show delete button for HR
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}