"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircleQuestion, ChevronDown, CheckCircle, ShieldAlert, BookOpen, UserCircle, Star, Truck, ShieldCheck, RefreshCw } from "lucide-react";

export default function CategoryRichContent({ category, isEn = false }: { category: any, isEn?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!category.longDescAr && !category.longDescEn) return null;

  const longDesc = isEn ? category.longDescEn : category.longDescAr;
  const buyingGuide = isEn ? category.buyingGuideEn : category.buyingGuideAr;
  const expert = category.expert;
  const faqs = category.faqs || [];
  const stats = category.stats;
  const safety = category.safetyNotice;

  return (
    <div className="mt-16 space-y-12" dir={isEn ? "ltr" : "rtl"}>
      
      {/* Description & Expert Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="prose prose-lg max-w-none text-text-secondary">
            <h2 className="text-2xl font-bold text-text mb-4">
              {isEn ? `About ${category.nameEn}` : `عن ${category.nameAr}`}
            </h2>
            <p className="leading-relaxed">{longDesc}</p>
          </div>
          
          {buyingGuide && (
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-text">
                  {isEn ? "Buying Guide" : "دليل الشراء"}
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">{buyingGuide}</p>
            </div>
          )}
        </div>

        {expert && (
          <div className="bg-surface p-6 rounded-2xl border border-border h-fit shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <UserCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-text">{isEn ? expert.nameEn : expert.name}</h4>
                <p className="text-xs text-primary font-medium">{isEn ? expert.titleEn : expert.title}</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {isEn ? expert.bioEn : expert.bio}
            </p>
            {expert.credentials && (
              <div className="flex flex-wrap gap-2">
                {expert.credentials.map((cred: string, idx: number) => (
                  <span key={idx} className="text-xs bg-bg px-2 py-1 rounded text-text-secondary border border-border">
                    {cred}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Trust Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface p-4 rounded-xl border border-border text-center">
            <Star className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="font-bold text-lg text-text">{stats.avgRating} / 5</div>
            <div className="text-xs text-text-secondary">{isEn ? "Average Rating" : "متوسط التقييم"}</div>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-border text-center">
            <CheckCircle className="h-6 w-6 text-success mx-auto mb-2" />
            <div className="font-bold text-lg text-text">+{stats.totalSold}</div>
            <div className="text-xs text-text-secondary">{isEn ? "Units Sold" : "وحدة مباعة"}</div>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-border text-center">
            <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="font-bold text-sm text-text mt-1">{isEn ? stats.deliveryTimeEn : stats.deliveryTime}</div>
            <div className="text-xs text-text-secondary">{isEn ? "Fast Delivery" : "توصيل سريع"}</div>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-border text-center">
            <ShieldCheck className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="font-bold text-sm text-text mt-1">{isEn ? stats.warrantyEn : stats.warranty}</div>
            <div className="text-xs text-text-secondary">{isEn ? "Guarantee" : "ضمان شامل"}</div>
          </div>
        </div>
      )}

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <MessageCircleQuestion className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-black text-text text-center">
              {isEn ? "Frequently Asked Questions" : "أسئلة شائعة تهمك"}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq: any, idx: number) => (
              <div 
                key={idx} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${openIndex === idx ? 'border-primary bg-primary/5 shadow-sm' : 'border-border bg-surface hover:border-primary/30'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-start"
                >
                  <h4 className={`font-bold pr-2 ${openIndex === idx ? 'text-primary' : 'text-text'}`}>
                    {isEn ? faq.qEn : faq.q}
                  </h4>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'transform rotate-180 text-primary' : 'text-text-secondary'}`} />
                </button>
                <div 
                  className={`px-4 pb-4 text-text-secondary text-sm leading-relaxed transition-all duration-300 ${openIndex === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  {isEn ? faq.aEn : faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Safety Notice (YMYL) */}
      {safety && (
        <div className="bg-error/5 border border-error/20 p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-start">
          <ShieldAlert className="h-8 w-8 text-error flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-error mb-2">
              {isEn ? "Important Safety Notice" : "تنبيه أمان هام"}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              {isEn ? safety.textEn : safety.textAr}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="bg-white px-3 py-1 rounded shadow-sm text-xs border border-border">
                <span className="font-bold text-text ml-1">{isEn ? "Age:" : "العمر:"}</span> 
                {isEn ? safety.ageRestrictionEn : safety.ageRestriction}
              </div>
              {safety.certifications && (
                <div className="bg-white px-3 py-1 rounded shadow-sm text-xs border border-border">
                  <span className="font-bold text-text ml-1">{isEn ? "Certifications:" : "الاعتمادات:"}</span> 
                  {safety.certifications.join(', ')}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Schema */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq: any) => ({
                "@type": "Question",
                name: isEn ? faq.qEn : faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: isEn ? faq.aEn : faq.a,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}
