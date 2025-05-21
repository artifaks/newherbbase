
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface HerbHeaderProps {
  name: string;
  scientificName: string;
  categories: string[];
  imageUrl: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const HerbHeader: React.FC<HerbHeaderProps> = ({
  name,
  scientificName,
  categories,
  imageUrl,
  isFavorite,
  toggleFavorite
}) => {
  return (
    <div className="md:w-1/3 p-6">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-4 shadow-md"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/herbs/default.jpg";
        }}
      />
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-semibold text-green-800 mb-1">{name}</h1>
          <p className="text-gray-600 italic">{scientificName}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
              {category}
            </Badge>
          ))}
        </div>
        
        <Button 
          onClick={toggleFavorite}
          variant="outline"
          className={`w-full ${isFavorite ? 'bg-pink-50 text-pink-600 border-pink-200' : ''}`}
        >
          {isFavorite ? '❤️ Added to Favorites' : '🤍 Add to Favorites'}
        </Button>
      </div>
    </div>
  );
};

export default HerbHeader;
