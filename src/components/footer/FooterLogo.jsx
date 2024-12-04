import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FooterLogo() {
  return (
    <motion.div className="col-span-1 md:col-span-1">
      <Link to="/" className="inline-block">
        <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
          IdeenVault
        </span>
      </Link>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
        Ihre zentrale Plattform für kreative Ideen und innovative Lösungen.
      </p>
    </motion.div>
  );
}