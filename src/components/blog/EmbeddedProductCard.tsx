'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Star } from 'lucide-react';

interface EmbeddedProductCardProps {
  product: any;
  lang: 'ar' | 'en';
}

export default function EmbeddedProductCard({ product, lang }: EmbeddedProductCardProps) {
  if (!product) return null;

  const isAr = lang === 'ar';
  const title = isAr ? product.name : product.nameEn;
  const description = isAr ? product.description : product.descriptionEn;
  const cta = isAr ? 'أضف للسلة' : 'Add to Cart';
  const sar = isAr ? 'ر.س' : 'SAR';
  const categorySlug = product.categorySlug || 'electric-scooter';

  const productUrl = isAr ? `/${categorySlug}/${product.slug}` : `/en/${categorySlug}/${product.slugEn}`;
  
  const imageUrl = product.image || (product.gallery && product.gallery[0]) || '/images/placeholder.png';
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="my-10 bg-surface rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col sm:flex-row items-center hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <Link href={productUrl} className="relative w-full sm:w-1/3 aspect-square sm:aspect-auto sm:h-full bg-white flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain p-4"
        />
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            -{discountPercent}%
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-6 flex-1 flex flex-col justify-between w-full h-full border-t sm:border-t-0 sm:border-r border-border" dir={isAr ? 'rtl' : 'ltr'}>
        <div>
          <div className="flex items-center gap-1 mb-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="text-text-secondary text-sm font-medium mr-1 ml-1">({product.rating || 4.8})</span>
          </div>
          
          <Link href={productUrl} className="hover:text-primary transition-colors">
            <h4 className="text-lg font-bold text-text mb-2 line-clamp-2">{title}</h4>
          </Link>
          <p className="text-sm text-text-secondary line-clamp-2 mb-4">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-sm text-text-secondary line-through">
                {product.originalPrice} {sar}
              </span>
            )}
            <span className="text-xl font-black text-primary">
              {product.price} {sar}
            </span>
          </div>
          
          <Link 
            href={productUrl}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-transform active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{cta}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
