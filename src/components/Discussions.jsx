import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import DiscussionDetails from './DiscussionDetails';
import DiscussionFilters from './discussions/DiscussionFilters';
import DiscussionHeader from './discussions/DiscussionHeader';
import DiscussionList from './discussions/DiscussionList';

export default function Discussions() {
  const { user } = useAuth();
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
    tags: ''
  });

  const handleCreateDiscussion = (e) => {
    e.preventDefault();
    const newDiscussionData = {
      id: discussions.length + 1,
      ...newDiscussion,
      author: user?.name,
      avatar: user?.avatar,
      date: "gerade eben",
      likes: 0,
      replies: 0,
      tags: newDiscussion.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      topic: "Neu"
    };
    setDiscussions([newDiscussionData, ...discussions]);
    setNewDiscussion({ title: '', preview: '', tags: '' });
    setShowNewDiscussionForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 sm:space-y-6"
    >
      <DiscussionHeader
        totalDiscussions={discussions.length}
        sortOrder={sortBy}
        onSortChange={setSortBy}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <DiscussionFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          showFilters={showFilters}
        />

        <DiscussionList
          discussions={discussions}
          onSelectDiscussion={setSelectedDiscussion}
          searchTerm={searchTerm}
          topicFilter={topicFilter}
          sortBy={sortBy}
        />
      </div>

      <AnimatePresence>
        {selectedDiscussion && (
          <DiscussionDetails
            discussion={selectedDiscussion}
            onClose={() => setSelectedDiscussion(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}