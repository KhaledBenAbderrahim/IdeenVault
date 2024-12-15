import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UserTypeSelector from './UserTypeSelector';

// Mock invitation codes - in a real app, these would be stored securely and managed by admins
const VALID_HR_CODES = ['HR2024', 'ADMIN123', 'HRINVITE'];

export default function RegisterForm({ userType, setUserType }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    invitationCode: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formData.email.trim()) newErrors.email = 'E-Mail ist erforderlich';
    if (!formData.email.includes('@')) newErrors.email = 'Ungültige E-Mail-Adresse';
    if (!formData.password) newErrors.password = 'Passwort ist erforderlich';
    if (formData.password.length < 6) newErrors.password = 'Passwort muss mindestens 6 Zeichen lang sein';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwörter stimmen nicht überein';
    }
    
    if (userType === 'hr') {
      if (!formData.department.trim()) {
        newErrors.department = 'Abteilung ist erforderlich';
      }
      if (!formData.invitationCode.trim()) {
        newErrors.invitationCode = 'Einladungscode ist erforderlich';
      } else if (!VALID_HR_CODES.includes(formData.invitationCode)) {
        newErrors.invitationCode = 'Ungültiger Einladungscode';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
      <div className="space-y-4">
        <UserTypeSelector userType={userType} setUserType={setUserType} />

        <div>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
              errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
            }`}
            placeholder="Vollständiger Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
              errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
            }`}
            placeholder="E-Mail-Adresse"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {userType === 'hr' && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input
                id="department"
                name="department"
                type="text"
                value={formData.department}
                onChange={handleChange}
                className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                  errors.department ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
                }`}
                placeholder="Abteilung"
              />
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">{errors.department}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input
                id="invitationCode"
                name="invitationCode"
                type="text"
                value={formData.invitationCode}
                onChange={handleChange}
                className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                  errors.invitationCode ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
                }`}
                placeholder="HR Einladungscode"
              />
              {errors.invitationCode && (
                <p className="mt-1 text-sm text-red-600">{errors.invitationCode}</p>
              )}
            </motion.div>
          </>
        )}

        <div>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
              errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
            }`}
            placeholder="Passwort"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
              errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
            }`}
            placeholder="Passwort bestätigen"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors touch-manipulation"
        />
        <label htmlFor="terms" className="ml-2 block text-sm sm:text-base text-gray-900">
          Ich stimme den <a href="#" className="text-emerald-600 hover:text-emerald-500 active:text-emerald-700 transition-colors touch-manipulation">Nutzungsbedingungen</a> zu
        </label>
      </div>

      <div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full justify-center text-base sm:text-lg py-2.5 sm:py-3 touch-manipulation"
        >
          <span>Registrieren</span>
        </motion.button>
      </div>
    </form>
  );
}