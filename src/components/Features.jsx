import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'KI-gestützte Organisation',
    description: 'Unsere intelligente KI sortiert und kategorisiert Ihre Ideen automatisch, damit Sie sich auf das Wesentliche konzentrieren können.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    category: 'Automatisierung'
  },
  {
    title: 'Echtzeit-Zusammenarbeit',
    description: 'Arbeiten Sie nahtlos mit Ihrem Team zusammen. Teilen und entwickeln Sie Ideen in Echtzeit, egal wo Sie sich befinden.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    category: 'Zusammenarbeit'
  },
  {
    title: 'Sichere Verschlüsselung',
    description: 'Ihre Ideen sind wertvoll. Unsere End-zu-End-Verschlüsselung sorgt dafür, dass sie sicher und geschützt bleiben.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    category: 'Sicherheit'
  },
  {
    title: 'Smart Tagging',
    description: 'Organisieren Sie Ihre Ideen mit intelligenten Tags. Unsere KI schlägt passende Tags vor und macht die Suche zum Kinderspiel.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    category: 'Organisation'
  },
  {
    title: 'Versionskontrolle',
    description: 'Behalten Sie den Überblick über die Entwicklung Ihrer Ideen. Verfolgen Sie Änderungen und greifen Sie jederzeit auf frühere Versionen zu.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    category: 'Verwaltung'
  },
  {
    title: 'Mobile Integration',
    description: 'Ihre Ideen sind immer dabei. Greifen Sie von jedem Gerät aus auf Ihre Notizen zu und erfassen Sie Inspirationen unterwegs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    category: 'Mobilität'
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="features" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f0fdf4"/>
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Alles was Sie für Ihre
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Ideenverwaltung brauchen
            </motion.span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Entdecken Sie die Werkzeuge, die Ihre Kreativität auf die nächste Stufe heben.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 group-hover:bg-emerald-600 transition-colors duration-300">
                      <motion.div 
                        className="h-6 w-6 text-white"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    <span className="ml-4 text-sm font-medium text-emerald-600">{feature.category}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}