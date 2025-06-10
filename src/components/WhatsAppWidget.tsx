
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppWidgetProps {
  className?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ className = "" }) => {
  const whatsappUrl = "https://wa.me/919656778508?text=Need%20help%3F%20We're%20here%20for%20you!%20Enjoy%20a%20free%2015-minute%20personalized%20setup%20session.";
  
  return (
    <div className={`bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors ${className}`}>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-white hover:text-white no-underline"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium">
          Need help? Get free 15-min setup on WhatsApp!
        </span>
      </a>
    </div>
  );
};

export default WhatsAppWidget;
