
import React, { useState, useEffect, useRef } from 'react';
import { X, AlertCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface YouTubePlayerProps {
  videoId: string;
  onClose: () => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, onClose }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Reset states when video ID changes
    setHasError(false);
    setIsLoading(true);
    
    // Add event listener for messages from the YouTube iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = JSON.parse(event.data);
        // Handle YouTube API events
        if (data.event === "onError") {
          console.error("YouTube player API error:", data);
          setHasError(true);
        }
      } catch (e) {
        // Not a JSON message or not from YouTube API
      }
    };
    
    window.addEventListener("message", handleMessage);
    
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [videoId]);

  const handleIframeError = () => {
    console.error("YouTube player error for video ID:", videoId);
    setHasError(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle Escape key to close the player
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEscKey);
    
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="absolute top-4 right-4 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="rounded-full bg-black/20 hover:bg-black/40 text-white"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <div className="aspect-video w-full">
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="flex flex-col items-center">
                <Play className="h-12 w-12 text-gray-400 animate-pulse" />
                <p className="mt-2 text-sm text-gray-500">Loading video...</p>
              </div>
            </div>
          )}
          
          {hasError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-700 p-8">
              <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Video Unavailable</h3>
              <p className="text-center mb-4">
                This video may have been removed or is currently unavailable.
              </p>
              <Button onClick={onClose}>Close Player</Button>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&origin=${window.location.origin}&rel=0&modestbranding=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full border-0"
              onError={handleIframeError}
              onLoad={handleIframeLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
