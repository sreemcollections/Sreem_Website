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
    // Debug: Check all documents
    const allDocs = await sanityClient.fetch(`*[]`);
    console.log('Total documents in database:', allDocs.length);
    console.log('Document types:', allDocs.map((d: any) => d._type));
    
    // Check for drafts
    const allProducts = await sanityClient.fetch(`*[_type == "product"]`);
    const draftProducts = await sanityClient.fetch(`*[_type == "product" && _id in path("drafts.**")]`);
    console.log('ALL products in database:', allProducts);
    console.log('Draft products:', draftProducts);
    
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

    console.log('Fetching products with options:', options);

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

    console.log('Sanity Query:', query);
    const products = await sanityClient.fetch(query);
    console.log('Fetched products:', products);
    return products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && _id == $id][0]`;
    const product = await sanityClient.fetch(query, { id });
    return product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
    const product = await sanityClient.fetch(query, { slug });
    return product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export function getImageUrl(image: any): string {
  if (!image) return '/placeholder.svg';
  return urlFor(image).width(800).url();
}
