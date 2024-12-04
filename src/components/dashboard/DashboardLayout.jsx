import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Ideen', path: '/dashboard/ideas' },
    { name: 'IdeenTalk', path: '/dashboard/discussions' },
    { name: 'Analytik', path: '/dashboard/analytics' },
  ];

  const handleLogout = () => {
    setShowProfileMenu(false);
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <nav className="bg-white shadow-sm fixed w-full z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-emerald-600">
                IdeenVault
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-4 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                <span className="sr-only">Menü öffnen</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'border-emerald-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Profile Menu */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <span className="hidden sm:block text-sm font-medium text-gray-700">{user?.name}</span>
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="h-8 w-8 rounded-full"
                  />
                </button>

                {showProfileMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowProfileMenu(false)}
                    />
                    
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        <Link
                          to="/dashboard/profile"
                          onClick={() => setShowProfileMenu(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profil
                        </Link>
                        <Link
                          to="/dashboard/settings"
                          onClick={() => setShowProfileMenu(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Einstellungen
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Abmelden
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:hidden border-t border-gray-200 py-2`}
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${
                    location.pathname === item.path
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}