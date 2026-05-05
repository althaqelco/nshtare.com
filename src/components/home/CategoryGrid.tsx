"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function CategoryGrid() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  const categories = [
    {
      title: isEn ? "Commuter Scooters" : "السكوتر العملي",
      desc: isEn ? "For daily transport" : "للمشاوير اليومية والتنقل السريع",
      image: "/images/categories/electric-scooter.png",
      href: "/categories/commuter",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: isEn ? "Smart Scooters" : "السكوتر الذكي",
      desc: isEn ? "App connected, high tech" : "شاشات ديجيتال واتصال بالتطبيق",
      image: "/images/categories/smart-scooter.png",
      href: "/categories/smart",
      colSpan: "col-span-1",
      bg: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      title: isEn ? "Off-Road & Drift" : "سكوتر درفت وطرق وعرة",
      desc: isEn ? "Extreme power and suspension" : "وحش البر والتفحيط القوي",
      image: "/images/categories/drift-scooter.png",
      href: "/categories/offroad",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      bg: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      title: isEn ? "Kids Scooters" : "سكوتر الأطفال",
      desc: isEn ? "Safe and fun" : "آمن، ملون، ومناسب للأعمار الصغيرة",
      image: "/images/categories/kids-scooter.png",
      href: "/categories/kids",
      colSpan: "col-span-1",
      bg: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      title: isEn ? "Accessories" : "إكسسوارات",
      desc: isEn ? "Helmets, bags, lights" : "خوذات، شنط، وإضاءات",
      image: "/images/categories/accessories.png",
      href: "/categories/accessories",
      colSpan: "col-span-1",
      bg: "bg-gray-100 dark:bg-gray-800"
    },
    {
      title: isEn ? "Spare Parts" : "قطع الغيار",
      desc: isEn ? "Tires, brakes, batteries" : "كفرات، فحمات، بطاريات",
      image: "/images/categories/spare-parts.png",
      href: "/categories/parts",
      colSpan: "col-span-1",
      bg: "bg-slate-100 dark:bg-slate-800"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12" dir={isEn ? "ltr" : "rtl"}>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            {isEn ? "Shop by Category" : "تسوق حسب القسم"}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {isEn 
              ? "Find exactly what you need. From powerful adult commuters to fun kids scooters, we have it all."
              : "اختر السكوتر المناسب لاحتياجك. نوفر تشكيلة واسعة من السكوترات العملية للكبار وسكوترات الأطفال الممتعة."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" dir={isEn ? "ltr" : "rtl"}>
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={isEn ? `/en${cat.href}` : cat.href}
              className={`group relative overflow-hidden rounded-2xl ${cat.bg} ${cat.colSpan} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between p-6 sm:p-8 min-h-[250px]`}
            >
              <div className="relative z-10 w-full sm:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {cat.desc}
                </p>
              </div>
              
              <div className="absolute right-0 bottom-0 w-32 h-32 sm:w-48 sm:h-48 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
