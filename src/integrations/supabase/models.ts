
// This file defines TypeScript interfaces that match our Supabase schema

export interface SupabaseHerb {
  id: number | string;
  name: string;
  scientific_name: string;
  description: string;
  image_url?: string | null;
  medicinal_properties?: string[];
  medicinal_uses?: string[] | any; 
  traditional_uses?: string[] | any; // Allow JSON type from database
  safety_warnings?: string[] | any;
  health_conditions?: string[];
  growing_conditions: string | Record<string, any>;
  history?: string;
  category?: string;
  active_compounds?: any;
  benefits?: string[];
  benefits_visualization?: any;
  created_at?: string;
  updated_at?: string;
}

export interface SupabaseEbook {
  id: string;
  title: string;
  description: string;
  price: number;
  author?: string;
  category?: string;
  cover_url?: string;
  file_url?: string;
  pages?: number;
  publish_date?: string;
  created_at?: string;
  updated_at?: string;
}
