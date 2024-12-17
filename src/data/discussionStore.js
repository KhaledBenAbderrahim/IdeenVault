import { mockDiscussions } from './mockDiscussions';

// Singleton pattern for shared discussion state
class DiscussionStore {
  constructor() {
    if (DiscussionStore.instance) {
      return DiscussionStore.instance;
    }
    DiscussionStore.instance = this;
    this.discussions = [...mockDiscussions];
    this.listeners = new Set();
  }

  // Subscribe to changes
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // Notify all listeners
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.discussions));
  }

  // Get all discussions
  getDiscussions() {
    return [...this.discussions];
  }

  // Add new discussion
  addDiscussion(discussion) {
    this.discussions.unshift({
      id: Date.now(),
      ...discussion,
      likes: 0,
      replies: 0,
      isLiked: false,
      comments: []
    });
    this.notifyListeners();
  }

  // Delete discussion
  deleteDiscussion(discussionId) {
    this.discussions = this.discussions.filter(d => d.id !== discussionId);
    this.notifyListeners();
  }

  // Add comment to discussion
  addComment(discussionId, comment) {
    this.discussions = this.discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          comments: [comment, ...(discussion.comments || [])],
          replies: (discussion.replies || 0) + 1
        };
      }
      return discussion;
    });
    this.notifyListeners();
  }

  // Delete comment from discussion
  deleteComment(discussionId, commentId) {
    this.discussions = this.discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          comments: discussion.comments.filter(c => c.id !== commentId),
          replies: discussion.replies - 1
        };
      }
      return discussion;
    });
    this.notifyListeners();
  }

  // Toggle like on discussion
  toggleLike(discussionId) {
    this.discussions = this.discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          likes: discussion.isLiked ? discussion.likes - 1 : discussion.likes + 1,
          isLiked: !discussion.isLiked
        };
      }
      return discussion;
    });
    this.notifyListeners();
  }

  // Toggle like on comment
  toggleCommentLike(discussionId, commentId) {
    this.discussions = this.discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
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
      }
      return discussion;
    });
    this.notifyListeners();
  }
}

export const discussionStore = new DiscussionStore();