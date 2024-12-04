import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
        Alles was Sie für Ihre
        <motion.span 
          className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 mt-1"
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
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 px-4 sm:px-0">
        Entdecken Sie die Werkzeuge, die Ihre Kreativität auf die nächste Stufe heben.
      </p>
    </motion.div>
  );
}