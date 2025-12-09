import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Page } from '../types';

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
  goBack: () => void;
  canGoBack: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>([]);

  const navigate = (page: Page) => {
    setHistory((prev) => [...prev, currentPage]);
    setCurrentPage(page);
    // Scrolling is handled in App.tsx via useLayoutEffect
  };

  const goBack = () => {
    if (history.length === 0) return;
    
    setHistory((prev) => {
      const newHistory = [...prev];
      const previousPage = newHistory.pop();
      if (previousPage) {
        setCurrentPage(previousPage);
      }
      return newHistory;
    });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate, goBack, canGoBack: history.length > 0 }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};