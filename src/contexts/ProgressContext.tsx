
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProgressContextType {
  isLoading: boolean;
  progress: number;
  setLoading: (loading: boolean) => void;
  setProgress: (progress: number) => void;
  startProgress: () => void;
  completeProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (!loading) {
      setProgress(0);
    }
  };

  const startProgress = () => {
    setIsLoading(true);
    setProgress(0);
  };

  const completeProgress = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 500);
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        isLoading, 
        progress, 
        setLoading, 
        setProgress, 
        startProgress, 
        completeProgress 
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
