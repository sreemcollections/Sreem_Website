import { sanityClient, urlFor } from './sanity';

export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  price: number;
  originalPrice?: number;
  category: 'sarees' | 'jewelry';
  collection?: string;
  material?: string;
  fabric?: string;
  length?: string;
  blousePiece?: boolean;
  weight?: string;
  purity?: string;
  featured?: boolean;
  inStock?: boolean;
  images?: any[];
  _createdAt?: string;
  _updatedAt?: string;
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
    let query = `*[_type == "product"`;
    const filters = [];

    if (options.category) {
      filters.push(`category == "${options.category}"`);
    }

    if (options.collection) {
      filters.push(`collection == "${options.collection}"`);
    }

    if (options.featured !== undefined) {
      filters.push(`featured == ${options.featured}`);
    }

    if (options.inStock !== undefined) {
      filters.push(`inStock == ${options.inStock}`);
    }

    if (filters.length > 0) {
      query += ` && ${filters.join(' && ')}`;
    }

    query += `] | order(_createdAt desc)`;

    if (options.limit) {
      query += `[0...${options.limit}]`;
    }

    const products = await sanityClient.fetch(query);
    return products || [];
  } catch (error) {
    return [];
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && _id == $id][0]`;
    const product = await sanityClient.fetch(query, { id });
    return product || null;
  } catch (error) {
    return null;
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
    const product = await sanityClient.fetch(query, { slug });
    return product || null;
  } catch (error) {
    return null;
  }
}

export function getImageUrl(image: any): string {
  if (!image) return '/placeholder.svg';
  return urlFor(image).width(800).url();
}
