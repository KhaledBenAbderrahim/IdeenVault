// Data processing utilities for HR dashboard
import { mockIdeas } from '../../../data/mockIdeas';

// Get total counts
export const getIdeaCounts = () => {
  const total = mockIdeas.length;
  const active = mockIdeas.filter(idea => idea.status === 'Aktiv').length;
  const inDevelopment = mockIdeas.filter(idea => idea.phase === 'Entwicklung').length;
  const successful = mockIdeas.filter(idea => idea.mvpMaturity >= '70%').length;
  const newIdeas = mockIdeas.filter(idea => {
    const createdDate = new Date(idea.createdAt);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return createdDate > oneMonthAgo;
  }).length;

  return {
    total,
    active,
    inDevelopment,
    successful,
    newIdeas
  };
};

// Get monthly submission data
export const getMonthlySubmissions = () => {
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toLocaleString('de-DE', { month: 'short' });
  }).reverse();

  const monthlyData = last6Months.map(month => {
    return mockIdeas.filter(idea => {
      const ideaMonth = new Date(idea.createdAt)
        .toLocaleString('de-DE', { month: 'short' });
      return ideaMonth === month;
    }).length;
  });

  return {
    labels: last6Months,
    data: monthlyData
  };
};

// Get success rate data
export const getSuccessRate = () => {
  const successful = mockIdeas.filter(idea => idea.mvpMaturity >= '70%').length;
  const inDevelopment = mockIdeas.filter(idea => 
    idea.mvpMaturity >= '30%' && idea.mvpMaturity < '70%'
  ).length;
  const notImplemented = mockIdeas.filter(idea => idea.mvpMaturity < '30%').length;

  return {
    labels: ['Erfolgreich', 'In Entwicklung', 'Nicht umgesetzt'],
    data: [successful, inDevelopment, notImplemented]
  };
};

// Get risk vs attractiveness data
export const getRiskAttractiveness = () => {
  return mockIdeas.map(idea => ({
    x: idea.risk,
    y: idea.attractiveness,
    title: idea.title,
    phase: idea.phase,
    priority: idea.priority
  }));
};

// Get latest ideas
export const getLatestIdeas = (limit = 5) => {
  return [...mockIdeas]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
};

// Filter and sort ideas
export const filterAndSortIdeas = (
  ideas = mockIdeas,
  { searchTerm = '', sortBy = 'date', filterType = 'all' } = {}
) => {
  return ideas
    .filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          idea.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || idea.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'priority') return b.priority.localeCompare(a.priority);
      if (sortBy === 'phase') return a.phase.localeCompare(b.phase);
      return 0;
    });
};

// Get innovation types
export const getInnovationTypes = () => {
  return [...new Set(mockIdeas.map(idea => idea.type))];
};

// Get trend data
export const getTrendData = () => {
  const currentMonth = new Date().getMonth();
  const lastMonth = currentMonth - 1;
  
  const currentMonthIdeas = mockIdeas.filter(idea => 
    new Date(idea.createdAt).getMonth() === currentMonth
  ).length;
  
  const lastMonthIdeas = mockIdeas.filter(idea => 
    new Date(idea.createdAt).getMonth() === lastMonth
  ).length;

  const percentageChange = lastMonthIdeas === 0 ? 100 :
    ((currentMonthIdeas - lastMonthIdeas) / lastMonthIdeas) * 100;

  return {
    currentMonth: currentMonthIdeas,
    lastMonth: lastMonthIdeas,
    trend: percentageChange.toFixed(1)
  };
};