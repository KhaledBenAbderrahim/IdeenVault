import React from 'react';
import { motion } from 'framer-motion';
import QRCodeOverlay from './QRCodeOverlay';
import BackgroundElements from './hero/BackgroundElements';
import HeroButtons from './hero/HeroButtons';
import DecorativeWave from './hero/DecorativeWave';

export default function Hero() {
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div id="hero" className="relative min-h-[100svh] bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <BackgroundElements />

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28 flex min-h-[100svh] items-center">
        <motion.div 
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="w-full text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Ideen
            </motion.span>
            <span className="text-gray-900">Vault</span>
          </motion.h1>

          <motion.p 
            className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Verwandle deine Gedanken in digitale Schätze. 
            Entdecke eine neue Art, Ideen zu sammeln, zu organisieren und zum Leben zu erwecken.
          </motion.p>

          <HeroButtons />
        </motion.div>
      </div>

      <QRCodeOverlay />
      <DecorativeWave />
    </div>
  );
}