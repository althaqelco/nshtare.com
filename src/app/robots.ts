import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/abyss/',    // Honeypot route, legitimate bots should NOT crawl this
        '/order/',        // No need to index checkout pages
        '/en/order/',
        '/api/auth/',     // Any auth endpoints
      ],
    },
    sitemap: 'https://nshtare.com/sitemap.xml',
  };
}
