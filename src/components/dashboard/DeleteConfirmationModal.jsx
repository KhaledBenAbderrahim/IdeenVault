import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeleteConfirmationModal({ isOpen, onClose, onConfirm, ideaTitle }) {
  if (!isOpen) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white opacity-50" />

            {/* Content */}
            <div className="relative p-6 sm:p-8">
              <div className="text-center">
                {/* Warning Icon */}
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6 transform-gpu transition-transform hover:scale-110">
                  <motion.svg 
                    className="h-8 w-8 text-red-600"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                    />
                  </motion.svg>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Idee löschen
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-8">
                  Sind Sie sicher, dass Sie die Idee <span className="font-medium text-gray-900">"{ideaTitle}"</span> löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="btn-secondary order-2 sm:order-1 text-sm sm:text-base px-6 py-2.5"
                  >
                    <span>Abbrechen</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onConfirm}
                    className="relative overflow-hidden px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium text-white bg-red-600 order-1 sm:order-2 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="relative z-10">Endgültig löschen</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}