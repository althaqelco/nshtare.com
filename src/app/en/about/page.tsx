import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Truck, Award, Users, MapPin, Target } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'About Nshtare | Our Story',
  description: 'Learn about Nshtare — the #1 trusted electric scooter store in Saudi Arabia. Our story, vision, and why thousands of customers trust us.',
};

export default function AboutPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "About Us", url: "/en/about" }
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "Happy Customers" },
    { icon: Truck, value: "13", label: "Cities Served" },
    { icon: ShieldCheck, value: "1 Year", label: "Golden Warranty" },
    { icon: Award, value: "2020", label: "Founded" },
  ];

  return (
    <div className="bg-bg min-h-screen" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            We Are Nshtare
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Saudi Arabia&apos;s most trusted electric scooter store.
            We started with passion, and became the go-to destination for smart mobility enthusiasts.
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
            <h2 className="text-3xl md:text-4xl font-black text-text mb-6">Our Story</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
              <p>
                <strong className="text-text">Nshtare</strong> was born in 2020 from a simple observation: the Saudi market lacked a trusted, specialized electric scooter store that offers genuine warranty and after-sales support.
              </p>
              <p>
                We started in Riyadh with a single warehouse and just 3 models. Today, we serve 13+ Saudi cities with dozens of professional products and a support team that responds within minutes.
              </p>
              <p>
                Our philosophy is clear: <strong className="text-primary">We don&apos;t sell a product we&apos;re afraid to guarantee.</strong> That&apos;s why we offer a full one-year Golden Warranty on motors and batteries.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/images/ui/about_us_delivery_1777997907001.webp"
              alt="Nshtare delivery team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-text mb-10 text-center">Why Customers Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-8 rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Real Warranty</h3>
              <p className="text-text-secondary leading-relaxed">
                We offer a full-year Golden Warranty on the motor, battery, and motherboard. Not just words — a written commitment.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Curated Products</h3>
              <p className="text-text-secondary leading-relaxed">
                We don&apos;t sell everything. Our technical team tests every scooter before listing it, ensuring quality and suitability for Saudi roads.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-3xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Nationwide Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                We deliver everywhere in the Kingdom — from Riyadh, Jeddah, and Dammam to Abha, Tabuk, and Hail. Cash on Delivery available.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Experience the Difference?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Browse our collection and choose the right scooter for you. Cash on Delivery — zero risk.
          </p>
          <a
            href="/en"
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Browse Products Now
          </a>
        </div>

      </div>
    </div>
  );
}
