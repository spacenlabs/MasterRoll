import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EditorContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  content: Record<string, string>;
  updateContent: (id: string, value: string) => void;
  getContent: (id: string, defaultValue: string) => string;
  resetContent: () => void;
  activeElementId: string | null;
  setActiveElement: (id: string | null, type?: 'text' | 'textarea' | 'image') => void;
  activeElementType: 'text' | 'textarea' | 'image';
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({});
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const [activeElementType, setActiveElementType] = useState<'text' | 'textarea' | 'image'>('text');

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('masterroll-editor-content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
    setActiveElementId(null); // Close modal if open
  };

  const updateContent = (id: string, value: string) => {
    const newContent = { ...content, [id]: value };
    setContent(newContent);
    localStorage.setItem('masterroll-editor-content', JSON.stringify(newContent));
  };

  const getContent = (id: string, defaultValue: string) => {
    return content[id] !== undefined ? content[id] : defaultValue;
  };

  const resetContent = () => {
    if (window.confirm("Are you sure you want to reset all changes?")) {
      setContent({});
      localStorage.removeItem('masterroll-editor-content');
    }
  };

  const setActiveElement = (id: string | null, type: 'text' | 'textarea' | 'image' = 'text') => {
    setActiveElementId(id);
    setActiveElementType(type);
  };

  return (
    <EditorContext.Provider value={{
      isEditMode,
      toggleEditMode,
      content,
      updateContent,
      getContent,
      resetContent,
      activeElementId,
      setActiveElement,
      activeElementType
    }}>
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