import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hrNavigationLinks } from '../HRNavigationConfig';

export default function HRDesktopNavLinks() {
  const location = useLocation();

  return (
    <div className="hidden md:flex md:space-x-8 ml-10">
      {hrNavigationLinks.map((item) => {
        const isActive = location.pathname.startsWith(item.path);
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