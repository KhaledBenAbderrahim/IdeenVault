import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Register() {
  const [userType, setUserType] = useState('user');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="auth-card">
          <div className="relative z-10">
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Konto erstellen
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Oder{' '}
              <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                melden Sie sich an
              </Link>
            </p>

            <form className="mt-8 space-y-6">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div 
                    className={`auth-type-selector flex-1 ${
                      userType === 'user' ? 'auth-type-selector-active' : 'auth-type-selector-inactive'
                    }`}
                    onClick={() => setUserType('user')}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          userType === 'user' ? 'border-emerald-500' : 'border-gray-300'
                        }`}>
                          {userType === 'user' && (
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          )}
                        </div>
                        <span className={`font-medium ${
                          userType === 'user' ? 'text-emerald-700' : 'text-gray-700'
                        }`}>
                          Mitarbeiter
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Ideen einreichen und an Workshops teilnehmen
                      </p>
                    </div>
                  </div>

                  <div 
                    className={`auth-type-selector flex-1 ${
                      userType === 'hr' ? 'auth-type-selector-active' : 'auth-type-selector-inactive'
                    }`}
                    onClick={() => setUserType('hr')}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          userType === 'hr' ? 'border-emerald-500' : 'border-gray-300'
                        }`}>
                          {userType === 'hr' && (
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          )}
                        </div>
                        <span className={`font-medium ${
                          userType === 'hr' ? 'text-emerald-700' : 'text-gray-700'
                        }`}>
                          HR
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Workshops organisieren und Ideen verwalten
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input-field"
                    placeholder="Vollständiger Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">E-Mail-Adresse</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-field"
                    placeholder="E-Mail-Adresse"
                  />
                </div>

                {userType === 'hr' && (
                  <div>
                    <label htmlFor="department" className="sr-only">Abteilung</label>
                    <input
                      id="department"
                      name="department"
                      type="text"
                      required
                      className="input-field"
                      placeholder="Abteilung"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="password" className="sr-only">Passwort</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="input-field"
                    placeholder="Passwort"
                  />
                </div>
                <div>
                  <label htmlFor="password-confirm" className="sr-only">Passwort bestätigen</label>
                  <input
                    id="password-confirm"
                    name="password-confirm"
                    type="password"
                    required
                    className="input-field"
                    placeholder="Passwort bestätigen"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Ich stimme den <a href="#" className="text-emerald-600 hover:text-emerald-500">Nutzungsbedingungen</a> zu
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <span>Registrieren</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}