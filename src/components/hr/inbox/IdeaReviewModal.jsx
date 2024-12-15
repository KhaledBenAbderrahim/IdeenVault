import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HRIdeaDetailsView from '../ideas/HRIdeaDetailsView';
import ProductVisionView from '../../dashboard/ideas/ProductVisionView';
import { generateProductVision } from '../../../utils/aiVisionGenerator';

export default function IdeaReviewModal({ idea, onClose, onSubmitReview }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIdea, setEditedIdea] = useState(idea);
  const [showVision, setShowVision] = useState(false);
  const [productVision, setProductVision] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleVisionToggle = async () => {
    if (!productVision && !showVision) {
      setIsLoading(true);
      const vision = await generateProductVision(idea);
      setProductVision(vision);
      setIsLoading(false);
    }
    setShowVision(!showVision);
  };

  const handleContactOwner = () => {
    window.location.href = `mailto:${idea.creator}@example.com?subject=Feedback zu Ihrer Idee: ${idea.title}`;
  };

  const handleFieldChange = (field, value) => {
    setEditedIdea(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleApprove = () => {
    onSubmitReview(idea.id, 'approved', feedback);
  };

  const handleReject = () => {
    onSubmitReview(idea.id, 'rejected', feedback);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex flex-col"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative flex flex-col h-full max-h-full bg-white shadow-lg mx-auto w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Section - Fixed at top */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-b border-gray-200 bg-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{editedIdea.title}</h2>
              <p className="text-sm text-gray-500">{editedIdea.shortTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContactOwner}
              className="btn-secondary flex-1 sm:flex-none justify-center sm:justify-start min-w-[200px]"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ideeninhaber kontaktieren
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleVisionToggle}
              className={`btn-secondary flex-1 sm:flex-none justify-center sm:justify-start min-w-[160px] ${isLoading ? 'opacity-75 cursor-wait' : ''}`}
              disabled={isLoading}
            >
              <span className="flex items-center">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showVision ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                  </svg>
                )}
                {showVision ? 'Zurück zu Details' : 'KI Vision anzeigen'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AnimatePresence mode="wait">
            {showVision ? (
              <motion.div
                key="vision"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductVisionView vision={productVision} idea={editedIdea} />
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
                  idea={editedIdea}
                  isEditing={isEditing}
                  onFieldChange={handleFieldChange}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Section - Fixed at bottom */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-t border-gray-200 bg-white">
          <div className="space-y-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Geben Sie Ihr Feedback zur Idee ein..."
              className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <div className="flex justify-end space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReject}
                className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                Ablehnen
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleApprove}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Annehmen
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}