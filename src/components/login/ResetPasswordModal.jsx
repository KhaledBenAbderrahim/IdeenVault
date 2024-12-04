import React from 'react';
import { motion } from 'framer-motion';

export default function ResetPasswordModal({ 
  isOpen, 
  onClose, 
  resetEmail, 
  setResetEmail, 
  resetStatus, 
  handleResetSubmit 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black"
        onClick={() => resetStatus !== 'sending' && onClose()}
      />
      <div className="flex items-center justify-center min-h-[100svh] p-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="auth-card">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Passwort zurücksetzen
                </h3>
                {resetStatus !== 'sending' && (
                  <motion.button
                    onClick={onClose}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 -mr-2 text-gray-400 hover:text-gray-500 active:text-gray-600 transition-colors touch-manipulation rounded-full"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
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
                        className="input-field text-base sm:text-lg py-2.5 sm:py-3"
                        placeholder="E-Mail-Adresse"
                        required
                      />
                      {resetStatus === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm sm:text-base text-red-600"
                        >
                          Bitte geben Sie eine gültige E-Mail-Adresse ein.
                        </motion.p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={resetStatus === 'sending'}
                      className="btn-primary w-full justify-center text-base sm:text-lg py-2.5 sm:py-3 touch-manipulation"
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
  );
}