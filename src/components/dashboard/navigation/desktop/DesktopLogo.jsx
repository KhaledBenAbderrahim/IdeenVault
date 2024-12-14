import React from 'react';
import { Link } from 'react-router-dom';

export default function DesktopLogo() {
  return (
    <Link 
      to="/" 
      className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
    >
      Ideenspeicher
    </Link>
  );
}