
import { useState, useEffect } from 'react';
import { Herb } from '@/data/types/herbs';
import { supabase } from '@/integrations/supabase/client';
import { mapSupabaseToHerb, SupabaseHerb } from '@/utils/herbDataUtils';
import { toast } from '@/components/ui/use-toast';
import { mediterraneanHerbs } from '@/data/herbs';

export const useHerbDetail = (herbName: string | undefined) => {
  const [herb, setHerb] = useState<Herb | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchHerb = async () => {
      if (!herbName) {
        setError("Herb name is missing from the URL.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Try to find the herb in the database first
        const { data, error: supabaseError } = await supabase
          .from('herbs')
          .select('*')
          .ilike('name', herbName)
          .limit(1);

        if (supabaseError) {
          console.error("Supabase error:", supabaseError);
          // Don't set error yet, we'll try fallback options
        }

        // If database query succeeds and returns data
        if (data && data.length > 0) {
          const herbData = data[0] as SupabaseHerb;
          const mappedHerb = mapSupabaseToHerb(herbData);
          setHerb(mappedHerb);
          
          if (herbData.id) {
            checkIfFavorite(Number(herbData.id));
          }
          return;
        }

        // Fallback to checking local data if no results from database
        // First, check the mediterraneanHerbs array
        console.log("Checking local data for herb:", herbName);
        const localHerb = mediterraneanHerbs.find(
          h => h.name.toLowerCase() === herbName.toLowerCase()
        );

        if (localHerb) {
          console.log("Found herb in local data:", localHerb);
          setHerb(localHerb);
          if (localHerb.id) {
            checkIfFavorite(Number(localHerb.id));
          }
          return;
        }

        // If we reach here, the herb wasn't found
        setError("Herb not found in database or local data.");
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchHerb();
  }, [herbName]);

  const checkIfFavorite = async (herbId: number) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (userData?.user) {
        const { data } = await supabase
          .from('user_favorites')
          .select('*')
          .eq('user_id', userData.user.id)
          .eq('herb_id', herbId);
        
        setIsFavorite(Boolean(data?.length));
      }
    } catch (error) {
      console.error("Error checking favorites:", error);
    }
  };

  const toggleFavorite = async () => {
    if (!herb) return;
    
    const { data: userData, error: authError } = await supabase.auth.getUser();
    
    if (authError || !userData?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to add favorites",
        variant: "destructive",
      });
      return;
    }
    
    const userId = userData.user.id;
    const herbId = Number(herb.id);
    
    if (isFavorite) {
      // Remove from favorites
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', userId)
        .eq('herb_id', herbId);
        
      if (error) {
        toast({
          title: "Error",
          description: "Failed to remove from favorites",
          variant: "destructive",
        });
      } else {
        setIsFavorite(false);
        toast({
          title: "Success",
          description: "Removed from favorites",
        });
      }
    } else {
      // Add to favorites
      const { error } = await supabase
        .from('user_favorites')
        .insert({ 
          user_id: userId, 
          herb_id: herbId 
        });
        
      if (error) {
        toast({
          title: "Error",
          description: "Failed to add to favorites",
          variant: "destructive",
        });
      } else {
        setIsFavorite(true);
        toast({
          title: "Success",
          description: "Added to favorites",
        });
      }
    }
  };

  return {
    herb,
    loading,
    error,
    isFavorite,
    toggleFavorite
  };
};
