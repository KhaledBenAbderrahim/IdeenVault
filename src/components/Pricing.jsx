import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '0' : '0',
      period: isAnnual ? '/Jahr' : '/Monat',
      description: 'Perfekt für Einzelpersonen und kleine Teams',
      features: [
        'Bis zu 5 Ideen pro Monat',
        'Grundlegende Analysefunktionen',
        'Community-Support',
        'Mobile App Zugang',
        'Persönliches Dashboard'
      ],
      buttonText: 'Kostenlos starten',
      highlighted: false
    },
    {
      name: 'Professional',
      price: isAnnual ? '89' : '9',
      period: isAnnual ? '/Jahr' : '/Monat',
      description: 'Ideal für wachsende Unternehmen',
      features: [
        'Unbegrenzte Ideen',
        'Erweiterte Analysen',
        'Prioritäts-Support',
        'Team-Kollaboration',
        'Anpassbare Workflows',
        'API-Zugang'
      ],
      buttonText: 'Jetzt upgraden',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: isAnnual ? '199' : '19',
      period: isAnnual ? '/Jahr' : '/Monat',
      description: 'Maßgeschneidert für große Organisationen',
      features: [
        'Alles aus Professional',
        'Dedizierter Account Manager',
        'Individuelle Schulungen',
        'SSO-Integration',
        'Erweiterte Sicherheit',
        'Anpassbare Berichte',
        'SLA-Garantie'
      ],
      buttonText: 'Kontaktiere uns',
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Wählen Sie den passenden Plan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Flexible Preisgestaltung für Teams jeder Größe
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                !isAnnual ? 'text-white' : 'text-gray-500'
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                isAnnual ? 'text-white' : 'text-gray-500'
              }`}
            >
              Jährlich
            </button>
            <div
              className={`absolute top-1 transition-all duration-300 h-8 bg-emerald-500 rounded-full ${
                isAnnual ? 'left-[50%] w-[calc(50%-8px)]' : 'left-1 w-[calc(50%-8px)]'
              }`}
            />
          </div>
          {isAnnual && (
            <span className="ml-4 text-sm text-emerald-600 font-medium">
              20% Rabatt
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl scale-105 z-10'
                  : 'bg-white text-gray-900 shadow-lg'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.highlighted ? 'text-emerald-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">€{plan.price}</span>
                <span className={`${plan.highlighted ? 'text-emerald-100' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className={`h-6 w-6 flex-shrink-0 ${
                      plan.highlighted ? 'text-white' : 'text-emerald-500'
                    }`} />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-gray-50'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Alle Pläne beinhalten 14 Tage kostenlose Testversion.{' '}
            <a href="#" className="text-emerald-500 font-medium hover:text-emerald-600">
              Mehr erfahren
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}