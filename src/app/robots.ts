import { MetadataRoute } from 'next';

/**
 * Robots.txt (SEO Layer 5)
 * 
 * Multi-rule configuration:
 * 1. Standard crawlers: full access minus checkout/api/honeypot
 * 2. AI scrapers: explicitly blocked (protect content investment)
 * 3. Legacy WooCommerce parameters: blocked at robots level too
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ═══════════════════════════════════════════
      // Rule 1: Standard Search Engines (Google, Bing, Yandex)
      // ═══════════════════════════════════════════
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/order/',
          '/en/order/',
          '/*?orderby=',
          '/*?min_price=',
          '/*?max_price=',
          '/*?add-to-cart=',
          '/*?per_page=',
          '/*?shop_view=',
          '/*?per_row=',
          '/*?rating=',
          '/*?popularity=',
          '/*?p=',
          '/*?page_id=',
          '/*?preview=',
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-login.php',
          '/feed/',
          '/trackback/',
          '/cart/',
          '/checkout/',
          '/my-account/',
        ],
      },
      // ═══════════════════════════════════════════
      // Rule 2: AI Scrapers — Content Protection
      // These bots scrape content for LLM training data.
      // Block them to protect our content investment.
      // ═══════════════════════════════════════════
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
      {
        userAgent: 'Bytespider',
        disallow: ['/'],
      },
      {
        userAgent: 'cohere-ai',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://nshtare.com/sitemap.xml',
  };
}
