import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'الأسئلة الشائعة | متجر نشتري',
  description: 'إجابات على جميع الأسئلة الشائعة حول شراء السكوترات الكهربائية، طرق الدفع، سياسة الشحن، والاسترجاع.',
};

const faqs = [
  {
    q: "هل يتوفر الدفع عند الاستلام؟",
    a: "نعم، بكل تأكيد! نحن في متجر نشتري نوفر خدمة الدفع عند الاستلام كخيار أساسي لجميع عملائنا لضمان الثقة والراحة. لن تدفع أي مبلغ حتى تستلم السكوتر وتتأكد منه بنفسك."
  },
  {
    q: "كم تستغرق مدة التوصيل؟",
    a: "نحرص على توصيل الطلبات في أسرع وقت ممكن. عادة ما يستغرق التوصيل من 2 إلى 4 أيام عمل لكافة مناطق المملكة العربية السعودية."
  },
  {
    q: "هل السكوترات مشمولة بالضمان؟",
    a: "نعم، جميع السكوترات الكهربائية لدينا (العملية، والاحترافية، والطرق الوعرة) مشمولة بـ (الضمان الذهبي) لمدة سنة كاملة ضد العيوب المصنعية ويشمل ذلك المحرك والبطارية."
  },
  {
    q: "هل توفرون قطع غيار للسكوترات؟",
    a: "نعم، نوفر قسماً كاملاً لقطع الغيار الأصلية والإكسسوارات لضمان استمرارية عمل السكوتر الخاص بك بأفضل أداء."
  },
  {
    q: "كيف يمكنني تتبع طلبي؟",
    a: "بمجرد تأكيد طلبك، سيتم إرسال رسالة نصية (SMS) أو رسالة عبر الواتساب تحتوي على رقم الطلب ورابط لتتبع الشحنة مع شركة التوصيل."
  }
];

export default function FAQPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "الأسئلة الشائعة", url: "/faq" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">الأسئلة الشائعة</h1>
          <p className="text-lg text-text-secondary">كل ما تحتاج معرفته عن منتجاتنا وخدماتنا</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-surface rounded-2xl border border-border overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-text hover:text-primary transition-colors">
                {faq.q}
                <ChevronDown className="h-5 w-5 text-text-secondary group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-border mt-2 bg-bg/50">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
