import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Wrench } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Golden Warranty Policy | Nshtare',
  description: 'Learn about the details of the Golden Warranty policy from Nshtare. A full one-year warranty on the motor and battery for all electric scooters.',
};

export default function WarrantyPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "Warranty Policy", url: "/en/warranty" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">Golden Warranty</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            At Nshtare, we trust the quality of our products, which is why we offer you the "Golden Warranty" that ensures your peace of mind after purchase.
          </p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-success" />
              What Does the Warranty Cover?
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              The Golden Warranty is valid for a <strong>full year (12 months)</strong> from the date of receiving the scooter, and it covers manufacturing defects in the following core parts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-bg rounded-2xl border border-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-bold text-text">Motor</span>
              </div>
              <div className="p-4 bg-bg rounded-2xl border border-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-bold text-text">Battery</span>
              </div>
              <div className="p-4 bg-bg rounded-2xl border border-border flex items-center gap-3 md:col-span-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-bold text-text">Motherboard</span>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-error" />
              Cases Not Covered by Warranty
            </h2>
            <ul className="space-y-4 text-text-secondary leading-relaxed">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>Misuse or accidents, such as breakage caused by dropping or collision.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>Direct exposure of the scooter to water or submerging it (scooters are only splash-resistant and not fully waterproof).</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>Consumable parts that wear out over time like (tires, brake pads, grips).</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-error shrink-0 mt-1" />
                <span>Opening the scooter or attempting to maintain and modify it outside our authorized service centers.</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
            <div className="bg-primary p-4 rounded-full text-white shrink-0">
              <Wrench className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">How to Request Warranty Maintenance?</h3>
              <p className="text-primary/80">
                If you encounter any problem covered by the warranty, please contact the technical support team via WhatsApp and provide them with the order number and a video explaining the issue. Our team will direct you to the nearest service center or arrange for the shipping of a replacement part.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
