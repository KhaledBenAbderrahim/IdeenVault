import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchInput({ value, onChange }) {
  return (
    <div className="relative flex-1">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-3 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        placeholder="Nach Ideen suchen..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}