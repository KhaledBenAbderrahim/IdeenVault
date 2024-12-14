import React from 'react';
import DesktopLogo from './desktop/DesktopLogo';
import DesktopNavLinks from './desktop/DesktopNavLinks';
import DesktopProfileMenu from './desktop/DesktopProfileMenu';

export default function DesktopNavigation({ 
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
            <DesktopLogo />
            <DesktopNavLinks />
          </div>
          
          <DesktopProfileMenu
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