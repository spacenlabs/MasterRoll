import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EditorContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  content: Record<string, string>;
  updateContent: (id: string, value: string) => void;
  saveChanges: () => void;
  resetChanges: () => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('masterroll_content');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const updateContent = (id: string, value: string) => {
    setContent(prev => ({ ...prev, [id]: value }));
  };

  const saveChanges = () => {
    localStorage.setItem('masterroll_content', JSON.stringify(content));
    alert('Changes saved to local storage!');
    setIsEditMode(false);
  };

  const resetChanges = () => {
    if (confirm('Are you sure you want to reset all changes?')) {
      localStorage.removeItem('masterroll_content');
      setContent({});
      window.location.reload();
    }
  };

  return (
    <EditorContext.Provider value={{ isEditMode, toggleEditMode, content, updateContent, saveChanges, resetChanges }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};