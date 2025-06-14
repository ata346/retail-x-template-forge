
import React, { useEffect } from 'react';

interface ElevenLabsWidgetProps {
  className?: string;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ className = "" }) => {
  useEffect(() => {
    // Load the ElevenLabs script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`elevenlabs-widget-container ${className}`}>
      <div 
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_01jxh9kgtcev59ntdy90jcg59v"></elevenlabs-convai>'
        }}
      />
      <style dangerouslySetInnerHTML={{
        __html: `
          .elevenlabs-widget-container [data-testid="watermark"],
          .elevenlabs-widget-container .watermark,
          .elevenlabs-widget-container *[class*="watermark"],
          .elevenlabs-widget-container *[class*="powered"],
          .elevenlabs-widget-container *[contains(text(), "powered by ElevenLabs")] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        `
      }} />
    </div>
  );
};

export default ElevenLabsWidget;
