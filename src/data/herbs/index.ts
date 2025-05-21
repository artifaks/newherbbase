import { Herb } from "../types/herbs";
import { adaptogenicHerbs } from "./adaptogenic";
import { antiInflammatoryHerbs } from "./antiInflammatory";
import { cardiovascularHerbs } from "./cardiovascular";
import { detoxHerbs } from "./detox";
import { digestiveHerbs } from "./digestive";
import { firstAidHerbs } from "./firstAid";
import { immuneHerbs } from "./immune";
import { sleepHerbs } from "./sleep";
import { tropicalHerbs } from "./tropical";
import { womensHealthHerbs } from "./womensHealth";
import { nervineHerbs } from "./nervine";
import { cognitiveHerbs } from "./cognitive";
import { skinHerbs } from "./skin";
import { mensHealthHerbs } from "./mensHealth";
import { mediterraneanHerbs } from "./mediterranean";
import { fetchSupabaseHerbs } from "@/utils/fetchSupabaseHerbs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

// Combine all herbs into a single array
export const allHerbs: Herb[] = [
  ...adaptogenicHerbs,
  ...antiInflammatoryHerbs,
  ...cardiovascularHerbs,
  ...detoxHerbs,
  ...digestiveHerbs,
  ...firstAidHerbs, 
  ...immuneHerbs,
  ...sleepHerbs,
  ...tropicalHerbs,
  ...womensHealthHerbs,
  ...nervineHerbs,
  ...cognitiveHerbs,
  ...skinHerbs,
  ...mensHealthHerbs,
  ...mediterraneanHerbs
];

// Export all category arrays for direct access
export {
  adaptogenicHerbs,
  antiInflammatoryHerbs,
  cardiovascularHerbs,
  detoxHerbs,
  digestiveHerbs,
  firstAidHerbs,
  immuneHerbs,
  sleepHerbs,
  tropicalHerbs,
  womensHealthHerbs,
  nervineHerbs,
  cognitiveHerbs,
  skinHerbs,
  mensHealthHerbs,
  mediterraneanHerbs
};

// For compatibility with existing code that imports 'herbs'
export const herbs = allHerbs;

// State to store the herbs data once fetched from Supabase
let fetchedHerbs: Herb[] | null = null;

// Helper function to initialize herbs from Supabase
export const initializeHerbs = async (): Promise<Herb[]> => {
  try {
    console.log("Initializing herbs - checking for Supabase data...");
    
    // Check if we've already fetched herbs from Supabase
    if (fetchedHerbs) {
      console.log("Using previously fetched herbs from Supabase");
      return fetchedHerbs;
    }
    
    // Check Supabase connection before attempting fetch
    const isConnected = await checkSupabaseConnection();
    
    if (isConnected) {
      console.log("Supabase connection established, fetching herbs...");
      // Fetch herbs from Supabase
      const supabaseHerbs = await fetchSupabaseHerbs();
      
      if (supabaseHerbs && supabaseHerbs.length > 0) {
        console.log(`Successfully fetched ${supabaseHerbs.length} herbs from Supabase`);
        fetchedHerbs = supabaseHerbs;
        return fetchedHerbs;
      } else {
        console.log("No herbs found in Supabase, using local data");
      }
    } else {
      console.log("Supabase connection failed, using local data");
    }
    
    // Fall back to local data if Supabase fetch fails or returns empty
    console.log(`Using local herb data (${allHerbs.length} herbs)`);
    return allHerbs;
  } catch (error) {
    console.error("Error initializing herbs:", error);
    // Show error toast
    toast({
      title: "Failed to load herbs",
      description: "Could not retrieve herbs from the database. Using local data instead.",
      variant: "destructive",
    });
    
    // Return local data as fallback
    return allHerbs;
  }
};

// Helper function to check Supabase connection
const checkSupabaseConnection = async (): Promise<boolean> => {
  try {
    // Simple check by trying to fetch one row from herbs table
    const { data, error } = await supabase
      .from('herbs')
      .select('id')
      .limit(1);
      
    if (error) {
      console.error("Supabase connection check failed:", error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Error checking Supabase connection:", error);
    return false;
  }
};

// Helper function to get herbs by category
export const getHerbsByCategory = (category: string): Herb[] => {
  return allHerbs.filter(herb => 
    herb.categories.some(cat => 
      cat.toLowerCase() === category.toLowerCase()
    )
  );
};

// Helper function to get a specific herb by name
export const getHerbByName = (name: string): Herb | undefined => {
  return allHerbs.find(herb => 
    herb.name.toLowerCase() === name.toLowerCase()
  );
};

// Helper function to get a specific herb by ID
export const getHerbById = (id: number): Herb | undefined => {
  return allHerbs.find(herb => herb.id === id);
};

// Helper function to search herbs by name, description, or scientific name
export const searchHerbs = (query: string): Herb[] => {
  const lowerQuery = query.toLowerCase();
  return allHerbs.filter(herb => 
    herb.name.toLowerCase().includes(lowerQuery) ||
    herb.description.toLowerCase().includes(lowerQuery) ||
    herb.scientific_name.toLowerCase().includes(lowerQuery)
  );
};

// Get popular herbs (for demonstration, just getting a few with specific IDs)
export const getPopularHerbs = (): Herb[] => {
  return allHerbs.filter(herb => 
    [1, 2, 7, 8, 12, 13, 15, 28, 200, 205, 207].includes(herb.id)
  ).slice(0, 6);
};

// Get related herbs (based on matching categories)
export const getRelatedHerbs = (herb: Herb, limit: number = 4): Herb[] => {
  return allHerbs
    .filter(h => 
      h.id !== herb.id && // Not the same herb
      h.categories.some(cat => herb.categories.includes(cat)) // Has at least one matching category
    )
    .slice(0, limit);
};
