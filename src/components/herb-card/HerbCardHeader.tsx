
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHerbColor } from "@/utils/herbUtils";

interface HerbCardHeaderProps {
  name: string;
  scientificName: string;
  categories: string[];
  isFavorite: boolean;
  toggleFavorite: () => void;
  monogram: string;
  shapeClass: string;
}

const HerbCardHeader = ({ 
  name, 
  scientificName, 
  categories, 
  isFavorite, 
  toggleFavorite,
  monogram,
  shapeClass
}: HerbCardHeaderProps) => {
  const headerColor = getHerbColor(categories);

  return (
    <div className={`p-4 ${headerColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-9 h-9 ${shapeClass} bg-white/30 text-white font-bold text-xl`}>
            {monogram}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-xs italic opacity-80">{scientificName}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFavorite}
          className={`${isFavorite ? 'text-red-500' : 'text-gray-600'} hover:bg-white/20`}
        >
          <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
        </Button>
      </div>
    </div>
  );
};

export default HerbCardHeader;
