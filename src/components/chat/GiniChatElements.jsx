import React from 'react';
import { motion } from 'framer-motion';

export function GiniAvatar() {
  return (
    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 
                    flex items-center justify-center text-white font-semibold shadow-lg text-sm md:text-base">
      G
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center">
      <div className="mr-1.5 md:mr-2">
        <GiniAvatar />
      </div>
      <div className="bg-white rounded-xl md:rounded-2xl shadow-md border border-gray-100">
        <div className="flex space-x-1 px-2 py-1">
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: dot * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}