import { useState } from 'react';
import { mockDiscussions } from '../../../../data/mockDiscussions';

export function useDiscussionModeration() {
  const [discussions, setDiscussions] = useState(mockDiscussions);

  const handleDeleteDiscussion = (discussionId) => {
    setDiscussions(prev => prev.filter(d => d.id !== discussionId));
  };

  const handleDeleteComment = (discussionId, commentId) => {
    setDiscussions(prev => 
      prev.map(discussion => {
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

  const handleAddModeratorComment = (discussionId, comment) => {
    setDiscussions(prev => 
      prev.map(discussion => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            comments: [{
              ...comment,
              isHR: true,
              author: "HR Team",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hr"
            }, ...discussion.comments],
            replies: discussion.replies + 1
          };
        }
        return discussion;
      })
    );
  };

  return {
    discussions,
    handleDeleteDiscussion,
    handleDeleteComment,
    handleAddModeratorComment
  };
}