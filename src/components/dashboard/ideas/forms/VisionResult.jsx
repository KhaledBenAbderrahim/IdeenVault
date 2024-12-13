import React from 'react';
import { motion } from 'framer-motion';

export default function VisionResult({ vision, onClose }) {
  const sections = [
    { title: 'Vision', content: vision.vision },
    { title: 'Alleinstellungsmerkmal (USP)', content: vision.usp },
    { title: 'Adressierte Probleme', content: vision.problemsAddressed },
    { title: 'Hauptfunktionen', content: vision.keyFeatures },
    { title: 'Zielgruppe', content: vision.targetAudience },
    { title: 'Technische Anforderungen', content: vision.technicalRequirements },
    { title: 'Geschäftsmodell', content: vision.businessModel }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-white flex items-center space-x-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Generierte Produktvision</span>
            </h3>
          </div>
        </div>
        
        <div className="p-8 space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2 group-hover:text-emerald-600 transition-colors">
                <span>{section.title}</span>
                <div className="h-px flex-grow bg-gradient-to-r from-emerald-200 to-transparent ml-2"></div>
              </h4>
              <p className="text-gray-700 whitespace-pre-wrap bg-white/50 p-4 rounded-xl border border-emerald-50">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="px-8 py-6 bg-gradient-to-b from-white to-emerald-50 border-t border-emerald-100">
          <div className="flex justify-between items-center">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-emerald-600 font-medium flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Ihre Idee wurde erfolgreich gespeichert
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/20 flex items-center space-x-2"
            >
              <span>Schließen</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}