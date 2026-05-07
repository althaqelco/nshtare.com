import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';
import { getPostBySlug, blogPosts } from '@/data/blog';
import { products } from '@/data';
import EmbeddedProductCard from '@/components/blog/EmbeddedProductCard';

const allSlugs = blogPosts.map((post) => post.slug);

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.titleEn} | Nshtare Blog`,
    description: post.contentEn ? post.contentEn.substring(0, 160).replace(/[#\n]/g, '').trim() : '',
  };
}

export default async function BlogPostPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-text">Article not found</div>;
  }

  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    { name: post.titleEn, url: `/en/blog/${slug}` },
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        headline={post.titleEn}
        datePublished={post.date}
        image={post.image}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        {/* Header */}
        <Link href="/en/blog" className="inline-flex items-center gap-1 text-primary font-bold hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-lg mb-4">
            {post.categoryEn}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-text mb-4 leading-tight">{post.titleEn}</h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
          </div>
          {post.author && (
            <div className="mt-5 flex items-center gap-4 bg-surface border border-border rounded-2xl p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg shrink-0">
                {post.author.charAt(post.author.indexOf('.') > -1 ? post.author.indexOf('.') + 2 : 0)}
              </div>
              <div>
                <p className="font-bold text-text text-sm">{post.author}</p>
                {post.authorTitle && <p className="text-xs text-text-secondary mt-0.5">{post.authorTitle}</p>}
              </div>
            </div>
          )}
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-border">
          <Image src={post.image} alt={post.titleEn} fill quality={100} sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-text leading-relaxed
          [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-text [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-text [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-text-secondary [&_p]:mb-4
          [&_ul]:text-text-secondary [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:ml-4
          [&_ol]:text-text-secondary [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:ml-4
          [&_li]:leading-relaxed
          [&_strong]:text-text [&_strong]:font-bold
          [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6
          [&_th]:bg-surface [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:text-text [&_th]:font-bold [&_th]:text-sm
          [&_td]:border [&_td]:border-border [&_td]:p-3 [&_td]:text-text-secondary [&_td]:text-sm
        ">
          {(post.contentEn || '').split('\n').map((line: string, i: number) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
            if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
            if (trimmed.startsWith('| ')) {
              const cells = trimmed.split('|').filter(Boolean).map(c => c.trim());
              if (trimmed.includes('---')) return null;
              const isHeader = i > 0 && (post.contentEn || '').split('\n')[i + 1]?.includes('---');
              const Tag = isHeader ? 'th' : 'td';
              return (
                <tr key={i}>
                  {cells.map((cell: string, j: number) => <Tag key={j}>{cell}</Tag>)}
                </tr>
              );
            }
            if (trimmed.startsWith('- **')) {
              const text = trimmed.replace('- ', '');
              return <li key={i} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
            }
            if (trimmed.startsWith('- ')) return <li key={i}>{trimmed.replace('- ', '')}</li>;
            if (trimmed.match(/^\d+\./)) return <li key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
            return <p key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
          })}
        </div>

        {/* CTA — One-way link to category page */}
        <div className="mt-12 bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-black mb-3">Ready to Buy?</h3>
          <p className="text-white/80 mb-6">Browse our collection with the best prices, a 1-year warranty, and Cash on Delivery.</p>
          <Link href={`/en/${post.ctaCategory}`} className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
            {post.ctaLabelEn}
          </Link>
        </div>

        {/* Contextual Commerce (Internal Linking) */}
        {post.relatedProducts && post.relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-black text-text mb-6">Related Products (Recommended)</h3>
            <div className="space-y-6">
              {post.relatedProducts.map((productId: string) => {
                const product = products.find((p: any) => p.id === productId);
                if (!product) return null;
                return <EmbeddedProductCard key={product.id} product={product} lang="en" />;
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
