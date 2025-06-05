
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';

export const useNavigationProgress = () => {
  const location = useLocation();
  const { startProgress, completeProgress } = useProgress();

  useEffect(() => {
    startProgress();
    const timer = setTimeout(() => {
      completeProgress();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, startProgress, completeProgress]);
};
