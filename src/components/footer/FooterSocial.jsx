import React from 'react';
import { motion } from 'framer-motion';

export default function FooterSocial({ socialLinks }) {
  return (
    <div className="flex space-x-4 sm:space-x-6">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-emerald-600 transition-colors duration-300 touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">{social.name}</span>
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d={social.icon} />
          </svg>
        </motion.a>
      ))}
    </div>
  );
}