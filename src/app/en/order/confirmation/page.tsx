"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { CheckCircle2, Truck, MessageCircle, ChevronLeft, ChevronRight, Package, Calendar } from 'lucide-react';

function OrderConfirmationContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isEn = pathname.startsWith('/en');
  const [mounted, setMounted] = useState(false);

  const orderId = searchParams?.get('id') || `NSHT-202605-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

  useEffect(() => {
    setMounted(true);
    // In a real app, this is where we'd send the S2S GA4 "purchase" event 
    // to guarantee 100% accurate conversion tracking as per Plan 05.
    console.log(`[Analytics] Purchase event fired for order: ${orderId}`);
  }, [orderId]);

  if (!mounted) return null;

  const t = {
    title: isEn ? "Order Confirmed Successfully!" : "تم تأكيد طلبك بنجاح!",
    subtitle: isEn 
      ? "Thank you for trusting Nshtare. Your order is being prepared for shipping." 
      : "شكراً لثقتك في نشتري. جاري تجهيز طلبك للشحن.",
    orderNumber: isEn ? "Order Number" : "رقم الطلب",
    delivery: isEn ? "Expected Delivery" : "موعد التوصيل المتوقع",
    deliveryTime: isEn ? "2-4 Working Days" : "٢-٤ أيام عمل",
    paymentMethod: isEn ? "Payment Method" : "طريقة الدفع",
    cod: isEn ? "Cash on Delivery" : "الدفع عند الاستلام",
    whatsAppHelp: isEn ? "Need help or want to modify your order?" : "تحتاج مساعدة أو تود تعديل الطلب؟",
    contactSupport: isEn ? "Contact Support via WhatsApp" : "تواصل مع الدعم عبر الواتساب",
    continueShopping: isEn ? "Continue Shopping" : "متابعة التسوق",
  };

  return (
    <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-xl border border-border text-center">
      
      <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="h-10 w-10 text-success" />
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-text mb-4">{t.title}</h1>
      <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">{t.subtitle}</p>

      <div className="bg-bg rounded-2xl p-6 mb-8 border border-border text-start">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <Package className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm text-text-secondary">{t.orderNumber}</p>
            <p className="font-bold text-lg text-text font-mono">{orderId}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm text-text-secondary">{t.delivery}</p>
            <p className="font-bold text-lg text-text">{t.deliveryTime}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Truck className="h-6 w-6 text-secondary flex-shrink-0" />
          <div>
            <p className="text-sm text-text-secondary">{t.paymentMethod}</p>
            <p className="font-bold text-lg text-secondary">{t.cod}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
          <p className="text-sm font-bold text-[#128C7E] mb-3">{t.whatsAppHelp}</p>
          <a 
            href={`https://wa.me/966542317431?text=${encodeURIComponent(isEn ? `Hello, I have an inquiry about my order: ${orderId}` : `مرحباً، لدي استفسار بخصوص طلبي رقم: ${orderId}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold transition-transform transform hover:scale-105 w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {t.contactSupport}
          </a>
        </div>

        <Link 
          href={isEn ? "/en" : "/"}
          className="inline-flex items-center justify-center gap-2 text-text-secondary hover:text-primary font-bold px-6 py-3 transition-colors mt-4"
        >
          {isEn ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          {t.continueShopping}
        </Link>
      </div>

    </div>
  );
}

export default function OrderConfirmationPage() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  return (
    <div className="bg-bg min-h-[80vh] py-12 md:py-20 flex flex-col items-center justify-center" dir={isEn ? "ltr" : "rtl"}>
      <div className="container mx-auto px-4 max-w-2xl">
        <Suspense fallback={<div className="p-12 text-center text-text-secondary">Loading...</div>}>
          <OrderConfirmationContent />
        </Suspense>
      </div>
    </div>
  );
}
