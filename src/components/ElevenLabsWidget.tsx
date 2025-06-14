
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
          .elevenlabs-widget-container *[class*="branding"],
          .elevenlabs-widget-container *[class*="logo"],
          .elevenlabs-widget-container *[class*="attribution"],
          .elevenlabs-widget-container a[href*="elevenlabs"],
          .elevenlabs-widget-container div:contains("powered by"),
          .elevenlabs-widget-container div:contains("ElevenLabs"),
          .elevenlabs-widget-container div:contains("Conversational AI"),
          .elevenlabs-widget-container span:contains("powered by"),
          .elevenlabs-widget-container span:contains("ElevenLabs"),
          .elevenlabs-widget-container span:contains("Conversational AI"),
          .elevenlabs-widget-container p:contains("powered by"),
          .elevenlabs-widget-container p:contains("ElevenLabs"),
          .elevenlabs-widget-container p:contains("Conversational AI"),
          .elevenlabs-widget-container small,
          .elevenlabs-widget-container [style*="position: absolute"][style*="bottom"],
          .elevenlabs-widget-container [style*="position: fixed"][style*="bottom"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            left: -9999px !important;
          }
          
          /* Additional observer to remove dynamically added watermarks */
          .elevenlabs-widget-container {
            position: relative;
          }
          
          .elevenlabs-widget-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 1000;
          }
        `
      }} />
    </div>
  );
};

export default ElevenLabsWidget;
