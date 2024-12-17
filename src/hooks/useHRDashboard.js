import { useEffect, useState } from 'react';
import { ideaStore } from '../data/ideaStore';
import { calculateIdeaMetrics } from '../components/hr/analytics/utils/ideaAnalytics';

export function useHRDashboard() {
  const [metrics, setMetrics] = useState(() => calculateIdeaMetrics(ideaStore.getIdeas()));

  useEffect(() => {
    return ideaStore.subscribe(ideas => {
      setMetrics(calculateIdeaMetrics(ideas));
    });
  }, []);

  return { metrics };
}