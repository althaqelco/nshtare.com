import React from 'react';
import { Truck, MapPin, ShieldCheck, Clock } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Shipping & Delivery | Nshtare',
  description: 'Learn about Nshtare shipping and delivery policy. We offer fast shipping to all regions of the Kingdom with Cash on Delivery available.',
};

export default function ShippingPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "Shipping Policy", url: "/en/shipping" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">Shipping & Delivery</h1>
          <p className="text-lg text-text-secondary">We deliver your scooter to your door safely and quickly</p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-surface p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-6">
            <div className="bg-secondary/10 p-4 rounded-xl text-secondary h-fit">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-3">Delivery Time</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We know how excited you are to receive your order, so we work hard to ship it as soon as possible.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <strong>Riyadh:</strong> Delivery within 24 to 48 hours.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <strong>Major Cities (Jeddah, Dammam, Makkah):</strong> 2 to 3 working days.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <strong>Other Regions:</strong> 3 to 5 working days.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-6">
            <div className="bg-accent/10 p-4 rounded-xl text-accent h-fit">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-3">Cash on Delivery</h2>
              <p className="text-text-secondary leading-relaxed">
                To ensure the highest standards of transparency and trust, we offer <strong>Cash on Delivery</strong> for all products. You can order your scooter, inspect it when the courier arrives, and then pay.
                <br /><br />
                <em>A nominal additional fee applies for the Cash on Delivery service by the shipping companies.</em>
              </p>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border flex flex-col md:flex-row gap-6">
            <div className="bg-primary/10 p-4 rounded-xl text-primary h-fit">
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-3">Coverage Areas</h2>
              <p className="text-text-secondary leading-relaxed">
                We ship to all cities, governorates, and villages of Saudi Arabia through our strategic partnerships with the best logistics companies to ensure the scooter arrives in excellent condition.
              </p>
            </div>
          </div>

          <div className="p-6 bg-error/10 border border-error/20 rounded-2xl">
            <h3 className="font-bold text-error mb-2">Important Note:</h3>
            <p className="text-error/80 text-sm">
              Delivery times may be affected during seasons, holidays, and official vacations. Working days do not include Friday.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
