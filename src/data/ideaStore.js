import { mockIdeas } from './mockIdeas';

// Singleton pattern for shared idea state
class IdeaStore {
  constructor() {
    if (IdeaStore.instance) {
      return IdeaStore.instance;
    }
    IdeaStore.instance = this;
    this.ideas = [...mockIdeas];
    this.listeners = new Set();
  }

  // Subscribe to changes
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // Notify all listeners
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.ideas));
  }

  // Get all ideas
  getIdeas() {
    return [...this.ideas];
  }

  // Get pending ideas (not reviewed by HR)
  getPendingIdeas() {
    return this.ideas.filter(idea => !idea.hrReviewed);
  }

  // Get approved ideas
  getApprovedIdeas() {
    return this.ideas.filter(idea => idea.hrReviewed && idea.approved);
  }

  // Add new idea
  addIdea(idea) {
    const newIdea = {
      id: Date.now(),
      ...idea,
      hrReviewed: false,
      approved: false,
      feedback: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.ideas.unshift(newIdea);
    this.notifyListeners();
    return newIdea;
  }

  // Update idea review status
  reviewIdea(ideaId, status, feedback) {
    this.ideas = this.ideas.map(idea => {
      if (idea.id === ideaId) {
        return {
          ...idea,
          hrReviewed: true,
          approved: status === 'approved',
          feedback,
          updatedAt: new Date().toISOString()
        };
      }
      return idea;
    });
    this.notifyListeners();
  }

  // Update idea details
  updateIdea(ideaId, updates) {
    this.ideas = this.ideas.map(idea => {
      if (idea.id === ideaId) {
        return {
          ...idea,
          ...updates,
          updatedAt: new Date().toISOString()
        };
      }
      return idea;
    });
    this.notifyListeners();
  }

  // Delete idea
  deleteIdea(ideaId) {
    this.ideas = this.ideas.filter(idea => idea.id !== ideaId);
    this.notifyListeners();
  }
}

export const ideaStore = new IdeaStore();