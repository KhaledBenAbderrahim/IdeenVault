import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetStatus, setResetStatus] = useState('initial');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const success = login(email, password);
    if (!success) {
      setError('Ungültige E-Mail oder Passwort');
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setResetStatus('sending');
    
    setTimeout(() => {
      if (resetEmail.includes('@')) {
        setResetStatus('success');
        setTimeout(() => {
          setShowResetModal(false);
          setResetStatus('initial');
          setResetEmail('');
        }, 2000);
      } else {
        setResetStatus('error');
      }
    }, 1500);
  };

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
              Willkommen zurück
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Oder{' '}
              <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                erstellen Sie ein neues Konto
              </Link>
            </p>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <h3 className="text-sm font-medium text-emerald-800 mb-2">Demo Zugangsdaten:</h3>
              <div className="space-y-1 text-sm">
                <p className="text-emerald-700 font-mono">
                  <span className="font-semibold">* user * : </span> neo.anderson@matrix.com / matrix123
                </p>
                <p className="text-emerald-600 font-mono">
                  <span className="font-semibold">HR:</span> hr@example.com / hr123
                </p>
                <p className="text-emerald-600 font-mono">
                  <span className="font-semibold">Admin</span> user@example.com / user123
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">E-Mail-Adresse</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="E-Mail-Adresse"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Passwort</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Passwort"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Angemeldet bleiben
                  </label>
                </div>

                <div className="text-sm">
                  <button
                    type="button"
                    onClick={() => setShowResetModal(true)}
                    className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    Passwort vergessen?
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <span>Anmelden</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Password Reset Modal - Fixed positioning for mobile */}
      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => resetStatus !== 'sending' && setShowResetModal(false)}
            />
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="auth-card">
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Passwort zurücksetzen
                      </h3>
                      {resetStatus !== 'sending' && (
                        <button
                          onClick={() => setShowResetModal(false)}
                          className="text-gray-400 hover:text-gray-500 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {resetStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-4"
                      >
                        <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-600">
                          Eine E-Mail mit Anweisungen zum Zurücksetzen wurde an {resetEmail} gesendet.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleResetSubmit}>
                        <p className="text-gray-600 mb-6">
                          Geben Sie Ihre E-Mail-Adresse ein. Sie erhalten einen Link zum Zurücksetzen Ihres Passworts.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <input
                              type="email"
                              value={resetEmail}
                              onChange={(e) => setResetEmail(e.target.value)}
                              disabled={resetStatus === 'sending'}
                              className="input-field"
                              placeholder="E-Mail-Adresse"
                              required
                            />
                            {resetStatus === 'error' && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-2 text-sm text-red-600"
                              >
                                Bitte geben Sie eine gültige E-Mail-Adresse ein.
                              </motion.p>
                            )}
                          </div>
                          <button
                            type="submit"
                            disabled={resetStatus === 'sending'}
                            className="btn-primary w-full justify-center"
                          >
                            {resetStatus === 'sending' ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                              />
                            ) : (
                              <span>Link senden</span>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}