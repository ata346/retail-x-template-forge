
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
    <div className={`relative bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}>
      {/* Header for the widget */}
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-brand-purple mb-2">AI Assistant</h3>
        <p className="text-sm text-gray-600">Chat with our AI assistant for instant help</p>
      </div>
      
      {/* Widget container with natural styling */}
      <div className="elevenlabs-widget-container rounded-lg overflow-hidden border border-gray-100">
        <div 
          dangerouslySetInnerHTML={{
            __html: '<elevenlabs-convai agent-id="agent_01jxh9kgtcev59ntdy90jcg59v"></elevenlabs-convai>'
          }}
        />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide all watermarks and branding */
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
          
          /* Style the widget to look natural */
          .elevenlabs-widget-container {
            position: relative;
            min-height: 400px;
            background: #fafafa;
            border-radius: 8px;
          }
          
          /* Style the embedded widget */
          .elevenlabs-widget-container elevenlabs-convai {
            width: 100% !important;
            height: 400px !important;
            border: none !important;
            border-radius: 8px !important;
            background: transparent !important;
          }
          
          /* Override any iframe styling if present */
          .elevenlabs-widget-container iframe {
            width: 100% !important;
            height: 400px !important;
            border: none !important;
            border-radius: 8px !important;
            background: transparent !important;
          }
          
          /* Additional styling for natural appearance */
          .elevenlabs-widget-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
            border-radius: 8px;
            pointer-events: none;
            z-index: 0;
          }
          
          /* Ensure content is above the gradient */
          .elevenlabs-widget-container > * {
            position: relative;
            z-index: 1;
          }
        `
      }} />
    </div>
  );
};

export default ElevenLabsWidget;
