import React from 'react';
import { motion } from 'framer-motion';
import PendingIdeaCard from './PendingIdeaCard';
import ApprovedIdeaCard from './ApprovedIdeaCard';
import NewIdeaForm from '../NewIdeaForm';
import IdeaDetails from '../IdeaDetails';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
import EmptyState from './EmptyState';

export default function IdeaList({
  ideas,
  onSelectIdea,
  onDeleteIdea,
  showNewIdeaForm,
  setShowNewIdeaForm,
  selectedIdea,
  setSelectedIdea,
  deleteIdea,
  setDeleteIdea,
  onAddIdea,
  onDeleteConfirm
}) {
  const pendingIdeas = ideas.filter(idea => !idea.hrApproved);
  const approvedIdeas = ideas.filter(idea => idea.hrApproved);

  return (
    <>
      {/* New Idea Form Modal */}
      {showNewIdeaForm && (
        <NewIdeaForm
          onClose={() => setShowNewIdeaForm(false)}
          onSubmit={onAddIdea}
        />
      )}

      {/* Idea Details Modal */}
      {selectedIdea && (
        <IdeaDetails
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteIdea && (
        <DeleteConfirmationModal
          isOpen={!!deleteIdea}
          onClose={() => setDeleteIdea(null)}
          onConfirm={onDeleteConfirm}
          ideaTitle={deleteIdea.title}
        />
      )}

      {ideas.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-8">
          {/* Pending Ideas Section */}
          {pendingIdeas.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Ausstehende Ideen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {pendingIdeas.map((idea) => (
                  <motion.div
                    key={idea.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PendingIdeaCard
                      idea={idea}
                      onClick={() => onSelectIdea(idea)}
                      onDelete={() => onDeleteIdea(idea)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Approved Ideas Section */}
          {approvedIdeas.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Genehmigte Ideen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {approvedIdeas.map((idea) => (
                  <motion.div
                    key={idea.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ApprovedIdeaCard
                      idea={idea}
                      onClick={() => onSelectIdea(idea)}
                      onDelete={() => onDeleteIdea(idea)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}