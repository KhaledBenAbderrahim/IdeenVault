// Utility functions for processing idea data for analytics
export function calculateIdeaMetrics(ideas) {
  return {
    // Basic counts
    total: ideas.length,
    active: ideas.filter(idea => idea.status === 'Aktiv').length,
    inDevelopment: ideas.filter(idea => idea.status === 'In Entwicklung').length,
    open: ideas.filter(idea => idea.status === 'Offen').length,

    // Phase distribution
    phases: {
      concept: ideas.filter(idea => idea.phase === 'Konzept').length,
      development: ideas.filter(idea => idea.phase === 'Entwicklung').length,
      test: ideas.filter(idea => idea.phase === 'Test').length,
      production: ideas.filter(idea => idea.phase === 'Produktion').length
    },

    // Priority distribution
    priorities: {
      high: ideas.filter(idea => idea.priority === 'Hoch').length,
      medium: ideas.filter(idea => idea.priority === 'Mittel').length,
      low: ideas.filter(idea => idea.priority === 'Niedrig').length
    },

    // Type distribution
    types: ideas.reduce((acc, idea) => {
      acc[idea.type] = (acc[idea.type] || 0) + 1;
      return acc;
    }, {}),

    // Average metrics
    averages: {
      risk: ideas.reduce((sum, idea) => sum + idea.risk, 0) / ideas.length,
      attractiveness: ideas.reduce((sum, idea) => sum + idea.attractiveness, 0) / ideas.length
    },

    // Risk vs Attractiveness data
    riskAttractiveness: ideas.map(idea => ({
      x: idea.risk,
      y: idea.attractiveness,
      title: idea.title,
      phase: idea.phase,
      priority: idea.priority
    })),

    // Monthly trends
    monthlyTrends: getMonthlyTrends(ideas)
  };
}

function getMonthlyTrends(ideas) {
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toLocaleString('de-DE', { month: 'short' });
  }).reverse();

  const monthlyData = last6Months.map(month => {
    return ideas.filter(idea => {
      const ideaMonth = new Date(idea.createdAt)
        .toLocaleString('de-DE', { month: 'short' });
      return ideaMonth === month;
    }).length;
  });

  return {
    labels: last6Months,
    data: monthlyData
  };
}