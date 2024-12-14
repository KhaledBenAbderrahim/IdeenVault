import React from 'react';
import { motion } from 'framer-motion';

export default function GiniChatIcon({ isOpen, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 
                 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 
                 focus:ring-emerald-500 focus:ring-offset-2 transition-shadow flex items-center justify-center"
    >
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 
                    flex items-center justify-center text-sm md:text-base font-semibold shadow-lg">
        G
      </div>
    </motion.button>
  );
}