import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface OfferWidgetProps {
  className?: string;
}
const OfferWidget: React.FC<OfferWidgetProps> = ({
  className
}) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919656778508?text=Hi!%20I%20need%20help%20with%20a%20free%2015-minute%20setup%20call', '_blank');
  };
  return;
};
export default OfferWidget;