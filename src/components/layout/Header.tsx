"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingCart, Globe, Search, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dictionaries for basic navigation
  const t = {
    home: isEn ? "Home" : "الرئيسية",
    categories: isEn ? "Categories" : "الأقسام",
    offers: isEn ? "Offers" : "عروضنا",
    contact: isEn ? "Contact Us" : "تواصل معنا",
    search: isEn ? "Search for scooters..." : "ابحث عن سكوتر...",
    cart: isEn ? "Cart" : "السلة",
  };

  const navLinks = [
    { href: isEn ? '/en' : '/', label: t.home },
    { href: isEn ? '/en/categories' : '/categories', label: t.categories },
    { href: isEn ? '/en/offers' : '/offers', label: t.offers },
  ];

  const toggleLanguage = () => {
    // If currently English, go to Arabic. If Arabic, go to English.
    // This is a simple toggle. In a real app, you'd replace the current path locale.
    if (isEn) {
      return pathname.replace('/en', '') || '/';
    } else {
      return `/en${pathname === '/' ? '' : pathname}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={isEn ? "/en" : "/"} className="flex items-center gap-2">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                <Image 
                  src="/images/logo/nshtare-logo.png" 
                  alt="Nshtare Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                {isEn ? "NSHTARE" : "نشتري"}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center" dir={isEn ? "ltr" : "rtl"}>
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-text hover:text-primary transition-colors font-medium text-[16px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search, Lang, Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button aria-label={t.search} className="p-2 text-text-secondary hover:text-primary transition-colors">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <Link 
              href={toggleLanguage()} 
              className="hidden sm:flex items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors font-medium text-sm"
              prefetch={false}
            >
              <Globe className="h-5 w-5" />
              <span>{isEn ? "عربي" : "EN"}</span>
            </Link>

            <button aria-label={t.cart} className="relative p-2 text-text-secondary hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-accent rounded-full">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-text hover:bg-bg hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={toggleLanguage()}
              className="flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-text hover:bg-bg hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
              prefetch={false}
            >
              <Globe className="h-5 w-5" />
              {isEn ? "اللغة العربية" : "English Version"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
