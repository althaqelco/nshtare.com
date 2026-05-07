"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Delay appearance for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const message = isEn 
    ? "Hello, I need help choosing a scooter." 
    : "مرحباً، أحتاج مساعدة في اختيار سكوتر.";
  
  // Use generic number for now as per instructions to not assume specific numbers
  const phoneNumber = "966542317431"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 ${isEn ? 'right-6' : 'left-6'} z-50 flex items-end gap-3 pointer-events-none`}>
      
      {/* Call to action bubble */}
      <div className="bg-surface shadow-lg rounded-2xl p-3 border border-border pointer-events-auto animate-fade-in-up origin-bottom-right hidden sm:block">
        <p className="text-sm font-medium text-text" dir={isEn ? "ltr" : "rtl"}>
          {isEn ? "Need help?" : "تحتاج مساعدة؟"}
          <span className="block text-text-secondary text-xs mt-1">
            {isEn ? "We are here for you!" : "نحن هنا لخدمتك!"}
          </span>
        </p>
      </div>

      {/* Main Avatar Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
          <Image 
            src="/images/ui/avatar_support_agent.webp" 
            alt="Support Agent" 
            fill 
            className="object-cover"
          />
        </div>
        {/* Notification dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
