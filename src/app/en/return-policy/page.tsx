import React from 'react';
import { RotateCcw, Clock, ShieldCheck, CheckCircle, XCircle, PhoneCall } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Return & Exchange Policy | Nshtare',
  description: 'Learn about Nshtare\'s return and exchange policy. We guarantee your right to return within 7 days with clear and transparent terms.',
};

export default function ReturnPolicyPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "Return Policy", url: "/en/return-policy" },
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <RotateCcw className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">Return & Exchange Policy</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your satisfaction is our priority. We offer a clear and transparent return policy to protect your consumer rights.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1"><Clock className="h-6 w-6 text-primary" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">Return Period</h2>
                <p className="text-text-secondary leading-relaxed">
                  You may return the product within <strong className="text-text">7 days</strong> of delivery. The product must be in its original condition with all accessories and packaging.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-success/10 p-3 rounded-full mt-1"><CheckCircle className="h-6 w-6 text-success" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">Conditions for Acceptance</h2>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> Product in original condition, unused and undamaged</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> Original packaging intact and complete</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> All included accessories present</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> Purchase receipt or order number available</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" /> Return request submitted within 7 days of delivery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-error/10 p-3 rounded-full mt-1"><XCircle className="h-6 w-6 text-error" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">Non-Returnable Items</h2>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> Products showing signs of use or damage</li>
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> Products without original packaging or missing accessories</li>
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> Return requests after 7 days</li>
                  <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-error mt-0.5 flex-shrink-0" /> Consumable parts (installed tires, used brake pads)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full mt-1"><ShieldCheck className="h-6 w-6 text-secondary" /></div>
              <div>
                <h2 className="text-2xl font-bold text-text mb-3">Refund Process</h2>
                <p className="text-text-secondary leading-relaxed mb-3">
                  After receiving and verifying the product, refunds are processed within <strong className="text-text">5-7 business days</strong> via the original payment method:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• <strong>Cash on Delivery</strong>: Bank transfer to your account</li>
                  <li>• <strong>Credit Card</strong>: Refund to the original card</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 text-center">
            <PhoneCall className="h-10 w-10 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Need Help?</h2>
            <p className="text-white/80 mb-4">Contact our support team via WhatsApp to start a return request.</p>
            <a href="https://wa.me/966500000000?text=I%20want%20to%20return%20a%20product" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/90 transition-all">
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
