import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const customerOptions = [
  'Lernende',
  'Absolventen von Weiterbildungen',
  'Unternehmen',
  'Schulabsolventen',
  'Hochschulabsolventen'
];

const typeOptions = ['BC2', 'B2B', 'B2G'];

const visionQuestions = [
  {
    id: 'mainIdea',
    question: 'Was ist die Hauptidee oder das Ziel Ihrer App?',
    placeholder: 'Beschreiben Sie kurz die Kernidee Ihrer App...'
  },
  {
    id: 'problem',
    question: 'Welches Problem löst Ihre App?',
    placeholder: 'Welche Herausforderungen oder Probleme werden adressiert...'
  },
  {
    id: 'targetAudience',
    question: 'Wer ist die Zielgruppe Ihrer App?',
    placeholder: 'Beschreiben Sie Ihre idealen Nutzer...'
  },
  {
    id: 'keyFeatures',
    question: 'Was sind die wichtigsten Funktionen und Features der App?',
    placeholder: 'Listen Sie die Hauptfunktionen auf...'
  },
  {
    id: 'usp',
    question: 'Was macht Ihre App einzigartig im Vergleich zu bestehenden Lösungen? (USP)',
    placeholder: 'Beschreiben Sie Ihre Alleinstellungsmerkmale...'
  }
];

