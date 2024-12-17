import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import HRDesktopNavigation from './navigation/HRDesktopNavigation';
import HRMobileNavigation from './navigation/HRMobileNavigation';
import MobileProfileMenu from '../dashboard/navigation/MobileProfileMenu';
import HRGiniChat from './chat/HRGiniChat';

export default function HRDashboardLayout() {
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
      <HRDesktopNavigation 
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
      <HRMobileNavigation />

      {/* Mobile Profile Menu */}
      <MobileProfileMenu
        user={user}
        isOpen={showMobileProfile}
        onClose={() => setShowMobileProfile(false)}
        onLogout={handleLogout}
      />

      {/* Floating Action Button - Mobile */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMobileProfile(true)}
        className="fixed right-4 bottom-20 z-[60] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 md:hidden"
      >
        <img src={user?.avatar} alt={user?.name} className="w-10 h-10 rounded-full" />
      </motion.button>

      {/* Gini Chat */}
      <div className="hidden md:block">
        <HRGiniChat />
      </div>

      {/* Mobile Gini Chat */}
      <div className="md:hidden">
        <HRGiniChat />
      </div>
    </div>
  );
}