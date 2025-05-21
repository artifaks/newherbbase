
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";

interface HerbFiltersProps {
  categories: string[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  clearFilters: () => void;
}

const HerbFilters = ({
  categories,
  selectedCategories,
  toggleCategory,
  clearFilters
}: HerbFiltersProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-amber-700 flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filter by Category:
        </h2>
        {selectedCategories.length > 0 && (
          <Button 
            variant="outline" 
            size="sm"
            className="border-amber-300 text-amber-700 hover:bg-amber-50 flex items-center"
            onClick={clearFilters}
          >
            <X className="h-4 w-4 mr-1" />
            Clear filters
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button 
            key={category}
            variant={selectedCategories.includes(category) ? "default" : "outline"}
            className={selectedCategories.includes(category) 
              ? "bg-amber-600 hover:bg-amber-700 transition-colors" 
              : "border-amber-300 text-amber-700 hover:bg-amber-50 transition-colors"}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HerbFilters;
