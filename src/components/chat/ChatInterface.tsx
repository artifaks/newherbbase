import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Loader2, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Herb } from '@/data/types/herbs';
import { herbs } from '@/data/herbs';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/components/ui/use-toast';
import ChatStarterPrompts from './ChatStarterPrompts';
import ChatMessage from './ChatMessage';

// Define types for chat messages
type MessageRole = 'user' | 'assistant';

interface ChatMessage {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-message",
      content: "Hi there! I'm the Herbal Wisdom assistant. Ask me anything about medicinal herbs, their uses, benefits, or how to prepare them.",
      role: "assistant",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [useAI, setUseAI] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Find relevant herbs based on the question
  const findRelevantHerbContext = (question: string): Herb[] => {
    const lowerQuestion = question.toLowerCase();
    let matchingHerbs: Herb[] = [];
    
    // Check for herb names in the question
    matchingHerbs = herbs.filter(herb => 
      lowerQuestion.includes(herb.name.toLowerCase()) ||
      (herb.scientific_name && lowerQuestion.includes(herb.scientific_name.toLowerCase()))
    );
    
    // If no direct herb matches, look for categories or benefits
    if (matchingHerbs.length === 0) {
      // Check for categories
      const categories = Array.from(new Set(herbs.flatMap(herb => herb.categories || [])));
      const matchingCategories = categories.filter(category => 
        lowerQuestion.includes(category.toLowerCase())
      );
      
      if (matchingCategories.length > 0) {
        matchingHerbs = herbs.filter(herb => 
          herb.categories && matchingCategories.some(cat => 
            herb.categories?.map(c => c.toLowerCase()).includes(cat.toLowerCase())
          )
        );
      }
      
      // Check for benefits/uses
      if (matchingHerbs.length === 0) {
        matchingHerbs = herbs.filter(herb => 
          (herb.benefits && herb.benefits.some(benefit => 
            typeof benefit === 'string' && lowerQuestion.includes(benefit.toLowerCase())
          )) ||
          (herb.uses && herb.uses.some(use => 
            typeof use === 'string' && lowerQuestion.includes(use.toLowerCase())
          ))
        );
      }
    }
    
    // Limit to top 3 most relevant herbs to avoid overloading the context
    return matchingHerbs.slice(0, 3);
  };

