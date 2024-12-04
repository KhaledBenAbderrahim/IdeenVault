import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import QRCodeOverlay from './QRCodeOverlay';

export default function Hero() {
  const backgroundVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0"
        >
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 10,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div 
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400"
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
            className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Verwandle deine Gedanken in digitale Schätze. 
            Entdecke eine neue Art, Ideen zu sammeln, zu organisieren und zum Leben zu erwecken.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Link 
                to="/register" 
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-emerald-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-500 transition-all duration-300 group-hover:opacity-90"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-emerald-400 opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative z-20">Jetzt starten</span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Link 
                to="/about" 
                className="group inline-flex items-center justify-center px-8 py-3 font-medium text-emerald-600 bg-emerald-50 rounded-full hover:bg-emerald-100 transform transition-all duration-300"
              >
                <span className="relative z-20">Mehr erfahren</span>
                <motion.svg 
                  className="ml-2 w-5 h-5"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* QR Code Overlay */}
      <QRCodeOverlay />

      {/* Decorative Wave */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f0fdf4"/>
        </svg>
      </motion.div>
    </div>
  );
}