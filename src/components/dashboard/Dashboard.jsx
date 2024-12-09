import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import IdeaList from './ideas/IdeaList';
import { useIdeas } from './hooks/useIdeas';
import { useModals } from './hooks/useModals';

export default function Dashboard() {
  const { user } = useAuth();
  const { userIdeas, handleAddIdea, handleDeleteIdea, totalIdeasCount, approvedIdeasCount } = useIdeas();
  const { 
    showNewIdeaForm, setShowNewIdeaForm,
    selectedIdea, setSelectedIdea,
    deleteIdea, setDeleteIdea,
    handleDeleteConfirm
  } = useModals(handleDeleteIdea);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <DashboardHeader user={user} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center sm:justify-start"
      >
        <button
          onClick={() => setShowNewIdeaForm(true)}
          className="btn-primary group touch-manipulation"
        >
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Neue Idee
          </span>
        </button>
      </motion.div>

      <DashboardStats 
        totalIdeas={totalIdeasCount}
        approvedIdeas={approvedIdeasCount}
      />

      <IdeaList
        ideas={userIdeas}
        onSelectIdea={setSelectedIdea}
        onDeleteIdea={setDeleteIdea}
        showNewIdeaForm={showNewIdeaForm}
        setShowNewIdeaForm={setShowNewIdeaForm}
        selectedIdea={selectedIdea}
        setSelectedIdea={setSelectedIdea}
        deleteIdea={deleteIdea}
        setDeleteIdea={setDeleteIdea}
        onAddIdea={handleAddIdea}
        onDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
}