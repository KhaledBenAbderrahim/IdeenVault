import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function Settings() {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Einstellungen</h2>

        {/* Notifications Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Benachrichtigungen</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm text-gray-700">E-Mail-Benachrichtigungen</label>
                  <p className="text-xs text-gray-500">Erhalten Sie Updates zu Ihren Ideen per E-Mail</p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-emerald-600"
                  role="switch"
                  aria-checked="true"
                >
                  <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                    <span className="opacity-0 duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm text-gray-700">Desktop-Benachrichtigungen</label>
                  <p className="text-xs text-gray-500">Erhalten Sie Echtzeit-Updates im Browser</p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-gray-200"
                  role="switch"
                  aria-checked="false"
                >
                  <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                    <span className="opacity-100 duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Privatsphäre</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm text-gray-700">Profil öffentlich sichtbar</label>
                  <p className="text-xs text-gray-500">Andere Benutzer können Ihr Profil sehen</p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 bg-emerald-600"
                  role="switch"
                  aria-checked="true"
                >
                  <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Theme Section */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Erscheinungsbild</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="p-4 border-2 border-emerald-500 rounded-lg bg-white text-center">
                <span className="block text-sm font-medium text-gray-900">Hell</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg bg-white text-center">
                <span className="block text-sm font-medium text-gray-900">Dunkel</span>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg bg-white text-center">
                <span className="block text-sm font-medium text-gray-900">System</span>
              </button>
            </div>
          </div>

          {/* Session Section */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Sitzung</h3>
            <button className="btn-secondary">
              <span>Alle anderen Sitzungen beenden</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}