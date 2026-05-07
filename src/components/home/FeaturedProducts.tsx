import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck, Zap, ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';

export default function FeaturedProducts({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const isEn = lang === 'en';

  // Show top 4 products (by rating)
  const featured = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const ArrowIcon = isEn ? ArrowRight : ArrowLeft;

  return (
    <section className="py-16 md:py-20 bg-bg" dir={isEn ? "ltr" : "rtl"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-text mb-2">
              {isEn ? "Featured Products" : "منتجات مميزة"}
            </h2>
            <p className="text-text-secondary text-lg">
              {isEn ? "Our customers' top picks" : "الأكثر طلباً من عملائنا"}
            </p>
          </div>
          <Link 
            href={isEn ? "/en/electric-scooter" : "/electric-scooter"}
            className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors"
          >
            {isEn ? "View All" : "عرض الكل"}
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={isEn ? `/en/${product.categorySlug}/${product.slug}` : `/${product.categorySlug}/${product.slug}`}
              className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-square bg-bg p-4 md:p-6 overflow-hidden">
                {product.originalPrice && (
                  <div className="absolute top-2 right-2 z-10 bg-error text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
                    <Zap className="h-3 w-3 fill-current" />
                    {isEn ? "Sale" : "خصم"}
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={isEn ? product.nameEn : product.name}
                  fill
                  quality={90}
                  className="object-contain p-2 md:p-4 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>

              <div className="p-3 md:p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1 text-accent mb-1 md:mb-2">
                  <Star className="h-3.5 w-3.5 md:h-4 md:w-4 fill-current" />
                  <span className="text-xs md:text-sm font-bold text-text">{product.rating}</span>
                  <span className="text-[10px] md:text-xs text-text-secondary">({product.reviewsCount})</span>
                </div>

                <h3 className="font-bold text-text text-sm md:text-base mb-2 line-clamp-2 leading-snug">
                  {isEn ? product.nameEn : product.name}
                </h3>

                <div className="mt-auto pt-2 md:pt-3 flex items-center justify-between">
                  <div>
                    <div className="font-black text-primary text-base md:text-xl">
                      {product.price.toLocaleString()} <span className="text-xs md:text-sm">{isEn ? "SAR" : "ر.س"}</span>
                    </div>
                    {product.originalPrice && (
                      <div className="text-[10px] md:text-xs text-text-secondary line-through">
                        {product.originalPrice.toLocaleString()} {isEn ? "SAR" : "ر.س"}
                      </div>
                    )}
                  </div>
                  <div className="bg-success/10 text-success rounded-lg p-1.5 md:p-2" title={isEn ? "COD" : "دفع عند الاستلام"}>
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href={isEn ? "/en/electric-scooter" : "/electric-scooter"}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            {isEn ? "View All Products" : "عرض جميع المنتجات"}
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
