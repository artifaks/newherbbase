
import { Badge } from "@/components/ui/badge";
import { X, Tag } from "lucide-react";

interface ActiveFiltersProps {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

const ActiveFilters = ({ selectedCategories, toggleCategory }: ActiveFiltersProps) => {
  if (selectedCategories.length === 0) return null;
  
  return (
    <div className="mb-6 animate-fade-in">
      <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
        <Tag className="h-4 w-4" />
        Active filters:
      </p>
      <div className="flex flex-wrap gap-2">
        {selectedCategories.map(category => (
          <Badge 
            key={category} 
            className="bg-amber-100 text-amber-800 hover:bg-amber-200 cursor-pointer px-3 py-1.5 transition-colors"
            onClick={() => toggleCategory(category)}
          >
            {category} <X className="ml-1 h-3 w-3" />
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
