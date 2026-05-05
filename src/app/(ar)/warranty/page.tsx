import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Wrench } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'سياسة الضمان الذهبي | متجر نشتري',
  description: 'تعرف على تفاصيل سياسة الضمان الذهبي من متجر نشتري. ضمان لمدة سنة كاملة على المحرك والبطارية لجميع السكوترات الكهربائية.',
};

export default function WarrantyPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "سياسة الضمان", url: "/warranty" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">الضمان الذهبي</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            في متجر نشتري، نثق بجودة منتجاتنا ولذلك نقدم لك "الضمان الذهبي" الذي يضمن لك راحة البال بعد الشراء.
          </p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-success" />
              ماذا يشمل الضمان؟
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              يسري الضمان الذهبي لمدة <strong>سنة كاملة (12 شهراً)</strong> من تاريخ استلام السكوتر، ويغطي العيوب المصنعية في الأجزاء الأساسية التالية:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-bg rounded-2xl border border-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-bold text-text">المحرك (Motor)</span>
              </div>
              <div className="p-4 bg-bg rounded-2xl border border-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-bold text-text">البطارية (Battery)</span>
              </div>
              <div className="p-4 bg-bg rounded-2xl border border-border flex items-center gap-3 md:col-span-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-bold text-text">اللوحة الأم (Motherboard)</span>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-error" />
              حالات لا يشملها الضمان
            </h2>
            <ul className="space-y-4 text-text-secondary leading-relaxed">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>سوء الاستخدام أو الحوادث، مثل الكسور الناتجة عن السقوط أو الاصطدام.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>تعريض السكوتر للماء بشكل مباشر أو الغوص به (السكوترات مقاومة للرذاذ الخفيف فقط وليست ضد الماء بالكامل).</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>القطع الاستهلاكية التي تتآكل مع الزمن مثل (الإطارات، وسادات الفرامل، المقابض).</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>فتح السكوتر أو محاولة صيانته وتعديله خارج مراكز الصيانة المعتمدة لدينا.</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
            <div className="bg-primary p-4 rounded-full text-white shrink-0">
              <Wrench className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">كيفية طلب الصيانة على الضمان؟</h3>
              <p className="text-primary/80">
                في حال واجهت أي مشكلة مشمولة بالضمان، يرجى التواصل مع فريق الدعم الفني عبر الواتساب وتزويدهم برقم الطلب ومقطع فيديو يوضح المشكلة. سيقوم فريقنا بتوجيهك لأقرب مركز صيانة أو ترتيب عملية شحن القطعة البديلة.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
