import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewIdeaForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    shortTitle: '',
    description: '',
    type: '',
    customer: '',
    keywords: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
      status: 'Offen',
      priority: 'Mittel',
      phase: 'Konzept',
      processed: false
    });
    onClose();
  };

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
        transition={{ duration: 0.3 }}
        className="relative top-20 mx-auto p-8 border w-full max-w-2xl shadow-lg rounded-lg bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Neue Idee erstellen</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Serviceidee
            </label>
            <input
              type="text"
              required
              className="input-field"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kürzel
            </label>
            <input
              type="text"
              required
              className="input-field"
              value={formData.shortTitle}
              onChange={(e) => setFormData({ ...formData, shortTitle: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Erläuterung
            </label>
            <textarea
              required
              rows={3}
              className="input-field"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Typ
            </label>
            <select
              required
              className="input-field"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="">Typ auswählen</option>
              <option value="AI Service">AI Service</option>
              <option value="Software">Software</option>
              <option value="Platform">Platform</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kunde
            </label>
            <input
              type="text"
              required
              className="input-field"
              value={formData.customer}
              onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Schlagworte (durch Komma getrennt)
            </label>
            <input
              type="text"
              className="input-field"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              placeholder="z.B. AI, Innovation, HR"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              <span>Abbrechen</span>
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              <span>Idee erstellen</span>
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}