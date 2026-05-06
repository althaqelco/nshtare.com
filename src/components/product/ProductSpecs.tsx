"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Battery, Gauge, Weight, Timer, Zap, Ruler, Shield, ChevronDown, ChevronUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  battery: <Battery className="h-5 w-5" />,
  speed: <Gauge className="h-5 w-5" />,
  weight: <Weight className="h-5 w-5" />,
  time: <Timer className="h-5 w-5" />,
  power: <Zap className="h-5 w-5" />,
  size: <Ruler className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
};

export interface Spec {
  labelAr: string;
  labelEn: string;
  value: string;
  icon?: string;
}

export default function ProductSpecs({ specs }: { specs: Spec[] }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const [expanded, setExpanded] = useState(false);

  if (!specs || specs.length === 0) return null;

  const visibleSpecs = expanded ? specs : specs.slice(0, 6);

  return (
    <section className="mt-12 mb-8">
      <h2 className="text-2xl font-black text-text mb-6 flex items-center gap-2">
        <Zap className="h-6 w-6 text-primary" />
        {isEn ? "Technical Specifications" : "المواصفات التقنية"}
      </h2>
      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border" dir={isEn ? "ltr" : "rtl"}>
          {visibleSpecs.map((spec, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-5 ${i >= 2 ? 'border-t border-border' : ''} hover:bg-primary/5 transition-colors`}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-xl flex-shrink-0">
                {spec.icon && iconMap[spec.icon] ? iconMap[spec.icon] : <Zap className="h-5 w-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-text-secondary font-medium">
                  {isEn ? spec.labelEn : spec.labelAr}
                </div>
                <div className="text-lg font-bold text-text truncate">{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
        {specs.length > 6 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full py-4 text-center text-primary font-bold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 border-t border-border"
          >
            {expanded
              ? (isEn ? "Show Less" : "عرض أقل")
              : (isEn ? `Show All ${specs.length} Specs` : `عرض جميع المواصفات (${specs.length})`)}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        )}
      </div>
    </section>
  );
}
