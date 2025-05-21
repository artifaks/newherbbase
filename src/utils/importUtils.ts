
import { Herb } from "@/data/types/herbs"; 
import { SupabaseHerb } from "@/integrations/supabase/models";

interface ParsedHerb {
  id: string | number;
  name: string;
  scientific_name: string;
  description: string;
  benefits?: string[];
  medicinal_properties?: string[];
  medicinal_uses?: string[];
  traditional_uses?: string[];
  category?: string;
  origin?: string;
}

/**
 * Parses a CSV or JSON file containing herb data
 * @param file - The file to parse
 * @returns A Promise that resolves to an array of parsed herbs
 */
export const parseHerbFile = async (file: File): Promise<ParsedHerb[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const fileContent = event.target?.result as string;
        const fileExt = file.name.split('.').pop()?.toLowerCase();
        
        if (fileExt === 'json') {
          const herbs = parseJSON(fileContent);
          resolve(preprocessHerbs(herbs));
        } else if (fileExt === 'csv') {
          const herbs = parseCSV(fileContent);
          resolve(preprocessHerbs(herbs));
        } else {
          reject(new Error('Unsupported file format. Please upload a JSON or CSV file.'));
        }
      } catch (error) {
        console.error("Error parsing herb file:", error);
        reject(error);
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    
    reader.readAsText(file);
  });
};

/**
 * Converts a CSV string to an array of objects
 * @param csv - The CSV string to parse
 * @returns An array of objects representing the CSV data
 */
export const parseCSV = (csv: string): any[] => {
  // Split the CSV by newlines
  const lines = csv.split('\n');
  
  // Extract the header row and remove quotes if present
  const headers = lines[0].split(',').map(header => 
    header.trim().replace(/^"(.*)"$/, '$1')
  );
  
  // Parse the rest of the rows
  return lines.slice(1).filter(line => line.trim().length > 0).map(line => {
    // Handle quoted fields properly
    const values: string[] = [];
    let inQuote = false;
    let currentValue = '';
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"' && (i === 0 || line[i-1] !== '\\')) {
        inQuote = !inQuote;
      } else if (char === ',' && !inQuote) {
        values.push(currentValue.trim().replace(/^"(.*)"$/, '$1'));
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
    // Add the last value
    values.push(currentValue.trim().replace(/^"(.*)"$/, '$1'));
    
    // Create an object from the headers and values
    const herb: Record<string, any> = {};
    headers.forEach((header, index) => {
      if (index < values.length) {
        herb[header] = values[index];
      }
    });
    
    return herb;
  });
};

/**
 * Parses JSON string containing herb data
 * @param json - The JSON string to parse
 * @returns An array of herb objects
 */
export const parseJSON = (json: string): any[] => {
  try {
    const parsedData = JSON.parse(json);
    return Array.isArray(parsedData) ? parsedData : [parsedData];
  } catch (error) {
    throw new Error('Invalid JSON format');
  }
};

/**
 * Parse a simple list of herb names
 * @param nameList - String with herb names (one per line)
 * @returns An array of basic herb objects
 */
export const parseHerbNameList = (nameList: string): any[] => {
  return nameList
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(name => ({
      name,
      scientific_name: '',
      description: `Description for ${name}`,
      benefits: [],
      category: 'General'
    }));
};

/**
 * Formats a list of herb names as a CSV string
 * @param herbNames - Array of herb names
 * @returns Formatted CSV string
 */
export const formatHerbNamesAsCSV = (herbNames: string[]): string => {
  const headers = ['name', 'scientific_name', 'description', 'benefits', 'category'];
  const rows = herbNames.map(name => 
    `"${name}","","Description of ${name}","","General"`
  );
  
  return [headers.join(','), ...rows].join('\n');
};

/**
 * Preprocesses herbs to ensure consistent data structure
 * @param herbs - The herbs to preprocess
 * @returns An array of preprocessed herbs
 */
