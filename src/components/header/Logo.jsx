import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Logo({ handleNavigation }) {
  return (
    <div className="flex-shrink-0">
      <Link 
        to="/" 
        className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 hover:opacity-80 transition-opacity"
        onClick={(e) => handleNavigation(e, '/')}
      >
        IdeenVault
      </Link>
    </div>
  );
}