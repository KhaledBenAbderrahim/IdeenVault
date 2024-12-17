import { useState, useEffect, useCallback } from 'react';
import { discussionStore } from '../data/discussionStore';

export function useDiscussions() {
  const [discussions, setDiscussions] = useState(discussionStore.getDiscussions());
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  useEffect(() => {
    // Subscribe to store changes
    const unsubscribe = discussionStore.subscribe(updatedDiscussions => {
      setDiscussions(updatedDiscussions);
      // Update selected discussion if it exists
      if (selectedDiscussion) {
        const updated = updatedDiscussions.find(d => d.id === selectedDiscussion.id);
        if (updated) {
          setSelectedDiscussion(updated);
        }
      }
    });

    return unsubscribe;
  }, [selectedDiscussion]);

  const handleCreateDiscussion = useCallback((newDiscussion) => {
    discussionStore.addDiscussion(newDiscussion);
  }, []);

  const handleDeleteDiscussion = useCallback((discussionId) => {
    discussionStore.deleteDiscussion(discussionId);
    setSelectedDiscussion(null);
  }, []);

  const handleDeleteComment = useCallback((discussionId, commentId) => {
    discussionStore.deleteComment(discussionId, commentId);
  }, []);

  const handleAddComment = useCallback((discussionId, comment) => {
    discussionStore.addComment(discussionId, comment);
  }, []);

  const handleToggleLike = useCallback((discussionId) => {
    discussionStore.toggleLike(discussionId);
  }, []);

  const handleLikeComment = useCallback((discussionId, commentId) => {
    discussionStore.toggleCommentLike(discussionId, commentId);
  }, []);

  return {
    discussions,
    selectedDiscussion,
    setSelectedDiscussion,
    handleCreateDiscussion,
    handleDeleteDiscussion,
    handleDeleteComment,
    handleAddComment,
    handleToggleLike,
    handleLikeComment
  };
}