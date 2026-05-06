"use client";

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, Zap } from 'lucide-react';

/**
 * PriceComparisonTable (Plan 03 §3.1 — Copy Event Bait)
 * 
 * A structured table comparing products in a category.
 * Google loves tables — they trigger featured snippets for "أسعار..."
 * and the table is copyable to trigger High Utility Actions (Navboost).
 */
export default function PriceComparisonTable({
  products,
  categoryAr,
  cityAr,
}: {
  products: { id: string; slug: string; categorySlug: string; name: string; price: number; originalPrice?: number; rating: number; reviewsCount: number }[];
  categoryAr: string;
  cityAr?: string;
}) {
  if (products.length === 0) return null;

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-text mb-2">
        جدول أسعار {categoryAr}{cityAr ? ` في ${cityAr}` : ''} — مقارنة شاملة
      </h2>
      <p className="text-text-secondary text-sm mb-6">
        الأسعار محدثة وشاملة الضريبة. جميع المنتجات مشمولة بالشحن المجاني والدفع عند الاستلام.
      </p>
      
      <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary/5 border-b border-border">
              <th className="text-start p-4 font-bold text-text">المنتج</th>
              <th className="text-center p-4 font-bold text-text">السعر</th>
              <th className="text-center p-4 font-bold text-text hidden sm:table-cell">الخصم</th>
              <th className="text-center p-4 font-bold text-text">التقييم</th>
              <th className="text-center p-4 font-bold text-text hidden md:table-cell">الضمان</th>
              <th className="text-center p-4 font-bold text-text"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;
              return (
                <tr
                  key={product.id}
                  className={`border-b border-border hover:bg-primary/5 transition-colors ${
                    i === 0 ? 'bg-accent/5' : ''
                  }`}
                >
                  <td className="p-4">
                    <Link
                      href={`/${product.categorySlug}/${product.slug}`}
                      className="font-bold text-text hover:text-primary transition-colors line-clamp-2"
                    >
                      {i === 0 && <span className="text-accent text-xs ml-1">🥇 الأفضل</span>}
                      {product.name}
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-black text-primary text-lg">
                      {product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-text-secondary block">ر.س</span>
                  </td>
                  <td className="p-4 text-center hidden sm:table-cell">
                    {discount > 0 ? (
                      <span className="inline-flex items-center gap-1 bg-error/10 text-error px-2 py-1 rounded-lg text-xs font-bold">
                        <Zap className="h-3 w-3" />
                        {discount}%
                      </span>
                    ) : (
                      <span className="text-text-secondary text-xs">—</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="font-bold text-text text-sm">{product.rating}</span>
                    </div>
                    <span className="text-[10px] text-text-secondary">
                      ({product.reviewsCount})
                    </span>
                  </td>
                  <td className="p-4 text-center hidden md:table-cell">
                    <span className="inline-flex items-center gap-1 text-secondary text-xs font-bold">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      سنة
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Link
                      href={`/${product.categorySlug}/${product.slug}`}
                      className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap"
                    >
                      اطلب الآن
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