  // Generate a response using OpenAI
  const generateOpenAIResponse = async (question: string): Promise<string> => {
    const relevantHerbs = findRelevantHerbContext(question);
    
    try {
      const { data, error } = await supabase.functions.invoke('herb-chat', {
        body: {
          prompt: question,
          herbContext: relevantHerbs,
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      return data.response;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      toast({
        title: "Error",
        description: "Failed to get response from AI. Falling back to basic herb matching.",
        variant: "destructive",
      });
      
      // Fallback to basic matching if OpenAI fails
      return generateBasicResponse(question);
    }
  };

  // Generate a basic response based on the database (fallback method)
  const generateBasicResponse = (question: string): string => {
    // Convert question to lowercase for easier matching
    const lowerQuestion = question.toLowerCase();
    
    // Simple keyword matching
    let matchingHerbs: Herb[] = [];
    
    // Check for herb names in the question
    matchingHerbs = herbs.filter(herb => 
      lowerQuestion.includes(herb.name.toLowerCase()) ||
      (herb.scientific_name && lowerQuestion.includes(herb.scientific_name.toLowerCase()))
    );
    
    // If no direct herb matches, look for categories or benefits
    if (matchingHerbs.length === 0) {
      // Check for categories
      const categories = Array.from(new Set(herbs.flatMap(herb => herb.categories || [])));
      const matchingCategories = categories.filter(category => 
        lowerQuestion.includes(category.toLowerCase())
      );
      
      if (matchingCategories.length > 0) {
        matchingHerbs = herbs.filter(herb => 
          herb.categories && matchingCategories.some(cat => 
            herb.categories?.map(c => c.toLowerCase()).includes(cat.toLowerCase())
          )
        );
      }
      
      // Check for benefits/uses
      if (matchingHerbs.length === 0) {
        matchingHerbs = herbs.filter(herb => 
          (herb.benefits && herb.benefits.some(benefit => 
            typeof benefit === 'string' && lowerQuestion.includes(benefit.toLowerCase())
          )) ||
          (herb.uses && herb.uses.some(use => 
            typeof use === 'string' && lowerQuestion.includes(use.toLowerCase())
          ))
        );
      }
    }
    
    // If still no matches, give a generic response
    if (matchingHerbs.length === 0) {
      if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi ') || lowerQuestion === 'hi') {
        return "Hello! I'm your herbal wisdom assistant. How can I help you with herbs today?";
      } else if (lowerQuestion.includes('thank')) {
        return "You're welcome! Feel free to ask if you have more questions about herbs.";
      } else if (lowerQuestion.includes('help') || lowerQuestion.includes('can you')) {
        return "I can help you learn about medicinal herbs, their benefits, uses, and preparations. You can ask me about specific herbs like 'Tell me about Echinacea' or ask about herbs for a specific condition like 'What herbs help with sleep?'";
      } else {
        return "I don't have specific information on that. You can ask me about specific herbs or herb categories like 'immune', 'sleep', 'digestive', etc. Or try asking 'What herbs are good for [your concern]?'";
      }
    }
    
    // Generate response based on the matching herbs
    if (matchingHerbs.length === 1) {
      const herb = matchingHerbs[0];
      let response = `**${herb.name}** (${herb.scientific_name}): ${herb.description}\n\n`;
      
      if (herb.benefits && herb.benefits.length > 0) {
        response += "**Benefits:**\n";
        herb.benefits.forEach(benefit => {
          response += `- ${benefit}\n`;
        });
        response += "\n";
      }
      
      if (herb.uses && herb.uses.length > 0) {
        response += "**Common Uses:**\n";
        herb.uses.forEach(use => {
          response += `- ${use}\n`;
        });
        response += "\n";
      }
      
      if (herb.preparations && herb.preparations.length > 0) {
        response += "**Preparations:**\n";
        herb.preparations.forEach(prep => {
          response += `- ${prep}\n`;
        });
        response += "\n";
      }
      
      if (herb.cautions && herb.cautions.length > 0) {
        response += "**Cautions:**\n";
        herb.cautions.forEach(caution => {
          response += `- ${caution}\n`;
        });
      }
      
      return response;
    } else {
      // Multiple herbs match
      let response = `I found ${matchingHerbs.length} herbs that might be relevant:\n\n`;
      
      matchingHerbs.slice(0, 3).forEach(herb => {
        response += `**${herb.name}**: ${herb.description.substring(0, 100)}...\n\n`;
      });
      
      if (matchingHerbs.length > 3) {
        response += `...and ${matchingHerbs.length - 3} more. Could you be more specific about which herb you're interested in?`;
      } else {
        response += "Would you like more detailed information about any of these herbs?";
      }
      
      return response;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    processUserInput(inputValue);
  };

  const processUserInput = async (input: string) => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use OpenAI response if enabled, otherwise use basic matching
      const response = useAI 
        ? await generateOpenAIResponse(input)
        : await generateBasicResponse(input);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error while processing your request. Please try again.",
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to format markdown-like text with basic formatting
  const formatMessage = (content: string) => {
    // Handle bold text
    let formattedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle lists
    const lines = formattedContent.split('\n');
    const formattedLines = lines.map(line => {
      if (line.startsWith('- ')) {
        return `<li>${line.substring(2)}</li>`;
      }
      return line;
    });
    
    // Convert arrays of consecutive list items into proper lists
    let finalLines: string[] = [];
    let inList = false;
    
    formattedLines.forEach(line => {
      if (line.startsWith('<li>') && !inList) {
        finalLines.push('<ul>');
        finalLines.push(line);
        inList = true;
      } else if (!line.startsWith('<li>') && inList) {
        finalLines.push('</ul>');
        finalLines.push(line);
        inList = false;
      } else {
        finalLines.push(line);
      }
    });
    
    if (inList) {
      finalLines.push('</ul>');
    }
    
    // Handle paragraphs by adding breaks between non-list text
    return finalLines.join('\n')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n([^<])/g, '<br/>$1');
  };

  const handleStarterPromptClick = (prompt: string) => {
    setInputValue(prompt);
    processUserInput(prompt);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-150px)] max-w-3xl mx-auto herb-pattern-bg rounded-lg">
      <div className="flex justify-between items-center mb-4 p-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <p className="text-sm font-medium mr-2">AI Mode:</p>
            <Switch 
              checked={useAI} 
              onCheckedChange={setUseAI} 
              className="data-[state=checked]:bg-herbal-600" 
            />
            <p className="text-sm ml-2">{useAI ? 'On' : 'Off'}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {useAI ? 'Using OpenAI' : 'Using Basic Matching'}
        </div>
      </div>

      {messages.length === 1 && (
        <ChatStarterPrompts onSelectPrompt={handleStarterPromptClick} />
      )}

      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 mb-4 rounded-lg"
      >
        {messages.map(message => (
          <ChatMessage 
            key={message.id}
            id={message.id}
            content={message.content}
            role={message.role}
            timestamp={message.timestamp}
            formatMessage={formatMessage}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0 rounded-b-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about herbs, their benefits, or uses..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading || !inputValue.trim()} 
            className="bg-herbal-600 hover:bg-herbal-700"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