const preprocessHerbs = (herbs: any[]): ParsedHerb[] => {
  return herbs.map(herb => {
    // Ensure the herb has a unique ID
    const id = herb.id || generateId();
    
    // Basic herb structure
    const processedHerb: ParsedHerb = {
      id,
      name: herb.name || 'Unknown Herb',
      scientific_name: herb.scientific_name || herb.scientificName || 'Not specified',
      description: herb.description || 'No description available',
      category: herb.category || 'General',
    };
    
    // Process arrays that might be stored as strings
    if (herb.benefits) {
      processedHerb.benefits = Array.isArray(herb.benefits) 
        ? herb.benefits 
        : typeof herb.benefits === 'string' 
          ? herb.benefits.split(',').map((b: string) => b.trim())
          : [];
    }
    
    // Process medicinal properties
    if (herb.medicinal_properties) {
      processedHerb.medicinal_properties = Array.isArray(herb.medicinal_properties)
        ? herb.medicinal_properties
        : typeof herb.medicinal_properties === 'string'
          ? herb.medicinal_properties.split(',').map((p: string) => p.trim())
          : [];
    }
    
    // Process medicinal uses
    if (herb.medicinal_uses) {
      processedHerb.medicinal_uses = Array.isArray(herb.medicinal_uses)
        ? herb.medicinal_uses
        : typeof herb.medicinal_uses === 'string'
          ? herb.medicinal_uses.split(',').map((u: string) => u.trim())
          : [];
    }
    
    // Process traditional uses
    if (herb.traditional_uses) {
      processedHerb.traditional_uses = Array.isArray(herb.traditional_uses)
        ? herb.traditional_uses
        : typeof herb.traditional_uses === 'string'
          ? herb.traditional_uses.split(',').map((u: string) => u.trim())
          : [];
    }
    
    // Include origin if available
    if (herb.origin) {
      processedHerb.origin = herb.origin;
    }
    
    return processedHerb;
  });
};

/**
 * Generates a random ID
 * @returns A random string ID
 */
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/**
 * Validates a herb to ensure it has the necessary fields
 * @param herb - The herb to validate
 * @returns An object with a valid flag and an error message if invalid
 */
export const validateHerb = (herb: ParsedHerb): { valid: boolean, error?: string } => {
  if (!herb.name) {
    return { valid: false, error: 'Herb name is required' };
  }
  
  if (!herb.scientific_name) {
    return { valid: false, error: 'Scientific name is required' };
  }
  
  if (!herb.description) {
    return { valid: false, error: 'Description is required' };
  }
  
  return { valid: true };
};

/**
 * Converts a ParsedHerb to a SupabaseHerb for database insertion
 * @param herb - The parsed herb to convert
 * @returns A SupabaseHerb ready for database insertion
 */
export const convertToSupabaseHerb = (herb: ParsedHerb): SupabaseHerb => {
  return {
    id: herb.id,
    name: herb.name,
    scientific_name: herb.scientific_name,
    description: herb.description,
    medicinal_properties: herb.medicinal_properties || [],
    medicinal_uses: herb.medicinal_uses || [],
    traditional_uses: herb.traditional_uses || [],
    growing_conditions: "",
    benefits: herb.benefits || [],
    category: herb.category || 'General',
  };
};

/**
 * Converts a local Herb to a ParsedHerb
 * @param herb - The local herb to convert
 * @returns A ParsedHerb
 */
export const convertLocalHerbToParsed = (herb: Herb): ParsedHerb => {
  return {
    id: herb.id,
    name: herb.name,
    scientific_name: herb.scientific_name,
    description: herb.description,
    benefits: herb.benefits,
    category: herb.categories?.[0] || 'General',
  };
};

/**
 * Saves herbs to the database
 * @param herbs - The herbs to save
 * @returns A promise that resolves to true if successful
 */
