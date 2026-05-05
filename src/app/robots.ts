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
        // 🚨 Block WooCommerce Legacy Filter & Sorting Parameters 🚨
        '/*?orderby=',
        '/*?min_price=',
        '/*?max_price=',
        '/*?add-to-cart=',
        '/*?per_page=',
        '/*?shop_view=',
        '/*?per_row=',
        '/*?rating=',
        '/*?popularity=',
      ],
    },
    sitemap: 'https://nshtare.com/sitemap.xml',
  };
}
