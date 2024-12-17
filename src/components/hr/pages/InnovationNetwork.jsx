import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NetworkHeader from '../network/NetworkHeader';
import NetworkFilters from '../network/NetworkFilters';
import DiscussionList from '../network/DiscussionList';
import HRDiscussionDetails from '../network/HRDiscussionDetails';
import NewDiscussionForm from '../network/NewDiscussionForm';
import DeleteConfirmationModal from '../network/DeleteConfirmationModal';
import { useHRDiscussions } from '../network/hooks/useHRDiscussions';

export default function InnovationNetwork() {
  // State for filters and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Discussion management hooks
  const {
    discussions,
    selectedDiscussion,
    setSelectedDiscussion,
    showNewDiscussionForm,
    setShowNewDiscussionForm,
    handleCreateDiscussion,
    handleDeleteDiscussion,
    handleDeleteComment,
    handleLikeComment,
    handleAddComment,
    handleToggleLike,
  } = useHRDiscussions();

  // State for delete confirmation
  const [discussionToDelete, setDiscussionToDelete] = useState(null);

  const handleConfirmDelete = () => {
    if (discussionToDelete) {
      handleDeleteDiscussion(discussionToDelete.id);
      setDiscussionToDelete(null);
      setSelectedDiscussion(null);
    }
  };

  // Handle sort order change
  const handleSortChange = (newSortOrder) => {
    setSortBy(newSortOrder);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header with filter toggle */}
      <NetworkHeader
        totalDiscussions={discussions.length}
        sortOrder={sortBy}
        onSortChange={handleSortChange}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onStartDiscussion={() => setShowNewDiscussionForm(true)}
      />

      {/* Main content with filters and discussions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <NetworkFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showFilters={showFilters}
        />

        <DiscussionList
          discussions={discussions}
          onSelectDiscussion={setSelectedDiscussion}
          onDeleteDiscussion={setDiscussionToDelete}
          searchTerm={searchTerm}
          topicFilter={topicFilter}
          sortBy={sortBy}
        />
      </div>

      {/* Discussion details modal */}
      {selectedDiscussion && (
        <HRDiscussionDetails
          discussion={selectedDiscussion}
          onClose={() => setSelectedDiscussion(null)}
          onDeleteComment={handleDeleteComment}
          onDeleteDiscussion={setDiscussionToDelete}
          onAddComment={handleAddComment}
          onToggleLike={handleToggleLike}
          onLikeComment={handleLikeComment}
        />
      )}

      {/* New discussion form */}
      {showNewDiscussionForm && (
        <NewDiscussionForm
          onClose={() => setShowNewDiscussionForm(false)}
          onSubmit={handleCreateDiscussion}
        />
      )}

      {/* Delete confirmation modal */}
      {discussionToDelete && (
        <DeleteConfirmationModal
          isOpen={!!discussionToDelete}
          onClose={() => setDiscussionToDelete(null)}
          onConfirm={handleConfirmDelete}
          title={discussionToDelete.title}
        />
      )}
    </motion.div>
  );
}