export const saveHerbsToDatabase = async (herbs: any[]): Promise<boolean> => {
  try {
    console.log(`Preparing to save ${herbs.length} herbs to database...`);
    
    // Import supabase client and herbDataUtils only when needed
    const { supabase } = await import("@/integrations/supabase/client");
    const { herbToSupabase, batchSaveHerbsToSupabase } = await import("@/utils/herbDataUtils");
    
    // Validate herbs before saving
    const validHerbs = herbs.filter(herb => {
      const validation = validateHerb(herb);
      if (!validation.valid) {
        console.warn(`Skipping invalid herb ${herb.name}: ${validation.error}`);
      }
      return validation.valid;
    });
    
    console.log(`Saving ${validHerbs.length} valid herbs to database...`);
    
    // Use batch save function for better performance
    const result = await batchSaveHerbsToSupabase(validHerbs, supabase);
    
    if (result.success) {
      console.log(`Successfully saved ${result.count} herbs to database`);
      return true;
    } else {
      console.error(`Failed to save some or all herbs. Errors:`, result.errors);
      return result.count > 0; // Return true if at least some herbs were saved
    }
  } catch (error) {
    console.error("Error saving herbs to database:", error);
    return false;
  }
};

/**
 * Generates TypeScript code for the given herbs
 * @param herbs - The herbs to generate code for
 * @param category - The category name to use in the file
 * @returns A string containing the generated TypeScript code
 */
export const generateTypeScriptCode = (herbs: any[], category: string): string => {
  const categoryVar = category.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let code = `import { Herb } from '../types/herbs';\n\n`;
  code += `// ${category} herbs data\n`;
  code += `export const ${categoryVar}Herbs: Herb[] = [\n`;
  
  herbs.forEach((herb, index) => {
    code += `  {\n`;
    code += `    id: ${index + 1},\n`;
    code += `    name: "${herb.name}",\n`;
    code += `    scientific_name: "${herb.scientific_name || ''}",\n`;
    code += `    description: "${(herb.description || '').replace(/"/g, '\\"')}",\n`;
    
    // Add benefits as array
    code += `    benefits: [\n`;
    const benefits = Array.isArray(herb.benefits) ? herb.benefits : 
                    typeof herb.benefits === 'string' ? herb.benefits.split(',') : [];
    benefits.forEach((benefit: string, i: number) => {
      code += `      "${benefit.trim()}"${i < benefits.length - 1 ? ',' : ''}\n`;
    });
    code += `    ],\n`;
    
    // Add uses
    code += `    uses: [],\n`;
    
    // Add preparations
    code += `    preparations: [],\n`;
    
    // Add dosage
    code += `    dosage: "",\n`;
    
    // Add cautions
    code += `    cautions: [],\n`;
    
    // Add categories
    code += `    categories: ["${category}"],\n`;
    
    code += `  }${index < herbs.length - 1 ? ',' : ''}\n`;
  });
  
  code += `];\n\n`;
  code += `export default ${categoryVar}Herbs;\n`;
  
  return code;
};

/**
 * Returns a CSV template for herb data
 * @returns A string containing the CSV template
 */
export const getCSVTemplate = (): string => {
  return `name,scientific_name,description,benefits,category
"Chamomile","Matricaria chamomilla","Gentle herb known for its calming properties.","Reduces anxiety,Promotes sleep,Soothes digestive issues","Nervine"
"Lavender","Lavandula angustifolia","Aromatic herb used for relaxation and skin care.","Reduces stress,Improves sleep,Antimicrobial","Nervine"`;
};

/**
 * Returns a JSON template for herb data
 * @returns A string containing the JSON template
 */
export const getJSONTemplate = (): string => {
  return `[
  {
    "name": "Chamomile",
    "scientific_name": "Matricaria chamomilla",
    "description": "Gentle herb known for its calming properties.",
    "benefits": ["Reduces anxiety", "Promotes sleep", "Soothes digestive issues"],
    "category": "Nervine"
  },
  {
    "name": "Lavender",
    "scientific_name": "Lavandula angustifolia",
    "description": "Aromatic herb used for relaxation and skin care.",
    "benefits": ["Reduces stress", "Improves sleep", "Antimicrobial"],
    "category": "Nervine"
  }
]`;
};
