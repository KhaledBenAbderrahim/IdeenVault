import React from 'react';
import { motion } from 'framer-motion';

export default function LoginForm({ email, setEmail, password, setPassword, handleSubmit, error }) {
  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm sm:text-base"
        >
          {error}
        </motion.div>
      )}

      <div className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">E-Mail-Adresse</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field text-base sm:text-lg py-2.5 sm:py-3"
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
            className="input-field text-base sm:text-lg py-2.5 sm:py-3"
            placeholder="Passwort"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm sm:text-base text-gray-900">
            Angemeldet bleiben
          </label>
        </div>
      </div>

      <div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full justify-center text-base sm:text-lg py-2.5 sm:py-3 touch-manipulation"
        >
          <span>Anmelden</span>
        </motion.button>
      </div>
    </form>
  );
}