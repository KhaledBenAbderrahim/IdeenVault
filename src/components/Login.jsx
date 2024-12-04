import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import LoginForm from './login/LoginForm';
import DemoCredentials from './login/DemoCredentials';
import ResetPasswordModal from './login/ResetPasswordModal';

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
    <div className="min-h-[100svh] flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="auth-card">
          <div className="relative z-10">
            <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-bold text-gray-900">
              Willkommen zurück
            </h2>
            <p className="mt-2 text-center text-sm sm:text-base text-gray-600">
              Oder{' '}
              <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500 active:text-emerald-700 transition-colors touch-manipulation">
                erstellen Sie ein neues Konto
              </Link>
            </p>

            <DemoCredentials />

            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              error={error}
            />

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="text-sm sm:text-base font-medium text-emerald-600 hover:text-emerald-500 active:text-emerald-700 transition-colors touch-manipulation"
              >
                Passwort vergessen?
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showResetModal && (
          <ResetPasswordModal
            isOpen={showResetModal}
            onClose={() => setShowResetModal(false)}
            resetEmail={resetEmail}
            setResetEmail={setResetEmail}
            resetStatus={resetStatus}
            handleResetSubmit={handleResetSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
}