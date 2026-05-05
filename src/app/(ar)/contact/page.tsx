import React from 'react';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SecurePhone from '@/components/ui/SecurePhone';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'تواصل معنا | متجر نشتري',
  description: 'فريق خدمة عملاء نشتري جاهز للرد على استفساراتكم ومساعدتكم في اختيار السكوتر المناسب عبر الواتساب أو البريد الإلكتروني.',
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "تواصل معنا", url: "/contact" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">كيف يمكننا مساعدتك؟</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم. سواء كنت تحتاج مساعدة في اختيار السكوتر المناسب أو لديك استفسار عن طلبك، فريقنا جاهز لخدمتك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-surface p-8 rounded-3xl border border-border flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text mb-2">الدعم الفني والطلب (واتساب)</h2>
                <p className="text-text-secondary mb-4">أسرع طريقة للتواصل معنا. نرد عادة خلال دقائق.</p>
                <a 
                  href="https://wa.me/966500000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-xl font-bold transition-transform transform hover:scale-105"
                >
                  تحدث معنا الآن
                </a>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-3xl border border-border flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary shrink-0">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text mb-2">البريد الإلكتروني</h2>
                <p className="text-text-secondary mb-2">للاستفسارات الرسمية والشركات.</p>
                <a href="mailto:support@nshtare.com" className="font-bold text-primary hover:underline">
                  support@nshtare.com
                </a>
              </div>
            </div>
            
            <div className="bg-surface p-8 rounded-3xl border border-border flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
                <Clock className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text mb-2">ساعات العمل</h2>
                <p className="text-text-secondary">من السبت إلى الخميس</p>
                <p className="font-bold text-text mt-1">9:00 صباحاً - 10:00 مساءً</p>
              </div>
            </div>
          </div>

          {/* Form / Direct Call */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-xl h-full flex flex-col justify-center text-center">
            <div className="bg-bg w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-black text-text mb-4">الإدارة الرئيسية</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              المملكة العربية السعودية<br />
              الرياض، مستودعات السلي
            </p>
            <div className="pt-8 border-t border-border">
               <p className="text-sm font-bold text-text mb-4">أو يمكنك الاتصال بنا مباشرة:</p>
               <div className="inline-flex items-center justify-center bg-primary/5 border border-primary/20 px-8 py-4 rounded-2xl">
                 <SecurePhone encodedPhone="K+O2tjUwMDAwMDAw" className="text-2xl text-primary" />
               </div>
               <p className="text-xs text-text-secondary mt-3">الرقم محمي ومخفي لضمان خصوصية عملائنا. انقر لظهوره.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
