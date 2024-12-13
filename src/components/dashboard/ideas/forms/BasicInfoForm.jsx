import React from 'react';
import { motion } from 'framer-motion';

export default function BasicInfoForm({ formData, updateField, errors, customerOptions, typeOptions }) {
  return (
    <motion.form
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100">
        <div className="space-y-6">
          {/* Title Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors">
              Titel
            </label>
            <input
              type="text"
              required
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300
                ${errors.title 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : 'border-emerald-100 focus:border-emerald-500 focus:ring-emerald-200'
                } focus:ring-2 hover:border-emerald-200`}
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
            />
            {errors.title && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.title}
              </motion.p>
            )}
          </motion.div>

          {/* Short Title Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors">
              Kurztitel
            </label>
            <input
              type="text"
              required
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300
                ${errors.shortTitle 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : 'border-emerald-100 focus:border-emerald-500 focus:ring-emerald-200'
                } focus:ring-2 hover:border-emerald-200`}
              value={formData.shortTitle}
              onChange={(e) => updateField('shortTitle', e.target.value)}
            />
            {errors.shortTitle && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.shortTitle}
              </motion.p>
            )}
          </motion.div>

          {/* Description Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors">
              Beschreibung
            </label>
            <textarea
              required
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 resize-none
                ${errors.description 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : 'border-emerald-100 focus:border-emerald-500 focus:ring-emerald-200'
                } focus:ring-2 hover:border-emerald-200`}
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
            {errors.description && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.description}
              </motion.p>
            )}
          </motion.div>

          {/* Type Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors">
              Typ
            </label>
            <div className="relative">
              <select
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 appearance-none
                  ${errors.type 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-emerald-100 focus:border-emerald-500 focus:ring-emerald-200'
                  } focus:ring-2 hover:border-emerald-200`}
                value={formData.type}
                onChange={(e) => updateField('type', e.target.value)}
              >
                <option value="">Bitte wählen</option>
                {typeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {errors.type && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.type}
              </motion.p>
            )}
          </motion.div>

          {/* Customer Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors">
              Zielgruppe
            </label>
            <div className="relative">
              <select
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 appearance-none
                  ${errors.customer 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-emerald-100 focus:border-emerald-500 focus:ring-emerald-200'
                  } focus:ring-2 hover:border-emerald-200`}
                value={formData.customer}
                onChange={(e) => updateField('customer', e.target.value)}
              >
                <option value="">Bitte wählen</option>
                {customerOptions.map((customer) => (
                  <option key={customer} value={customer}>
                    {customer}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {errors.customer && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errors.customer}
              </motion.p>
            )}
          </motion.div>

          {/* Keywords Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors">
              Schlagworte (durch Komma getrennt)
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-emerald-100 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 hover:border-emerald-200"
              value={formData.keywords}
              onChange={(e) => updateField('keywords', e.target.value)}
              placeholder="z.B. Innovation, KI, Prozesse"
            />
          </motion.div>
        </div>
      </div>
    </motion.form>
  );
}