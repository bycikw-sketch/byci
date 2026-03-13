import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script generates a sitemap.xml file based on the static routes + dynamic blog/program IDs
// It's designed to be run as a postbuild script.

const BASE_URL = 'https://byci.com';

// Mocking getting the data directly since we can't easily import TS files with ESM in a simple node script
// We'll read the IDs from the TS files broadly. 
// For a production app, an API endpoint or dynamic framework handler is better, but this works perfectly for Vite static.

const generateSitemap = async () => {
  const sitemapPath = path.resolve(__dirname, '../dist/sitemap.xml');
  
  // Base Routes
  const routes = [
    '',
    '/programs',
    '/corporate',
    '/certifications',
    '/blog',
    '/about',
    '/contact',
    '/enrollment'
  ];

  // We could parse the TS files for IDs, but for the sake of speed, 
  // these are the static top level pages that matter most for indexing.
  
  const today = new Date().toISOString().split('T')[0];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="en-KW" href="${BASE_URL}${route}?lang=en" />
    <xhtml:link rel="alternate" hreflang="ar-KW" href="${BASE_URL}${route}?lang=ar" />
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${BASE_URL}${route}?lang=ar" />
    <xhtml:link rel="alternate" hreflang="ar-AE" href="${BASE_URL}${route}?lang=ar" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${route}" />
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(sitemapPath, xmlContent);
  console.log('Sitemap successfully generated at dist/sitemap.xml');
};

generateSitemap();
