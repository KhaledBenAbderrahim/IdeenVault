import React from 'react';
import { motion } from 'framer-motion';
import UserTypeSelector from './UserTypeSelector';

export default function RegisterForm({ userType, setUserType }) {
  return (
    <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
      <div className="space-y-4">
        <UserTypeSelector userType={userType} setUserType={setUserType} />

        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-field text-base sm:text-lg py-2.5 sm:py-3"
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
            className="input-field text-base sm:text-lg py-2.5 sm:py-3"
            placeholder="E-Mail-Adresse"
          />
        </div>

        {userType === 'hr' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="department" className="sr-only">Abteilung</label>
            <input
              id="department"
              name="department"
              type="text"
              required
              className="input-field text-base sm:text-lg py-2.5 sm:py-3"
              placeholder="Abteilung"
            />
          </motion.div>
        )}

        <div>
          <label htmlFor="password" className="sr-only">Passwort</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="input-field text-base sm:text-lg py-2.5 sm:py-3"
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
            className="input-field text-base sm:text-lg py-2.5 sm:py-3"
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
          className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors touch-manipulation"
        />
        <label htmlFor="terms" className="ml-2 block text-sm sm:text-base text-gray-900">
          Ich stimme den <a href="#" className="text-emerald-600 hover:text-emerald-500 active:text-emerald-700 transition-colors touch-manipulation">Nutzungsbedingungen</a> zu
        </label>
      </div>

      <div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full justify-center text-base sm:text-lg py-2.5 sm:py-3 touch-manipulation"
        >
          <span>Registrieren</span>
        </motion.button>
      </div>
    </form>
  );
}