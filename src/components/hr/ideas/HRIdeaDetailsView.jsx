import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HRIdeaDetailsView({ idea, onFieldChange }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleChange = (field, value) => {
    if (field === 'risk' || field === 'attractiveness') {
      value = parseFloat(value);
    } else if (field === 'aiInfluence') {
      value = value === 'Ja';
    }
    onFieldChange(field, value);
  };

  const renderField = (field) => {
    if (field.readOnly) {
      return (
        <div className="p-2 rounded">
          {field.value}
        </div>
      );
    }

    if (field.type === 'select') {
      return (
        <select
          value={field.value}
          onChange={(e) => handleChange(field.label, e.target.value)}
          className="w-full p-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          {field.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }

    if (field.type === 'number') {
      return (
        <input
          type="number"
          value={field.value}
          onChange={(e) => handleChange(field.label, e.target.value)}
          min={field.min}
          max={field.max}
          step={field.step}
          className="w-full p-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      );
    }

    return (
      <input
        type="text"
        value={field.value}
        onChange={(e) => handleChange(field.label, e.target.value)}
        className="w-full p-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        placeholder="Klicken zum Bearbeiten..."
      />
    );
  };

  const groups = [
    {
      id: 'basic',
      title: "Grundinformationen",
      readOnly: true,
      fields: [
        { label: "Serviceidee", value: idea.title, readOnly: true },
        { label: "Kürzel", value: idea.shortTitle, readOnly: true },
        { label: "Erläuterung", value: idea.description, readOnly: true },
        { label: "Typ", value: idea.type || 'Nicht spezifiziert', readOnly: true },
        { label: "Kunde", value: idea.customer || 'Nicht spezifiziert', readOnly: true },
        { label: "Schlagworte", value: idea.keywords?.join(", ") || 'Keine', readOnly: true },
      ]
    },
    {
      id: 'status',
      title: "Status & Phase",
      fields: [
        { 
          label: "Status", 
          value: idea.status,
          type: 'select',
          options: ['Aktiv', 'In Entwicklung', 'Offen']
        },
        { 
          label: "Erläuterung Status", 
          value: idea.statusDescription || '',
          type: 'text'
        },
        { 
          label: "Aktuelle Phase", 
          value: idea.phase,
          type: 'select',
          options: ['Konzept', 'Entwicklung', 'Test', 'Produktion']
        },
        { 
          label: "Angestrebtes Tor", 
          value: idea.targetGate || '',
          type: 'text'
        },
        { 
          label: "Empfehlung", 
          value: idea.gateRecommendation || '',
          type: 'text'
        },
      ]
    },
    {
      id: 'priority',
      title: "Priorisierung",
      fields: [
        { 
          label: "Priorität", 
          value: idea.priority,
          type: 'select',
          options: ['Hoch', 'Mittel', 'Niedrig']
        },
        { 
          label: "KI-Prägung", 
          value: idea.aiInfluence ? "Ja" : "Nein",
          type: 'select',
          options: ['Ja', 'Nein']
        },
      ]
    },
    {
      id: 'feasibility',
      title: "Umsetzbarkeit",
      fields: [
        { 
          label: "Erreichbarkeit der Zielgruppe", 
          value: idea.targetGroupAccessibility || '',
          type: 'text'
        },
        { 
          label: "Nähe zu bestehenden Fähigkeiten", 
          value: idea.technicalProximity || '',
          type: 'text'
        },
        { 
          label: "Zeithorizont", 
          value: idea.timeHorizon || '',
          type: 'text'
        },
        { 
          label: "MVP Reifegrad", 
          value: idea.mvpMaturity || '0%',
          type: 'text'
        },
      ]
    },
    {
      id: 'evaluation',
      title: "Bewertung",
      fields: [
        { 
          label: "Risiko", 
          value: idea.risk || 0,
          type: 'number',
          min: 0,
          max: 5,
          step: 0.1
        },
        { 
          label: "Attraktivität", 
          value: idea.attractiveness || 0,
          type: 'number',
          min: 0,
          max: 5,
          step: 0.1
        },
      ]
    },
    {
      id: 'market',
      title: "Marktpotenzial",
      fields: [
        { 
          label: "Originalität", 
          value: idea.originality || '',
          type: 'text'
        },
        { 
          label: "Zielgruppe", 
          value: idea.targetGroupSize || '',
          type: 'text'
        },
        { 
          label: "Problem Relevanz", 
          value: idea.problemRelevance || '',
          type: 'text'
        }
      ]
    }
  ];

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
            onClick={() => setExpandedSection(expandedSection === group.id ? null : group.id)}
            className="w-full min-h-[2.75rem] sm:min-h-[3.25rem] p-2 sm:p-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200 active:bg-gray-100"
          >
            <div className="flex-1 pr-2">
              <h3 className="text-[13px] sm:text-base font-semibold text-emerald-800 leading-snug">
                {group.title}
              </h3>
              {expandedSection !== group.id && (
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
                      <dd className="text-[13px] sm:text-sm lg:text-base text-gray-900 break-words bg-white rounded p-2 sm:p-3 shadow-sm">
                        {renderField(field)}
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