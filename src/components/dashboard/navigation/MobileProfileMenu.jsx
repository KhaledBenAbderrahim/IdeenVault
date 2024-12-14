import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileProfileMenu({ user, isOpen, onClose, onLogout }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-[70]"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="absolute bottom-16 inset-x-0 bg-white rounded-t-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-6">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
              <Link
                to="/dashboard/profile"
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <span>Profil anzeigen</span>
              </Link>
              <Link
                to="/dashboard/settings"
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <span>Einstellungen</span>
              </Link>
              <button
                onClick={onLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <span>Abmelden</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}