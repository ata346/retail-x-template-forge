
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { officialLinks } from '@/lib/seo-utils';

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
    // Open the community link
    window.open(officialLinks.community, '_blank', 'noopener,noreferrer');
  };

  const baseClasses = "font-semibold transition-all duration-300 hover:shadow-lg";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    floating: "fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-full p-4"
  };

  return (
    <Button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={handleClick}
      aria-label="Join Retail X Community for Business Owners and E-commerce Entrepreneurs"
    >
      {variant === 'floating' ? (
        <Users className="h-6 w-6" />
      ) : (
        <>
          {showIcon && <Users className="mr-2 h-4 w-4" />}
          <span>Join Business Community</span>
          <ExternalLink className="ml-2 h-3 w-3" />
        </>
      )}
    </Button>
  );
};

export default CommunityJoinButton;
