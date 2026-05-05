import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Frequently Asked Questions | Nshtare',
  description: 'Answers to all your frequently asked questions about buying electric scooters, payment methods, shipping policy, and returns.',
};

const faqs = [
  {
    q: "Is Cash on Delivery available?",
    a: "Yes, absolutely! At Nshtare, we offer Cash on Delivery as a primary option for all our customers to ensure trust and convenience. You won't pay anything until you receive your scooter and verify it yourself."
  },
  {
    q: "How long does delivery take?",
    a: "We strive to deliver orders as quickly as possible. Delivery typically takes 2 to 4 working days to all regions of Saudi Arabia."
  },
  {
    q: "Are the scooters covered by warranty?",
    a: "Yes, all our electric scooters (commuter, premium, and off-road) are covered by our 'Golden Warranty' for a full year against manufacturing defects, including the motor and battery."
  },
  {
    q: "Do you provide spare parts for scooters?",
    a: "Yes, we have a dedicated section for original spare parts and accessories to ensure your scooter continues to run at peak performance."
  },
  {
    q: "How can I track my order?",
    a: "Once your order is confirmed, you will receive an SMS or WhatsApp message containing your order number and a tracking link from the delivery company."
  }
];

export default function FAQPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "FAQ", url: "/en/faq" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
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
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-text-secondary">Everything you need to know about our products and services</p>
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
