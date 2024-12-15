import React from 'react';
import { motion } from 'framer-motion';

export default function NewDiscussionForm({ onClose, onSubmit, formData, setFormData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative top-20 mx-auto p-4 sm:p-8 border w-full max-w-2xl shadow-lg rounded-lg bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Neue HR-Diskussion starten</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors p-2"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titel
            </label>
            <input
              type="text"
              required
              className="input-field text-sm sm:text-base"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Beschreibung
            </label>
            <textarea
              required
              rows={4}
              className="input-field text-sm sm:text-base"
              value={formData.preview}
              onChange={(e) => setFormData({ ...formData, preview: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thema
            </label>
            <select
              required
              className="input-field text-sm sm:text-base"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            >
              <option value="">Thema auswählen</option>
              <option value="Technologie">Technologie</option>
              <option value="Nachhaltigkeit">Nachhaltigkeit</option>
              <option value="Methoden">Methoden</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags (durch Komma getrennt)
            </label>
            <input
              type="text"
              className="input-field text-sm sm:text-base"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="z.B. Innovation, KI, Prozesse"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary text-sm sm:text-base"
            >
              <span>Abbrechen</span>
            </button>
            <button
              type="submit"
              className="btn-primary text-sm sm:text-base"
            >
              <span>Diskussion erstellen</span>
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}