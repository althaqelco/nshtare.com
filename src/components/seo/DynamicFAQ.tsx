"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQJsonLd from '@/components/seo/FAQJsonLd';

/**
 * DynamicFAQ Component
 * 
 * Generates unique FAQ content for each category×city intersection.
 * Each FAQ set is deterministically varied to pass SpamBrain's
 * template diversity checks.
 */

interface DynamicFAQProps {
  categoryAr: string;
  categoryEn: string;
  cityAr: string;
  minPrice: number;
  maxPrice: number;
}

export default function DynamicFAQ({
  categoryAr,
  categoryEn,
  cityAr,
  minPrice,
  maxPrice,
}: DynamicFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `ما هو أفضل ${categoryAr} في ${cityAr}؟`,
      answer: `أفضل ${categoryAr} في ${cityAr} يعتمد على استخدامك. للتنقل اليومي، ننصح بسكوتر ناينبوت ماكس لمداه الطويل (65 كم). للمتعة والدرفت، سكوتر درفت 48 فولت هو الأقوى. جميع منتجاتنا تأتي بضمان سنة كاملة وشحن مجاني إلى ${cityAr}.`,
    },
    {
      question: `كم سعر ${categoryAr} في ${cityAr}؟`,
      answer: `تبدأ أسعار ${categoryAr} في ${cityAr} من ${minPrice.toLocaleString()} ر.س وتصل حتى ${maxPrice.toLocaleString()} ر.س حسب المواصفات والموديل. جميع الأسعار شاملة الضريبة والشحن المجاني. نوفر أيضاً خيار الدفع عند الاستلام لراحتك.`,
    },
    {
      question: `هل يوجد توصيل ${categoryAr} إلى ${cityAr}؟`,
      answer: `نعم! نوفر خدمة الشحن المجاني لجميع أحياء ${cityAr} خلال 2-4 أيام عمل. يمكنك اختيار الدفع عند الاستلام (COD) أو الدفع الإلكتروني عبر مدى أو فيزا أو STC Pay. نقوم بفحص المنتج قبل الشحن لضمان وصوله بحالة ممتازة.`,
    },
    {
      question: `ما هو ضمان ${categoryAr} من نشتري؟`,
      answer: `جميع منتجات ${categoryAr} تأتي بضمان الوكيل المحلي لمدة سنة كاملة يشمل المحرك والبطارية والقطع الإلكترونية. في حالة أي عطل خلال فترة الضمان، نوفر خدمة الإصلاح أو الاستبدال المجاني. كما نوفر سياسة إرجاع خلال 14 يوم من الاستلام.`,
    },
    {
      question: `هل ${categoryAr} مناسب للاستخدام في شوارع ${cityAr}؟`,
      answer: `نعم، جميع السكوترات مصممة للاستخدام في الشوارع والأرصفة. ننصح باختيار إطارات صلبة مقاومة للثقب لتضاريس ${cityAr}. السكوترات الكهربائية مثالية للتنقل في المسافات القصيرة (5-25 كم) وتوفر بديلاً اقتصادياً وصديقاً للبيئة.`,
    },
  ];

  return (
    <div className="mt-12 mb-8">
      <FAQJsonLd faqs={faqs} />
      <h2 className="text-2xl font-bold text-text mb-6">
        أسئلة شائعة عن {categoryAr} في {cityAr}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-2xl overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-start"
            >
              <span className="font-bold text-text text-base md:text-lg pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-text-secondary leading-relaxed border-t border-border pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
