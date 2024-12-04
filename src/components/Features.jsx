import React from 'react';
import FeatureBackground from './features/FeatureBackground';
import FeatureHeader from './features/FeatureHeader';
import FeatureGrid from './features/FeatureGrid';

export default function Features() {
  return (
    <div id="features" className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <FeatureBackground />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeatureHeader />
        <FeatureGrid />
      </div>
    </div>
  );
}