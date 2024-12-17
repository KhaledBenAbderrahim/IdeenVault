import React from 'react';
import { motion } from 'framer-motion';
import { useIdeaReview } from '../hooks/useIdeaReview';
import IdeaReviewHeader from './components/IdeaReviewHeader';
import IdeaReviewContent from './components/IdeaReviewContent';
import IdeaReviewFooter from './components/IdeaReviewFooter';

export default function IdeaReviewModal({ idea, onClose, onSubmitReview }) {
  const {
    feedback,
    setFeedback,
    showVision,
    handleVisionToggle,
    handleApprove,
    handleReject,
    handleContactOwner
  } = useIdeaReview(idea, onSubmitReview);

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
          <IdeaReviewHeader
            idea={idea}
            onClose={onClose}
            onContactOwner={handleContactOwner}
            onVisionToggle={handleVisionToggle}
            showVision={showVision}
          />

          <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
            <IdeaReviewContent
              idea={idea}
              showVision={showVision}
            />
          </div>

          <IdeaReviewFooter
            feedback={feedback}
            setFeedback={setFeedback}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}