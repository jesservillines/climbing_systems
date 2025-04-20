const EXTERNAL_DATA_URL = 'https://alpinisthub.com';

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ url, lastmod, changefreq, priority }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${url}`}</loc>
           <lastmod>${lastmod}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export default function handler(req, res) {
  // Get today's date for lastmod
  const today = new Date().toISOString().split('T')[0];
  
  // Define all static pages and their properties
  const pages = [
    { url: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { url: '/big-wall-aid', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { url: '/rope-soloing', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { url: '/learn', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { url: '/shop', lastmod: today, changefreq: 'weekly', priority: '0.9' },
  ];

  // Generate the XML sitemap
  const sitemap = generateSiteMap(pages);

  // Set appropriate headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  
  // Return the sitemap
  res.write(sitemap);
  res.end();
}
