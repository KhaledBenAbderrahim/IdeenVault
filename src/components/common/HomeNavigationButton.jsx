import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function HomeNavigationButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/')}
      className="group relative flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <FaHome className="text-white text-xl mr-2" />
      <span className="text-white font-medium">Zur Startseite</span>
    </motion.button>
  );
}
