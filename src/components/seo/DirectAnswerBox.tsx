"use client";

import React from 'react';

/**
 * DirectAnswer Box (Plan 03 §2.2 — Featured Snippet Bait)
 * 
 * A concise 50-80 word paragraph that Google can extract as a Featured Snippet.
 * Wrapped in a visually distinct box with the `.direct-answer` class
 * for SpeakableSpecification targeting.
 */
export default function DirectAnswerBox({
  categoryAr,
  cityAr,
  productCount,
  minPrice,
}: {
  categoryAr: string;
  cityAr: string;
  productCount: number;
  minPrice: number;
}) {
  return (
    <div className="bg-gradient-to-l from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-8">
      <p className="direct-answer text-text text-base md:text-lg leading-relaxed font-medium">
        يتوفر في متجر نشتري أكثر من <strong>{productCount}</strong> {categoryAr} للبيع في{' '}
        <strong>{cityAr}</strong> بأسعار تبدأ من <strong>{minPrice.toLocaleString()} ر.س</strong>.
        جميع المنتجات تأتي بضمان الوكيل سنة كاملة مع خيار الدفع عند الاستلام
        وخدمة الشحن المجاني لجميع أحياء {cityAr}. يمكنك المقارنة بين المواصفات والأسعار
        واختيار الأنسب لاحتياجاتك من خلال جدول المقارنة أدناه.
      </p>
    </div>
  );
}
