"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { CheckCircle2, Truck, MessageCircle, ChevronLeft, ChevronRight, Package, Calendar, ShieldCheck, Star } from 'lucide-react';

function OrderConfirmationContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isEn = pathname.startsWith('/en');
  const [mounted, setMounted] = useState(false);

  const orderId = searchParams?.get('id') || `NSHT-202605-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
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
    nextSteps: isEn ? "What's Next?" : "ماذا يحدث الآن؟",
    step1: isEn ? "Order Processing" : "معالجة الطلب",
    step1Desc: isEn ? "We are verifying your items." : "نقوم الآن بتجهيز منتجاتك.",
    step2: isEn ? "Quality Check" : "فحص الجودة",
    step2Desc: isEn ? "Ensuring everything is perfect." : "نتأكد من سلامة وجودة كل منتج.",
    step3: isEn ? "Shipping" : "الشحن والتوصيل",
    step3Desc: isEn ? "Handing over to our courier." : "تسليم الطلب لشركة الشحن.",
    guarantee: isEn ? "1-Year Warranty Guaranteed" : "ضمان نشتري الذهبي لمدة عام",
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Card */}
      <div className="bg-surface rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-success to-primary"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-success/20 rounded-full animate-ping opacity-25"></div>
            <CheckCircle2 className="h-12 w-12 text-success" />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-text mb-4 tracking-tight leading-tight">{t.title}</h1>
          <p className="text-lg text-text-secondary mb-10 max-w-lg mx-auto leading-relaxed">{t.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
            <div className="bg-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-border flex items-start gap-4">
              <Package className="h-6 w-6 text-primary mt-1" />
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">{t.orderNumber}</p>
                <p className="font-bold text-lg text-text font-mono">{orderId}</p>
              </div>
            </div>
            
            <div className="bg-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-border flex items-start gap-4">
              <Calendar className="h-6 w-6 text-primary mt-1" />
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">{t.delivery}</p>
                <p className="font-bold text-lg text-text">{t.deliveryTime}</p>
              </div>
            </div>

            <div className="bg-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-border flex items-start gap-4">
              <Truck className="h-6 w-6 text-secondary mt-1" />
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">{t.paymentMethod}</p>
                <p className="font-bold text-lg text-secondary">{t.cod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-surface rounded-3xl p-8 shadow-xl border border-border">
        <h3 className="text-xl font-bold text-text mb-8 flex items-center gap-3">
          <Zap className="h-6 w-6 text-accent" />
          {t.nextSteps}
        </h3>

        <div className="relative">
          {/* Vertical line for mobile, Horizontal for desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
              <div className="md:w-1/2 md:text-end md:pr-12">
                <h4 className="font-bold text-text text-lg">{t.step1}</h4>
                <p className="text-text-secondary text-sm">{t.step1Desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 shadow-lg shadow-primary/20">1</div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
              <div className="md:w-1/2 md:text-end md:pr-12"></div>
              <div className="w-12 h-12 rounded-full bg-surface border-4 border-primary text-primary flex items-center justify-center font-bold z-10">2</div>
              <div className="md:w-1/2 md:pl-12">
                <h4 className="font-bold text-text text-lg">{t.step2}</h4>
                <p className="text-text-secondary text-sm">{t.step2Desc}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
              <div className="md:w-1/2 md:text-end md:pr-12">
                <h4 className="font-bold text-text text-lg">{t.step3}</h4>
                <p className="text-text-secondary text-sm">{t.step3Desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-border text-text-secondary flex items-center justify-center font-bold z-10">3</div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge Section */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-text text-lg">{t.guarantee}</h4>
            <div className="flex items-center gap-1 text-accent mt-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              <span className="text-xs text-text-secondary ml-2 font-medium">نثق بمنتجاتنا 100%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link 
            href={isEn ? "/en" : "/"}
            className="bg-white hover:bg-bg text-text px-8 py-4 rounded-2xl font-bold shadow-sm transition-all flex items-center gap-2 border border-border"
          >
            {isEn ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            {t.continueShopping}
          </Link>
        </div>
      </div>

      {/* Support Section */}
      <div className="text-center pt-8">
        <div className="inline-block p-2 rounded-3xl bg-surface border border-border shadow-lg max-w-xl w-full">
          <div className="p-6 md:p-8 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#25D366]/20 transform -rotate-6">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-text mb-2">{t.whatsAppHelp}</h4>
            <p className="text-text-secondary text-sm mb-6 max-w-xs">{isEn ? "Our specialized team is ready to assist you anytime via WhatsApp." : "فريقنا المتخصص جاهز لمساعدتك في أي وقت عبر الواتساب."}</p>
            <a 
              href={`https://wa.me/966542317431?text=${encodeURIComponent(isEn ? `Hello, I have an inquiry about my order: ${orderId}` : `مرحباً، لدي استفسار بخصوص طلبي رقم: ${orderId}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.05] shadow-xl shadow-[#25D366]/20 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-6 w-6" />
              {t.contactSupport}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

// Separate component for Lucide icons used in the timeline since we need 'Zap' and other icons
function Zap({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 14.899 13 3l-1.101 8.101H20l-9 11.899 1.101-8.101H4Z" />
    </svg>
  );
}

export default function OrderConfirmationPage() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir={isEn ? "ltr" : "rtl"}>
      <div className="container mx-auto px-4 max-w-4xl">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center p-20 space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-text-secondary font-bold">جاري تحميل بيانات الطلب...</p>
          </div>
        }>
          <OrderConfirmationContent />
        </Suspense>
      </div>
    </div>
  );
}
