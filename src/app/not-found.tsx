import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, MessageCircle, Search } from 'lucide-react';

export const metadata = {
  title: 'الصفحة غير موجودة | نشتري',
  description: 'عذراً، الصفحة التي تبحث عنها غير موجودة. تصفح متجر نشتري لأفضل السكوترات الكهربائية.',
};

export default function NotFound() {
  return (
    <div className="bg-bg min-h-[80vh] flex items-center justify-center py-16 px-4" dir="rtl">
      <div className="max-w-lg w-full text-center">

        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-[10rem] md:text-[12rem] font-black text-primary/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/images/ui/error_404_kick_1777998349358.png"
                alt="Page not found"
                fill
                className="object-contain animate-bounce"
                style={{ animationDuration: '3s' }}
              />
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-text mb-4">
          عذراً، الصفحة غير موجودة!
        </h1>
        <p className="text-lg text-text-secondary mb-10 max-w-md mx-auto leading-relaxed">
          يبدو أن هذه الصفحة انطلقت بسرعة أكبر من سكوتراتنا! 🛴
          <br />
          لا تقلق، يمكنك العودة للتسوق أو التواصل مع فريق الدعم.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 transition-all transform hover:scale-105"
          >
            <Home className="h-5 w-5" />
            العودة للرئيسية
          </Link>

          <a
            href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C+%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC+%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#25D366]/25 transition-all transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            تواصل معنا
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm font-bold text-text-secondary mb-4">أقسام قد تهمك:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'سكوتر كهربائي', href: '/electric-scooter' },
              { name: 'سكوتر درفت', href: '/drift-scooter' },
              { name: 'سكوتر أطفال', href: '/kids-scooter' },
              { name: 'قطع غيار', href: '/spare-parts' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-surface border border-border rounded-lg text-sm text-text hover:text-primary hover:border-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
