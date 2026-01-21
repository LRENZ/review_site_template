import { reviews } from '@/data/reviews';

interface SitemapItem {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export default function sitemap(): SitemapItem[] {
  const baseUrl = 'https://dailychoice.com'; // Placeholder domain

  // 1. Static Pages
  const staticRoutes = [
    '', 
    '/about', 
    '/contact', 
    '/privacy', 
    '/terms', 
    '/disclosure',
    '/category/market',
    '/category/digital'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.5,
  }));

  // 2. Dynamic Reviews
  const reviewRoutes = reviews.map((review) => ({
    url: `${baseUrl}/review/${review.slug}`,
    lastModified: new Date(review.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...reviewRoutes];
}

// Helper to generate XML string (for potential build script usage)
export function generateSitemapXml(): string {
  const items = sitemap();
  
  const xmlItems = items.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;
}
