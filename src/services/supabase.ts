import { supabase } from '../config/supabase';
import type { Database } from '../types/supabase';

type Tables = Database['public']['Tables'];
type Product = Tables['products']['Row'];
type User = Tables['users']['Row'];
type Category = Tables['categories']['Row'];

export class SupabaseError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'SupabaseError';
  }
}

export const supabaseService = {
  // Auth methods
  async signUp(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw new SupabaseError(error.message, error.code);
      return data;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to sign up');
    }
  },

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw new SupabaseError(error.message, error.code);
      return data;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to sign in');
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new SupabaseError(error.message, error.code);
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to sign out');
    }
  },

  // Product methods
  async getProducts(page = 1, pageSize = 10, categoryId?: string) {
    try {
      let query = supabase
        .from('products')
        .select('*, categories(*)', { count: 'exact' })
        .order('created_at', { ascending: false });

      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }

      const { data, error, count } = await query
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw new SupabaseError(error.message, error.code);
      return { data: data as (Product & { categories: Category })[], count };
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to fetch products');
    }
  },

  async getProduct(id: string) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*, categories(*)')
        .eq('id', id)
        .single();

      if (error) throw new SupabaseError(error.message, error.code);
      return data as Product & { categories: Category };
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to fetch product');
    }
  },

  async createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert(product)
        .select()
        .single();

      if (error) throw new SupabaseError(error.message, error.code);
      return data;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to create product');
    }
  },

  async updateProduct(id: string, updates: Partial<Product>) {
    try {
      const { data, error } = await supabase
        .from('products')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw new SupabaseError(error.message, error.code);
      return data;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to update product');
    }
  },

  async deleteProduct(id: string) {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw new SupabaseError(error.message, error.code);
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to delete product');
    }
  },

  // User methods
  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw new SupabaseError(error.message, error.code);
      return user;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to get current user');
    }
  },

  async updateUserProfile(userId: string, updates: Partial<User>) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', userId)
        .select()
        .single();

      if (error) throw new SupabaseError(error.message, error.code);
      return data;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to update user profile');
    }
  },

  // Category methods
  async getCategories() {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw new SupabaseError(error.message, error.code);
      return data;
    } catch (error) {
      if (error instanceof SupabaseError) throw error;
      throw new SupabaseError('Failed to fetch categories');
    }
  },

  // Real-time subscriptions
  subscribeToProducts(callback: (payload: any) => void) {
    return supabase
      .channel('products')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, callback)
      .subscribe();
  },
}; 