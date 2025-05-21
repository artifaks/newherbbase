
import React from "react";
import { AlertTriangle } from "lucide-react";

interface CautionsSectionProps {
  cautions: string[];
}

const CautionsSection = ({ cautions }: CautionsSectionProps) => {
  if (cautions.length === 0) return null;
  
  return (
    <div className="mt-4">
      <h4 className="font-medium text-sm mb-2 text-amber-700 flex items-center">
        <AlertTriangle className="h-4 w-4 mr-1 text-amber-600" />
        <span>Cautions</span>
      </h4>
      <ul className="list-disc pl-5 text-xs text-gray-600">
        {cautions.map((caution, index) => (
          <li key={index}>{caution}</li>
        ))}
      </ul>
    </div>
  );
};

export default CautionsSection;
