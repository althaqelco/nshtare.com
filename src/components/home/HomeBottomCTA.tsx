"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, ArrowLeft, ArrowRight, ShieldCheck, MessageCircle, Repeat } from 'lucide-react';

/**
 * Bottom CTA sections for homepage — Blog preview + Trust reinforcement strip.
 */
export default function HomeBottomCTA() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const prefix = isEn ? '/en' : '';
  const Arrow = isEn ? ArrowRight : ArrowLeft;

  const articles = [
    {
      title: isEn ? "Electric Scooter Buying Guide 2026" : "دليل شراء السكوتر الكهربائي 2026",
      desc: isEn ? "Everything you need to know before your first purchase." : "كل ما تحتاج معرفته قبل أول شراء.",
      href: `${prefix}/blog/electric-scooter-buying-guide-saudi`,
    },
    {
      title: isEn ? "Electric vs Drift: Which is Right?" : "كهربائي vs درفت: أيهما يناسبك؟",
      desc: isEn ? "A detailed comparison to help you decide." : "مقارنة تفصيلية تساعدك في الاختيار.",
      href: `${prefix}/blog/electric-scooter-vs-drift-scooter`,
    },
    {
      title: isEn ? "7 Maintenance Tips" : "7 نصائح ذهبية للصيانة",
      desc: isEn ? "Extend your scooter's lifespan with these tips." : "أطِل عمر سكوترك بهذه النصائح.",
      href: `${prefix}/blog/electric-scooter-maintenance-tips`,
    },
  ];

  return (
    <>
      {/* Blog Preview Section */}
      <section className="py-16 md:py-20 bg-surface" dir={isEn ? "ltr" : "rtl"}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <BookOpen className="h-4 w-4" />
                {isEn ? "FROM OUR BLOG" : "من مدونتنا"}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text">
                {isEn ? "Expert Guides" : "أدلة الخبراء"}
              </h2>
            </div>
            <Link 
              href={`${prefix}/blog`}
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors"
            >
              {isEn ? "All Articles" : "كل المقالات"}
              <Arrow className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <Link 
                key={i} 
                href={article.href}
                className="group bg-bg hover:bg-primary/5 border border-border hover:border-primary/20 rounded-2xl p-6 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-4">{article.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  {isEn ? "Read More" : "اقرأ المزيد"}
                  <Arrow className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href={`${prefix}/blog`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors"
            >
              {isEn ? "All Articles" : "كل المقالات"}
              <Arrow className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Reinforcement Strip */}
      <section className="py-14 bg-primary text-white" dir={isEn ? "ltr" : "rtl"}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-2">
              {isEn ? "Why 1,000+ Customers Trust Nshtare?" : "لماذا يثق +1000 عميل بمتجر نشتري؟"}
            </h2>
            <p className="text-white/70">
              {isEn ? "We deliver on our promises — every single time." : "نوفّي بوعودنا — في كل مرة."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{isEn ? "1-Year Warranty" : "ضمان سنة"}</h3>
                <p className="text-sm text-white/60">{isEn ? "Motor + Battery" : "محرك + بطارية"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{isEn ? "WhatsApp Support" : "دعم واتساب"}</h3>
                <p className="text-sm text-white/60">{isEn ? "Instant response" : "رد فوري"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <Repeat className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{isEn ? "7-Day Returns" : "إرجاع 7 أيام"}</h3>
                <p className="text-sm text-white/60">{isEn ? "Hassle-free" : "بدون تعقيد"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
