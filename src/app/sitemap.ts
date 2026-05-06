import { MetadataRoute } from 'next';
import { categories, subcategories, cities, products } from '@/lib/data';

const baseUrl = 'https://nshtare.com';

/**
 * Sitemap Generator (SEO Layer 4)
 * 
 * CRITICAL: Uses STATIC dates, NOT new Date().
 * Dynamic dates cause Google to see "content changed" on every crawl,
 * which wastes crawl budget and can trigger quality filters.
 * 
 * Update these dates manually when actual content changes occur.
 */
const SITE_LAUNCH = '2026-05-01T00:00:00Z';
const CONTENT_UPDATE = '2026-05-06T13:30:00Z';
const BLOG_UPDATE = '2026-05-01T00:00:00Z';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    // ═══════════════════════════════════════════
    // Tier 1: Homepage (Priority 1.0)
    // ═══════════════════════════════════════════
    {
      url: `${baseUrl}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // ═══════════════════════════════════════════
    // Tier 2: Static Pages (AR)
    // ═══════════════════════════════════════════
    { url: `${baseUrl}/about`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/shipping`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/warranty`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/return-policy`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/compare`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: BLOG_UPDATE, changeFrequency: 'weekly', priority: 0.7 },

    // Blog Articles (AR)
    { url: `${baseUrl}/blog/electric-scooter-buying-guide-saudi`, lastModified: BLOG_UPDATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/electric-scooter-vs-drift-scooter`, lastModified: BLOG_UPDATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/electric-scooter-maintenance-tips`, lastModified: BLOG_UPDATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/electric-scooter-prices-saudi-2026`, lastModified: BLOG_UPDATE, changeFrequency: 'monthly', priority: 0.6 },

    // ═══════════════════════════════════════════
    // Tier 2b: Static Pages (EN)
    // ═══════════════════════════════════════════
    { url: `${baseUrl}/en/about`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/en/faq`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/en/contact`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/en/shipping`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/en/warranty`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/en/return-policy`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/en/compare`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/en/blog`, lastModified: BLOG_UPDATE, changeFrequency: 'weekly', priority: 0.6 },
  ];

  // ═══════════════════════════════════════════
  // Tier 3: Category Pages (0.9 priority)
  // ═══════════════════════════════════════════
  categories.forEach((cat) => {
    routes.push({
      url: `${baseUrl}/${cat.slug}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    routes.push({
      url: `${baseUrl}/en/${cat.slug}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // City categories
    cities.forEach((city) => {
      routes.push({
        url: `${baseUrl}/${cat.slug}/${city.slug}`,
        lastModified: CONTENT_UPDATE,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
      routes.push({
        url: `${baseUrl}/en/${cat.slug}/${city.slug}`,
        lastModified: CONTENT_UPDATE,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  // ═══════════════════════════════════════════
  // Tier 4: Subcategory Pages (0.8 priority)
  // ═══════════════════════════════════════════
  subcategories.forEach((sub) => {
    routes.push({
      url: `${baseUrl}/${sub.parentSlug}/${sub.slug}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/en/${sub.parentSlug}/${sub.slug}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // ═══════════════════════════════════════════
  // Tier 5: Product Pages (0.8 priority)
  // ═══════════════════════════════════════════
  products.forEach((product) => {
    routes.push({
      url: `${baseUrl}/${product.categorySlug}/${product.slug}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'daily',
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/en/${product.categorySlug}/${product.slug}`,
      lastModified: CONTENT_UPDATE,
      changeFrequency: 'daily',
      priority: 0.7,
    });
  });

  return routes;
}
