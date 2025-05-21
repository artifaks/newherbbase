
import React from "react";
import { Check, Circle, Shield, Moon, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categoryColors, getHerbGroup } from "@/utils/herbUtils";

interface CategoryDisplayProps {
  categories: string[];
}

const CategoryDisplay = ({ categories }: CategoryDisplayProps) => {
  const herbGroup = getHerbGroup(categories);

  // Helper function to get emoji for category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Immune": 
        return <Shield size={16} className="text-emerald-600" />;
      case "Sleep": 
        return <Moon size={16} className="text-purple-600" />;
      case "Anti-inflammatory": 
        return <Activity size={16} className="text-rose-600" />;
      default:
        return <Circle size={16} className="text-green-600" />;
    }
  };

  return (
    <>
      {/* Visual group representation */}
      <div className="mb-3">
        <Badge 
          variant="outline" 
          className={`${herbGroup.color.replace('bg-', 'bg-opacity-20 bg-')} text-${herbGroup.color.replace('bg-', '')} border-${herbGroup.color.replace('bg-', '')}`}
        >
          {herbGroup.name}
        </Badge>
      </div>
      
      {/* Visual category representation with icons */}
      <div className="space-y-2 mb-4">
        {["Immune", "Anti-inflammatory", "Sleep"].map((category) => (
          <div key={category} className="flex items-center gap-2">
            <span className="text-sm w-28 text-gray-600 flex items-center gap-1">
              {getCategoryIcon(category)} {category}:
            </span>
            {categories.includes(category) ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Circle size={16} className="text-gray-300" />
            )}
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-1 mt-2">
        {categories.map((category, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className={categoryColors[category] || "bg-herbal-50 text-herbal-700 border-herbal-200"}
          >
            {category}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default CategoryDisplay;
