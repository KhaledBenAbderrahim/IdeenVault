import React from 'react';

export default function FilterSelect({ label, value, onChange, options, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-500">{label}</label>
      {placeholder ? (
        <input
          type="text"
          className="block w-full pl-4 pr-10 py-3 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <select
          className="block w-full pl-4 pr-10 py-3 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}