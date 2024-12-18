import React from 'react';
import { motion } from 'framer-motion';

export default function MobileAppPromo() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black hidden lg:block">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950 to-black opacity-90" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col justify-center">
        <div className="max-w-[90%] mx-auto w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-5 z-10"
            >
              <div className="space-y-8">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30 backdrop-blur-xl shadow-lg">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    Jetzt Verfügbar
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h1 className="text-7xl font-bold tracking-tight text-white leading-tight">
                    Ideen
                    <motion.span 
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      Speicher
                    </motion.span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl text-gray-300 leading-relaxed backdrop-blur-sm bg-black/10 p-6 rounded-2xl border border-white/5 shadow-xl"
                >
                  Revolutioniere deine Ideenfindung.
                  <span className="block mt-2 text-emerald-400">Immer und überall dabei.</span>
                </motion.p>

                {/* Mobile Advantages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-emerald-300">Mobil. Flexibel. Grenzenlos.</h3>
                  
                  {/* Mobile Advantage Cards */}
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                        title: "Von Überall Zugreifen",
                        desc: "Im Büro, zu Hause oder unterwegs - deine Ideen sind immer dabei"
                      },
                      {
                        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "24/7 Verfügbar",
                        desc: "Erfasse Ideen genau dann, wenn sie entstehen"
                      },
                      {
                        icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                        title: "Nahtlose Synchronisation",
                        desc: "Automatischer Abgleich zwischen allen deinen Geräten"
                      }
                    ].map((advantage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start space-x-4 p-4 backdrop-blur-sm bg-emerald-400/5 rounded-xl border border-emerald-400/10"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={advantage.icon} />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-emerald-300">{advantage.title}</h4>
                          <p className="mt-1 text-gray-300">{advantage.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    "Sofort Ideen festhalten",
                    "KI-gestützte Verbesserungen",
                    "Nahtlose Team-Zusammenarbeit"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-3 text-lg text-emerald-300"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image Section - Taking up more space */}
            <motion.div 
              className="col-span-7 relative h-[800px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-full h-full bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 rounded-full blur-3xl opacity-30"
              />

              {/* Phone Image Container */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img
                  src="https://raw.githubusercontent.com/KhaledBenAbderrahim/CSRD/main/images/iPhone%2013%20Pro%20-%20Mockup.png"
                  alt="IdeenVault Mobile App"
                  className="w-auto h-[90%] object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))'
                  }}
                />
              </motion.div>

              {/* Additional Decorative Elements */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 rounded-3xl blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}