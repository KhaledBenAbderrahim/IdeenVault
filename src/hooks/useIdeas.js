import { useState, useEffect, useCallback } from 'react';
import { ideaStore } from '../data/ideaStore';

export function useIdeas(type = 'all') {
  const [ideas, setIdeas] = useState(() => {
    switch (type) {
      case 'pending':
        return ideaStore.getPendingIdeas();
      case 'approved':
        return ideaStore.getApprovedIdeas();
      default:
        return ideaStore.getIdeas();
    }
  });

  useEffect(() => {
    const unsubscribe = ideaStore.subscribe(allIdeas => {
      switch (type) {
        case 'pending':
          setIdeas(allIdeas.filter(idea => !idea.hrReviewed));
          break;
        case 'approved':
          setIdeas(allIdeas.filter(idea => idea.hrReviewed && idea.approved));
          break;
        default:
          setIdeas(allIdeas);
      }
    });

    return unsubscribe;
  }, [type]);

  const handleAddIdea = useCallback((newIdea) => {
    return ideaStore.addIdea(newIdea);
  }, []);

  const handleUpdateIdea = useCallback((ideaId, updates) => {
    ideaStore.updateIdea(ideaId, updates);
  }, []);

  const handleDeleteIdea = useCallback((ideaId) => {
    ideaStore.deleteIdea(ideaId);
  }, []);

  const handleReviewIdea = useCallback((ideaId, status, feedback) => {
    ideaStore.reviewIdea(ideaId, status, feedback);
  }, []);

  return {
    ideas,
    handleAddIdea,
    handleUpdateIdea,
    handleDeleteIdea,
    handleReviewIdea
  };
}