"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck } from 'lucide-react';
import { getProductsByCategory } from '@/lib/data';

/**
 * RelatedProducts Component
 * 
 * Displays related items in the same category.
 * Maximizes dwell time and provides internal navigational links.
 */
export default function RelatedProducts({
  currentProductId,
  categorySlug,
  isEn = false,
}: {
  currentProductId: string;
  categorySlug: string;
  isEn?: boolean;
}) {
  const allProducts = getProductsByCategory(categorySlug);
  const related = allProducts.filter(p => p.id !== currentProductId).slice(0, 4);

  if (related.length === 0) return null;

  const prefix = isEn ? '/en' : '';

  return (
    <div className="mt-16 mb-8">
      <h2 className="text-2xl font-bold text-text mb-6">
        {isEn ? 'You May Also Like' : 'منتجات قد تعجبك'}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`${prefix}/${product.categorySlug}/${product.slug}`}
            className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
          >
            <div className="relative aspect-square bg-bg p-4 overflow-hidden">
              <Image
                src={product.image}
                alt={isEn ? (product.nameEn || product.name) : product.name}
                fill
                quality={90}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-1 text-accent mb-1">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="text-xs font-bold text-text">{product.rating}</span>
              </div>
              <h3 className="font-bold text-text text-sm mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                {isEn ? (product.nameEn || product.name) : product.name}
              </h3>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-black text-primary text-lg">
                  {product.price.toLocaleString()}
                  <span className="text-xs mr-1">{isEn ? 'SAR' : 'ر.س'}</span>
                </span>
                <span className="text-success" title={isEn ? 'COD Available' : 'دفع عند الاستلام'}>
                  <ShieldCheck className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
