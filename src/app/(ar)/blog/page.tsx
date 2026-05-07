import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ChevronLeft } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'مدونة نشتري — أدلة ونصائح السكوتر الكهربائي',
  description: 'اقرأ أحدث المقالات والأدلة حول السكوترات الكهربائية في السعودية. نصائح الشراء، المقارنات، وأدلة الصيانة من خبراء نشتري.',
};

import { getAllPosts } from '@/data/blog';

// Generate dynamic excerpts if they don't exist
const blogPosts = getAllPosts().map(post => ({
  ...post,
  excerpt: post.excerpt || (post.content.split('\n').find((p: string) => p.trim().length > 20 && !p.startsWith('#')) || '').substring(0, 120) + '...'
}));

export default function BlogPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "المدونة", url: "/blog" },
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">مدونة نشتري</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            أدلة شراء، نصائح صيانة، ومقارنات احترافية لمساعدتك في اختيار السكوتر المثالي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-lg">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime} دقائق قراءة
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  <h2 className="text-xl font-bold text-text mb-3 leading-tight line-clamp-2">{post.title}</h2>
                </Link>
                <p className="text-text-secondary leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-primary font-bold hover:underline">
                  اقرأ المزيد
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
