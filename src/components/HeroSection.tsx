import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { HerbData } from "@/data/fetchHerbs";

// Featured herbs data for fallback
const featuredHerbs = [
  {
    name: "Ashwagandha",
    description: "Adaptogen that reduces stress and boosts energy.",
    imageName: "ashwagandha.jpg"
  },
  {
    name: "Turmeric",
    description: "Anti-inflammatory herb with powerful antioxidant effects.",
    imageName: "turmeric.jpg"
  },
  {
    name: "Ginger",
    description: "Supports digestion and reduces nausea.",
    imageName: "ginger.jpg"
  },
  {
    name: "Holy Basil",
    description: "Promotes mental clarity and respiratory health.",
    imageName: "holy-basil.jpg"
  }
];

// Fallback images from public directory
const fallbackImages = {
  "ashwagandha.jpg": "/herbs/ashwagandha.jpg",
  "turmeric.jpg": "/herbs/turmeric.jpg",
  "ginger.jpg": "/herbs/ginger.jpg",
  "holy-basil.jpg": "/herbs/holy-basil.jpg",
};

// Supabase URL and bucket configurations
const SUPABASE_URL = "https://elhhfkmuivqbgrbennmo.supabase.co";
const HERB_IMAGES_BUCKET = "herb.images";
const HERO_BACKGROUND_IMAGE = `${SUPABASE_URL}/storage/v1/object/public/${HERB_IMAGES_BUCKET}/ashwagandha.jpg`;

