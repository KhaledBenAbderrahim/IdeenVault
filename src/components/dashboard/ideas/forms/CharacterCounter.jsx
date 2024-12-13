import React from 'react';
import { motion } from 'framer-motion';

export default function CharacterCounter({ current, max }) {
  const percentage = (current / max) * 100;
  const isNearLimit = percentage > 80;
  const isOverLimit = percentage > 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute bottom-3 right-3 flex items-center space-x-2"
    >
      <span className={`text-xs ${
        isOverLimit ? 'text-red-500' :
        isNearLimit ? 'text-amber-500' :
        'text-gray-400'
      }`}>
        {current}/{max}
      </span>
      <motion.div 
        className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className={`h-full rounded-full ${
            isOverLimit ? 'bg-red-500' :
            isNearLimit ? 'bg-amber-500' :
            'bg-emerald-500'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(percentage, 100)}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}