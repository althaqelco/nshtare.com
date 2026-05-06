"use client";

import React, { useState, useEffect } from "react";
import { Clock, Package, CheckCircle2, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function LiveDispatch({ productId }: { productId: string }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [stock, setStock] = useState(3);
  const [shippedToday, setShippedToday] = useState(12);

  useEffect(() => {
    setMounted(true);
    
    // Algorithmic Determinism: Hash productId to get stable but "random-looking" numbers
    const hash = Array.from(productId).reduce((a: number, c: string) => a + c.charCodeAt(0), 0);
    setStock((hash % 4) + 2); // 2 to 5 items left
    setShippedToday((hash % 15) + 8); // 8 to 22 items shipped
    
    // Calculate cutoff time (e.g., order by 4 PM for next day)
    const updateTimer = () => {
      const now = new Date();
      const cutoff = new Date(now);
      cutoff.setHours(16, 0, 0, 0); // 4 PM
      
      if (now > cutoff) {
        cutoff.setDate(cutoff.getDate() + 1);
      }
      
      const diffMs = cutoff.getTime() - now.getTime();
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(isEn ? `${diffHrs}h ${diffMins}m` : `${diffHrs} ساعه و ${diffMins} دقيقة`);
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 60000); // update every minute
    
    return () => clearInterval(interval);
  }, [productId, isEn]);

  if (!mounted) return null;

  const t = {
    title: isEn ? "Live Dispatch Status" : "حالة الإرسال الفوري",
    shipped: isEn ? "orders shipped today" : "طلب تم شحنه اليوم",
    left: isEn ? "Only" : "متبقي",
    stock: isEn ? "items left in Riyadh warehouse" : "قطع فقط في مستودع الرياض",
    orderIn: isEn ? "Order within" : "اطلب خلال",
    receive: isEn ? "to receive it tomorrow" : "لتستلمه غداً",
  };

  return (
    <div className="bg-surface border border-primary/20 rounded-xl p-4 mb-8 shadow-sm" dir={isEn ? "ltr" : "rtl"}>
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
        </div>
        <h4 className="font-bold text-text text-sm">{t.title}</h4>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div className="flex items-center gap-2 text-sm text-text-secondary bg-bg p-2 rounded-lg">
          <CheckCircle2 className="h-4 w-4 text-success" />
          <span><span className="font-bold text-text">{shippedToday}</span> {t.shipped}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-error bg-error/5 p-2 rounded-lg font-bold">
          <Package className="h-4 w-4" />
          <span>{t.left} {stock} {t.stock}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-primary/10 text-primary p-3 rounded-lg text-sm font-bold border border-primary/20">
        <Clock className="h-5 w-5 flex-shrink-0" />
        <p>
          {t.orderIn} <span className="text-error">{timeLeft}</span> {t.receive}
        </p>
      </div>
    </div>
  );
}
