import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InboxHeader from '../inbox/InboxHeader';
import InboxStats from '../inbox/InboxStats';
import InboxList from '../inbox/InboxList';
import IdeaReviewModal from '../inbox/IdeaReviewModal';
import { mockIdeas } from '../../../data/mockIdeas';

export default function HRInbox() {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [filter, setFilter] = useState('pending');

  // Filter ideas from Neo Anderson
  const neoIdeas = mockIdeas.filter(idea => idea.creator === "Neo Anderson");
  
  const stats = {
    pending: neoIdeas.filter(idea => !idea.hrReviewed).length,
    approved: neoIdeas.filter(idea => idea.hrReviewed && idea.approved).length,
    rejected: neoIdeas.filter(idea => idea.hrReviewed && !idea.approved).length
  };

  const filteredIdeas = neoIdeas.filter(idea => {
    if (filter === 'pending') return !idea.hrReviewed;
    return idea.hrReviewed;
  });

  const handleReviewIdea = (ideaId, status, feedback) => {
    // In a real app, this would make an API call
    console.log('Review submitted:', { ideaId, status, feedback });
    setSelectedIdea(null);
  };

  return (
    <div className="space-y-6">
      <InboxHeader 
        pendingCount={stats.pending}
        filter={filter}
        onFilterChange={setFilter}
      />

      <InboxStats stats={stats} />

      <InboxList
        ideas={filteredIdeas}
        onSelectIdea={setSelectedIdea}
      />

      {selectedIdea && (
        <IdeaReviewModal
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
          onSubmitReview={handleReviewIdea}
        />
      )}
    </div>
  );
}