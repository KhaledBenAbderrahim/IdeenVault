import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import UserTypeSelector from './UserTypeSelector';
import HomeNavigationButton from '../common/HomeNavigationButton';

const VALID_HR_CODES = ['HR2024', 'ADMIN123', 'HRINVITE'];

const DEPARTMENTS = [
  'Engineering',
  'Product',
  'Marketing',
  'Sales',
  'Customer Service',
  'HR',
  'Others'
];

export default function RegisterForm({ userType, setUserType }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    invitationCode: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Vorname ist erforderlich';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nachname ist erforderlich';
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
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <div className="space-y-4">
          <UserTypeSelector userType={userType} setUserType={setUserType} />

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Vorname"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                  errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Nachname"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                  errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Passwort"
              value={formData.password}
              onChange={handleChange}
              className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 pr-10 ${
                errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Passwort bestätigen"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 pr-10 ${
                errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Abteilung
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                errors.department ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
              }`}
            >
              <option value="">Abteilung auswählen</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
          </div>

          {userType === 'hr' && (
            <div>
              <input
                id="invitationCode"
                name="invitationCode"
                type="text"
                placeholder="Einladungscode"
                value={formData.invitationCode}
                onChange={handleChange}
                className={`w-full input-field text-base sm:text-lg py-2.5 sm:py-3 ${
                  errors.invitationCode ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''
                }`}
              />
              {errors.invitationCode && <p className="text-red-500 text-sm mt-1">{errors.invitationCode}</p>}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition duration-200"
        >
          Registrieren
        </button>
      </form>

      <div className="space-y-4 w-full">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-lg py-3 font-semibold hover:bg-gray-50 transition duration-200"
        >
          <FaGoogle className="text-red-500" />
          Mit Google fortfahren
        </button>
        <button
          onClick={handleGithubLogin}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition duration-200"
        >
          <FaGithub />
          Mit GitHub fortfahren
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <HomeNavigationButton />
      </div>
    </div>
  );
}