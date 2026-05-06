"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cities, categories } from '@/lib/data';
import { MapPin } from 'lucide-react';

/**
 * CategoryCrossLinks Component
 * 
 * Provides internal contextual links for semantic relationships.
 */
export default function CategoryCrossLinks({ currentCategory }: { currentCategory: string }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const prefix = isEn ? '/en' : '';

  const category = categories.find(c => c.slug === currentCategory);
  if (!category) return null;

  // Cross-link to related categories (lateral sibling links)
  const siblings = categories.filter(c => c.slug !== currentCategory);

  return (
    <div className="mt-16 bg-surface rounded-3xl border border-border p-8">
      <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        {isEn ? `${category.nameEn} in Other Cities` : `${category.nameAr} في مدن أخرى`}
      </h3>

      {/* City cross-links for current category */}
      <div className="flex flex-wrap gap-2 mb-8">
        {cities.map(city => (
          <Link
            key={city.slug}
            href={`${prefix}/${currentCategory}/${city.slug}`}
            className="px-4 py-2 bg-bg hover:bg-primary hover:text-white border border-border rounded-lg text-sm text-text-secondary font-medium transition-all duration-200"
          >
            {isEn ? `${category.nameEn} ${city.nameEn}` : `${category.nameAr} ${city.nameAr}`}
          </Link>
        ))}
      </div>

      {/* Sibling category links */}
      <h4 className="text-lg font-bold text-text mb-4">
        {isEn ? 'Browse Other Sections' : 'تصفح أقسام أخرى'}
      </h4>
      <div className="flex flex-wrap gap-2">
        {siblings.map(cat => (
          <Link
            key={cat.slug}
            href={`${prefix}/${cat.slug}`}
            className="px-4 py-2 bg-bg hover:bg-secondary hover:text-white border border-border rounded-lg text-sm text-text-secondary font-medium transition-all duration-200 flex items-center gap-1"
          >
            <span>{cat.icon}</span>
            {isEn ? cat.nameEn : cat.nameAr}
          </Link>
        ))}
      </div>
    </div>
  );
}
