
// Define the Herb interface in its own file
export interface Herb {
  id: number;
  name: string;
  scientific_name: string;
  description: string;
  benefits: string[];
  uses: string[];
  preparations: string[];
  dosage: string;
  cautions: string[];
  categories: string[];
  safety_warnings?: string[];
  medicinal_properties?: string[];
  medicinal_uses?: string[];
  traditional_uses?: string[];
  history?: string;
  image_url?: string;
  category?: string;
  active_compounds?: any;
  benefits_visualization?: any;
  growing_conditions?: string | Record<string, any>;
  origin?: string; // Geographic origin of the herb
  sustainability?: string; // Information about sustainable harvesting
  parts_used?: string[]; // Which parts of the plant are used (roots, leaves, etc.)
  cultivation_notes?: string; // Notes on how to grow or cultivate the herb
  companion_herbs?: string[]; // Herbs that work well together with this one
  contraindications?: string[]; // Specific cases where the herb should not be used
  habitat?: string; // Natural habitat information
}
