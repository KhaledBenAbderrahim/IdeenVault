import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { mockIdeas } from '../../../data/mockIdeas';

// Example approved ideas
const approvedIdeas = [
  {
    id: 1001,
    title: "KI-gestütztes Onboarding",
    shortTitle: "KI-Onboard",
    description: "Ein intelligentes Onboarding-System, das neue Mitarbeiter mit personalisierten Lernpfaden und interaktiven Tutorials unterstützt.",
    status: "Aktiv",
    priority: "Hoch",
    phase: "Entwicklung",
    type: "AI Service",
    customer: "Intern",
    creator: "Neo Anderson",
    hrApproved: true,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:45:00Z"
  },
  {
    id: 1002,
    title: "Digitaler Innovationsassistent",
    shortTitle: "DigiInnov",
    description: "Ein KI-basierter Assistent, der Mitarbeiter bei der Entwicklung und Verfeinerung ihrer Innovationsideen unterstützt.",
    status: "Aktiv",
    priority: "Mittel",
    phase: "Test",
    type: "Software",
    customer: "Intern",
    creator: "Neo Anderson",
    hrApproved: true,
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-18T11:20:00Z"
  }
];

export function useIdeas() {
  const { user } = useAuth();
  const [userIdeas, setUserIdeas] = useState([]);

  useEffect(() => {
    // Combine mock and approved ideas
    const allIdeas = [...mockIdeas, ...approvedIdeas];
    
    // Filter ideas for the current user
    const filteredIdeas = allIdeas.filter(idea => idea.creator === user?.name);
    
    setUserIdeas(filteredIdeas);
  }, [user]);

  const handleAddIdea = (newIdea) => {
    const idea = {
      ...newIdea,
      id: Date.now(), // Generate a unique ID
      creator: user?.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      hrApproved: false,
      risk: Math.random() * 5,
      attractiveness: Math.random() * 5
    };

    setUserIdeas(prevIdeas => [idea, ...prevIdeas]);
  };

  const handleDeleteIdea = (ideaId) => {
    setUserIdeas(prevIdeas => prevIdeas.filter(idea => idea.id !== ideaId));
  };

  const totalIdeasCount = userIdeas.length;
  const approvedIdeasCount = userIdeas.filter(idea => idea.hrApproved).length;

  return {
    userIdeas,
    handleAddIdea,
    handleDeleteIdea,
    totalIdeasCount,
    approvedIdeasCount
  };
}