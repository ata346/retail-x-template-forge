
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OfferWidgetProps {
  className?: string;
}

const OfferWidget: React.FC<OfferWidgetProps> = ({ className }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919656778508?text=Hi!%20I%20need%20help%20with%20a%20free%2015-minute%20setup%20call', '_blank');
  };

  return (
    <div className={cn(
      "bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4 shadow-sm",
      className
    )}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Need help? Book a free 15-minute setup
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="h-4 w-4 text-green-600" />
            <span>WhatsApp at +91 9656778508</span>
          </div>
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          size="sm"
          className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
        >
          Book Call
        </Button>
      </div>
    </div>
  );
};

export default OfferWidget;
