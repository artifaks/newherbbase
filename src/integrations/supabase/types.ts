export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string | null
          role: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          role?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          role?: string | null
          user_id?: string
        }
        Relationships: []
      }
      affiliate_clicks: {
        Row: {
          clicked_at: string | null
          id: number
          ip_address: string | null
          product_id: number | null
          referrer: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          clicked_at?: string | null
          id?: number
          ip_address?: string | null
          product_id?: number | null
          referrer?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          clicked_at?: string | null
          id?: number
          ip_address?: string | null
          product_id?: number | null
          referrer?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_clicks_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "affiliate_products"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_products: {
        Row: {
          affiliate_url: string
          category: string | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          merchant: string | null
          name: string
          price: number | null
          updated_at: string | null
        }
        Insert: {
          affiliate_url: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          merchant?: string | null
          name: string
          price?: number | null
          updated_at?: string | null
        }
        Update: {
          affiliate_url?: string
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          merchant?: string | null
          name?: string
          price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          content: string
          excerpt: string | null
          featured_image: string | null
          id: number
          is_published: boolean | null
          published_at: string
          reading_time_minutes: number | null
          slug: string
          tags: string[]
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          id?: number
          is_published?: boolean | null
          published_at: string
          reading_time_minutes?: number | null
          slug: string
          tags: string[]
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: number
          is_published?: boolean | null
          published_at?: string
          reading_time_minutes?: number | null
          slug?: string
          tags?: string[]
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      body_systems: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          color_hex: string
          id: number
          name: string
        }
        Insert: {
          color_hex?: string
          id?: number
          name: string
        }
        Update: {
          color_hex?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          created_at: string | null
          id: number
          message: string
          response: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          message: string
          response: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          message?: string
          response?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      complementary_herbs: {
        Row: {
          complementary_herb_id: string | null
          created_at: string | null
          herb_id: string | null
          id: string
          reason: string | null
        }
        Insert: {
          complementary_herb_id?: string | null
          created_at?: string | null
          herb_id?: string | null
          id?: string
          reason?: string | null
        }
        Update: {
          complementary_herb_id?: string | null
          created_at?: string | null
          herb_id?: string | null
          id?: string
          reason?: string | null
        }
        Relationships: []
      }
      conditions: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      contraindications: {
        Row: {
          created_at: string | null
          description: string
          herb_id: string | null
          id: string
          warning: string
        }
        Insert: {
          created_at?: string | null
          description: string
          herb_id?: string | null
          id?: string
          warning: string
        }
        Update: {
          created_at?: string | null
          description?: string
          herb_id?: string | null
          id?: string
          warning?: string
        }
        Relationships: []
      }
      ebooks: {
        Row: {
          author: string | null
          category: string | null
          cover_url: string | null
          created_at: string | null
          description: string
          file_url: string | null
          id: string
          pages: number | null
          price: number
          publish_date: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          category?: string | null
          cover_url?: string | null
          created_at?: string | null
          description: string
          file_url?: string | null
          id?: string
          pages?: number | null
          price: number
          publish_date?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          category?: string | null
          cover_url?: string | null
          created_at?: string | null
          description?: string
          file_url?: string | null
          id?: string
          pages?: number | null
          price?: number
          publish_date?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      growing: {
        Row: {
          created_at: string
          harvest: string | null
          herb_id: string | null
          id: string
          preservation: string | null
          soil_ph: string | null
          sunlight: string | null
          watering: string | null
        }
        Insert: {
          created_at?: string
          harvest?: string | null
          herb_id?: string | null
          id?: string
          preservation?: string | null
          soil_ph?: string | null
          sunlight?: string | null
          watering?: string | null
        }
        Update: {
          created_at?: string
          harvest?: string | null
          herb_id?: string | null
          id?: string
          preservation?: string | null
          soil_ph?: string | null
          sunlight?: string | null
          watering?: string | null
        }
        Relationships: []
      }
      herb_affiliate_junction: {
        Row: {
          created_at: string | null
          herb_id: number | null
          id: number
          product_id: number | null
          relevance_score: number | null
        }
        Insert: {
          created_at?: string | null
          herb_id?: number | null
          id?: number
          product_id?: number | null
          relevance_score?: number | null
        }
        Update: {
          created_at?: string | null
          herb_id?: number | null
          id?: number
          product_id?: number | null
          relevance_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "herb_affiliate_junction_herb_id_fkey"
            columns: ["herb_id"]
            isOneToOne: false
            referencedRelation: "herbs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "herb_affiliate_junction_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "affiliate_products"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_body_systems: {
        Row: {
          body_system_id: number
          herb_id: string
        }
        Insert: {
          body_system_id: number
          herb_id: string
        }
        Update: {
          body_system_id?: number
          herb_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "herb_body_systems_body_system_id_fkey"
            columns: ["body_system_id"]
            isOneToOne: false
            referencedRelation: "body_systems"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_categories: {
        Row: {
          category_id: number
          herb_id: number
        }
        Insert: {
          category_id: number
          herb_id: number
        }
        Update: {
          category_id?: number
          herb_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "herb_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_conditions: {
        Row: {
          condition_id: string | null
          created_at: string
          herb_id: string | null
          id: string
        }
        Insert: {
          condition_id?: string | null
          created_at?: string
          herb_id?: string | null
          id?: string
        }
        Update: {
          condition_id?: string | null
          created_at?: string
          herb_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "herb_conditions_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "conditions"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_illnesses: {
        Row: {
          created_at: string
          effectiveness: string | null
          herb_id: string | null
          id: string
          illness_id: string | null
          notes: string | null
        }
        Insert: {
          created_at?: string
          effectiveness?: string | null
          herb_id?: string | null
          id?: string
          illness_id?: string | null
          notes?: string | null
        }
        Update: {
          created_at?: string
          effectiveness?: string | null
          herb_id?: string | null
          id?: string
          illness_id?: string | null
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "herb_illnesses_illness_id_fkey"
            columns: ["illness_id"]
            isOneToOne: false
            referencedRelation: "illnesses"
            referencedColumns: ["id"]
          },
        ]
      }
      herb_ratings: {
        Row: {
          created_at: string | null
          herb_id: string | null
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: []
      }
      herb_suggestions: {
        Row: {
          created_at: string
          description: string
          herb_name: string
          id: string
          status: string | null
          suggested_by_email: string | null
        }
        Insert: {
          created_at?: string
          description: string
          herb_name: string
          id?: string
          status?: string | null
          suggested_by_email?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          herb_name?: string
          id?: string
          status?: string | null
          suggested_by_email?: string | null
        }
        Relationships: []
      }
      herb_symptoms: {
        Row: {
          created_at: string | null
          effectiveness: number | null
          evidence_level: string | null
          herb_id: string | null
          id: string
          symptom: string
        }
        Insert: {
          created_at?: string | null
          effectiveness?: number | null
          evidence_level?: string | null
          herb_id?: string | null
          id?: string
          symptom: string
        }
        Update: {
          created_at?: string | null
          effectiveness?: number | null
          evidence_level?: string | null
          herb_id?: string | null
          id?: string
          symptom?: string
        }
        Relationships: []
      }
      herb_variants: {
        Row: {
          benefits: string[] | null
          category: string
          color: string | null
          created_at: string | null
          description: string | null
          harvest_season: string | null
          id: string
          image_url: string | null
          name: string
          origin: string | null
          parent_herb_id: string | null
          preparations: string[] | null
          safety_notes: string | null
          scientific_name: string
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          benefits?: string[] | null
          category: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          harvest_season?: string | null
          id?: string
          image_url?: string | null
          name: string
          origin?: string | null
          parent_herb_id?: string | null
          preparations?: string[] | null
          safety_notes?: string | null
          scientific_name: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          benefits?: string[] | null
          category?: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          harvest_season?: string | null
          id?: string
          image_url?: string | null
          name?: string
          origin?: string | null
          parent_herb_id?: string | null
          preparations?: string[] | null
          safety_notes?: string | null
          scientific_name?: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "herb_variants_parent_herb_id_fkey"
            columns: ["parent_herb_id"]
            isOneToOne: false
            referencedRelation: "herbs_data"
            referencedColumns: ["id"]
          },
        ]
      }
      herbal_chat_logs: {
        Row: {
          created_at: string | null
          id: string
          question: string
          response: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          question: string
          response: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          question?: string
          response?: string
          user_id?: string | null
        }
        Relationships: []
      }
      herbal_tea_recipes: {
        Row: {
          benefits: string[]
          created_at: string
          description: string
          herb_id: string | null
          id: string
          ingredients: string[]
          instructions: string[]
          name: string
          steeping_time: string
          updated_at: string
          water_temperature: string
        }
        Insert: {
          benefits?: string[]
          created_at?: string
          description: string
          herb_id?: string | null
          id?: string
          ingredients?: string[]
          instructions?: string[]
          name: string
          steeping_time: string
          updated_at?: string
          water_temperature: string
        }
        Update: {
          benefits?: string[]
          created_at?: string
          description?: string
          herb_id?: string | null
          id?: string
          ingredients?: string[]
          instructions?: string[]
          name?: string
          steeping_time?: string
          updated_at?: string
          water_temperature?: string
        }
        Relationships: []
      }
      herbs: {
        Row: {
          active_compounds: Json | null
          benefits: Json | null
          benefits_visualization: Json | null
          category: string | null
          created_at: string
          description: string
          dosage_info: string | null
          external_resources: Json | null
          growing_conditions: string
          growing_info: Json | null
          health_benefits: Json | null
          history: string | null
          id: number
          image_url: string | null
          medicinal_uses: string[]
          name: string
          other_pairings: Json | null
          pairings: string[] | null
          prep: string[] | null
          preparation_methods: Json | null
          scientific_name: string
          scientific_studies: Json | null
          seasonal_info: Json | null
          synergistic_pairings: Json | null
          traditional_uses: Json | null
          updated_at: string | null
          visualizations: Json | null
        }
        Insert: {
          active_compounds?: Json | null
          benefits?: Json | null
          benefits_visualization?: Json | null
          category?: string | null
          created_at?: string
          description: string
          dosage_info?: string | null
          external_resources?: Json | null
          growing_conditions: string
          growing_info?: Json | null
          health_benefits?: Json | null
          history?: string | null
          id?: number
          image_url?: string | null
          medicinal_uses?: string[]
          name: string
          other_pairings?: Json | null
          pairings?: string[] | null
          prep?: string[] | null
          preparation_methods?: Json | null
          scientific_name: string
          scientific_studies?: Json | null
          seasonal_info?: Json | null
          synergistic_pairings?: Json | null
          traditional_uses?: Json | null
          updated_at?: string | null
          visualizations?: Json | null
        }
        Update: {
          active_compounds?: Json | null
          benefits?: Json | null
          benefits_visualization?: Json | null
          category?: string | null
          created_at?: string
          description?: string
          dosage_info?: string | null
          external_resources?: Json | null
          growing_conditions?: string
          growing_info?: Json | null
          health_benefits?: Json | null
          history?: string | null
          id?: number
          image_url?: string | null
          medicinal_uses?: string[]
          name?: string
          other_pairings?: Json | null
          pairings?: string[] | null
          prep?: string[] | null
          preparation_methods?: Json | null
          scientific_name?: string
          scientific_studies?: Json | null
          seasonal_info?: Json | null
          synergistic_pairings?: Json | null
          traditional_uses?: Json | null
          updated_at?: string | null
          visualizations?: Json | null
        }
        Relationships: []
      }
      herbs_data: {
        Row: {
          benefits: string[] | null
          category: string
          color: string | null
          created_at: string | null
          description: string | null
          harvest_season: string | null
          historical_info: string | null
          id: string
          image_url: string | null
          name: string
          origin: string | null
          preparations: string[] | null
          safety_notes: string | null
          scientific_name: string
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          benefits?: string[] | null
          category: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          harvest_season?: string | null
          historical_info?: string | null
          id?: string
          image_url?: string | null
          name: string
          origin?: string | null
          preparations?: string[] | null
          safety_notes?: string | null
          scientific_name: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          benefits?: string[] | null
          category?: string
          color?: string | null
          created_at?: string | null
          description?: string | null
          harvest_season?: string | null
          historical_info?: string | null
          id?: string
          image_url?: string | null
          name?: string
          origin?: string | null
          preparations?: string[] | null
          safety_notes?: string | null
          scientific_name?: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      herbs_new: {
        Row: {
          benefits: string[] | null
          category: string | null
          description: string | null
          id: string
          image_url: string | null
          name: string
        }
        Insert: {
          benefits?: string[] | null
          category?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
        }
        Update: {
          benefits?: string[] | null
          category?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
        }
        Relationships: []
      }
      illnesses: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          symptoms: string[] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          symptoms?: string[] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          symptoms?: string[] | null
        }
        Relationships: []
      }
      medicinal_uses: {
        Row: {
          condition: string
          created_at: string | null
          description: string
          effectiveness: string
          herb_id: string | null
          id: string
        }
        Insert: {
          condition: string
          created_at?: string | null
          description: string
          effectiveness: string
          herb_id?: string | null
          id?: string
        }
        Update: {
          condition?: string
          created_at?: string | null
          description?: string
          effectiveness?: string
          herb_id?: string | null
          id?: string
        }
        Relationships: []
      }
      preparation_methods: {
        Row: {
          created_at: string | null
          herb_id: string | null
          id: string
          instructions: string
          method: string
        }
        Insert: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          instructions: string
          method: string
        }
        Update: {
          created_at?: string | null
          herb_id?: string | null
          id?: string
          instructions?: string
          method?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      soap_bases: {
        Row: {
          created_at: string | null
          description: string
          id: number
          image_url: string
          name: string
          origin: string
          production_method: string
          properties: Json
          scientific_name: string
          skin_benefits: string[]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: never
          image_url: string
          name: string
          origin: string
          production_method: string
          properties: Json
          scientific_name: string
          skin_benefits: string[]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: never
          image_url?: string
          name?: string
          origin?: string
          production_method?: string
          properties?: Json
          scientific_name?: string
          skin_benefits?: string[]
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          status?: string | null
        }
        Relationships: []
      }
      tea_recipes: {
        Row: {
          benefits: string[]
          category: string
          color_theme: string | null
          created_at: string | null
          description: string
          detailed_benefits: Json | null
          icon: string | null
          id: number
          ingredients: Json
          name: string
          preparation: string[]
          updated_at: string | null
        }
        Insert: {
          benefits: string[]
          category: string
          color_theme?: string | null
          created_at?: string | null
          description: string
          detailed_benefits?: Json | null
          icon?: string | null
          id?: number
          ingredients: Json
          name: string
          preparation: string[]
          updated_at?: string | null
        }
        Update: {
          benefits?: string[]
          category?: string
          color_theme?: string | null
          created_at?: string | null
          description?: string
          detailed_benefits?: Json | null
          icon?: string | null
          id?: number
          ingredients?: Json
          name?: string
          preparation?: string[]
          updated_at?: string | null
        }
        Relationships: []
      }
      teas: {
        Row: {
          benefits: string[]
          color_hex: string
          created_at: string | null
          description: string
          id: number
          image_url: string | null
          name: string
          preparation: string
        }
        Insert: {
          benefits?: string[]
          color_hex: string
          created_at?: string | null
          description: string
          id?: number
          image_url?: string | null
          name: string
          preparation: string
        }
        Update: {
          benefits?: string[]
          color_hex?: string
          created_at?: string | null
          description?: string
          id?: number
          image_url?: string | null
          name?: string
          preparation?: string
        }
        Relationships: []
      }
      user_ebooks: {
        Row: {
          created_at: string
          ebook_id: string
          id: string
          is_free: boolean
          purchase_date: string
          user_id: string
        }
        Insert: {
          created_at?: string
          ebook_id: string
          id?: string
          is_free?: boolean
          purchase_date?: string
          user_id: string
        }
        Update: {
          created_at?: string
          ebook_id?: string
          id?: string
          is_free?: boolean
          purchase_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_ebooks_ebook_id_fkey"
            columns: ["ebook_id"]
            isOneToOne: false
            referencedRelation: "ebooks"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorites: {
        Row: {
          created_at: string | null
          herb_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          herb_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          herb_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: number
          role: string
          user_id: string
        }
        Insert: {
          id?: never
          role: string
          user_id: string
        }
        Update: {
          id?: never
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: string
          is_premium: boolean | null
          role: string | null
        }
        Insert: {
          created_at?: string
          id: string
          is_premium?: boolean | null
          role?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_premium?: boolean | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_herb: {
        Args: {
          herb_name: string
          scientific: string
          herb_description: string
          herb_category: string
          herb_benefits: string[]
          herb_preparations: string[]
          image?: string
          herb_tags?: string[]
          safety?: string
          herb_color?: string
          season?: string
          herb_origin?: string
        }
        Returns: string
      }
      get_affiliate_click_stats: {
        Args: { start_date?: string; end_date?: string }
        Returns: {
          product_id: number
          product_name: string
          total_clicks: number
          unique_users: number
        }[]
      }
      get_all_herb: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string
          image_url: string
        }[]
      }
      get_all_herb_images: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string
          image_url: string
        }[]
      }
      get_herb_of_day: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string
          scientific_name: string
          description: string
          image_url: string
          history: string
          health_benefits: Json
          category: string
          featured_date: string
        }[]
      }
      get_herbs_by_season: {
        Args: { season_name: string }
        Returns: {
          id: string
          name: string
          scientific_name: string
          description: string
          benefits: string[]
          image_url: string
          preparations: string[]
          harvest_season: string
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      migrate_duplicate_herbs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      search_herbs: {
        Args: {
          search_term?: string
          search_category?: string
          search_tags?: string[]
          search_season?: string
          page_number?: number
          page_size?: number
        }
        Returns: {
          id: string
          name: string
          scientific_name: string
          description: string
          benefits: string[]
          category: string
          image_url: string
          harvest_season: string
          tags: string[]
        }[]
      }
      search_herbs_by_category: {
        Args: {
          search_category: string
          page_number?: number
          page_size?: number
        }
        Returns: {
          id: string
          name: string
          scientific_name: string
          description: string
          benefits: string[]
          category: string
          image_url: string
        }[]
      }
      search_herbs_for_chat: {
        Args: { query_text: string }
        Returns: {
          name: string
          scientific_name: string
          description: string
          benefits: string[]
          preparations: string[]
          safety_notes: string
          category: string
        }[]
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
