import { useState } from 'react';

export function useModals(onDelete) {
  const [showNewIdeaForm, setShowNewIdeaForm] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [deleteIdea, setDeleteIdea] = useState(null);

  const handleDeleteConfirm = () => {
    if (deleteIdea) {
      onDelete(deleteIdea.id);
      setDeleteIdea(null);
      setSelectedIdea(null);
    }
  };

  return {
    showNewIdeaForm,
    setShowNewIdeaForm,
    selectedIdea,
    setSelectedIdea,
    deleteIdea,
    setDeleteIdea,
    handleDeleteConfirm
  };
}