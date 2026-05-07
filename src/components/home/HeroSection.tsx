"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

export default function HeroSection() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  return (
    <section className="relative w-full overflow-hidden bg-surface min-h-[85vh] sm:min-h-[600px] flex items-center">
      
      {/* Background Graphic (Flash Sale Banner) */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image 
          src="/images/hero/flash-sale.webp" 
          alt="Background Pattern" 
          fill 
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
        {isEn ? (
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/90 to-transparent"></div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12" dir={isEn ? "ltr" : "rtl"}>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold">
              <Zap className="h-4 w-4 fill-current" />
              <span>{isEn ? "Special Offer: 30% OFF" : "عرض خاص: خصم 30% الكاش"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text leading-tight tracking-tight">
              {isEn ? "The Ultimate" : "السكوتر الكهربائي"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {isEn ? "Electric Kick Scooter" : "الوحش"}
              </span>
            </h1>
            
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              {isEn 
                ? "Experience the future of mobility in KSA. High speed, long range, and premium build quality. Pay upon delivery!"
                : "اكتشف مستقبل التنقل في السعودية. سرعة عالية، بطارية تدوم طويلاً، وجودة لا تُضاهى. الدفع عند الاستلام متاح!"}
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-4">
              <Link 
                href={isEn ? "/en/electric-scooter" : "/electric-scooter"}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                {isEn ? "Shop Now" : "تسوق الآن"}
                {isEn ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
              </Link>
              <Link 
                href={isEn ? "/en/drift-scooter" : "/drift-scooter"}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-border hover:border-primary text-text px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                {isEn ? "View Categories" : "تصفح الأقسام"}
              </Link>
            </div>
            
            {/* Social Proof Text */}
            <div className="pt-4 flex items-center gap-2 text-sm text-text-secondary font-medium">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden relative">
                   <Image src="/images/ui/avatar_saudi_customer.webp" alt="Customer" fill className="object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary text-white flex items-center justify-center text-xs font-bold z-10">
                  +1K
                </div>
              </div>
              <span>{isEn ? "Happy customers in KSA" : "عميل راضٍ في السعودية"}</span>
            </div>

          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center relative min-h-[300px] sm:min-h-[400px]">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl filter animate-pulse"></div>
            <Image 
              src="/images/products/product_ninebot_max_1777998751040.png" 
              alt="Premium Electric Kick Scooter" 
              fill
              className="object-contain drop-shadow-2xl z-10 transform transition-transform hover:scale-105 duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
