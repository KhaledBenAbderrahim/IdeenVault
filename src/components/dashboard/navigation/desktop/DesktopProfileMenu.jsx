import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { profileMenuItems } from '../utils/navigationConfig';

export default function DesktopProfileMenu({ user, showMenu, setShowMenu, onLogout }) {
  return (
    <div className="flex items-center">
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center space-x-3 focus:outline-none group"
        >
          <span className="hidden sm:block text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {user?.name}
          </span>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={user?.avatar}
            alt={user?.name}
            className="h-8 w-8 rounded-full ring-2 ring-white"
          />
        </button>

        <AnimatePresence>
          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowMenu(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 py-1"
              >
                {profileMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setShowMenu(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Abmelden
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}