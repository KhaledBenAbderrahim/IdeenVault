import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    department: user?.department || '',
    bio: user?.bio || '',
    phone: user?.phone || '',
    location: user?.location || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Profile Header with gradient */}
        <div 
          className="h-32"
          style={{
            background: 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(167, 243, 208) 50%, rgb(255, 255, 255) 100%)'
          }}
        ></div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:space-x-5">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white"
            />
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <p className="text-gray-600">{user?.department}</p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 sm:mt-0 sm:ml-auto btn-secondary"
              >
                <span>Profil bearbeiten</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Abteilung
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="input-field"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Standort
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Über mich
              </label>
              <textarea
                rows={4}
                className="input-field"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn-secondary"
              >
                <span>Abbrechen</span>
              </button>
              <button type="submit" className="btn-primary">
                <span>Speichern</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="mt-1 text-sm text-gray-900">{formData.name}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">E-Mail</h3>
                <p className="mt-1 text-sm text-gray-900">{formData.email}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Abteilung</h3>
                <p className="mt-1 text-sm text-gray-900">{formData.department}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Telefon</h3>
                <p className="mt-1 text-sm text-gray-900">{formData.phone || '-'}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Standort</h3>
                <p className="mt-1 text-sm text-gray-900">{formData.location || '-'}</p>
              </div>
            </div>

            {formData.bio && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Über mich</h3>
                <p className="mt-1 text-sm text-gray-900">{formData.bio}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}