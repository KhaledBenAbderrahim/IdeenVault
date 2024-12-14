import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import GiniChat from '../chat/GiniChat';
import MobileNavigation from './navigation/MobileNavigation';
import MobileProfileMenu from './navigation/MobileProfileMenu';
import DesktopNavigation from './navigation/DesktopNavigation';

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);

  const handleLogout = () => {
    setShowProfileMenu(false);
    setShowMobileProfile(false);
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navigation */}
      <DesktopNavigation 
        user={user}
        showProfileMenu={showProfileMenu}
        setShowProfileMenu={setShowProfileMenu}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="pt-0 md:pt-16">
        <main className="py-10 pb-20 md:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />

      {/* Mobile Profile Menu */}
      <MobileProfileMenu
        user={user}
        isOpen={showMobileProfile}
        onClose={() => setShowMobileProfile(false)}
        onLogout={handleLogout}
      />

      {/* Floating Action Buttons - Mobile */}
      <div className="fixed right-4 bottom-20 z-[60] flex flex-col space-y-3 md:hidden">
        {/* Profile Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMobileProfile(true)}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200"
        >
          <img src={user?.avatar} alt={user?.name} className="w-10 h-10 rounded-full" />
        </motion.button>

        {/* Gini Chat Button */}
        {user?.email === 'neo.anderson@matrix.com' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GiniChat />
          </motion.div>
        )}
      </div>

      {/* Desktop Gini Chat */}
      {user?.email === 'neo.anderson@matrix.com' && (
        <div className="hidden md:block">
          <GiniChat />
        </div>
      )}
    </div>
  );
}