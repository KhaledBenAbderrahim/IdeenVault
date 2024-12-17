import { useState, useCallback } from 'react';
import { mockDiscussions } from '../../../../data/mockDiscussions';

export function useHRDiscussions() {
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [showNewDiscussionForm, setShowNewDiscussionForm] = useState(false);

  const handleCreateDiscussion = useCallback((newDiscussion) => {
    const discussionData = {
      id: Date.now(),
      ...newDiscussion,
      author: "HR Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hr",
      date: "gerade eben",
      likes: 0,
      replies: 0,
      isLiked: false,
      comments: []
    };
    setDiscussions(prev => [discussionData, ...prev]);
    setShowNewDiscussionForm(false);
  }, []);

  const handleDeleteDiscussion = useCallback((discussionId) => {
    setDiscussions(prev => prev.filter(d => d.id !== discussionId));
    setSelectedDiscussion(null);
  }, []);

  const handleDeleteComment = useCallback((discussionId, commentId) => {
    setDiscussions(prev => 
      prev.map(discussion => {
        if (discussion.id === discussionId) {
          const updatedDiscussion = {
            ...discussion,
            comments: discussion.comments.filter(comment => comment.id !== commentId),
            replies: discussion.replies - 1
          };
          if (selectedDiscussion?.id === discussionId) {
            setSelectedDiscussion(updatedDiscussion);
          }
          return updatedDiscussion;
        }
        return discussion;
      })
    );
  }, [selectedDiscussion]);

  const handleLikeComment = useCallback((discussionId, commentId) => {
    setDiscussions(prev => 
      prev.map(discussion => {
        if (discussion.id === discussionId) {
          const updatedDiscussion = {
            ...discussion,
            comments: discussion.comments.map(comment => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                  isLiked: !comment.isLiked
                };
              }
              return comment;
            })
          };
          if (selectedDiscussion?.id === discussionId) {
            setSelectedDiscussion(updatedDiscussion);
          }
          return updatedDiscussion;
        }
        return discussion;
      })
    );
  }, [selectedDiscussion]);

  const handleAddComment = useCallback((discussionId, comment) => {
    const hrComment = {
      ...comment,
      id: Date.now(),
      isHR: true,
      author: "HR Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hr",
      timestamp: "gerade eben",
      likes: 0,
      isLiked: false
    };
    
    setDiscussions(prev => 
      prev.map(discussion => {
        if (discussion.id === discussionId) {
          const updatedDiscussion = {
            ...discussion,
            comments: [hrComment, ...(discussion.comments || [])],
            replies: (discussion.replies || 0) + 1
          };
          if (selectedDiscussion?.id === discussionId) {
            setSelectedDiscussion(updatedDiscussion);
          }
          return updatedDiscussion;
        }
        return discussion;
      })
    );
  }, [selectedDiscussion]);

  const handleToggleLike = useCallback((discussionId) => {
    setDiscussions(prev => 
      prev.map(discussion => {
        if (discussion.id === discussionId) {
          const updatedDiscussion = {
            ...discussion,
            likes: discussion.isLiked ? discussion.likes - 1 : discussion.likes + 1,
            isLiked: !discussion.isLiked
          };
          if (selectedDiscussion?.id === discussionId) {
            setSelectedDiscussion(updatedDiscussion);
          }
          return updatedDiscussion;
        }
        return discussion;
      })
    );
  }, [selectedDiscussion]);

  return {
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
  };
}