import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const linkListVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function FooterLinks({ category, links, expandedSection, toggleSection }) {
  return (
    <motion.div className="col-span-1">
      <button
        onClick={() => toggleSection(category)}
        className="w-full flex items-center justify-between md:block text-left mb-2 sm:mb-4"
      >
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
          {category}
        </h3>
        <motion.span 
          className="md:hidden transform transition-transform duration-300"
          animate={{ rotate: expandedSection === category ? 180 : 0 }}
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        <motion.ul
          variants={linkListVariants}
          initial="hidden"
          animate={(expandedSection === category || window.innerWidth >= 768) ? "visible" : "hidden"}
          className={`space-y-2 sm:space-y-3 overflow-hidden ${expandedSection === category ? 'mb-4' : ''} md:!h-auto md:!opacity-100`}
        >
          {links.map((link) => (
            <motion.li key={link.name}>
              <Link 
                to={link.path}
                className="block py-1 text-sm sm:text-base text-gray-600 hover:text-emerald-600 transition-colors duration-300 active:text-emerald-700 touch-manipulation"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}