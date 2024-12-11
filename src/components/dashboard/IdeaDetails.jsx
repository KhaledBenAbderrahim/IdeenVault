import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { IdeaPDF } from './IdeaPDF';
import { generateProductVision } from '../../utils/aiVisionGenerator';
import ProductVisionView from './ideas/ProductVisionView';
import IdeaDetailsView from './ideas/IdeaDetailsView';

export default function IdeaDetails({ idea, onClose }) {
  const [showVision, setShowVision] = useState(false);
  const [productVision, setProductVision] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVisionToggle = async () => {
    if (!productVision && !showVision) {
      setIsLoading(true);
      const vision = await generateProductVision(idea);
      setProductVision(vision);
      setIsLoading(false);
    }
    setShowVision(!showVision);
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
        transition={{ duration: 0.3 }}
        className="relative top-20 mx-auto p-8 border w-full max-w-4xl shadow-lg rounded-lg bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{idea.title}</h2>
            <p className="text-sm text-gray-500">{idea.shortTitle}</p>
          </div>
          <div className="flex items-center space-x-4">
            {!showVision && (
              <PDFDownloadLink
                document={<IdeaPDF idea={idea} />}
                fileName={`${idea.shortTitle}-details.pdf`}
                className="btn-secondary"
              >
                {({ loading }) => (
                  <span className="flex items-center">
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Details als PDF
                      </>
                    )}
                  </span>
                )}
              </PDFDownloadLink>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVisionToggle}
              className={`btn-secondary ${isLoading ? 'opacity-75 cursor-wait' : ''}`}
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
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showVision ? (
            <motion.div
              key="vision"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProductVisionView vision={productVision} idea={idea} />
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <IdeaDetailsView idea={idea} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}