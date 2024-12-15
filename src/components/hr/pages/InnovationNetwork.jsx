import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NetworkHeader from '../network/NetworkHeader';
import NetworkFilters from '../network/NetworkFilters';
import DiscussionList from '../network/DiscussionList';
import HRDiscussionDetails from '../network/HRDiscussionDetails';
import NewDiscussionForm from '../network/NewDiscussionForm';
import { mockDiscussions } from '../../../data/mockDiscussions';

export default function InnovationNetwork() {
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [searchTerm, setSearchTerm] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showNewDiscussionForm, setShowNewDiscussionForm] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    preview: '',
    topic: '',
    tags: ''
  });

  const handleCreateDiscussion = (e) => {
    e.preventDefault();
    const newDiscussionData = {
      id: Date.now(),
      ...newDiscussion,
      author: "HR Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hr",
      date: "gerade eben",
      likes: 0,
      replies: 0,
      tags: newDiscussion.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      isLiked: false,
      comments: []
    };
    setDiscussions([newDiscussionData, ...discussions]);
    setNewDiscussion({ title: '', preview: '', topic: '', tags: '' });
    setShowNewDiscussionForm(false);
  };

  const handleDeleteComment = (discussionId, commentId) => {
    setDiscussions(prevDiscussions => 
      prevDiscussions.map(discussion => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            comments: discussion.comments.filter(comment => comment.id !== commentId),
            replies: discussion.replies - 1
          };
        }
        return discussion;
      })
    );
  };

  const handleDeleteDiscussion = (discussionId) => {
    setDiscussions(prevDiscussions => 
      prevDiscussions.filter(discussion => discussion.id !== discussionId)
    );
  };

  const handleAddComment = (discussionId, comment) => {
    setDiscussions(prevDiscussions => 
      prevDiscussions.map(discussion => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            comments: [comment, ...discussion.comments],
            replies: discussion.replies + 1
          };
        }
        return discussion;
      })
    );
  };

  const handleToggleLike = (discussionId) => {
    setDiscussions(prevDiscussions => 
      prevDiscussions.map(discussion => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            likes: discussion.isLiked ? discussion.likes - 1 : discussion.likes + 1,
            isLiked: !discussion.isLiked
          };
        }
        return discussion;
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <NetworkHeader
        totalDiscussions={discussions.length}
        sortOrder={sortBy}
        onSortChange={setSortBy}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onStartDiscussion={() => setShowNewDiscussionForm(true)}
      />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <NetworkFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          showFilters={showFilters}
        />

        <DiscussionList
          discussions={discussions}
          onSelectDiscussion={setSelectedDiscussion}
          onDeleteDiscussion={handleDeleteDiscussion}
          onToggleLike={handleToggleLike}
          searchTerm={searchTerm}
          topicFilter={topicFilter}
          sortBy={sortBy}
        />
      </div>

      {selectedDiscussion && (
        <HRDiscussionDetails
          discussion={selectedDiscussion}
          onClose={() => setSelectedDiscussion(null)}
          onDeleteComment={handleDeleteComment}
          onDeleteDiscussion={handleDeleteDiscussion}
          onAddComment={handleAddComment}
          onToggleLike={handleToggleLike}
        />
      )}

      {showNewDiscussionForm && (
        <NewDiscussionForm
          onClose={() => setShowNewDiscussionForm(false)}
          onSubmit={handleCreateDiscussion}
          formData={newDiscussion}
          setFormData={setNewDiscussion}
        />
      )}
    </motion.div>
  );
}