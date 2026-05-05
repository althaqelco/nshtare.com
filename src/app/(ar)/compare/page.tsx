"use client";

import React, { useState } from 'react';
import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, X, Plus, ArrowRight } from 'lucide-react';

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const addProduct = (slug: string) => {
    if (selected.length >= 3) return;
    if (!selected.includes(slug)) setSelected([...selected, slug]);
  };

  const removeProduct = (slug: string) => {
    setSelected(selected.filter(s => s !== slug));
  };

  const selectedProducts = selected.map(s => products.find(p => p.slug === s)).filter(Boolean);
  const available = products.filter(p => !selected.includes(p.slug));

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">مقارنة المنتجات</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            اختر حتى 3 منتجات لمقارنة المواصفات والأسعار جنباً إلى جنب.
          </p>
        </div>

        {/* Product Selector */}
        {selected.length < 3 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">أضف منتج للمقارنة ({selected.length}/3)</h2>
            <div className="flex flex-wrap gap-3">
              {available.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => addProduct(p.slug)}
                  className="px-4 py-2 bg-surface border border-border rounded-xl text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 flex items-center gap-2 text-sm font-medium"
                >
                  <Plus className="h-4 w-4" />
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {selectedProducts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-surface border border-border text-text font-bold text-start">المعيار</th>
                  {selectedProducts.map((p: any) => (
                    <th key={p.slug} className="p-4 bg-surface border border-border text-center min-w-[200px]">
                      <button onClick={() => removeProduct(p.slug)} className="text-error/60 hover:text-error float-start" title="إزالة">
                        <X className="h-5 w-5" />
                      </button>
                      <div className="relative w-24 h-24 mx-auto mb-3">
                        <Image src={p.image} alt={p.name} fill className="object-contain" />
                      </div>
                      <Link href={`/${p.categorySlug}/${p.slug}`} className="text-text font-bold hover:text-primary text-sm leading-tight block">{p.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">السعر</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <div className="font-black text-primary text-xl">{p.price.toLocaleString()} ر.س</div>
                      {p.originalPrice && <div className="text-sm text-text-secondary line-through">{p.originalPrice.toLocaleString()} ر.س</div>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">التقييم</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <div className="flex items-center justify-center gap-1 text-accent">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="font-bold text-text text-lg">{p.rating}</span>
                      </div>
                      <div className="text-xs text-text-secondary">({p.reviewsCount} تقييم)</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">الدفع عند الاستلام</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <ShieldCheck className="h-6 w-6 text-success mx-auto" />
                      <span className="text-sm text-success font-bold">متاح</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">الضمان</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center text-text font-bold">سنة كاملة</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">اطلب الآن</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <Link href={`/${p.categorySlug}/${p.slug}`} className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors">
                        عرض المنتج
                        <ArrowRight className="h-4 w-4 rotate-180" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-surface border border-border rounded-2xl p-12 text-center">
            <p className="text-text-secondary text-lg mb-4">اختر منتجات من القائمة أعلاه لبدء المقارنة.</p>
            <Link href="/electric-scooter" className="text-primary font-bold hover:underline">أو تصفح جميع المنتجات ←</Link>
          </div>
        )}

      </div>
    </div>
  );
}
