import { useState } from 'react';

export function useIdeaReview(idea, onSubmitReview) {
  const [feedback, setFeedback] = useState('');
  const [showVision, setShowVision] = useState(false);

  const handleContactOwner = () => {
    window.location.href = `mailto:${idea.creator}@example.com?subject=Feedback zu Ihrer Idee: ${idea.title}`;
  };

  const handleVisionToggle = () => {
    setShowVision(!showVision);
  };

  const handleApprove = () => {
    if (!feedback.trim()) {
      alert('Bitte geben Sie ein Feedback ein.');
      return;
    }
    onSubmitReview(idea.id, 'approved', feedback);
  };

  const handleReject = () => {
    if (!feedback.trim()) {
      alert('Bitte geben Sie ein Feedback ein.');
      return;
    }
    onSubmitReview(idea.id, 'rejected', feedback);
  };

  return {
    feedback,
    setFeedback,
    showVision,
    handleVisionToggle,
    handleApprove,
    handleReject,
    handleContactOwner
  };
}