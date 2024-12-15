import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../../context/AuthContext';

export default function HRProfile() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center space-x-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-600">{user?.department}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Add your HR Profile content here */}
    </div>
  );
}