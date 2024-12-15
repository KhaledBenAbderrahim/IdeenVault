import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hrNavigationLinks } from './HRNavigationConfig';
import * as HeroIcons from '@heroicons/react/24/outline';

export default function HRMobileNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="grid grid-cols-4 h-16">
        {hrNavigationLinks.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = HeroIcons[item.icon];
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center justify-center"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  y: isActive ? -2 : 0
                }}
                className={`flex flex-col items-center justify-center ${
                  isActive ? 'text-emerald-600' : 'text-gray-500'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-[10px] mt-0.5 text-center">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="hrBottomNav"
                    className="absolute -bottom-1 w-12 h-0.5 bg-emerald-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}