import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ 
  phoneNumber, 
  message = "Hi! I'm interested in your products.",
  className = ""
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppWidget;