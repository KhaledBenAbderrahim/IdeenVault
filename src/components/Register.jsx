import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RegisterForm from './register/RegisterForm';

export default function Register() {
  const [userType, setUserType] = useState('user');

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
              Konto erstellen
            </h2>
            <p className="mt-2 text-center text-sm sm:text-base text-gray-600">
              Oder{' '}
              <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500 active:text-emerald-700 transition-colors touch-manipulation">
                melden Sie sich an
              </Link>
            </p>

            <RegisterForm userType={userType} setUserType={setUserType} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}