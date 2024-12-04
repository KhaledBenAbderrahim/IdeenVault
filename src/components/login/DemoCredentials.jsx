import React from 'react';

export default function DemoCredentials() {
  return (
    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-emerald-50 rounded-lg">
      <h3 className="text-xs sm:text-sm font-medium text-emerald-800 mb-2">Demo Zugangsdaten:</h3>
      <div className="space-y-1 text-xs sm:text-sm">
        <p className="text-emerald-700 font-mono">
          <span className="font-semibold">* user * : </span> neo.anderson@matrix.com / matrix123
        </p>
        <p className="text-emerald-600 font-mono">
          <span className="font-semibold">HR:</span> hr@example.com / hr123
        </p>
        <p className="text-emerald-600 font-mono">
          <span className="font-semibold">Admin</span> user@example.com / user123
        </p>
      </div>
    </div>
  );
}