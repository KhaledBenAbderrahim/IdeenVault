import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleBottomCenterTextIcon as QuoteIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Schmidt',
      role: 'Produktmanagerin bei TechStart GmbH',
      image: '/images/testimonials/avatar1.jpg',
      content: 'IdeenSpeicher hat die Art und Weise, wie wir Innovationen in unserem Team verwalten, komplett revolutioniert. Die Plattform ist intuitiv und die Zusammenarbeit war noch nie so einfach.',
      rating: 5,
      company: 'TechStart GmbH'
    },
    {
      name: 'Thomas Weber',
      role: 'Innovationsleiter',
      image: '/images/testimonials/avatar2.jpg',
      content: 'Seit wir IdeenSpeicher nutzen, haben wir unsere Innovationsrate um 60% gesteigert. Die Analytics-Funktionen sind besonders wertvoll für unsere strategische Planung.',
      rating: 5,
      company: 'InnovateCorp AG'
    },
    {
      name: 'Laura Meyer',
      role: 'Startup-Gründerin',
      image: '/images/testimonials/avatar3.jpg',
      content: 'Als Startup-Gründerin war ich auf der Suche nach einem Tool, das mit uns wächst. IdeenSpeicher bietet genau die richtige Balance aus Funktionalität und Benutzerfreundlichkeit.',
      rating: 5,
      company: 'FutureMinds Startup'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Was unsere Nutzer sagen
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Entdecken Sie, wie IdeenSpeicher Teams dabei hilft, ihre Innovationen erfolgreich umzusetzen
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gray-800 rounded-2xl p-8 shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <QuoteIcon className="h-4 w-4 text-white" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-xl font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-emerald-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bereit, Ihre Innovationen zu revolutionieren?
          </h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit IdeenSpeicher und verwandeln Sie Ihre Ideen in erfolgreiche Innovationen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Demo anfordern
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Mehr erfahren
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '500+', label: 'Aktive Nutzer' },
            { number: '10k+', label: 'Gespeicherte Ideen' },
            { number: '98%', label: 'Kundenzufriedenheit' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}