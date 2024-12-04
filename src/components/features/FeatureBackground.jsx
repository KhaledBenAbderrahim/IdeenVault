import React from 'react';

export default function FeatureBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white pointer-events-none" />
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f0fdf4"/>
        </svg>
      </div>
    </div>
  );
}