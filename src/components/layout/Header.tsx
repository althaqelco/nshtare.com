"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingCart, Globe, ChevronDown, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { categories } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prefix = isEn ? '/en' : '';

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryOpen(false);
  }, [pathname]);

  const t = {
    home: isEn ? "Home" : "الرئيسية",
    categories: isEn ? "Categories" : "الأقسام",
    blog: isEn ? "Blog" : "المدونة",
    compare: isEn ? "Compare" : "قارن",
    contact: isEn ? "Contact" : "تواصل",
    cart: isEn ? "Cart" : "السلة",
  };

  const toggleLanguage = () => {
    if (isEn) {
      return pathname.replace('/en', '') || '/';
    } else {
      return `/en${pathname === '/' ? '' : pathname}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={isEn ? "/en" : "/"} className="flex items-center gap-2">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                <Image 
                  src="/images/logo/nshtare-logo.webp" 
                  alt="Nshtare Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-black text-primary tracking-tight">
                {isEn ? "NSHTARE" : "نشتري"}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" dir={isEn ? "ltr" : "rtl"}>
            <Link 
              href={prefix || '/'} 
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname === '/' || pathname === '/en' ? 'text-primary bg-primary/5' : 'text-text hover:text-primary hover:bg-bg'}`}
            >
              {t.home}
            </Link>

            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isCategoryOpen ? 'text-primary bg-primary/5' : 'text-text hover:text-primary hover:bg-bg'}`}
              >
                {t.categories}
                <ChevronDown className={`h-4 w-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryOpen && (
                <div className={`absolute top-full mt-2 ${isEn ? 'left-0' : 'right-0'} bg-surface border border-border rounded-2xl shadow-2xl p-3 min-w-[260px] animate-fade-in-up z-50`}>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`${prefix}/${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-text hover:bg-primary hover:text-white transition-all duration-200 group"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform">{cat.icon}</span>
                      <span className="font-semibold text-sm">{isEn ? cat.nameEn : cat.nameAr}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href={`${prefix}/blog`}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname.includes('/blog') ? 'text-primary bg-primary/5' : 'text-text hover:text-primary hover:bg-bg'}`}
            >
              {t.blog}
            </Link>

            <Link 
              href={`${prefix}/compare`}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname.includes('/compare') ? 'text-primary bg-primary/5' : 'text-text hover:text-primary hover:bg-bg'}`}
            >
              {t.compare}
            </Link>

            <Link 
              href={`${prefix}/contact`}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname.includes('/contact') ? 'text-primary bg-primary/5' : 'text-text hover:text-primary hover:bg-bg'}`}
            >
              {t.contact}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link 
              href={toggleLanguage()} 
              className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-bg transition-colors font-semibold text-sm"
              prefetch={false}
            >
              <Globe className="h-4 w-4" />
              <span>{isEn ? "عربي" : "EN"}</span>
            </Link>

            <button 
              aria-label={t.cart} 
              className="relative p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-bg transition-colors"
              onClick={openCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-accent rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-bg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1" dir={isEn ? "ltr" : "rtl"}>
            <Link href={prefix || '/'} className="block px-4 py-3 rounded-xl text-text font-semibold hover:bg-bg hover:text-primary transition-colors">
              {t.home}
            </Link>

            {/* Mobile Categories */}
            <div className="px-4 py-3">
              <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t.categories}</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`${prefix}/${cat.slug}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-bg hover:bg-primary hover:text-white text-text text-sm font-semibold transition-all"
                  >
                    <span>{cat.icon}</span>
                    {isEn ? cat.nameEn : cat.nameAr}
                  </Link>
                ))}
              </div>
            </div>

            <Link href={`${prefix}/blog`} className="block px-4 py-3 rounded-xl text-text font-semibold hover:bg-bg hover:text-primary transition-colors">
              {t.blog}
            </Link>
            <Link href={`${prefix}/compare`} className="block px-4 py-3 rounded-xl text-text font-semibold hover:bg-bg hover:text-primary transition-colors">
              {t.compare}
            </Link>
            <Link href={`${prefix}/contact`} className="block px-4 py-3 rounded-xl text-text font-semibold hover:bg-bg hover:text-primary transition-colors">
              {t.contact}
            </Link>

            <Link
              href={toggleLanguage()}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-text font-semibold hover:bg-bg hover:text-primary transition-colors"
              prefetch={false}
            >
              <Globe className="h-5 w-5" />
              {isEn ? "اللغة العربية" : "English"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
