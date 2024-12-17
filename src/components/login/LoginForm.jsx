import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import HomeNavigationButton from '../common/HomeNavigationButton';

export default function LoginForm({ email, setEmail, password, setPassword, handleSubmit, error }) {
  const navigate = useNavigate();

  const handleGithubLogin = async () => {
    try {
      // Implement GitHub login logic here
      navigate('/');
    } catch (error) {
      console.error('GitHub login failed:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Implement Google login logic here
      navigate('/');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-50 text-red-700 rounded-md text-sm sm:text-base"
          >
            {error}
          </motion.div>
        )}

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

        <div className="flex items-center justify-between">
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

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg py-3 px-4 font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          Anmelden
        </motion.button>
      </form>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Oder anmelden mit</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            onClick={handleGithubLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300 group"
          >
            <FaGithub className="text-2xl mr-2 group-hover:text-gray-700" />
            <span className="font-medium group-hover:text-gray-700">GitHub</span>
          </motion.button>

          <motion.button
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300 group"
          >
            <FaGoogle className="text-2xl mr-2 text-red-500" />
            <span className="font-medium group-hover:text-gray-700">Google</span>
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <HomeNavigationButton />
      </div>
    </div>
  );
}