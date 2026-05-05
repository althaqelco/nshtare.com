import { MetadataRoute } from 'next';
import { categories, cities, products } from '@/lib/data';

const baseUrl = 'https://nshtare.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/order`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/en/order`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    }
  ];

  // 1. Categories
  categories.forEach((cat) => {
    // AR
    routes.push({
      url: `${baseUrl}/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    // EN
    routes.push({
      url: `${baseUrl}/en/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // 2. City Silos for each category
    cities.forEach((city) => {
      // AR
      routes.push({
        url: `${baseUrl}/${cat.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
      // EN
      routes.push({
        url: `${baseUrl}/en/${cat.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  // 3. Products
  products.forEach((product) => {
    // AR
    routes.push({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    });
    // EN
    routes.push({
      url: `${baseUrl}/en/product/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    });
  });

  return routes;
}
