import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import UserTypeSelector from './UserTypeSelector';
import HomeNavigationButton from '../common/HomeNavigationButton';

// Mock invitation codes - in a real app, these would be stored securely and managed by admins
const VALID_HR_CODES = ['HR2024', 'ADMIN123', 'HRINVITE'];

export default function RegisterForm({ userType, setUserType }) {
  const navigate = useNavigate();
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
      console.log('Form submitted:', formData);
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleGithubLogin = async () => {
    try {
      // Implement GitHub registration logic here
      navigate('/');
    } catch (error) {
      console.error('GitHub registration failed:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Implement Google registration logic here
      navigate('/');
    } catch (error) {
      console.error('Google registration failed:', error);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
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

          {userType === 'hr' && (
            <>
              <div>
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
              </div>

              <div>
                <input
                  id="invitationCode"
                  name="invitationCode"
                  type="text"
                  value={formData.invitationCode}
                  onChange={handleChange}
                  className={`input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                    errors.invitationCode ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
                  }`}
                  placeholder="Einladungscode"
                />
                {errors.invitationCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.invitationCode}</p>
                )}
              </div>
            </>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg py-3 px-4 font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          Registrieren
        </motion.button>
      </form>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Oder registrieren mit</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            onClick={handleGithubLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300 group"
          >
            <FaGithub className="text-2xl mr-2 group-hover:text-gray-700" />
            <span className="font-medium group-hover:text-gray-700">GitHub</span>
          </motion.button>

          <motion.button
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300 group"
          >
            <FaGoogle className="text-2xl mr-2 text-red-500" />
            <span className="font-medium group-hover:text-gray-700">Google</span>
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <HomeNavigationButton />
      </div>
    </div>
  );
}