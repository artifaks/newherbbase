
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EbookCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  author?: string;
  category?: string;
  price: number;
  link: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ 
  id,
  title,
  description,
  imageUrl,
  author,
  category,
  price,
  link
}) => {
  const [imageError, setImageError] = useState(false);

  // Placeholder images for different categories to use if imageUrl fails
  const getCategoryPlaceholder = () => {
    const categories: Record<string, string> = {
      "herbal": "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&h=400",
      "nutrition": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=400", 
      "wellness": "https://images.unsplash.com/photo-1468971050039-be99497410af?auto=format&fit=crop&w=800&h=400",
      "general": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400",
      "default": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400"
    };

    if (!category) return categories.default;
    
    const lowerCategory = category.toLowerCase();
    
    if (lowerCategory.includes("herbal")) return categories.herbal;
    if (lowerCategory.includes("nutrition")) return categories.nutrition;
    if (lowerCategory.includes("wellness")) return categories.wellness;
    if (lowerCategory.includes("general")) return categories.general;
    
    return categories.default;
  };

  // Try to encode the title to handle special characters in URLs
  const getEncodedTitleUrl = (title: string) => {
    if (!title) return '';
    const supabaseUrl = "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/";
    const encodedTitle = encodeURIComponent(title);
    return `${supabaseUrl}/${encodedTitle}.png`;
  };

  // Default description if none provided
  const bookDescription = description || "No description available for this ebook.";
  
  // Truncate description for display
  const truncatedDescription = bookDescription.length > 100 
    ? `${bookDescription.substring(0, 100)}...` 
    : bookDescription;
    
  // Ensure price is a number before using toFixed
  const displayPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';

  // Image selection logic with fallbacks
  let displayImage = imageUrl;
  
  // If the direct imageUrl fails or isn't provided, try the encoded title URL
  if (imageError || !imageUrl) {
    if (title) {
      displayImage = getEncodedTitleUrl(title);
    } else {
      displayImage = getCategoryPlaceholder();
    }
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300 transform hover:-translate-y-1 card-hover-effect">
      <CardHeader className="p-0">
        <div className="relative h-52 w-full overflow-hidden bg-gray-100 group">
          <Link to={link}>
            <img 
              src={displayImage} 
              alt={title} 
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                console.log(`Image load error for ${title}: ${displayImage}`);
                setImageError(true);
                // Set the fallback image directly on error
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = getCategoryPlaceholder();
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          {category && (
            <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1.5 rounded-full">
              {category}
            </span>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow p-6">
        <Link to={link} className="no-underline">
          <h3 className="font-serif font-semibold text-xl mb-2 text-gray-900 hover:text-green-700 transition-colors">
            {title}
          </h3>
        </Link>
        
        {author && (
          <p className="text-sm text-gray-500 mb-3 font-medium">By {author}</p>
        )}
        
        <p className="text-gray-600 text-sm leading-relaxed">{truncatedDescription}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-6 pt-0">
        <div className="font-semibold text-green-700">${displayPrice}</div>
        <Link to={link}>
          <Button variant="default" className="bg-green-700 hover:bg-green-800 transform hover:scale-105 transition-all">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EbookCard;
