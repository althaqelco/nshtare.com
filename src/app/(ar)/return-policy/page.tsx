import React from 'react';
import { RotateCcw, Clock, ShieldCheck, AlertTriangle, CheckCircle, XCircle, PhoneCall } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'سياسة الإرجاع والاستبدال | نشتري',
  description: 'تعرف على سياسة الإرجاع والاستبدال في متجر نشتري. نضمن حقك بإرجاع المنتج خلال 7 أيام بشروط واضحة وشفافة.',
};

export default function ReturnPolicyPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "سياسة الإرجاع", url: "/return-policy" },
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <RotateCcw className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">سياسة الإرجاع والاستبدال</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            رضاك أولويتنا. نقدم سياسة إرجاع واضحة وشفافة تحمي حقوقك كمستهلك.
          </p>
        </div>

        <div className="space-y-8">

          {/* Period */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1"><Clock className="h-6 w-6 text-primary" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">مدة الإرجاع</h2>
                <p className="text-text-secondary leading-relaxed">
                  يحق لك إرجاع المنتج خلال <strong className="text-text">7 أيام</strong> من تاريخ الاستلام. يجب أن يكون المنتج في حالته الأصلية مع جميع الملحقات والتغليف.
                </p>
              </div>
            </div>
          </div>

          {/* Conditions for return */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-success/10 p-3 rounded-full mt-1"><CheckCircle className="h-6 w-6 text-success" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">شروط قبول الإرجاع</h2>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> المنتج في حالته الأصلية دون أي استخدام أو تلف</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> التغليف الأصلي موجود ومتكامل</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> جميع الملحقات والإكسسوارات المرفقة موجودة</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> فاتورة الشراء أو رقم الطلب متوفر</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> تقديم طلب الإرجاع خلال 7 أيام من الاستلام</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What is NOT returnable */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-error/10 p-3 rounded-full mt-1"><XCircle className="h-6 w-6 text-error" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">حالات لا تقبل الإرجاع</h2>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> منتجات تم استخدامها أو ظهرت عليها علامات استخدام</li>
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> منتجات بدون تغليف أصلي أو ملحقات ناقصة</li>
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> طلبات الإرجاع بعد مرور 7 أيام من الاستلام</li>
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> قطع الغيار والإكسسوارات المستهلكة (إطارات مركبة، وسادات فرامل مستخدمة)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full mt-1"><ShieldCheck className="h-6 w-6 text-secondary" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">آلية الاسترداد</h2>
                <p className="text-text-secondary leading-relaxed mb-3">
                  بعد استلام المنتج والتحقق من حالته، سيتم رد المبلغ خلال <strong className="text-text">5-7 أيام عمل</strong> بنفس طريقة الدفع الأصلية:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• <strong>الدفع عند الاستلام</strong>: تحويل بنكي لحسابك</li>
                  <li>• <strong>بطاقة ائتمانية</strong>: إرجاع المبلغ للبطاقة</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for returns */}
          <div className="bg-primary text-white rounded-2xl p-8 text-center">
            <PhoneCall className="h-10 w-10 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">تحتاج مساعدة؟</h2>
            <p className="text-white/80 mb-4">تواصل مع فريق الدعم عبر الواتساب لبدء طلب الإرجاع.</p>
            <a href="https://wa.me/966500000000?text=أريد%20إرجاع%20منتج" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-all">
              تواصل عبر الواتساب
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
