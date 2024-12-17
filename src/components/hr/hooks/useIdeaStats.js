import { useMemo } from 'react';

export function useIdeaStats(ideas) {
  return useMemo(() => {
    const stats = {
      pending: ideas.filter(idea => !idea.hrReviewed).length,
      approved: ideas.filter(idea => idea.hrReviewed && idea.approved).length,
      rejected: ideas.filter(idea => idea.hrReviewed && !idea.approved).length,
      total: ideas.length
    };

    stats.approvalRate = stats.total > 0 
      ? ((stats.approved / stats.total) * 100).toFixed(1) 
      : 0;

    return stats;
  }, [ideas]);
}