import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FooterBackground from './footer/FooterBackground';
import FooterLogo from './footer/FooterLogo';
import FooterLinks from './footer/FooterLinks';
import FooterBottom from './footer/FooterBottom';
import { footerLinks, socialLinks } from '../data/footerData';

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState(null);
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const toggleSection = (category) => {
    setExpandedSection(expandedSection === category ? null : category);
  };

  return (
    <footer className="relative bg-white overflow-hidden">
      <FooterBackground />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <FooterLogo />

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <FooterLinks
              key={category}
              category={category}
              links={links}
              expandedSection={expandedSection}
              toggleSection={toggleSection}
            />
          ))}
        </div>

        {/* Footer Bottom */}
        <FooterBottom currentYear={currentYear} socialLinks={socialLinks} />
      </motion.div>
    </footer>
  );
}