import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressSteps({ currentStep }) {
  const steps = ['Idee', 'Details', 'Vision'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center space-x-4 sm:space-x-8 py-6"
    >
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="flex flex-col items-center space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center relative
              ${index <= currentStep ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}
            whileHover={{ boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)" }}
          >
            {index <= currentStep && (
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-200/50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <span className="relative z-10 text-sm sm:text-base font-semibold">{index + 1}</span>
          </motion.div>
          <span className={`text-xs sm:text-sm whitespace-nowrap ${
            index <= currentStep ? 'text-emerald-600 font-medium' : 'text-gray-400'
          }`}>
            {step}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}