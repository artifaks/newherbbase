import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HerbOfDayData {
  id: number;
  name: string;
  scientific_name: string;
  description: string;
  image_url: string | null;
  featured_date?: string;
}

export default function HerbOfTheDay() {
  const [herbOfDay, setHerbOfDay] = useState<HerbOfDayData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchHerbOfDay = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const { data, error: supabaseError } = await supabase
          .from('herbs')
          .select('id, name, scientific_name, description, image_url')
          .order('id', { ascending: false })
          .limit(1)
          .single();
          
        if (supabaseError) {
          console.error("Error fetching herb of the day:", supabaseError);
          console.error("Error details:", {
            message: supabaseError.message,
            details: supabaseError.details,
            hint: supabaseError.hint,
            code: supabaseError.code
          });
          setError("Failed to load herb of the day");
          toast({
            title: "Error",
            description: "Could not load the herb of the day.",
            variant: "destructive",
          });
          return;
        }
        
        if (!data) {
          console.warn("No herb found");
          setError("No herb of the day available");
          toast({
            title: "No herb found",
            description: "There is no herb of the day available at the moment.",
            variant: "destructive",
          });
          return;
        }

        console.log("Successfully loaded herb of the day:", data);
        setHerbOfDay(data);
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
        toast({
          title: "Error",
          description: "An unexpected error occurred while loading the herb of the day.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchHerbOfDay();
  }, [toast]);

  if (isLoading) {
    return (
      <div className="bg-green-50 p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-green-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-green-100 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-green-100 rounded w-full mb-3"></div>
        <div className="h-4 bg-green-100 rounded w-2/3"></div>
      </div>
    );
  }

  if (!herbOfDay) {
    return null;
  }

  // Format the image URL for display
  const imageUrl = herbOfDay.image_url || `/herbs/default.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-50 rounded-lg overflow-hidden shadow-md"
    >
      <div className="p-4 bg-green-700 text-white flex items-center justify-between">
        <h3 className="font-semibold text-lg flex items-center">
          <Leaf className="mr-2 h-5 w-5" />
          Herb of the Day
        </h3>
        <span className="text-xs opacity-80">
          {new Date().toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric'
          })}
        </span>
      </div>
      
      <div className="p-5">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:w-24 h-24 rounded-full overflow-hidden bg-green-100 flex-shrink-0 mx-auto sm:mx-0">
            <img 
              src={imageUrl} 
              alt={herbOfDay.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300";
              }}
            />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-medium text-green-800">{herbOfDay.name}</h4>
            <p className="text-sm italic text-gray-600 mb-2">{herbOfDay.scientific_name}</p>
            <p className="text-sm text-gray-700 line-clamp-3">{herbOfDay.description}</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link to={`/herbs/${encodeURIComponent(herbOfDay.name)}`}>
            <Button variant="outline" size="sm" className="text-green-700 hover:text-green-800 border-green-700 hover:border-green-800">
              <Info className="mr-1 h-4 w-4" />
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
