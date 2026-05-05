"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  const t = {
    about: isEn ? "About Nshtare" : "عن نشتري",
    aboutDesc: isEn 
      ? "The premier destination for premium electric kick scooters in Saudi Arabia. We offer quality, warranty, and cash on delivery."
      : "الوجهة الأولى لأفضل السكوترات الكهربائية في السعودية. نقدم الجودة، الضمان، والدفع عند الاستلام.",
    categories: isEn ? "Categories" : "الأقسام",
    support: isEn ? "Customer Support" : "خدمة العملاء",
    contact: isEn ? "Contact Us" : "تواصل معنا",
    faq: isEn ? "FAQs" : "الأسئلة الشائعة",
    shipping: isEn ? "Shipping Policy" : "سياسة الشحن",
    warranty: isEn ? "Warranty Policy" : "سياسة الضمان",
    rights: isEn ? "All rights reserved. Nshtare ©" : "جميع الحقوق محفوظة. نشتري ©",
    year: new Date().getFullYear(),
    cats: [
      { name: isEn ? "Commuter Scooters" : "السكوتر العملي", href: "/categories/commuter" },
      { name: isEn ? "Premium Scooters" : "السكوتر الاحترافي", href: "/categories/premium" },
      { name: isEn ? "Off-Road Scooters" : "سكوتر الطرق الوعرة", href: "/categories/offroad" },
      { name: isEn ? "Kids Scooters" : "سكوتر الأطفال", href: "/categories/kids" },
      { name: isEn ? "Spare Parts & Accessories" : "قطع الغيار والإكسسوارات", href: "/categories/parts" },
    ]
  };

  return (
    <footer className="bg-surface border-t border-border mt-16 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges - Desktop view */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-8 border-b border-border">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-secondary/10 rounded-full text-secondary">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold text-text">{isEn ? "1 Year Warranty" : "ضمان ذهبي سنة كاملة"}</h4>
              <p className="text-sm text-text-secondary">{isEn ? "On motors and batteries" : "على المحرك والبطارية"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Truck className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold text-text">{isEn ? "Fast Shipping" : "شحن سريع وآمن"}</h4>
              <p className="text-sm text-text-secondary">{isEn ? "To all KSA cities" : "لجميع مدن المملكة"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-accent/10 rounded-full text-accent">
              <CreditCard className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold text-text">{isEn ? "Cash on Delivery" : "الدفع عند الاستلام"}</h4>
              <p className="text-sm text-text-secondary">{isEn ? "Pay when you receive" : "ادفع براحتك وقت الاستلام"}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" dir={isEn ? "ltr" : "rtl"}>
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image src="/images/logo/nshtare-logo.png" alt="Nshtare" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-primary">{isEn ? "NSHTARE" : "نشتري"}</span>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-sm">
              {t.aboutDesc}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-text">{t.categories}</h3>
            <ul className="space-y-3">
              {t.cats.map((cat, idx) => (
                <li key={idx}>
                  <Link href={isEn ? `/en${cat.href}` : cat.href} className="text-text-secondary hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-text">{t.support}</h3>
            <ul className="space-y-3">
              <li><Link href={isEn ? '/en/contact' : '/contact'} className="text-text-secondary hover:text-primary transition-colors">{t.contact}</Link></li>
              <li><Link href={isEn ? '/en/faq' : '/faq'} className="text-text-secondary hover:text-primary transition-colors">{t.faq}</Link></li>
              <li><Link href={isEn ? '/en/shipping' : '/shipping'} className="text-text-secondary hover:text-primary transition-colors">{t.shipping}</Link></li>
              <li><Link href={isEn ? '/en/warranty' : '/warranty'} className="text-text-secondary hover:text-primary transition-colors">{t.warranty}</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary" dir={isEn ? "ltr" : "rtl"}>
          <p>{t.rights} {t.year}</p>
          <div className="flex gap-4">
             {/* Payment Methods placeholder */}
             <span>Mada | Visa | Apple Pay</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
