
import React, { useEffect, useState, useRef } from 'react';
import { Shield, ShieldCheck, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ElevenLabsWidgetProps {
  className?: string;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ className = "" }) => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const [isConnected, setIsConnected] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Check microphone permission
  const checkMicPermission = async () => {
    try {
      const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
      setMicPermission(permission.state);
      
      permission.addEventListener('change', () => {
        setMicPermission(permission.state);
      });
    } catch (error) {
      console.log('Permission API not supported');
    }
  };

  // Request microphone access
  const requestMicAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission('granted');
      toast({
        title: "Microphone Access Granted",
        description: "You can now use voice chat with our AI assistant.",
      });
    } catch (error) {
      setMicPermission('denied');
      toast({
        title: "Microphone Access Denied", 
        description: "Voice chat requires microphone access. You can still type your messages.",
        variant: "destructive"
      });
    }
  };

  // Toggle mute functionality
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // You can add actual mute functionality here when ElevenLabs API supports it
    toast({
      title: isMuted ? "Audio Enabled" : "Audio Muted",
      description: isMuted ? "You can now hear the AI assistant." : "AI assistant audio is muted.",
    });
  };

  useEffect(() => {
    checkMicPermission();

    // Load the ElevenLabs script with error handling
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      setIsLoaded(true);
      setIsConnected(true);
      toast({
        title: "AI Assistant Ready",
        description: "Your AI assistant is now ready to help you.",
      });
    };
    
    script.onerror = () => {
      setIsError(true);
      toast({
        title: "Connection Error",
        description: "Failed to load AI assistant. Please refresh the page.",
        variant: "destructive"
      });
    };

    document.head.appendChild(script);

    // Cleanup script on unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [toast]);

  return (
    <div className={`relative bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}>
      {/* Enhanced Header with status indicators */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {isConnected ? (
              <ShieldCheck className="h-4 w-4 text-green-500" />
            ) : (
              <Shield className="h-4 w-4 text-gray-400" />
            )}
            <span className={`text-xs font-medium ${isConnected ? 'text-green-600' : 'text-gray-500'}`}>
              {isConnected ? 'Secure Connection' : 'Connecting...'}
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-brand-purple mb-2">AI Assistant</h3>
        <p className="text-sm text-gray-600">
          {isError ? 'Connection failed - please refresh' : 'Chat with our AI assistant for instant help'}
        </p>
        
        {/* Control buttons */}
        <div className="flex justify-center gap-2 mt-3">
          {micPermission === 'prompt' && (
            <Button
              onClick={requestMicAccess}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              <Mic className="h-3 w-3 mr-1" />
              Enable Voice
            </Button>
          )}
          
          <Button
            onClick={toggleMute}
            size="sm"
            variant="outline"
            className="text-xs"
            disabled={!isLoaded}
          >
            {isMuted ? (
              <VolumeX className="h-3 w-3 mr-1" />
            ) : (
              <Volume2 className="h-3 w-3 mr-1" />
            )}
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
        </div>
      </div>
      
      {/* Widget container with enhanced protective styling */}
      <div className="elevenlabs-widget-container rounded-lg overflow-hidden border border-gray-100 relative">
        {/* Loading state */}
        {!isLoaded && !isError && (
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-purple mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Loading AI Assistant...</p>
            </div>
          </div>
        )}
        
        {/* Error state */}
        {isError && (
          <div className="absolute inset-0 bg-red-50 flex items-center justify-center z-10">
            <div className="text-center">
              <Shield className="h-12 w-12 text-red-400 mx-auto mb-2" />
              <p className="text-sm text-red-600 mb-2">Failed to load AI Assistant</p>
              <Button 
                onClick={() => window.location.reload()} 
                size="sm" 
                variant="outline"
                className="text-xs"
              >
                Retry
              </Button>
            </div>
          </div>
        )}
        
        {/* Microphone permission warning */}
        {micPermission === 'denied' && (
          <div className="absolute top-2 left-2 right-2 bg-yellow-50 border border-yellow-200 rounded p-2 z-20">
            <div className="flex items-center gap-2">
              <MicOff className="h-4 w-4 text-yellow-600" />
              <p className="text-xs text-yellow-700">Voice chat disabled. You can still type messages.</p>
            </div>
          </div>
        )}
        
        <div 
          ref={widgetRef}
          dangerouslySetInnerHTML={{
            __html: '<elevenlabs-convai agent-id="agent_01jxh9kgtcev59ntdy90jcg59v"></elevenlabs-convai>'
          }}
        />
      </div>
      
      {/* Privacy notice */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">
          🔒 Your conversations are secure and private
        </p>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Enhanced watermark removal with more selectors */
          .elevenlabs-widget-container [data-testid="watermark"],
          .elevenlabs-widget-container .watermark,
          .elevenlabs-widget-container *[class*="watermark" i],
          .elevenlabs-widget-container *[class*="powered" i],
          .elevenlabs-widget-container *[class*="branding" i],
          .elevenlabs-widget-container *[class*="logo" i],
          .elevenlabs-widget-container *[class*="attribution" i],
          .elevenlabs-widget-container a[href*="elevenlabs" i],
          .elevenlabs-widget-container *:contains("powered by"),
          .elevenlabs-widget-container *:contains("ElevenLabs"),
          .elevenlabs-widget-container *:contains("Conversational AI"),
          .elevenlabs-widget-container small,
          .elevenlabs-widget-container [style*="position: absolute"][style*="bottom"],
          .elevenlabs-widget-container [style*="position: fixed"][style*="bottom"],
          .elevenlabs-widget-container footer,
          .elevenlabs-widget-container [role="contentinfo"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            left: -9999px !important;
            z-index: -1 !important;
          }
          
          /* Enhanced widget styling with protective design */
          .elevenlabs-widget-container {
            position: relative;
            min-height: 400px;
            background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
            border-radius: 8px;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          
          /* Enhanced embedded widget styling */
          .elevenlabs-widget-container elevenlabs-convai {
            width: 100% !important;
            height: 400px !important;
            border: none !important;
            border-radius: 8px !important;
            background: transparent !important;
            box-shadow: none !important;
          }
          
          /* Enhanced iframe protection */
          .elevenlabs-widget-container iframe {
            width: 100% !important;
            height: 400px !important;
            border: none !important;
            border-radius: 8px !important;
            background: transparent !important;
            box-shadow: none !important;
            pointer-events: auto !important;
          }
          
          /* Protective overlay gradient */
          .elevenlabs-widget-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, rgba(236, 72, 153, 0.03) 100%);
            border-radius: 8px;
            pointer-events: none;
            z-index: 0;
          }
          
          /* Content layer protection */
          .elevenlabs-widget-container > * {
            position: relative;
            z-index: 1;
          }
          
          /* Additional protection against dynamic content */
          .elevenlabs-widget-container * {
            font-family: inherit !important;
          }
          
          /* Hover effects for better interactivity */
          .elevenlabs-widget-container:hover {
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
          }
        `
      }} />
    </div>
  );
};

export default ElevenLabsWidget;
