import React from 'react';
import { motion } from 'framer-motion';

export default function UserTypeSelector({ userType, setUserType }) {
  const types = [
    {
      id: 'user',
      title: 'Mitarbeiter',
      description: 'Ideen einreichen und an Workshops teilnehmen'
    },
    {
      id: 'hr',
      title: 'HR',
      description: 'Workshops organisieren und Ideen verwalten'
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      {types.map(type => (
        <motion.div 
          key={type.id}
          className={`auth-type-selector flex-1 ${
            userType === type.id ? 'auth-type-selector-active' : 'auth-type-selector-inactive'
          }`}
          onClick={() => setUserType(type.id)}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative z-10">
            <div className="flex items-center space-x-2">
              <div className={`w-5 h-5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center ${
                userType === type.id ? 'border-emerald-500' : 'border-gray-300'
              }`}>
                {userType === type.id && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" 
                  />
                )}
              </div>
              <span className={`font-medium text-base sm:text-sm ${
                userType === type.id ? 'text-emerald-700' : 'text-gray-700'
              }`}>
                {type.title}
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-xs text-gray-500">
              {type.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}