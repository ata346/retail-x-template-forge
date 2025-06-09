
import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';

interface OfferWidgetProps {
  className?: string;
}

const OfferWidget: React.FC<OfferWidgetProps> = ({ className = "" }) => {
  return (
    <div className={`bg-gradient-to-r from-brand-coral to-brand-coral/90 text-white px-4 py-3 rounded-lg shadow-md border border-white/20 ${className}`}>
      <div className="flex items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-white" />
          <Clock className="h-4 w-4 text-white/80" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium leading-relaxed">
            <span className="font-bold">Need help? We're here for you!</span> Enjoy a free 15-minute personalized setup session. 
            Feel free to reach out anytime—
            <a 
              href="https://wa.me/919656778508" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold underline hover:text-white/90 transition-colors ml-1"
            >
              WhatsApp us at +91 9656778508
            </a>
            . Let's get started together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferWidget;