export default function NewIdeaForm({ onClose, onSubmit }) {
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [generatedVision, setGeneratedVision] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    shortTitle: '',
    description: '',
    type: '',
    customer: '',
    keywords: ''
  });
  const [visionData, setVisionData] = useState({
    mainIdea: '',
    problem: '',
    targetAudience: '',
    keyFeatures: '',
    usp: ''
  });
  const [currentVisionQuestion, setCurrentVisionQuestion] = useState(0);
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    if (currentStep === 'welcome') {
      onClose();
    } else {
      setShowExitPrompt(true);
    }
  };

  const validateBasicInfo = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Titel ist erforderlich';
    if (!formData.shortTitle.trim()) newErrors.shortTitle = 'Kurztitel ist erforderlich';
    if (!formData.description.trim()) newErrors.description = 'Beschreibung ist erforderlich';
    if (!formData.type) newErrors.type = 'Typ ist erforderlich';
    if (!formData.customer) newErrors.customer = 'Zielgruppe ist erforderlich';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (validateBasicInfo()) {
      setIsGenerating(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock vision data
      const mockVision = {
        vision: "Eine innovative App zur Verbesserung des Lernprozesses",
        usp: "Einzigartige KI-gestützte Personalisierung",
        problemsAddressed: ["Ineffiziente Lernmethoden", "Mangelnde Motivation", "Fehlende individuelle Anpassung"],
        keyFeatures: ["Adaptives Lernen", "Fortschrittsverfolgung", "KI-basierte Empfehlungen", "Interaktive Übungen"],
        targetAudience: ["Studierende", "Berufstätige", "Lebenslange Lerner"],
        technicalRequirements: ["React Native", "Node.js", "TensorFlow", "Cloud Infrastructure"],
        businessModel: "Freemium mit Premium-Funktionen"
      };

      setIsGenerating(false);
      setGeneratedVision(mockVision);
      
      // Submit data
      onSubmit({
        ...formData,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        status: 'Offen',
        priority: 'Mittel',
        phase: 'Konzept',
        processed: false,
        vision: mockVision
      });
    }
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleVisionQuestionAnswer = (answer) => {
    setVisionData(prev => ({
      ...prev,
      [visionQuestions[currentVisionQuestion].id]: answer
    }));
    
    if (currentVisionQuestion < visionQuestions.length - 1) {
      setCurrentVisionQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const renderWelcomeScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 opacity-50 rounded-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative p-8 sm:p-10 rounded-3xl">
          <div className="text-center space-y-6">
            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                Willkommen im{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Idea Hub
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
                Ihre Einsichten sind wertvoll. Nehmen Sie sich einen Moment Zeit, um Ihre Vision mit uns zu teilen, und wir helfen Ihnen, sie zum Leben zu erwecken.
              </p>
            </motion.div>

            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-8 py-6"
            >
              {['Idee', 'Details', 'Vision'].map((step, index) => (
                <div key={step} className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-sm ${
                    index === 0 ? 'text-emerald-600 font-medium' : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Start Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(4, 120, 87, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep('basicInfo')}
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:from-emerald-500 hover:to-emerald-400"
              >
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-300 opacity-0 group-hover:opacity-100"
                />
                <span className="relative flex items-center">
                  Lassen Sie uns beginnen
                  <svg 
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 mt-4"
            >
              Geschätzte Dauer: 3-4 Minuten
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderBasicInfoForm = () => (
    <motion.form
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Titel
        </label>
        <input
          type="text"
          required
          className={`input-field ${errors.title ? 'border-red-500' : ''}`}
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kurztitel
        </label>
        <input
          type="text"
          required
          className={`input-field ${errors.shortTitle ? 'border-red-500' : ''}`}
          value={formData.shortTitle}
          onChange={(e) => updateField('shortTitle', e.target.value)}
        />
        {errors.shortTitle && (
          <p className="mt-1 text-sm text-red-500">{errors.shortTitle}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Beschreibung
        </label>
        <textarea
          required
          rows={4}
          className={`input-field ${errors.description ? 'border-red-500' : ''}`}
          value={formData.description}
          onChange={(e) => updateField('description', e.target.value)}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Typ
        </label>
        <select
          className={`input-field ${errors.type ? 'border-red-500' : ''}`}
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
        {errors.type && (
          <p className="mt-1 text-sm text-red-500">{errors.type}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Zielgruppe
        </label>
        <select
          className={`input-field ${errors.customer ? 'border-red-500' : ''}`}
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
        {errors.customer && (
          <p className="mt-1 text-sm text-red-500">{errors.customer}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Schlagworte (durch Komma getrennt)
        </label>
        <input
          type="text"
          className="input-field"
          value={formData.keywords}
          onChange={(e) => updateField('keywords', e.target.value)}
          placeholder="z.B. Innovation, KI, Prozesse"
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={() => setCurrentStep('welcome')}
          className="btn-secondary"
        >
          <span>Zurück</span>
        </button>
        <button
          type="button"
          onClick={() => {
            if (validateBasicInfo()) {
              setCurrentStep('vision');
            }
          }}
          className="btn-primary"
        >
          <span>Weiter zur Produktvision</span>
        </button>
      </div>
    </motion.form>
  );

  const renderVisionQuestion = () => (
    <motion.div
      key={currentVisionQuestion}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          {visionQuestions.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-8 rounded-full ${
                index === currentVisionQuestion
                  ? 'bg-emerald-500'
                  : index < currentVisionQuestion
                  ? 'bg-emerald-200'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {currentVisionQuestion + 1} von {visionQuestions.length}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        {visionQuestions[currentVisionQuestion].question}
      </h3>

      <textarea
        className="input-field min-h-[150px]"
        placeholder={visionQuestions[currentVisionQuestion].placeholder}
        value={visionData[visionQuestions[currentVisionQuestion].id]}
        onChange={(e) => 
          setVisionData(prev => ({
            ...prev,
            [visionQuestions[currentVisionQuestion].id]: e.target.value
          }))
        }
      />

      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={() => {
            if (currentVisionQuestion > 0) {
              setCurrentVisionQuestion(prev => prev - 1);
            } else {
              setCurrentStep('basicInfo');
            }
          }}
          className="btn-secondary"
        >
          <span>Zurück</span>
        </button>
        <button
          type="button"
          onClick={() => handleVisionQuestionAnswer(visionData[visionQuestions[currentVisionQuestion].id])}
          className="btn-primary"
        >
          <span>{currentVisionQuestion === visionQuestions.length - 1 ? 'Abschließen' : 'Weiter'}</span>
        </button>
      </div>
    </motion.div>
  );

  const renderVisionResult = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-4">
          <h3 className="text-xl font-semibold text-white">Generierte Produktvision</h3>
        </div>
        <div className="p-6 space-y-6">
          {/* Vision Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Vision</h4>
            <p className="text-gray-700">{generatedVision.vision}</p>
          </div>

          {/* USP Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Alleinstellungsmerkmal (USP)</h4>
            <p className="text-gray-700">{generatedVision.usp}</p>
          </div>

          {/* Problems Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Adressierte Probleme</h4>
            <ul className="list-disc list-inside space-y-1">
              {generatedVision.problemsAddressed.map((problem, index) => (
                <li key={index} className="text-gray-700">{problem}</li>
              ))}
            </ul>
          </div>

          {/* Features Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Hauptfunktionen</h4>
            <ul className="list-disc list-inside space-y-1">
              {generatedVision.keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Target Audience Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Zielgruppe</h4>
            <ul className="list-disc list-inside space-y-1">
              {generatedVision.targetAudience.map((audience, index) => (
                <li key={index} className="text-gray-700">{audience}</li>
              ))}
            </ul>
          </div>

          {/* Technical Requirements Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Technische Anforderungen</h4>
            <ul className="list-disc list-inside space-y-1">
              {generatedVision.technicalRequirements.map((req, index) => (
                <li key={index} className="text-gray-700">{req}</li>
              ))}
            </ul>
          </div>

          {/* Business Model Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Geschäftsmodell</h4>
            <p className="text-gray-700">{generatedVision.businessModel}</p>
          </div>
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Ihre Idee wurde erfolgreich gespeichert.
            </p>
            <button
              onClick={onClose}
              className="btn-primary bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400"
            >
              <span>Schließen</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-emerald-50/90 via-white/90 to-emerald-50/90 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        {/* Overlay for closing */}
        <div className="fixed inset-0" onClick={handleClose} />
        
        {/* Modal Container */}
        <div className="relative w-full max-w-4xl bg-white shadow-xl rounded-2xl">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 opacity-50 rounded-2xl" />
          
          {/* Header */}
          {currentStep !== 'welcome' && (
            <div className="relative flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentStep === 'basicInfo' && 'Neue Idee erstellen'}
                {currentStep === 'vision' && 'Produktvision'}
                {generatedVision && 'Ihre Produktvision'}
              </h2>
              {!generatedVision && (
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="relative p-6">
            <AnimatePresence mode="wait">
              {currentStep === 'welcome' && renderWelcomeScreen()}
              {currentStep === 'basicInfo' && renderBasicInfoForm()}
              {currentStep === 'vision' && !generatedVision && renderVisionQuestion()}
              {generatedVision && renderVisionResult()}
            </AnimatePresence>

            {/* Loading Overlay */}
            <AnimatePresence>
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600">Generiere Produktvision...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Thank You Message */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm"
                >
                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white shadow-lg">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10 }}
                      className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Vielen Dank für Ihren Beitrag!
                    </h3>
                    <p className="text-gray-600">
                      Ihre Idee wurde erfolgreich gespeichert.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      <AnimatePresence>
        {showExitPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Möchten Sie wirklich abbrechen?
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Alle eingegebenen Daten gehen verloren.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowExitPrompt(false)}
                  className="btn-secondary"
                >
                  <span>Zurück zum Formular</span>
                </button>
                <button
                  onClick={onClose}
                  className="btn-primary bg-red-600 hover:bg-red-700"
                >
                  <span>Ja, abbrechen</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}