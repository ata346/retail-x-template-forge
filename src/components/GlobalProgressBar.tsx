
import React from 'react';
import { useProgress } from '@/contexts/ProgressContext';
import PremiumProgressIndicator from './PremiumProgressIndicator';

const GlobalProgressBar: React.FC = () => {
  const { isLoading, progress } = useProgress();

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-background/80 backdrop-blur-sm">
      <PremiumProgressIndicator 
        isLoading={isLoading}
        progress={progress}
        variant="gradient"
        className="w-full"
      />
    </div>
  );
};

export default GlobalProgressBar;
