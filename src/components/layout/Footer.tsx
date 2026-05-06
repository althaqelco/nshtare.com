"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { categories } from '@/lib/data';

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const prefix = isEn ? '/en' : '';

  const t = {
    about: isEn ? "About Nshtare" : "عن نشتري",
    aboutDesc: isEn 
      ? "The premier destination for premium electric scooters in Saudi Arabia. Quality, warranty, and cash on delivery."
      : "الوجهة الأولى لأفضل السكوترات الكهربائية في السعودية. جودة، ضمان، ودفع عند الاستلام.",
    categories: isEn ? "Categories" : "الأقسام",
    support: isEn ? "Customer Support" : "خدمة العملاء",
    explore: isEn ? "Explore" : "استكشف",
    rights: isEn ? "All rights reserved. Nshtare ©" : "جميع الحقوق محفوظة. نشتري ©",
    year: new Date().getFullYear(),
  };

  const supportLinks = [
    { name: isEn ? "Contact Us" : "تواصل معنا", href: `${prefix}/contact` },
    { name: isEn ? "FAQs" : "الأسئلة الشائعة", href: `${prefix}/faq` },
    { name: isEn ? "Shipping Policy" : "سياسة الشحن", href: `${prefix}/shipping` },
    { name: isEn ? "Warranty Policy" : "سياسة الضمان", href: `${prefix}/warranty` },
    { name: isEn ? "Return Policy" : "سياسة الإرجاع", href: `${prefix}/return-policy` },
    { name: isEn ? "About Us" : "عن نشتري", href: `${prefix}/about` },
  ];

  const exploreLinks = [
    { name: isEn ? "Blog" : "المدونة", href: `${prefix}/blog` },
    { name: isEn ? "Compare Products" : "قارن المنتجات", href: `${prefix}/compare` },
    { name: isEn ? "Place an Order" : "اطلب الآن", href: `${prefix}/order` },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-16 pt-12 pb-8 relative">
      {/* Hidden accessibility link */}
      <a href="/api/abyss" className="sr-only" aria-hidden="true" rel="nofollow">Site Status</a>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-8 border-b border-border">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-secondary/10 rounded-full text-secondary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-bold text-text text-sm">{isEn ? "1 Year Warranty" : "ضمان ذهبي سنة كاملة"}</h4>
              <p className="text-xs text-text-secondary">{isEn ? "On motors & batteries" : "على المحرك والبطارية"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Truck className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-bold text-text text-sm">{isEn ? "Fast Shipping" : "شحن سريع وآمن"}</h4>
              <p className="text-xs text-text-secondary">{isEn ? "All KSA cities" : "لجميع مدن المملكة"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-accent/10 rounded-full text-accent">
              <CreditCard className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-bold text-text text-sm">{isEn ? "Cash on Delivery" : "الدفع عند الاستلام"}</h4>
              <p className="text-xs text-text-secondary">{isEn ? "Pay when you receive" : "ادفع وقت الاستلام"}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10" dir={isEn ? "ltr" : "rtl"}>
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href={prefix || '/'} className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image src="/images/logo/nshtare-logo.png" alt="Nshtare" fill className="object-contain" />
              </div>
              <span className="text-xl font-black text-primary">{isEn ? "NSHTARE" : "نشتري"}</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xs">
              {t.aboutDesc}
            </p>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="font-bold text-sm text-text mb-4 uppercase tracking-wider">{t.categories}</h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`${prefix}/${cat.slug}`} 
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    <span className="text-base">{cat.icon}</span>
                    {isEn ? cat.nameEn : cat.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-sm text-text mb-4 uppercase tracking-wider">{t.support}</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-text-secondary hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-bold text-sm text-text mb-4 uppercase tracking-wider">{t.explore}</h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-text-secondary hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-secondary" dir={isEn ? "ltr" : "rtl"}>
          <p>{t.rights} {t.year}</p>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-bg rounded text-[10px] font-bold">MADA</span>
            <span className="px-2 py-1 bg-bg rounded text-[10px] font-bold">VISA</span>
            <span className="px-2 py-1 bg-bg rounded text-[10px] font-bold">COD</span>
            <span className="px-2 py-1 bg-bg rounded text-[10px] font-bold">STC Pay</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
