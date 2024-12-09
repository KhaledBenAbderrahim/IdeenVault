import React from 'react';
import { motion } from 'framer-motion';

export default function DashboardHeader({ user }) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(120deg, 
              rgba(16, 185, 129, 0.05) 0%,
              rgba(101, 163, 13, 0.05) 100%)`
          }}
        />
        <div 
          className="absolute right-0 top-0 w-1/3 h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 70%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-3 py-1"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-emerald-700">Innovationsportal</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                Willkommen zurück, {user?.name}!
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 max-w-xl"
            >
              Ihre Innovationsplattform für zukunftsweisende Ideen. Entdecken Sie Ihre aktuellen Projekte und deren Status.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}