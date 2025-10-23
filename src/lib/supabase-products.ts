import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  original_price?: number;
  category: 'sarees' | 'jewelry';
  collection?: string;
  material?: string;
  fabric?: string;
  length?: string;
  blouse_piece?: boolean;
  weight?: string;
  purity?: string;
  featured?: boolean;
  in_stock?: boolean;
  images?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface FetchProductsOptions {
  category?: 'sarees' | 'jewelry';
  collection?: string;
  featured?: boolean;
  inStock?: boolean;
  limit?: number;
}

export async function fetchProducts(options: FetchProductsOptions = {}): Promise<Product[]> {
  try {
    let query = supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (options.category) {
      query = query.eq('category', options.category);
    }

    if (options.collection) {
      query = query.eq('collection', options.collection);
    }

    if (options.featured !== undefined) {
      query = query.eq('featured', options.featured);
    }

    if (options.inStock !== undefined) {
      query = query.eq('in_stock', options.inStock);
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchProducts:', error);
    return [];
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in fetchProductById:', error);
    return null;
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in fetchProductBySlug:', error);
    return null;
  }
}
