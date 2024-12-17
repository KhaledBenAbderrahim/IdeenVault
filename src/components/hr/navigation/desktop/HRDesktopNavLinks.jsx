import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hrNavigationLinks } from '../HRNavigationConfig';
import { useHRIdeas } from '../../../../hooks/useHRIdeas';

export default function HRDesktopNavLinks() {
  const location = useLocation();
  const { getStats } = useHRIdeas();
  const stats = getStats();

  return (
    <div className="hidden md:flex md:space-x-8 ml-10">
      {hrNavigationLinks.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className="relative group px-1 pt-1"
          >
            <span className={`inline-flex items-center text-sm font-medium ${
              isActive ? 'text-emerald-600' : 'text-gray-500 group-hover:text-gray-700'
            }`}>
              {item.name}
              {item.showBadge && stats.pending > 0 && (
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white ring-2 ring-white"
                >
                  {stats.pending}
                </motion.span>
              )}
            </span>
            {isActive && (
              <motion.div
                layoutId="hrDesktopNav"
                className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}