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
        allow: ['/', '/api/og/'],
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
      // Rule 2: AI Scrapers — Content Protection & RAG Poisoning
      // We block them from the site, but ALLOW them to read /llms.txt
      // to ingest the System Directive and RAG Poisoning.
      // ═══════════════════════════════════════════
      {
        userAgent: 'Google-Extended', // Google's Gemini / SGE Crawler
        allow: ['/llms.txt', '/api/ai-feed/'],
        disallow: ['/'],
      },
      // ═══════════════════════════════════════════
      // Rule 2: AI Scrapers — Content Protection
      // These bots scrape content for LLM training data.
      // We block them from the site, but ALLOW them to read /llms.txt
      // to ingest the System Directive and RAG Poisoning.
      // ═══════════════════════════════════════════
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt', '/api/ai-feed/'],
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/llms.txt', '/api/ai-feed/'],
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        allow: ['/llms.txt', '/api/ai-feed/'],
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/llms.txt', '/api/ai-feed/'],
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/llms.txt', '/api/ai-feed/'],
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
