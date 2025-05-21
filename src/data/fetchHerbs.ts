
import { supabase } from "@/integrations/supabase/client";

export interface HerbData {
  id: string | number;  // Allow both string and number to handle different formats
  name: string;
  description: string;
  scientific_name: string;
  image_url: string | null;
}

export async function fetchHerbsFromStorage(): Promise<HerbData[]> {
  try {
    console.log("Fetching featured herbs from Supabase...");
    
    const { data, error } = await supabase
      .from('herbs')
      .select('id, name, description, scientific_name, image_url')
      .in('name', ['Ashwagandha', 'Turmeric', 'Ginger', 'Holy Basil'])
      .limit(4);
      
    if (error) {
      console.error("Error fetching herbs:", error);
      return getFallbackHerbs();
    }
    
    if (!data || data.length === 0) {
      console.warn("No herbs found in database, using fallback data");
      return getFallbackHerbs();
    }
    
    // Process the herb data to ensure image URLs are properly formatted
    return data.map(herb => {
      return {
        ...herb,
        image_url: formatHerbImageUrl(herb.image_url)
      };
    });
    
  } catch (error) {
    console.error("Unexpected error fetching herbs:", error);
    return getFallbackHerbs();
  }
}

// Format the image URL based on different possible formats
function formatHerbImageUrl(imageUrl: string | null): string {
  const SUPABASE_URL = "https://elhhfkmuivqbgrbennmo.supabase.co";
  const HERB_IMAGES_BUCKET = "herb.images";
  
  // Default fallback image
  const DEFAULT_IMAGE = "/herbs/default.jpg";
  
  if (!imageUrl) return DEFAULT_IMAGE;
  
  // If it's already a full URL, return it
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // If it's a path starting with public/ (legacy format)
  if (imageUrl.startsWith('public/')) {
    const imagePath = imageUrl.replace('public/', '');
    return `${SUPABASE_URL}/storage/v1/object/public/${imagePath}`;
  }
  
  // For direct image name references, construct the full bucket URL
  return `${SUPABASE_URL}/storage/v1/object/public/${HERB_IMAGES_BUCKET}/${imageUrl}`;
}

// Fallback herbs data when database fetch fails
function getFallbackHerbs(): HerbData[] {
  return [
    {
      id: "fallback-1",
      name: "Ashwagandha",
      description: "Adaptogen that reduces stress and boosts energy.",
      scientific_name: "Withania somnifera",
      image_url: "/herbs/ashwagandha.jpg"
    },
    {
      id: "fallback-2",
      name: "Turmeric",
      description: "Anti-inflammatory herb with powerful antioxidant effects.",
      scientific_name: "Curcuma longa",
      image_url: "/herbs/turmeric.jpg"
    },
    {
      id: "fallback-3",
      name: "Ginger",
      description: "Supports digestion and reduces nausea.",
      scientific_name: "Zingiber officinale",
      image_url: "/herbs/ginger.jpg"
    },
    {
      id: "fallback-4",
      name: "Holy Basil",
      description: "Promotes mental clarity and respiratory health.",
      scientific_name: "Ocimum sanctum",
      image_url: "/herbs/holy-basil.jpg"
    }
  ];
}
