import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1 },
  tap: { scale: 0.95 }
};

export default function MobileMenuButton({ onClick }) {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileTap="tap"
      onClick={onClick}
      className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 transition-colors touch-manipulation"
      aria-label="Menü öffnen"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </motion.button>
  );
}