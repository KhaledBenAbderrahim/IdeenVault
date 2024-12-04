import React from 'react';
import { motion } from 'framer-motion';
import appScreenshot1 from '../assets/app-screenshot-1.png';

export default function MobileAppPromo() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black hidden lg:block">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={appScreenshot1}
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-emerald-900/30" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:col-start-1"
            >
              <div className="space-y-12">
                {/* Headline */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">
                      Neu verfügbar
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 text-6xl font-bold tracking-tight text-white sm:text-7xl"
                  >
                    IdeenVault
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                      Mobile App
                    </span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 leading-relaxed max-w-xl"
                >
                  Entdecken Sie eine neue Dimension der Ideenfindung. 
                  Mit IdeenVault haben Sie die Kraft der Innovation 
                  immer in Ihrer Tasche.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#download"
                    className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-400/20"
                  >
                    Jetzt starten →
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#learn-more"
                    className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium text-emerald-400 ring-1 ring-emerald-400/20 hover:ring-emerald-400/40 transition-all"
                  >
                    Mehr erfahren
                  </motion.a>
                </motion.div>

                {/* Platform Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 border-t border-gray-800"
                >
                  <p className="text-sm text-gray-400 mb-4">Verfügbar für</p>
                  <div className="flex flex-wrap gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span className="text-gray-400">iOS</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.61 15.15c-.46 0-.83-.37-.83-.83s.37-.83.83-.83.83.37.83.83-.37.83-.83.83m-9.22 0c-.46 0-.83-.37-.83-.83s.37-.83.83-.83.84.37.84.83-.37.83-.84.83m9.42-9.50l1.37-2.37c.07-.13.01-.29-.12-.35-.13-.07-.29-.01-.35.12l-1.38 2.39c-1.06-.47-2.25-.74-3.53-.74-1.28 0-2.46.27-3.53.74L7.89 3.05c-.07-.13-.23-.19-.35-.12-.13.07-.19.23-.12.35l1.37 2.37c-2.31 1.25-3.85 3.40-3.85 5.89h15.92c0-2.49-1.54-4.64-3.85-5.89M5.95 9.57c-.26 0-.47-.21-.47-.47s.21-.47.47-.47.47.21.47.47-.21.47-.47.47m12.10 0c-.26 0-.47-.21-.47-.47s.21-.47.47-.47.47.21.47.47-.21.47-.47.47M4.66 19.07c0 .75.61 1.36 1.36 1.36h1.31l.01 2.12c0 .75.61 1.36 1.36 1.36.75 0 1.36-.61 1.36-1.36v-2.12h2.89v2.12c0 .75.61 1.36 1.36 1.36.75 0 1.36-.61 1.36-1.36v-2.12h1.31c.75 0 1.36-.61 1.36-1.36V9.14H4.66v9.93z" />
                      </svg>
                      <span className="text-gray-400">Android</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative h-full">
                {/* Animated circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}