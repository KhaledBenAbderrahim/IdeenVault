import React from 'react';
import { Link } from 'react-router-dom';

export default function HRDesktopLogo() {
  return (
    <Link 
      to="/hr/dashboard" 
      className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
    >
      HR-Portal
    </Link>
  );
}