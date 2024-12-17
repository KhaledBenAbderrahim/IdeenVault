import React from 'react';
import { motion } from 'framer-motion';

export default function IdeaReviewFooter({
  feedback,
  setFeedback,
  onApprove,
  onReject
}) {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6">
      <div className="space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Geben Sie Ihr Feedback zur Idee ein..."
          className="w-full h-20 p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
        />
        <div className="flex justify-end gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onReject}
            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            Ablehnen
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onApprove}
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Annehmen
          </motion.button>
        </div>
      </div>
    </div>
  );
}