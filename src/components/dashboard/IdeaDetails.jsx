import React from 'react';
import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { IdeaPDF } from './IdeaPDF';

export default function IdeaDetails({ idea, onClose }) {
  const groups = [
    {
      title: "Grundinformationen",
      fields: [
        { label: "Serviceidee", value: idea.title },
        { label: "Kürzel", value: idea.shortTitle },
        { label: "Erläuterung", value: idea.description },
        { label: "Typ", value: idea.type || 'Nicht spezifiziert' },
        { label: "Kunde", value: idea.customer || 'Nicht spezifiziert' },
        { label: "Schlagworte", value: idea.keywords?.join(", ") || 'Keine' },
      ]
    },
    {
      title: "Status & Phase",
      fields: [
        { label: "Status", value: idea.status },
        { label: "Erläuterung Status", value: idea.statusDescription || 'Keine Erläuterung' },
        { label: "Aktuelle Phase", value: idea.phase },
        { label: "Angestrebtes Tor", value: idea.targetGate || 'Nicht definiert' },
        { label: "Empfehlung Tor-durchlass", value: idea.gateRecommendation || 'Ausstehend' },
      ]
    },
    {
      title: "Priorisierung",
      fields: [
        { label: "Rang", value: idea.rank || 'Nicht bewertet' },
        { label: "Prio", value: idea.priority },
        { label: "KO-Filter", value: idea.koFilter || 'Nicht bewertet' },
        { label: "KI-Prägung", value: idea.aiInfluence ? "Ja" : "Nein" },
      ]
    },
    {
      title: "Marktpotenzial",
      fields: [
        { label: "Originalität der Idee", value: idea.originality || 'Nicht bewertet' },
        { label: "Größe der Zielgruppe", value: idea.targetGroupSize || 'Nicht definiert' },
        { label: "Relevanz des Kundenproblems", value: idea.problemRelevance || 'Nicht bewertet' },
        { label: "Attraktivität", value: idea.attractiveness || 'Nicht bewertet' },
      ]
    },
    {
      title: "Umsetzbarkeit",
      fields: [
        { label: "Erreichbarkeit der Zielgruppe", value: idea.targetGroupAccessibility || 'Nicht bewertet' },
        { label: "Nähe zu bestehenden technischen Fähigkeiten", value: idea.technicalProximity || 'Nicht bewertet' },
        { label: "Zeithorizont", value: idea.timeHorizon || 'Nicht definiert' },
        { label: "MVP Reifegrad", value: idea.mvpMaturity || '0%' },
      ]
    },
    {
      title: "Risiko & Bewertung",
      fields: [
        { label: "Risiko", value: idea.risk || 'Nicht bewertet' },
        { label: "Empfehlung Tor-durchlass", value: idea.gateRecommendation || 'Ausstehend' },
      ]
    }
  ];

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
        className="relative top-20 mx-auto p-8 border w-full max-w-4xl shadow-lg rounded-lg bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{idea.title}</h2>
            <p className="text-sm text-gray-500">{idea.shortTitle}</p>
          </div>
          <div className="flex items-center space-x-4">
            <PDFDownloadLink
              document={<IdeaPDF idea={idea} />}
              fileName={`${idea.shortTitle}-details.pdf`}
              className="btn-secondary"
            >
              {({ loading }) => (
                <span className="flex items-center">
                  {loading ? 'Wird geladen...' : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF Export
                    </>
                  )}
                </span>
              )}
            </PDFDownloadLink>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {groups.map((group, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="space-y-1">
                    <dt className="text-sm font-medium text-gray-500">
                      {field.label}
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="btn-primary"
          >
            <span>Schließen</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}