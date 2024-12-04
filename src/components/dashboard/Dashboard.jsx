import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import NewIdeaForm from './NewIdeaForm';
import IdeaDetails from './IdeaDetails';

// Mock user ideas remain the same
const mockUserIdeas = [
  {
    id: 1,
    title: "AI-Powered Learning Assistant",
    shortTitle: "AI-Learn",
    description: "Ein KI-basierter Lernassistent für personalisierte Bildungswege",
    status: "Offen",
    priority: "Hoch",
    phase: "Konzept",
    type: "AI Service",
    customer: "Bildungseinrichtungen",
    keywords: ["AI", "Education", "Personalization"],
    creator: "Neo Anderson"
  },
  {
    id: 2,
    title: "Virtual Reality Training",
    shortTitle: "VR-Train",
    description: "VR-basierte Schulungen für technische Fähigkeiten",
    status: "Aktiv",
    priority: "Mittel",
    phase: "Entwicklung",
    type: "Software",
    customer: "Industrie",
    keywords: ["VR", "Training", "Technical"],
    creator: "Neo Anderson"
  },
  {
    id: 3,
    title: "Smart Office Management",
    shortTitle: "SmartOffice",
    description: "IoT-basierte Lösung für intelligentes Büro-Management",
    status: "Offen",
    priority: "Niedrig",
    phase: "Konzept",
    type: "Platform",
    customer: "Intern",
    keywords: ["IoT", "Office", "Management"],
    creator: "Neo Anderson"
  }
];

export default function Dashboard() {
  const { user } = useAuth();
  const [showNewIdeaForm, setShowNewIdeaForm] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [userIdeas, setUserIdeas] = useState(mockUserIdeas);

  const handleDeleteIdea = (ideaId) => {
    const idea = userIdeas.find(i => i.id === ideaId);
    if (idea && idea.status === 'Offen') {
      setUserIdeas(prevIdeas => prevIdeas.filter(i => i.id !== ideaId));
    }
  };

  const handleAddIdea = (newIdea) => {
    setUserIdeas(prevIdeas => [
      ...prevIdeas,
      {
        ...newIdea,
        id: Math.max(...prevIdeas.map(i => i.id)) + 1,
        creator: user.name
      }
    ]);
  };

  return (
    <div className="space-y-6">
      {/* New Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(120deg, rgba(16, 185, 129, 0.05) 0%, rgba(101, 163, 13, 0.05) 100%)`,
            backgroundSize: '100% 100%'
          }}></div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 70%)`
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Welcome Message */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-emerald-100/50 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-4 py-1"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-emerald-700">Innovationsportal</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold text-gray-900"
                  >
                    Willkommen zurück, {user?.name}!
                  </motion.h1>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 max-w-xl"
                >
                  Ihre Innovationsplattform für zukunftsweisende Ideen. Entdecken Sie Ihre aktuellen Projekte und deren Status.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <button
                    onClick={() => setShowNewIdeaForm(true)}
                    className="btn-primary group"
                  >
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Neue Idee
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100">Aktive Ideen</p>
                  <h3 className="text-3xl font-bold mt-1">
                    {userIdeas.filter(i => i.status === 'Aktiv').length}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Offene Ideen</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">
                    {userIdeas.filter(i => i.status === 'Offen').length}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userIdeas.map((idea) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 h-full"
            style={{
              background: "linear-gradient(to bottom right, rgba(167, 243, 208, 0.1) 0%, rgba(255, 255, 255, 1) 100%)"
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {idea.title}
                    </h3>
                    <p className="text-sm text-gray-500">{idea.shortTitle}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    idea.priority === 'Hoch' ? 'bg-red-100 text-red-800' :
                    idea.priority === 'Mittel' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {idea.priority}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {idea.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-20">Status:</span>
                    <span className={`${
                      idea.status === 'Aktiv' ? 'text-emerald-600' :
                      idea.status === 'In Entwicklung' ? 'text-blue-600' :
                      'text-gray-600'
                    }`}>
                      {idea.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-20">Phase:</span>
                    <span className="text-gray-900">{idea.phase}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => setSelectedIdea(idea)}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                >
                  Details anzeigen →
                </button>
                {idea.status === 'Offen' && (
                  <button
                    onClick={() => handleDeleteIdea(idea.id)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    Löschen
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Idea Form Modal */}
      {showNewIdeaForm && (
        <NewIdeaForm
          onClose={() => setShowNewIdeaForm(false)}
          onSubmit={handleAddIdea}
        />
      )}

      {/* Idea Details Modal */}
      {selectedIdea && (
        <IdeaDetails
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      )}
    </div>
  );
}