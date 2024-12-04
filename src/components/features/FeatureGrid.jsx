import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { features } from '../../data/featuresData';

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

export default function FeatureGrid() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto mt-12 sm:mt-16 lg:mt-20"
    >
      <dl className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
        {features.map((feature) => (
          <motion.div key={feature.title} variants={itemVariants}>
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </dl>
    </motion.div>
  );
}