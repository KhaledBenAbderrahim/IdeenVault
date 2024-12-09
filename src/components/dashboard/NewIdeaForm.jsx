import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const customerOptions = [
  'Lernende',
  'Absolventen von Weiterbildungen',
  'Unternehmen',
  'Schulabsolventen',
  'Hochschulabsolventen'
];

const typeOptions = ['BC2', 'B2B', 'B2G'];

export default function NewIdeaForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    shortTitle: '',
    description: '',
    type: '',
    customer: '',
    keywords: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Titel ist erforderlich';
    }
    if (!formData.shortTitle.trim()) {
      newErrors.shortTitle = 'Kurztitel ist erforderlich';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Beschreibung ist erforderlich';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.type) {
      newErrors.type = 'Typ ist erforderlich';
    }
    if (!formData.customer) {
      newErrors.customer = 'Zielgruppe ist erforderlich';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      onSubmit({
        ...formData,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        status: 'Offen',
        priority: 'Mittel',
        phase: 'Konzept',
        processed: false
      });
      onClose();
    }
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setErrors({});
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 rounded-full ${
            index + 1 === currentStep
              ? 'bg-emerald-500 w-8'
              : index + 1 < currentStep
              ? 'bg-emerald-200 w-8'
              : 'bg-gray-200 w-4'
          } transition-all duration-300`}
          initial={{ scale: 0.8 }}
          animate={{ scale: index + 1 === currentStep ? 1 : 0.8 }}
        />
      ))}
    </div>
  );

  const renderError = (field) => {
    if (errors[field]) {
      return (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600"
        >
          {errors[field]}
        </motion.p>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative top-20 mx-auto p-8 border w-full max-w-2xl shadow-xl rounded-2xl bg-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Neue Idee erstellen</h2>
            <p className="text-sm text-gray-500 mt-1">
              Schritt {currentStep} von {totalSteps}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {renderStepIndicator()}

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Title Field */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Titel
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                    placeholder="Geben Sie einen aussagekräftigen Titel ein"
                  />
                  {renderError('title')}
                </div>

                {/* Short Title Field */}
                <div>
                  <label htmlFor="shortTitle" className="block text-sm font-medium text-gray-700">
                    Kurztitel
                  </label>
                  <input
                    type="text"
                    id="shortTitle"
                    value={formData.shortTitle}
                    onChange={(e) => updateField('shortTitle', e.target.value)}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.shortTitle ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                    placeholder="Kurze Version des Titels"
                  />
                  {renderError('shortTitle')}
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Beschreibung
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    rows={4}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
                    placeholder="Beschreiben Sie Ihre Idee im Detail"
                  />
                  {renderError('description')}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Typ
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {typeOptions.map((type) => (
                      <motion.button
                        key={type}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateField('type', type)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                          formData.type === type
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        } transition-all duration-200 ${
                          errors.type ? 'border-red-500' : ''
                        }`}
                      >
                        {type}
                      </motion.button>
                    ))}
                  </div>
                  {renderError('type')}
                </div>

                {/* Customer Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zielgruppe
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {customerOptions.map((customer) => (
                      <motion.button
                        key={customer}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => updateField('customer', customer)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                          formData.customer === customer
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        } transition-all duration-200 ${
                          errors.customer ? 'border-red-500' : ''
                        }`}
                      >
                        {customer}
                      </motion.button>
                    ))}
                  </div>
                  {renderError('customer')}
                </div>

                {/* Keywords Field */}
                <div>
                  <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                    Schlagwörter
                  </label>
                  <input
                    type="text"
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => updateField('keywords', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Schlagwörter durch Kommas getrennt"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={prevStep}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentStep === 1}
            >
              Zurück
            </motion.button>
            
            {currentStep < totalSteps ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                className="px-6 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200"
              >
                Weiter
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200"
              >
                Idee erstellen
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}