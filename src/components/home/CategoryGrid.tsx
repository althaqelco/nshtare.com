"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { categories } from '@/lib/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CATEGORY_META: Record<string, { image: string; colSpan: string; bg: string }> = {
  'electric-scooter': { image: '/images/categories/electric-scooter.webp', colSpan: 'col-span-1 md:col-span-2', bg: 'bg-gradient-to-br from-blue-50 to-indigo-50' },
  'smart-scooter': { image: '/images/categories/smart-scooter.webp', colSpan: 'col-span-1', bg: 'bg-gradient-to-br from-indigo-50 to-purple-50' },
  'drift-scooter': { image: '/images/categories/drift-scooter.webp', colSpan: 'col-span-1', bg: 'bg-gradient-to-br from-orange-50 to-amber-50' },
  'kids-scooter': { image: '/images/categories/kids-scooter.webp', colSpan: 'col-span-1', bg: 'bg-gradient-to-br from-pink-50 to-rose-50' },
  'scooter-accessories': { image: '/images/categories/accessories.webp', colSpan: 'col-span-1 md:col-span-2', bg: 'bg-gradient-to-br from-emerald-50 to-teal-50' },
  'spare-parts': { image: '/images/categories/spare-parts.webp', colSpan: 'col-span-1', bg: 'bg-gradient-to-br from-slate-50 to-gray-100' },
};

export default function CategoryGrid() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const prefix = isEn ? '/en' : '';

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12" dir={isEn ? "ltr" : "rtl"}>
          <h2 className="text-3xl md:text-4xl font-black text-text mb-4">
            {isEn ? "Shop by Category" : "تسوق حسب القسم"}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {isEn 
              ? "Find exactly what you need. From powerful commuters to fun kids scooters."
              : "اختر السكوتر المناسب لاحتياجك. من السكوترات العملية للكبار إلى سكوترات الأطفال."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" dir={isEn ? "ltr" : "rtl"}>
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat.slug] || { image: '/images/categories/electric-scooter.webp', colSpan: 'col-span-1', bg: 'bg-gray-50' };
            return (
              <Link 
                key={cat.slug} 
                href={`${prefix}/${cat.slug}`}
                className={`group relative overflow-hidden rounded-2xl ${meta.bg} ${meta.colSpan} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between p-7 min-h-[220px] border border-transparent hover:border-primary/20`}
              >
                <div className="relative z-10 w-2/3">
                  <span className="text-3xl mb-2 block">{cat.icon}</span>
                  <h3 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                    {isEn ? cat.nameEn : cat.nameAr}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {isEn ? cat.descEn : cat.descAr}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    {isEn ? 'Browse' : 'تصفح'}
                    {isEn ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                  </span>
                </div>
                
                <div className="absolute end-0 bottom-0 w-28 h-28 sm:w-36 sm:h-36 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                  <Image 
                    src={meta.image} 
                    alt={isEn ? cat.nameEn : cat.nameAr} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
