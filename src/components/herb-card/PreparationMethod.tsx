
import React from "react";
import { Coffee, Droplets, Pill, Beaker, Leaf, Circle, ChevronDown, ChevronUp } from "lucide-react";

// Map preparation methods to appropriate icons
export const getPreparationIcon = (preparation: string) => {
  const prepLower = preparation.toLowerCase();
  
  if (prepLower.includes("tea")) return <Coffee className="h-4 w-4" />;
  if (prepLower.includes("tincture")) return <Droplets className="h-4 w-4" />;
  if (prepLower.includes("capsule")) return <Pill className="h-4 w-4" />;
  if (prepLower.includes("extract")) return <Beaker className="h-4 w-4" />;
  if (prepLower.includes("powder")) return <Circle className="h-4 w-4" />;
  
  // Default icon
  return <Leaf className="h-4 w-4" />;
};

// Get preparation method color based on type
export const getPreparationColor = (preparation: string) => {
  const prepLower = preparation.toLowerCase();
  
  if (prepLower.includes("tea")) return "bg-emerald-50 border-emerald-200 text-emerald-700";
  if (prepLower.includes("tincture")) return "bg-purple-50 border-purple-200 text-purple-700";
  if (prepLower.includes("capsule")) return "bg-blue-50 border-blue-200 text-blue-700";
  if (prepLower.includes("extract")) return "bg-amber-50 border-amber-200 text-amber-700";
  if (prepLower.includes("powder")) return "bg-gray-50 border-gray-200 text-gray-700";
  
  // Default color
  return "bg-herbal-50 border-herbal-200 text-herbal-700";
};

interface PreparationMethodProps {
  method: string;
  steps: string[];
  isShowingSteps: boolean;
  togglePrepSteps: () => void;
}

const PreparationMethod = ({ method, steps, isShowingSteps, togglePrepSteps }: PreparationMethodProps) => {
  return (
    <div className="overflow-hidden rounded-md border">
      {/* Preparation Method Header */}
      <button 
        className={`w-full text-left flex items-center p-2 ${getPreparationColor(method)}`}
        onClick={togglePrepSteps}
      >
        <div className="mr-2">
          {getPreparationIcon(method)}
        </div>
        <div className="flex-grow">
          <div className="font-medium text-sm">{method}</div>
          <div className="text-xs opacity-75">
            {method.toLowerCase().includes("tea") && "Infusion of dried herb in hot water"}
            {method.toLowerCase().includes("tincture") && "Herb extracted in alcohol solution"}
            {method.toLowerCase().includes("capsule") && "Powdered herb in gelatin or vegetable capsules"}
            {method.toLowerCase().includes("extract") && "Concentrated herbal preparation"}
            {method.toLowerCase().includes("powder") && "Dried and ground herb powder"}
            {!method.toLowerCase().includes("tea") && 
              !method.toLowerCase().includes("tincture") && 
              !method.toLowerCase().includes("capsule") && 
              !method.toLowerCase().includes("extract") && 
              !method.toLowerCase().includes("powder") && "Traditional herbal preparation"}
          </div>
        </div>
        {steps.length > 0 && (
          <div className="ml-2">
            {isShowingSteps ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        )}
      </button>
      
      {/* Preparation Steps */}
      {isShowingSteps && steps.length > 0 && (
        <div className="p-3 bg-white border-t">
          <h5 className="text-xs font-semibold mb-2">Step-by-Step Instructions:</h5>
          <ol className="list-decimal pl-5 text-xs space-y-1">
            {steps.map((step, stepIndex) => (
              <li key={stepIndex}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default PreparationMethod;
