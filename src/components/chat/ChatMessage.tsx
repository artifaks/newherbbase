
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Copy, ThumbsUp, ThumbsDown, Leaf } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/hooks/use-toast';

interface ChatMessageProps {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  formatMessage: (content: string) => string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ id, content, role, timestamp, formatMessage }) => {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  const handleCopyToClipboard = () => {
    // Strip HTML tags from message before copying
    const tempElement = document.createElement('div');
    tempElement.innerHTML = formatMessage(content);
    const textToCopy = tempElement.textContent || tempElement.innerText || content;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "The message has been copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    });
  };

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    toast({
      title: type === 'up' ? "Thank you for the feedback!" : "We'll improve our responses",
      description: type === 'up' ? 
        "We're glad you found this helpful" : 
        "Thank you for helping us improve",
    });
  };

  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <Card 
        className={`p-4 max-w-[80%] ${
          role === 'user' 
            ? 'bg-amber-100 text-amber-900' 
            : 'bg-white border-amber-200 relative'
        }`}
      >
        <div className="flex items-start gap-3">
          {role === 'assistant' && (
            <Avatar className="h-8 w-8 bg-herbal-600 text-white">
              <Leaf className="h-4 w-4" />
            </Avatar>
          )}
          <div>
            <div 
              className="text-sm whitespace-pre-wrap break-words"
              dangerouslySetInnerHTML={{ __html: formatMessage(content) }}
            />
            <div className="text-xs text-gray-500 mt-1">
              {timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
          </div>
        </div>
        
        {role === 'assistant' && (
          <div className="flex gap-2 items-center justify-end mt-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={handleCopyToClipboard}
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Copy response</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={() => handleFeedback('up')}
                    className={`${feedback === 'up' ? 'text-amber-600' : 'text-gray-400 hover:text-amber-600'} transition-colors`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>This was helpful</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={() => handleFeedback('down')}
                    className={`${feedback === 'down' ? 'text-amber-600' : 'text-gray-400 hover:text-amber-600'} transition-colors`}
                  >
                    <ThumbsDown className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>This could be improved</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ChatMessage;
