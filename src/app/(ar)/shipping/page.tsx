import React from 'react';
import { Truck, MapPin, ShieldCheck, Clock } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'سياسة الشحن والتوصيل | متجر نشتري',
  description: 'تعرف على سياسة الشحن والتوصيل في متجر نشتري. نوفر شحن سريع لجميع مناطق المملكة مع توفر خدمة الدفع عند الاستلام.',
};

export default function ShippingPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "سياسة الشحن", url: "/shipping" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">سياسة الشحن والتوصيل</h1>
          <p className="text-lg text-text-secondary">نوصل السكوتر الخاص بك إلى باب بيتك بأمان وسرعة</p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-surface p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-6">
            <div className="bg-secondary/10 p-4 rounded-xl text-secondary h-fit">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-3">مدة التوصيل</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                نحن نعلم مدى حماسك لاستلام طلبك، لذلك نعمل جاهدين لشحنه في أقرب وقت.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <strong>الرياض:</strong> توصيل خلال 24 إلى 48 ساعة.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <strong>المدن الرئيسية (جدة، الدمام، مكة):</strong> من يومين إلى 3 أيام عمل.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <strong>باقي مناطق المملكة:</strong> من 3 إلى 5 أيام عمل.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-6">
            <div className="bg-accent/10 p-4 rounded-xl text-accent h-fit">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-3">الدفع عند الاستلام</h2>
              <p className="text-text-secondary leading-relaxed">
                لضمان أعلى معايير الشفافية والثقة، نوفر خدمة <strong>الدفع عند الاستلام</strong> لجميع المنتجات. يمكنك الآن طلب السكوتر الخاص بك، فحصه عند وصول المندوب، ومن ثم الدفع.
                <br /><br />
                <em>تطبق رسوم رمزية إضافية لخدمة الدفع عند الاستلام من قبل شركات الشحن.</em>
              </p>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-6">
            <div className="bg-primary/10 p-4 rounded-xl text-primary h-fit">
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-3">مناطق التغطية</h2>
              <p className="text-text-secondary leading-relaxed">
                نقوم بالشحن إلى جميع مدن ومحافظات وقرى المملكة العربية السعودية من خلال شراكاتنا الاستراتيجية مع أفضل شركات الخدمات اللوجستية لضمان وصول السكوتر بحالة ممتازة.
              </p>
            </div>
          </div>

          <div className="p-6 bg-error/10 border border-error/20 rounded-2xl">
            <h3 className="font-bold text-error mb-2">ملاحظة هامة:</h3>
            <p className="text-error/80 text-sm">
              قد تتأثر أوقات التوصيل خلال المواسم، الأعياد، والإجازات الرسمية. أيام العمل لا تشمل يوم الجمعة.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
