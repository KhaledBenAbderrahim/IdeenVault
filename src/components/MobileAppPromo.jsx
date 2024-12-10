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
        
        {/* Animated Mesh Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50 T150,50"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              fill="none"
              animate={{
                d: [
                  "M0,50 Q25,30 50,50 T100,50 T150,50",
                  "M0,50 Q25,70 50,50 T100,50 T150,50",
                  "M0,50 Q25,30 50,50 T100,50 T150,50"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30 backdrop-blur-xl shadow-lg">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
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
                    Ideenspeicher
                    <motion.span 
                      className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      Mobile App
                    </motion.span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 leading-relaxed max-w-xl backdrop-blur-sm bg-black/10 p-6 rounded-2xl border border-white/5 shadow-xl"
                >
                  Entdecken Sie eine neue Dimension der Ideenfindung. 
                  Mit Ideenspeicher haben Sie die Kraft der Innovation 
                  immer in Ihrer Tasche.
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  {[
                    {
                      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                      text: "Intuitive mobile Benutzeroberfläche"
                    },
                    {
                      icon: "M13 10V3L4 14h7v7l9-11h-7z",
                      text: "Schnelle Ideenerfassung unterwegs"
                    },
                    {
                      icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                      text: "Echtzeit-Benachrichtigungen"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
                      className="flex items-center space-x-4 backdrop-blur-sm bg-emerald-400/5 p-4 rounded-2xl border border-emerald-400/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <p className="text-gray-200">{feature.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* iPhone Display Section */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative h-full flex items-center justify-center">
                {/* Animated Background Elements */}
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
                  className="absolute w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 rounded-full blur-3xl opacity-30"
                  style={{
                    filter: 'blur(60px)'
                  }}
                />

                {/* iPhone Container with Fancy Effects */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    {/* Glass Effect Container */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-emerald-300/30 to-emerald-500/30 rounded-[3rem] blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
                    
                    <div className="relative backdrop-blur-xl bg-black/10 rounded-[3rem] p-8 border border-white/20 shadow-2xl">
                      {/* iPhone Image with Floating Animation */}
                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [-1, 1, -1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative z-20"
                      >
                        <motion.img
                          src="https://raw.githubusercontent.com/KhaledBenAbderrahim/CSRD/main/images/iPhone%2016%20Pro.png"
                          alt="IdeenVault Mobile App"
                          className="w-[300px] h-auto relative z-20 drop-shadow-2xl"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))'
                          }}
                        />
                      </motion.div>

                      {/* Decorative Glow Effects */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-[3rem] z-10 opacity-60" />
                      <motion.div
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -inset-4 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 rounded-[4rem] blur-xl z-0"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}