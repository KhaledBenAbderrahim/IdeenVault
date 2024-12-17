import { useState } from 'react';

export function useIdeaDetails(initialIdea) {
  const [editedFields, setEditedFields] = useState({});
  const [idea, setIdea] = useState(initialIdea);

  const handleFieldChange = (field, value) => {
    setEditedFields(prev => ({
      ...prev,
      [field]: value
    }));
    setIdea(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetChanges = () => {
    setEditedFields({});
    setIdea(initialIdea);
  };

  return {
    idea,
    editedFields,
    handleFieldChange,
    resetChanges
  };
}