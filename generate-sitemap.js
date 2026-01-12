import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reviewsPath = path.join(__dirname, 'src/data/reviews.ts');
const collectionsPath = path.join(__dirname, 'src/data/collections.ts');
const publicDir = path.join(__dirname, 'public');

// Ensure public dir exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Helper to extract slugs using regex
function extractSlugs(content) {
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  return matches.map(m => m[1]);
}

try {
  const reviewsContent = fs.readFileSync(reviewsPath, 'utf-8');
  const collectionsContent = fs.readFileSync(collectionsPath, 'utf-8');

  const reviewSlugs = extractSlugs(reviewsContent);
  const collectionSlugs = extractSlugs(collectionsContent);

  const baseUrl = 'https://dailychoice.com';
  const date = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclosure',
    '/category/market',
    '/category/digital'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Static
  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Collections
  collectionSlugs.forEach(slug => {
    xml += `
  <url>
    <loc>${baseUrl}/collection/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  // Reviews
  reviewSlugs.forEach(slug => {
    xml += `
  <url>
    <loc>${baseUrl}/review/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully!');
  console.log(`- ${reviewSlugs.length} reviews`);
  console.log(`- ${collectionSlugs.length} collections`);

} catch (error) {
  console.error('Error generating sitemap:', error);
}
