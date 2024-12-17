import { useState, useEffect, useCallback } from 'react';
import { ideaStore } from '../data/ideaStore';

export function useHRIdeas() {
  const [pendingIdeas, setPendingIdeas] = useState(ideaStore.getPendingIdeas());
  const [approvedIdeas, setApprovedIdeas] = useState(ideaStore.getApprovedIdeas());

  useEffect(() => {
    const unsubscribe = ideaStore.subscribe(allIdeas => {
      // Only get ideas from Neo Anderson that haven't been reviewed
      const neoIdeas = allIdeas.filter(idea => 
        idea.creator === "Neo Anderson" && !idea.hrReviewed
      );
      setPendingIdeas(neoIdeas);
      setApprovedIdeas(allIdeas.filter(idea => idea.hrReviewed && idea.approved));
    });

    return unsubscribe;
  }, []);

  const handleReviewIdea = useCallback((ideaId, status, feedback) => {
    ideaStore.reviewIdea(ideaId, status, feedback);
  }, []);

  const handleUpdateIdea = useCallback((ideaId, updates) => {
    ideaStore.updateIdea(ideaId, updates);
  }, []);

  const getStats = useCallback(() => {
    const allIdeas = ideaStore.getIdeas();
    // Only count Neo Anderson's unreviewed ideas for the badge
    const neoUnreviewedIdeas = allIdeas.filter(idea => 
      idea.creator === "Neo Anderson" && !idea.hrReviewed
    );
    
    return {
      pending: neoUnreviewedIdeas.length,
      approved: allIdeas.filter(idea => idea.hrReviewed && idea.approved).length,
      rejected: allIdeas.filter(idea => idea.hrReviewed && !idea.approved).length
    };
  }, []);

  return {
    pendingIdeas,
    approvedIdeas,
    handleReviewIdea,
    handleUpdateIdea,
    getStats
  };
}