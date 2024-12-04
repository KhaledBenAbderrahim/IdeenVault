import React from 'react';
import { motion } from 'framer-motion';
import FooterSocial from './FooterSocial';

export default function FooterBottom({ currentYear, socialLinks }) {
  return (
    <motion.div className="pt-6 sm:pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          &copy; {currentYear} IdeenVault. Alle Rechte vorbehalten.
        </p>
        <FooterSocial socialLinks={socialLinks} />
      </div>
    </motion.div>
  );
}