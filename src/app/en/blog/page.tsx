import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Nshtare Blog — Electric Scooter Guides & Tips',
  description: 'Read the latest articles and guides about electric scooters in Saudi Arabia. Buying guides, comparisons, and maintenance tips from Nshtare experts.',
};

const blogPosts = [
  {
    slug: 'electric-scooter-buying-guide-saudi',
    title: 'Electric Scooter Buying Guide in Saudi Arabia 2026',
    excerpt: 'Everything you need to know before buying an electric scooter: specs, prices, and the best options for beginners and pros.',
    image: '/images/ui/seo_article_cover_1777998050466.png',
    category: 'Buying Guide',
    date: '2026-05-01',
    readTime: 8,
  },
  {
    slug: 'electric-scooter-vs-drift-scooter',
    title: 'Electric Scooter vs Drift Scooter: Which One is Right for You?',
    excerpt: 'A comprehensive comparison between electric scooters and drift scooters in terms of speed, range, price, and usage.',
    image: '/images/ui/seo_article_kick_1777998364132.png',
    category: 'Comparison',
    date: '2026-04-25',
    readTime: 6,
  },
  {
    slug: 'electric-scooter-maintenance-tips',
    title: '7 Golden Tips for Electric Scooter Maintenance',
    excerpt: 'Learn how to maintain your electric scooter and extend its lifespan with practical tips from our maintenance team.',
    image: '/images/ui/hero_kick_scooter_1777998272875.png',
    category: 'Maintenance',
    date: '2026-04-18',
    readTime: 5,
  },
  {
    slug: 'electric-scooter-prices-saudi-2026',
    title: 'Electric Scooter Prices in Saudi Arabia 2026 — Updated Guide',
    excerpt: 'An updated table of prices for the most popular electric scooters in the Saudi market with value-for-money comparisons.',
    image: '/images/ui/og_kick_scooter_1777998286952.png',
    category: 'Prices',
    date: '2026-04-10',
    readTime: 7,
  },
];

export default function BlogPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">Nshtare Blog</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Buying guides, maintenance tips, and professional comparisons to help you choose the perfect scooter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <Link href={`/en/blog/${post.slug}`} className="relative aspect-video overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-lg">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime} min read</span>
                </div>
                <Link href={`/en/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  <h2 className="text-xl font-bold text-text mb-3 leading-tight line-clamp-2">{post.title}</h2>
                </Link>
                <p className="text-text-secondary leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <Link href={`/en/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-primary font-bold hover:underline">
                  Read More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
