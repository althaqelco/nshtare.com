"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircleQuestion, ChevronDown } from "lucide-react";

export default function DialectFaq({ categorySlug, productName }: { categorySlug: string, productName: string }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // N-Grams and Dialect Bridge
  // Short, punchy answers under 45 words for Voice Search / AEO
  const faqsAr = [
    {
      q: `بكم ${productName} ومين يوصله للرياض؟`,
      a: `السعر شامل الضريبة. نوصل ${productName} لكل أحياء الرياض وجدة والدمام مجاناً خلال 24-48 ساعة، وتقدر تدفع عند الاستلام.`
    },
    {
      q: `هل يتحمل الدباب أوزان الكبار؟`,
      a: `نعم، الهيكل مصمم من ألمنيوم الطائرات ليتحمل الأوزان العالية بأمان تام حتى في المرتفعات القوية بفضل الموتور الـ Brushless.`
    },
    {
      q: `أقدر أقسط المبلغ على تابي أو تمارا؟`,
      a: `أكيد، تقدر تقسط قيمة السكوتر على 4 دفعات ميسرة بدون فوائد أو رسوم خفية عبر تابي وتمارا وقت الدفع.`
    },
    {
      q: `كيف أضمن قطع الغيار لو خرب السكوتر؟`,
      a: `كل قطع الغيار (كفرات صب، بطاريات، شواحن) متوفرة عندنا في نشتري. وعليك ضمان ذهبي شامل لمدة سنة كاملة.`
    }
  ];

  const faqsEn = [
    {
      q: `How much is ${productName} and do you deliver to Riyadh?`,
      a: `The price is tax-inclusive. We offer free delivery to Riyadh, Jeddah, and Dammam within 24-48 hours. Cash on delivery is available.`
    },
    {
      q: `Can this scooter handle adult weights?`,
      a: `Yes, the frame is made of aerospace-grade aluminum, safely supporting heavy weights even on steep inclines thanks to the powerful Brushless motor.`
    },
    {
      q: `Can I pay in installments using Tabby or Tamara?`,
      a: `Absolutely, you can split the scooter's cost into 4 easy, interest-free payments using Tabby or Tamara at checkout.`
    },
    {
      q: `Are spare parts available if needed?`,
      a: `All spare parts (solid tires, batteries, chargers) are readily available at Nshtare. Your purchase also includes a comprehensive 1-year warranty.`
    }
  ];

  const faqs = isEn ? faqsEn : faqsAr;

  return (
    <div className="mb-10" dir={isEn ? "ltr" : "rtl"}>
      <div className="flex items-center gap-3 mb-6">
        <MessageCircleQuestion className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-black text-text">
          {isEn ? "Frequently Asked Questions" : "أسئلة تهمك قبل الشراء"}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${openIndex === idx ? 'border-primary bg-primary/5 shadow-sm' : 'border-border bg-surface hover:border-primary/30'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 text-start"
            >
              <h4 className={`font-bold pr-2 ${openIndex === idx ? 'text-primary' : 'text-text'}`}>
                {faq.q}
              </h4>
              <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'transform rotate-180 text-primary' : 'text-text-secondary'}`} />
            </button>
            <div 
              className={`px-4 pb-4 text-text-secondary text-sm leading-relaxed transition-all duration-300 ${openIndex === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>

      {/* JSON-LD FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
