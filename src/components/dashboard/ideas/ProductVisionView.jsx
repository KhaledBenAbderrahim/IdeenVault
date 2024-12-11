import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ProductVisionPDF } from './ProductVisionPDF';
import { mockVisions } from '../../../data/mockVisions';

export default function ProductVisionView({ idea }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const vision = mockVisions[idea.id];

  if (!vision) {
    return (
      <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg text-center shadow-sm">
        <p className="text-gray-600">Keine Produktvision verfügbar für diese Idee.</p>
      </div>
    );
  }

  const groups = [
    {
      id: 'vision',
      title: "Vision & Alleinstellung",
      fields: [
        { label: "Produktvision", value: vision.vision },
        { label: "USP (Alleinstellungsmerkmale)", value: vision.usp },
      ]
    },
    {
      id: 'problems',
      title: "Probleme & Lösungen",
      fields: [
        { label: "Adressierte Probleme", value: vision.problemsAddressed },
        { label: "Kernfunktionen", value: vision.keyFeatures },
      ]
    },
    {
      id: 'market',
      title: "Markt & Zielgruppe",
      fields: [
        { label: "Zielgruppe", value: vision.targetAudience },
        { label: "Geschäftsmodell", value: vision.businessModel },
      ]
    },
    {
      id: 'technical',
      title: "Technische Aspekte",
      fields: [
        { label: "Technische Anforderungen", value: vision.technicalRequirements },
      ]
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="space-y-2.5 sm:space-y-4 px-2.5 sm:px-6 max-w-4xl mx-auto">
      <div className="sticky top-0 z-10 bg-white bg-opacity-95 backdrop-blur-sm p-2.5 sm:p-4 -mx-2.5 sm:-mx-6 mb-2.5 sm:mb-4 border-b">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2.5 sm:space-y-0">
          <div className="flex-1">
            <h2 className="text-[15px] sm:text-lg font-semibold text-emerald-800 leading-snug">
              KI-generierte Produktvision
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
              Tippen Sie auf die Abschnitte, um Details anzuzeigen
            </p>
          </div>
          <PDFDownloadLink
            document={<ProductVisionPDF vision={vision} idea={idea} />}
            fileName={`${idea.shortTitle}-vision.pdf`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-2.5 sm:px-4 py-2 sm:py-2.5 border border-transparent text-[11px] sm:text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200 touch-manipulation min-h-[2.25rem] sm:min-h-[2.5rem] active:bg-emerald-800"
          >
            {({ loading }) => (
              <>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {loading ? 'Lädt...' : 'Als PDF herunterladen'}
              </>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      <div className="space-y-2.5 sm:space-y-4">
        {groups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => toggleSection(group.id)}
              className="w-full min-h-[2.75rem] sm:min-h-[3.25rem] p-2 sm:p-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200 active:bg-gray-100"
            >
              <div className="flex-1 pr-2">
                <h3 className="text-[13px] sm:text-base font-semibold text-emerald-800 leading-snug">
                  {group.title}
                </h3>
                {!expandedSection && (
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                    Tippen zum Öffnen
                  </p>
                )}
              </div>
              <motion.svg
                animate={{ rotate: expandedSection === group.id ? 180 : 0 }}
                className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {expandedSection === group.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-2.5 pb-2.5 sm:px-4 sm:pb-4 pt-0 space-y-2.5 sm:space-y-4 border-t border-gray-100">
                    {group.fields.map((field, fieldIndex) => (
                      <motion.div
                        key={fieldIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: fieldIndex * 0.05 }}
                        className="space-y-1 sm:space-y-1.5"
                      >
                        <dt className="text-[11px] sm:text-sm font-medium text-gray-500 leading-tight">
                          {field.label}
                        </dt>
                        <dd className="text-[13px] sm:text-sm lg:text-base text-gray-900 whitespace-pre-line bg-white rounded p-2.5 sm:p-3 shadow-sm leading-relaxed">
                          {field.value}
                        </dd>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}