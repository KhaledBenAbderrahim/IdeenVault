import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Khaled',
    role: 'Der Tech-Visionär',
    description: 'Als leidenschaftlicher Entwickler und Innovator bringt Khaled die technische Expertise und Vision in unser Team. Seine Fähigkeit, komplexe Probleme in elegante Lösungen zu verwandeln, macht ihn zu einem wertvollen Wegbereiter für die digitale Transformation.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=khaled&backgroundColor=d1fae5',
    badge: 'Technologie & Innovation',
    skills: ['Fullstack Development', 'Cloud Architecture', 'UI/UX Design'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    )
  },
  {
    name: 'Percy',
    role: 'Der Kreativ-Guru',
    description: 'Percy ist unser Meister der spontanen Ideenfindung. Bekannt dafür, die wildesten Innovationen während der Kaffeepause zu entwickeln. Seine Spezialität: Komplexe Probleme mit einem "Das machen wir einfach so!" zu lösen.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=percy&backgroundColor=b6e3f4',
    badge: 'Kreativität & Innovation',
    skills: ['Ideenfindung', 'Innovation', 'Design Thinking'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    )
  },
  {
    name: 'Marco',
    role: 'Der Struktur-Enthusiast',
    description: 'Marco ist unser "Excel-Flüsterer" und Meister der Organisation. Er verwandelt Percys chaotische Geistesblitze in strukturierte Masterpläne. Seine geheime Superkraft: Kann jedes Meeting mit einem perfekt zeitlich abgestimmten "Aber haben wir dafür ein Budget?" unterbrechen.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marco&backgroundColor=c1f4b6',
    badge: 'Struktur & Organisation',
    skills: ['Projektmanagement', 'Analyse', 'Prozessoptimierung'],
    icon: (
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    )
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/70 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/30 rounded-bl-full transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-100/30 rounded-tr-full transform -translate-x-1/3 translate-y-1/3" />
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-100/20 rounded-full mix-blend-multiply filter blur-xl"
          />
        </motion.div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
                Das Dream-Team
              </span>
              <br />
              <span className="text-gray-900">hinter IdeenVault</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Lernen Sie die kreativen Köpfe kennen, die IdeenVault zu dem machen, was es ist.
              Ein Team, das Innovation, Technologie und Struktur perfekt vereint.
            </motion.p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-50 transform translate-x-4 -translate-y-4 transition-transform group-hover:scale-110" />
                  
                  <div className="relative">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-emerald-400/30 shadow-lg">
                          <motion.img 
                            src={member.avatar}
                            alt={member.name} 
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            {member.icon}
                          </svg>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-lg font-medium text-emerald-600">{member.role}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                        {member.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Quote */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <blockquote className="relative max-w-3xl mx-auto">
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed">
                  "Zusammen vereinen wir die perfekte Mischung aus Vision, Kreativität und Struktur. 
                  Während Khaled die technische Innovation vorantreibt, denkt Percy um sieben Ecken, 
                  und Marco sorgt dafür, dass wir dabei nicht vom Weg abkommen."
                </p>
              </div>
              <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 text-emerald-300 text-6xl opacity-25">
                "
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-6 translate-y-4 text-emerald-300 text-6xl opacity-25">
                "
              </div>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}