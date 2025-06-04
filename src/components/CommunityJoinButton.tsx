
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommunityJoinButtonProps {
  variant?: 'primary' | 'secondary' | 'floating';
  className?: string;
  showIcon?: boolean;
}

const CommunityJoinButton: React.FC<CommunityJoinButtonProps> = ({
  variant = 'primary',
  className,
  showIcon = true
}) => {
  const handleClick = () => {
    // Track community engagement for analytics
    console.log('Community join button clicked - Business owners engagement');
  };

  const baseClasses = "font-semibold transition-all duration-300 hover:shadow-lg";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    floating: "fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-full p-4"
  };

  return (
    <Button
      asChild
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={handleClick}
      aria-label="Join Retail X Community for Business Owners and E-commerce Entrepreneurs"
    >
      <a
        href="https://www.facebook.com/share/g/12LSEquUXL7/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {showIcon && <Users className="h-4 w-4 sm:h-5 sm:w-5" />}
        <span className="text-sm sm:text-base">
          {variant === 'floating' ? 'Join Community' : 'Join Our Business Community'}
        </span>
        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
      </a>
    </Button>
  );
};

export default CommunityJoinButton;
