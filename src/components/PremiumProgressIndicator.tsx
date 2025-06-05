
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface PremiumProgressIndicatorProps {
  isLoading?: boolean;
  progress?: number;
  className?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'gradient' | 'pulse';
}

const PremiumProgressIndicator: React.FC<PremiumProgressIndicatorProps> = ({
  isLoading = false,
  progress = 0,
  className,
  showPercentage = false,
  variant = 'gradient'
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (isLoading && progress === 0) {
      // Auto-animate when loading without specific progress
      const interval = setInterval(() => {
        setAnimatedProgress((prev) => {
          if (prev >= 90) return 90; // Stop at 90% until loading completes
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setAnimatedProgress(progress);
    }
  }, [isLoading, progress]);

  if (!isLoading && progress === 0) return null;

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_2s_ease-in-out_infinite]';
      case 'pulse':
        return 'bg-primary animate-pulse';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative">
        <Progress 
          value={animatedProgress} 
          className="h-1 bg-gray-200/50 backdrop-blur-sm"
        />
        {/* Custom gradient overlay */}
        <div 
          className={cn(
            'absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out',
            getVariantClasses()
          )}
          style={{ width: `${animatedProgress}%` }}
        />
        {/* Shimmer effect */}
        <div 
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite] rounded-full"
          style={{ 
            transform: `translateX(-100%)`,
            animation: isLoading ? 'shimmer 2s infinite' : 'none'
          }}
        />
      </div>
      
      {showPercentage && (
        <div className="text-xs text-muted-foreground mt-1 text-center">
          {Math.round(animatedProgress)}%
        </div>
      )}
    </div>
  );
};

export default PremiumProgressIndicator;
