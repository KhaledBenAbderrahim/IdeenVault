import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

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
      highlighted: false,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
      highlighted: true,
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
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
      highlighted: false,
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-4 py-1"
          >
            <SparklesIcon className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600">Flexible Preisgestaltung</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
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
            Skalierbare Lösungen für Teams jeder Größe
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4 mb-16"
        >
          <div className="relative inline-flex p-1 bg-emerald-50 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                !isAnnual 
                  ? 'text-white bg-emerald-500 shadow-md' 
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isAnnual 
                  ? 'text-white bg-emerald-500 shadow-md' 
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Jährlich
            </button>
          </div>
          <AnimatePresence>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full"
              >
                <span className="text-sm font-medium">20% Rabatt</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(plan.name)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl scale-105 z-10'
                  : hoveredPlan === plan.name
                  ? 'bg-white text-gray-900 shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-lg'
              }`}
            >
              {/* Plan Icon */}
              <div className={`w-12 h-12 rounded-lg mb-8 flex items-center justify-center ${
                plan.highlighted ? 'bg-white/20' : 'bg-emerald-50'
              }`}>
                <svg 
                  className={`w-6 h-6 ${plan.highlighted ? 'text-white' : 'text-emerald-500'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={plan.icon} />
                </svg>
              </div>

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? 'text-emerald-100' : 'text-gray-500'}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-bold">€{plan.price}</span>
                <span className={`ml-2 ${plan.highlighted ? 'text-emerald-100' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 ${
                      plan.highlighted ? 'text-white' : 'text-emerald-500'
                    }`} />
                    <span className={plan.highlighted ? 'text-emerald-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}