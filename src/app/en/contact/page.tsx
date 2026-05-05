import React from 'react';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SecurePhone from '@/components/ui/SecurePhone';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Contact Us | Nshtare',
  description: 'The Nshtare customer service team is ready to answer your inquiries and help you choose the right scooter via WhatsApp or email.',
};

export default function ContactPageEn() {
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: "Contact Us", url: "/en/contact" }
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">How Can We Help You?</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We are here to answer all your inquiries. Whether you need help choosing the right scooter or have a question about your order, our team is ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-surface p-8 rounded-3xl border border-border flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text mb-2">Support & Sales (WhatsApp)</h2>
                <p className="text-text-secondary mb-4">The fastest way to reach us. We usually reply within minutes.</p>
                <a 
                  href="https://wa.me/966500000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-xl font-bold transition-transform transform hover:scale-105"
                >
                  Chat with us now
                </a>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-3xl border border-border flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary shrink-0">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text mb-2">Email</h2>
                <p className="text-text-secondary mb-2">For official inquiries and corporate sales.</p>
                <a href="mailto:support@nshtare.com" className="font-bold text-primary hover:underline">
                  support@nshtare.com
                </a>
              </div>
            </div>
            
            <div className="bg-surface p-8 rounded-3xl border border-border flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
                <Clock className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text mb-2">Working Hours</h2>
                <p className="text-text-secondary">Saturday to Thursday</p>
                <p className="font-bold text-text mt-1">9:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form / Direct Call */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-xl h-full flex flex-col justify-center text-center">
            <div className="bg-bg w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-black text-text mb-4">Headquarters</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Saudi Arabia<br />
              Riyadh, Sulay Warehouses
            </p>
            <div className="pt-8 border-t border-border">
               <p className="text-sm font-bold text-text mb-4">Or you can call us directly:</p>
               <div className="inline-flex items-center justify-center bg-primary/5 border border-primary/20 px-8 py-4 rounded-2xl">
                 <SecurePhone encodedPhone="K+O2tjUwMDAwMDAw" className="text-2xl text-primary" />
               </div>
               <p className="text-xs text-text-secondary mt-3">Number is hidden to ensure privacy. Click to reveal.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
