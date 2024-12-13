import React from 'react';
import { motion } from 'framer-motion';
import CloseButton from './CloseButton';

export default function FormContainer({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50/90 via-white/90 to-emerald-50/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="fixed inset-0" onClick={onClose} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative w-full max-w-4xl"
        >
          <CloseButton onClick={onClose} />
          {children}
        </motion.div>
      </div>
    </div>
  );
}