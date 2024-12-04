import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function DateFilter({ value, onChange }) {
  return (
    <div className="relative">
      <ClockIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      <select
        className="block w-full pl-12 pr-4 py-3 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg leading-5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors appearance-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">Alle Zeiträume</option>
        <option value="today">Heute</option>
        <option value="week">Letzte Woche</option>
        <option value="month">Letzter Monat</option>
      </select>
    </div>
  );
}