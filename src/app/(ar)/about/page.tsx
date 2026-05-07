import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Truck, Award, Users, MapPin, Target } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'عن نشتري | من نحن وقصتنا',
  description: 'تعرف على متجر نشتري — الوجهة الأولى لبيع السكوترات الكهربائية في السعودية. قصتنا، رؤيتنا، وسبب ثقة آلاف العملاء بنا.',
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "عن نشتري", url: "/about" }
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "عميل سعيد" },
    { icon: Truck, value: "13", label: "مدينة نخدمها" },
    { icon: ShieldCheck, value: "سنة", label: "ضمان ذهبي" },
    { icon: Award, value: "2020", label: "سنة التأسيس" },
  ];

  return (
    <div className="bg-bg min-h-screen" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary-dark/50 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            نحن نشتري
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            المتجر الأول والأكثر ثقة للسكوترات الكهربائية في المملكة العربية السعودية.
            بدأنا بشغف، وأصبحنا الوجهة المرجعية لكل عشاق التنقل الذكي.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-surface rounded-2xl p-6 text-center border border-border shadow-lg hover:shadow-xl transition-shadow">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-text mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-5xl">

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-text mb-6">قصتنا</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
              <p>
                بدأت فكرة <strong className="text-text">نشتري</strong> عام 2020 من ملاحظة بسيطة: السوق السعودي يفتقر لمتجر موثوق ومتخصص في السكوترات الكهربائية يقدم ضماناً حقيقياً وخدمة ما بعد البيع.
              </p>
              <p>
                انطلقنا من الرياض بمستودع واحد و3 موديلات فقط. اليوم، نخدم أكثر من 13 مدينة سعودية بعشرات المنتجات الاحترافية، وفريق دعم فني يرد خلال دقائق.
              </p>
              <p>
                فلسفتنا واضحة: <strong className="text-primary">لا نبيع منتجاً نخاف أن نضمنه.</strong> لهذا السبب نقدم الضمان الذهبي لمدة سنة كاملة على المحرك والبطارية.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/images/ui/about_us_delivery.webp"
              alt="فريق توصيل نشتري"
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-text mb-10 text-center">لماذا يثق بنا العملاء؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-8 rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">ضمان حقيقي</h3>
              <p className="text-text-secondary leading-relaxed">
                نقدم ضمان ذهبي سنة كاملة على المحرك والبطارية واللوحة الأم. ليس مجرد كلام — بل التزام مكتوب.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">منتجات مختارة بعناية</h3>
              <p className="text-text-secondary leading-relaxed">
                لا نبيع كل شيء. فريقنا التقني يختبر كل سكوتر قبل إضافته للمتجر ويتأكد من جودته وملاءمته لطرق المملكة.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">تغطية شاملة</h3>
              <p className="text-text-secondary leading-relaxed">
                نصل لكل مكان في المملكة — من الرياض وجدة والدمام إلى أبها وتبوك وحائل. مع الدفع عند الاستلام.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">جاهز لتجربة الفرق؟</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            تصفح تشكيلتنا واختر السكوتر المناسب لك. الدفع عند الاستلام — بدون أي مخاطرة.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            تصفح المنتجات الآن
          </a>
        </div>

      </div>
    </div>
  );
}
