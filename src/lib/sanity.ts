import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '65mhdho2',
  dataset: 'sreem_collection',
  useCdn: true, // Use CDN for better mobile performance and caching
  apiVersion: '2024-10-22', // use current date (YYYY-MM-DD) to target the latest API version
  token: '', // Add token if needed for private datasets
  ignoreBrowserTokenWarning: true,
  perspective: 'published', // Only fetch published documents, ignore drafts
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
