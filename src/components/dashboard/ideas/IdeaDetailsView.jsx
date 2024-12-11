import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IdeaDetailsView({ idea }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const groups = [
    {
      id: 'basic',
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
      id: 'status',
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
      id: 'priority',
      title: "Priorisierung",
      fields: [
        { label: "Rang", value: idea.rank || 'Nicht bewertet' },
        { label: "Prio", value: idea.priority },
        { label: "KO-Filter", value: idea.koFilter || 'Nicht bewertet' },
        { label: "KI-Prägung", value: idea.aiInfluence ? "Ja" : "Nein" },
      ]
    },
    {
      id: 'market',
      title: "Marktpotenzial",
      fields: [
        { label: "Originalität der Idee", value: idea.originality || 'Nicht bewertet' },
        { label: "Größe der Zielgruppe", value: idea.targetGroupSize || 'Nicht definiert' },
        { label: "Relevanz des Kundenproblems", value: idea.problemRelevance || 'Nicht bewertet' },
        { label: "Attraktivität", value: idea.attractiveness || 'Nicht bewertet' },
      ]
    },
    {
      id: 'feasibility',
      title: "Umsetzbarkeit",
      fields: [
        { label: "Erreichbarkeit der Zielgruppe", value: idea.targetGroupAccessibility || 'Nicht bewertet' },
        { label: "Nähe zu bestehenden technischen Fähigkeiten", value: idea.technicalProximity || 'Nicht bewertet' },
        { label: "Zeithorizont", value: idea.timeHorizon || 'Nicht definiert' },
        { label: "MVP Reifegrad", value: idea.mvpMaturity || '0%' },
      ]
    },
    {
      id: 'risk',
      title: "Risiko & Bewertung",
      fields: [
        { label: "Risiko", value: idea.risk || 'Nicht bewertet' },
        { label: "Empfehlung Tor-durchlass", value: idea.gateRecommendation || 'Ausstehend' },
      ]
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="space-y-2.5 sm:space-y-4 px-2.5 sm:px-6 max-w-4xl mx-auto">
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
                <div className="px-2.5 pb-2.5 sm:px-4 sm:pb-4 pt-0 grid gap-2.5 sm:gap-4 border-t border-gray-100">
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
                      <dd className="text-[13px] sm:text-sm lg:text-base text-gray-900 break-words leading-relaxed bg-white rounded p-2 sm:p-3 shadow-sm">
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
  );
}