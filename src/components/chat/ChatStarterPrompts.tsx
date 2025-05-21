
import React from 'react';
import { Leaf } from 'lucide-react';

interface ChatStarterPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const ChatStarterPrompts: React.FC<ChatStarterPromptsProps> = ({ onSelectPrompt }) => {
  const starterPrompts = [
    "What herbs help with anxiety?",
    "How do I prepare chamomile tea?",
    "Best herbs for immunity?",
    "Herbs for better sleep",
    "Natural remedies for headaches"
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4 p-4">
      {starterPrompts.map((prompt, index) => (
        <button
          key={index}
          className="bg-amber-50 text-amber-800 px-3 py-2 rounded-full text-sm border border-amber-200 hover:bg-amber-100 transition-colors flex items-center shadow-sm"
          onClick={() => onSelectPrompt(prompt)}
        >
          <Leaf className="h-3 w-3 mr-1" /> {prompt}
        </button>
      ))}
    </div>
  );
};

export default ChatStarterPrompts;
