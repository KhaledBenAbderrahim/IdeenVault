import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function SocialLoginButtons({ onGithubLogin, onGoogleLogin }) {
  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Oder fortfahren mit</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={onGithubLogin}
          className="flex justify-center items-center px-4 py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          <FaGithub className="h-5 w-5 mr-2" />
          <span>GitHub</span>
        </motion.button>

        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={onGoogleLogin}
          className="flex justify-center items-center px-4 py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          <FaGoogle className="h-5 w-5 mr-2 text-red-500" />
          <span>Google</span>
        </motion.button>
      </div>
    </div>
  );
}
