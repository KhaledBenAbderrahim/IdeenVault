export const calculateMetrics = (ideas) => {
  const totalIdeas = ideas.length;
  
  return {
    totalIdeas,
    activeIdeas: ideas.filter(idea => idea.status === 'Aktiv').length,
    inProgressIdeas: ideas.filter(idea => idea.status === 'In Entwicklung').length,
    openIdeas: ideas.filter(idea => idea.status === 'Offen').length,
    highPriorityIdeas: ideas.filter(idea => idea.priority === 'Hoch').length,
    aiIdeas: ideas.filter(idea => idea.aiInfluence).length,
    avgRisk: (ideas.reduce((sum, idea) => sum + idea.risk, 0) / totalIdeas).toFixed(2),
    avgAttractiveness: (ideas.reduce((sum, idea) => sum + idea.attractiveness, 0) / totalIdeas).toFixed(2)
  };
};