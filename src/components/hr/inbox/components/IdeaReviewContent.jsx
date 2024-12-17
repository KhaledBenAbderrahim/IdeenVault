import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductVisionView from '../../../dashboard/ideas/ProductVisionView';
import HRIdeaDetailsView from '../../ideas/HRIdeaDetailsView';

export default function IdeaReviewContent({ idea, showVision }) {
  return (
    <div className="p-4 sm:p-6">
      <AnimatePresence mode="wait">
        {showVision ? (
          <motion.div
            key="vision"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProductVisionView vision={idea.vision} idea={idea} />
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <HRIdeaDetailsView
              idea={idea}
              isEditing={true}
              onFieldChange={() => {}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}