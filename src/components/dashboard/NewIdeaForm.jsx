import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormStep from './ideas/forms/FormStep';
import ProgressSteps from './ideas/forms/ProgressSteps';
import BasicInfoForm from './ideas/forms/BasicInfoForm';
import VisionQuestion from './ideas/forms/VisionQuestion';
import VisionResult from './ideas/forms/VisionResult';
import ExitConfirmation from './ideas/forms/ExitConfirmation';
import { visionQuestions, customerOptions, typeOptions } from '../../data/formData';

export default function NewIdeaForm({ onClose, onSubmit }) {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
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

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (validateBasicInfo()) {
      setIsGenerating(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock vision data
      const mockVision = {
        vision: "Eine innovative App zur Verbesserung des Lernprozesses",
        usp: "Einzigartige KI-gestützte Personalisierung",
        problemsAddressed: "Ineffiziente Lernmethoden, Mangelnde Motivation, Fehlende individuelle Anpassung",
        keyFeatures: "Adaptives Lernen, Fortschrittsverfolgung, KI-basierte Empfehlungen, Interaktive Übungen",
        targetAudience: "Studierende, Berufstätige, Lebenslange Lerner",
        technicalRequirements: "React Native, Node.js, TensorFlow, Cloud Infrastructure",
        businessModel: "Freemium mit Premium-Funktionen"
      };

      setIsGenerating(false);
      setGeneratedVision(mockVision);
      
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

  const getStepNumber = () => {
    switch (currentStep) {
      case 'welcome': return -1;
      case 'basicInfo': return 0;
      case 'vision': return 1;
      default: return 2;
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50/90 via-white/90 to-emerald-50/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="fixed inset-0" onClick={handleClose} />
        
        <div className="relative w-full max-w-4xl">
          <AnimatePresence mode="wait">
            {currentStep === 'welcome' && (
              <FormStep
                title="Willkommen im Idea Hub"
                subtitle="Ihre Einsichten sind wertvoll. Nehmen Sie sich einen Moment Zeit, um Ihre Vision mit uns zu teilen, und wir helfen Ihnen, sie zum Leben zu erwecken."
              >
                <ProgressSteps currentStep={getStepNumber()} />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentStep('basicInfo')}
                  className="btn-primary"
                >
                  <span className="flex items-center">
                    Lassen Sie uns beginnen
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </FormStep>
            )}

            {currentStep === 'basicInfo' && (
              <FormStep>
                <ProgressSteps currentStep={getStepNumber()} />
                <BasicInfoForm
                  formData={formData}
                  updateField={updateField}
                  errors={errors}
                  customerOptions={customerOptions}
                  typeOptions={typeOptions}
                />
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
              </FormStep>
            )}

            {currentStep === 'vision' && !generatedVision && (
              <FormStep>
                <ProgressSteps currentStep={getStepNumber()} />
                <VisionQuestion
                  question={visionQuestions[currentVisionQuestion]}
                  currentAnswer={visionData[visionQuestions[currentVisionQuestion].id]}
                  onAnswer={handleVisionQuestionAnswer}
                  currentQuestion={currentVisionQuestion}
                  totalQuestions={visionQuestions.length}
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
                    <span>
                      {currentVisionQuestion === visionQuestions.length - 1 ? 'Abschließen' : 'Weiter'}
                    </span>
                  </button>
                </div>
              </FormStep>
            )}

            {generatedVision && (
              <VisionResult vision={generatedVision} onClose={onClose} />
            )}
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
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      <AnimatePresence>
        {showExitPrompt && (
          <ExitConfirmation
            onClose={() => setShowExitPrompt(false)}
            onConfirm={onClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}