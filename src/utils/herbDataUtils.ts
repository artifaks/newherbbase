
import { Herb } from "@/data/types/herbs";

// Define the structure of herb data as it comes from Supabase
export interface SupabaseHerb {
  id: number;
  name: string;
  scientific_name: string;
  description: string;
  benefits?: string[] | null;
  preparations?: string[] | null;
  dosage_info?: string | null;
  medicinal_uses?: string[] | null;
  category?: string | null;
  image_url?: string | null;
  safety_warnings?: string[] | null;
  medicinal_properties?: string[] | null;
  traditional_uses?: any;
  history?: string | null;
  cautions?: string[] | null;
  categories?: string[] | null;
}

// Function to map a Supabase herb to our application's Herb interface
export function mapSupabaseToHerb(supabaseHerb: SupabaseHerb): Herb {
  // Extract categories - try different fields based on what might be available
  let categories: string[] = [];
  if (Array.isArray(supabaseHerb.categories)) {
    categories = supabaseHerb.categories;
  } else if (supabaseHerb.category) {
    categories = [supabaseHerb.category];
  }

  // Extract benefits - ensure it's always an array
  let benefits: string[] = [];
  if (Array.isArray(supabaseHerb.benefits)) {
    benefits = supabaseHerb.benefits;
  } else if (supabaseHerb.medicinal_properties && Array.isArray(supabaseHerb.medicinal_properties)) {
    benefits = supabaseHerb.medicinal_properties;
  }

  // Extract uses - ensure it's always an array
  let uses: string[] = [];
  if (supabaseHerb.medicinal_uses && Array.isArray(supabaseHerb.medicinal_uses)) {
    uses = supabaseHerb.medicinal_uses;
  }

  // Extract preparations - ensure it's always an array
  let preparations: string[] = [];
  if (Array.isArray(supabaseHerb.preparations)) {
    preparations = supabaseHerb.preparations;
  }

  // Extract cautions - ensure it's always an array
  let cautions: string[] = [];
  if (Array.isArray(supabaseHerb.cautions)) {
    cautions = supabaseHerb.cautions;
  } else if (Array.isArray(supabaseHerb.safety_warnings)) {
    cautions = supabaseHerb.safety_warnings;
  }

  // Create a basic herb object with required fields
  const herb: Herb = {
    id: supabaseHerb.id,
    name: supabaseHerb.name,
    scientific_name: supabaseHerb.scientific_name || "Unknown",
    description: supabaseHerb.description || "No description available",
    benefits: benefits,
    uses: uses,
    preparations: preparations,
    dosage: supabaseHerb.dosage_info || "No specific dosage information available.",
    cautions: cautions,
    categories: categories.length > 0 ? categories : ["Uncategorized"]
  };

  return herb;
}

// Function to convert an herb object to the format expected by Supabase
export function herbToSupabase(herb: any): SupabaseHerb {
  return {
    id: herb.id || Math.floor(Math.random() * 10000), // Generate random ID if not provided
    name: herb.name,
    scientific_name: herb.scientific_name || herb.scientificName || "",
    description: herb.description || "",
    benefits: Array.isArray(herb.benefits) ? herb.benefits : [],
    preparations: Array.isArray(herb.preparations) ? herb.preparations : [],
    dosage_info: herb.dosage || "",
    medicinal_uses: Array.isArray(herb.uses) ? herb.uses : 
                    Array.isArray(herb.medicinal_uses) ? herb.medicinal_uses : [],
    category: Array.isArray(herb.categories) && herb.categories.length > 0 ? 
              herb.categories[0] : herb.category || "General",
    image_url: herb.image_url || null,
    safety_warnings: Array.isArray(herb.cautions) ? herb.cautions : [],
    medicinal_properties: herb.medicinal_properties || [],
    traditional_uses: herb.traditional_uses || [],
    history: herb.history || null,
    categories: Array.isArray(herb.categories) ? herb.categories : 
                herb.category ? [herb.category] : ["General"]
  };
}

// Function to batch save herbs to Supabase
export async function batchSaveHerbsToSupabase(herbs: any[], supabaseClient: any): Promise<{
  success: boolean;
  count: number;
  errors: any[];
}> {
  const errors: any[] = [];
  let savedCount = 0;
  
  try {
    console.log(`Attempting to save ${herbs.length} herbs to Supabase...`);
    
    // Convert herbs to Supabase format
    const supabaseHerbs = herbs.map(herb => herbToSupabase(herb));
    
    // Process in batches to avoid rate limits
    const BATCH_SIZE = 10;
    for (let i = 0; i < supabaseHerbs.length; i += BATCH_SIZE) {
      const batch = supabaseHerbs.slice(i, i + BATCH_SIZE);
      console.log(`Processing batch ${i / BATCH_SIZE + 1} of ${Math.ceil(supabaseHerbs.length / BATCH_SIZE)}`);
      
      // Insert the batch
      const { data, error } = await supabaseClient
        .from('herbs')
        .insert(batch)
        .select();
      
      if (error) {
        console.error(`Error inserting batch ${i / BATCH_SIZE + 1}:`, error);
        errors.push(error);
      } else {
        savedCount += data.length;
        console.log(`Successfully saved ${data.length} herbs in batch ${i / BATCH_SIZE + 1}`);
      }
      
      // Small delay to avoid rate limits
      if (i + BATCH_SIZE < supabaseHerbs.length) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    return {
      success: errors.length === 0,
      count: savedCount,
      errors
    };
  } catch (error) {
    console.error("Unexpected error during batch save:", error);
    errors.push(error);
    
    return {
      success: false,
      count: savedCount,
      errors
    };
  }
}
