"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MapPin, ThermometerSun, Droplets } from "lucide-react";

export default function GeoJustification({ categorySlug, product }: { categorySlug: string, product?: any }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  // Dynamic text based on category for N-Grams and Dialect relevance
  const getGeoText = () => {
    if (product?.geoData) {
      return isEn && product.geoData.descEn ? product.geoData.descEn : product.geoData.descAr;
    }
    if (categorySlug.includes("drift")) {
      return isEn 
        ? "Engineered with reinforced solid tires to withstand the rough asphalt of Saudi neighborhoods and high-temperature drifting friction."
        : "مصمم بكفرات صب مقواة لتحمل الأسفلت الخشن في شوارع الأحياء السعودية واحتكاك الدرفت العنيف في درجات الحرارة العالية.";
    }
    if (categorySlug.includes("kids")) {
      return isEn
        ? "Built with UV-resistant materials to prevent cracking under the harsh summer sun in Riyadh and Jeddah."
        : "تم تصنيع الهيكل بمواد مقاومة للأشعة فوق البنفسجية لمنع التشقق تحت شمس الصيف القاسية في الرياض أو رطوبة جدة.";
    }
    // Default electric scooter
    return isEn
      ? "Given the extreme summer temperatures in Riyadh and the high humidity in Jeddah, this scooter features an internal motor cooling system and IP54 water resistance to protect it from coastal moisture."
      : "نظراً لارتفاع درجات الحرارة في صيف الرياض والرطوبة العالية في جدة والدمام، تم تزويد هذا السكوتر بنظام تبريد داخلي للموتور ومقاومة للمياه IP54 لحمايته من طقس المدن الساحلية.";
  };

  const t = {
    title: isEn ? "Climate Optimized for Saudi Arabia" : "مُحسّن للمناخ والتضاريس السعودية 🇸🇦",
    text: getGeoText(),
  };

  return (
    <div className="bg-bg border border-border rounded-xl p-5 mb-8" dir={isEn ? "ltr" : "rtl"}>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          <div className="bg-primary/10 p-2 rounded-full border-2 border-surface z-20">
            <ThermometerSun className="h-4 w-4 text-error" />
          </div>
          <div className="bg-primary/10 p-2 rounded-full border-2 border-surface z-10">
            <Droplets className="h-4 w-4 text-info" />
          </div>
          <div className="bg-primary/10 p-2 rounded-full border-2 border-surface z-0">
            <MapPin className="h-4 w-4 text-primary" />
          </div>
        </div>
        <h4 className="font-bold text-text">{t.title}</h4>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t.text}
      </p>
    </div>
  );
}