export default function HeroSection() {
  const [currentHerbIndex, setCurrentHerbIndex] = useState(0);
  const [herbs, setHerbs] = useState<HerbData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Fetch herbs data from Supabase database
  useEffect(() => {
    let isMounted = true;
    
    const fetchHerbs = async () => {
      try {
        console.log("Fetching herbs data from Supabase database...");
        
        const { data, error } = await supabase
          .from('herbs')
          .select('id, name, description, scientific_name, image_url')
          .in('name', ['Ashwagandha', 'Turmeric', 'Ginger', 'Holy Basil'])
          .limit(4);
          
        if (!isMounted) return;
          
        if (error) {
          console.error("Error fetching herbs:", error);
          console.error("Error details:", {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          toast({
            title: "Failed to load herbs",
            description: "There was an error loading the featured herbs.",
            variant: "destructive",
          });
          
          // Use fallback data on error
          useFallbackData();
          return;
        }
        
        if (!data || data.length === 0) {
          console.warn("No herbs data returned");
          toast({
            title: "No herbs found",
            description: "Using fallback data for featured herbs.",
            variant: "destructive",
          });
          
          // Use the static data as fallback
          useFallbackData();
          return;
        }

        console.log("Successfully loaded herbs:", data);
        setHerbs(data as HerbData[]);
      } catch (error) {
        if (!isMounted) return;
        
        console.error("Unexpected error:", error);
        toast({
          title: "Error loading herbs",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
        
        // Use fallback data on error
        useFallbackData();
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    const useFallbackData = () => {
      if (!isMounted) return;
      
      const fallbackData: HerbData[] = featuredHerbs.map((herb, index) => ({
        id: `fallback-${index}`,
        name: herb.name,
        description: herb.description,
        scientific_name: "",
        image_url: herb.imageName
      }));
      
      setHerbs(fallbackData);
    };
    
    fetchHerbs();
    
    return () => {
      isMounted = false;
    };
  }, [toast]);

  // Auto-rotate featured herbs
  useEffect(() => {
    if (herbs.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentHerbIndex((prevIndex) => 
        prevIndex === herbs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [herbs.length]);
  
  const nextHerb = () => {
    if (herbs.length === 0) return;
    
    setCurrentHerbIndex((prevIndex) => 
      prevIndex === herbs.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevHerb = () => {
    if (herbs.length === 0) return;
    
    setCurrentHerbIndex((prevIndex) => 
      prevIndex === 0 ? herbs.length - 1 : prevIndex - 1
    );
  };

  // Get image URL for a herb or use fallback
  const getHerbImageUrl = (herb: HerbData) => {
    // Log the herb image_url for debugging
    console.log(`Processing image for ${herb.name}, image_url:`, herb.image_url);
    
    // If we're using the image from the Supabase bucket
    if (herb.image_url) {
      // Check if it's a direct URL
      if (herb.image_url.startsWith('http')) {
        return herb.image_url;
      }
      
      // For legacy database entries, image_url might contain 'public/'
      if (herb.image_url.startsWith('public/')) {
        const imagePath = herb.image_url.replace('public/', '');
        console.log(`Formatted public path: ${SUPABASE_URL}/storage/v1/object/public/${imagePath}`);
        return `${SUPABASE_URL}/storage/v1/object/public/${imagePath}`;
      }
      
      // For fallback data or direct image name references
      // Format to use the herb.images bucket
      const bucketUrl = `${SUPABASE_URL}/storage/v1/object/public/${HERB_IMAGES_BUCKET}/${herb.image_url}`;
      console.log(`Using bucket URL: ${bucketUrl}`);
      return bucketUrl;
    }
    
    // Fallback logic - match herb name to static images
    const matchingStaticHerb = featuredHerbs.find(h => h.name === herb.name);
    if (matchingStaticHerb) {
      const fallbackUrl = fallbackImages[matchingStaticHerb.imageName as keyof typeof fallbackImages] || 
        `/herbs/default.jpg`;
      console.log(`Using fallback image: ${fallbackUrl}`);
      return fallbackUrl;
    }
    
    // Ultimate fallback
    return `/herbs/default.jpg`;
  };

  return (
    <div
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-400/30"></div>
      
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.span
          className="inline-block text-green-100 font-medium mb-3 text-lg md:text-xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Nature's Remedies for Modern Life
        </motion.span>
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Welcome to <span className="italic text-green-100">Herbal Wisdom</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Discover the power of nature's remedies and unlock a world of wellness through ancient traditions and modern science.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <Link 
            to="/herbs"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Explore Herbs
          </Link>
          <Link 
            to="/ebooks"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Browse eBooks
          </Link>
        </motion.div>
        
        {/* Featured Herbs Carousel */}
        <motion.div 
          className="mt-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-4">Featured Herbs</h2>
          
          {isLoading ? (
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
              <div className="animate-pulse flex items-center justify-center h-24">
                <p>Loading featured herbs...</p>
              </div>
            </div>
          ) : herbs.length > 0 ? (
            <div className="relative">
              <button 
                onClick={prevHerb}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
                aria-label="Previous herb"
                disabled={isLoading}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="overflow-hidden relative">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentHerbIndex * 100}%)` }}
                >
                  {herbs.map((herb, index) => (
                    <motion.div 
                      key={herb.id || index}
                      className="min-w-full flex flex-col md:flex-row items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-green-100 rounded-full overflow-hidden flex-shrink-0 relative">
                        <img 
                          src={getHerbImageUrl(herb)} 
                          alt={herb.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.log(`Image load error for ${herb.name}`);
                            console.log(`Attempted URL: ${getHerbImageUrl(herb)}`);
                            // Use a default fallback image
                            e.currentTarget.src = "/herbs/default.jpg";
                          }}
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">{herb.name}</h3>
                        <p className="text-white/90">{herb.description}</p>
                        {herb.scientific_name && (
                          <p className="text-sm text-white/70 italic mt-1">{herb.scientific_name}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={nextHerb}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
                aria-label="Next herb"
                disabled={isLoading}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
              <p>No featured herbs found. Please check back later.</p>
            </div>
          )}
          
          {/* Dots indicator */}
          {herbs.length > 0 && (
            <div className="flex justify-center mt-4 space-x-2">
              {herbs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHerbIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentHerbIndex === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to herb ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
