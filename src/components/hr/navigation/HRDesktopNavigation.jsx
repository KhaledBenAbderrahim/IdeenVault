import React from 'react';
import HRDesktopLogo from './desktop/HRDesktopLogo';
import HRDesktopNavLinks from './desktop/HRDesktopNavLinks';
import HRDesktopProfileMenu from './desktop/HRDesktopProfileMenu';

export default function HRDesktopNavigation({ 
  user, 
  showProfileMenu, 
  setShowProfileMenu, 
  onLogout 
}) {
  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-sm z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <HRDesktopLogo />
            <HRDesktopNavLinks />
          </div>
          
          <HRDesktopProfileMenu
            user={user}
            showMenu={showProfileMenu}
            setShowMenu={setShowProfileMenu}
            onLogout={onLogout}
          />
        </div>
      </div>
    </nav>
  );
}