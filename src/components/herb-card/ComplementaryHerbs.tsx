
import React from "react";
import { Link } from "lucide-react";

interface ComplementaryHerb {
  name: string;
  reason: string;
}

interface ComplementaryHerbsProps {
  complementaryHerbs: ComplementaryHerb[];
  currentHerbName: string;
}

const ComplementaryHerbs = ({ complementaryHerbs, currentHerbName }: ComplementaryHerbsProps) => {
  if (complementaryHerbs.length === 0) return null;
  
  return (
    <div className="mt-4">
      <h4 className="font-medium text-sm mb-2 text-amber-700 flex items-center">
        <Link className="h-4 w-4 mr-1 text-amber-600" />
        <span>Complementary Herbs</span>
      </h4>
      <div className="space-y-2">
        {complementaryHerbs.map((complementary, index) => (
          <div key={index} className="p-2 bg-amber-50 rounded-md text-sm">
            <div className="font-medium">{complementary.name} + {currentHerbName}</div>
            <div className="text-xs text-gray-600">{complementary.reason}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplementaryHerbs;
