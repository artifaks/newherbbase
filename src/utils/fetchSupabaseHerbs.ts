
import { supabase } from "@/integrations/supabase/client";
import { Herb } from "@/data/types/herbs";
import { mapSupabaseToHerb, SupabaseHerb } from "@/utils/herbDataUtils";
import { toast } from "@/components/ui/use-toast";

export async function fetchSupabaseHerbs(): Promise<Herb[]> {
  try {
    console.log("Fetching herbs from Supabase database...");
    
    // Get the current timestamp for logging
    const fetchStartTime = new Date().toISOString();
    
    // Fetch herbs with pagination to handle large datasets
    const PAGE_SIZE = 100;
    let allHerbs: SupabaseHerb[] = [];
    let hasMore = true;
    let page = 0;
    
    // Paginate through all herbs
    while (hasMore) {
      const { data, error, count } = await supabase
        .from('herbs')
        .select('*', { count: 'exact' })
        .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);
        
      if (error) {
        console.error("Error fetching herbs from Supabase:", error);
        toast({
          title: "Database Error",
          description: "Failed to retrieve herbs from database. Falling back to local data.",
          variant: "destructive",
        });
        return [];
      }
      
      if (!data || data.length === 0) {
        hasMore = false;
      } else {
        allHerbs = [...allHerbs, ...data as SupabaseHerb[]];
        page++;
        
        // If we fetched less than PAGE_SIZE, we've reached the end
        if (data.length < PAGE_SIZE) {
          hasMore = false;
        }
      }
    }
    
    console.log(`Successfully fetched ${allHerbs.length} herbs from Supabase at ${fetchStartTime}`);
    
    if (allHerbs.length === 0) {
      console.warn("No herbs found in Supabase database");
      return [];
    }
    
    // Map Supabase herb data to our application's Herb interface with enhanced error handling
    return allHerbs.map(herb => {
      try {
        return mapSupabaseToHerb(herb);
      } catch (error) {
        console.error(`Error mapping herb ${herb.id} - ${herb.name}:`, error);
        // Return a minimal valid herb to avoid breaking the application
        return {
          id: typeof herb.id === 'number' ? herb.id : 9999,
          name: herb.name || "Unknown Herb",
          scientific_name: herb.scientific_name || "Unknown",
          description: herb.description || "No description available",
          benefits: [],
          uses: [],
          preparations: [],
          dosage: "",
          cautions: [],
          categories: [herb.category || "Unknown"]
        };
      }
    });
    
  } catch (error) {
    console.error("Unexpected error fetching herbs from Supabase:", error);
    
    // Show user-friendly error notification
    toast({
      title: "Connection Error",
      description: "Could not connect to herb database. Using local data instead.",
      variant: "destructive",
    });
    
    return [];
  }
}

// Add a function to check the database connection
export async function checkSupabaseConnection(): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('herbs')
      .select('id')
      .limit(1);
      
    return !error;
  } catch (error) {
    console.error("Error checking Supabase connection:", error);
    return false;
  }
}
