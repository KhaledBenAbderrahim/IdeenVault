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
    // Filter pending ideas
    const pendingIdeas = mockIdeas.filter(idea => 
      idea.creator === user?.name && 
      idea.status === 'Offen' &&
      !idea.hrApproved
    );

    // Filter approved ideas for the current user
    const userApprovedIdeas = approvedIdeas.filter(idea =>
      idea.creator === user?.name
    );

    // Combine pending and approved ideas
    const allIdeas = [...pendingIdeas, ...userApprovedIdeas];
    
    setUserIdeas(allIdeas);
  }, [user]);

  const handleAddIdea = (newIdea) => {
    setUserIdeas(prevIdeas => [
      {
        ...newIdea,
        id: Math.max(...prevIdeas.map(i => i.id), 0) + 1,
        creator: user.name,
        status: 'Offen',
        hrApproved: false,
        createdAt: new Date().toISOString()
      },
      ...prevIdeas
    ]);
  };

  const handleDeleteIdea = (ideaId) => {
    setUserIdeas(prevIdeas => prevIdeas.filter(i => i.id !== ideaId));
  };

  // Count all ideas (both pending and approved)
  const totalIdeasCount = userIdeas.length;
  
  // Count only approved ideas
  const approvedIdeasCount = userIdeas.filter(idea => idea.hrApproved).length;

  return {
    userIdeas,
    handleAddIdea,
    handleDeleteIdea,
    totalIdeasCount,
    approvedIdeasCount
  };
}