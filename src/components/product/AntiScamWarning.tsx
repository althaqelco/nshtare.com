"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ShieldAlert, AlertTriangle, CheckCircle } from "lucide-react";

export default function AntiScamWarning() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  const t = {
    title: isEn ? "Consumer Safety Warning (YMYL)" : "تحذير أمان للمستهلك السعودي ⚠️",
    text1: isEn 
      ? "80% of cheap, unbranded scooters use unauthorized batteries prone to thermal runaway (fire hazard)." 
      : "80% من السكوترات الرخيصة مجهولة المصدر تستخدم بطاريات غير معتمدة قابلة للانفجار الحراري.",
    text2: isEn
      ? "This product is equipped with high-grade Lithium 18650 cells and an intelligent BMS (Battery Management System)."
      : "تم تزويد هذا المنتج ببطاريات ليثيوم 18650 أصلية مع نظام إدارة ذكي (BMS).",
    saso: isEn 
      ? "Fully compliant with SASO (Saudi Standards, Metrology and Quality Organization) safety requirements to protect your family." 
      : "هذا المنتج مطابق لمواصفات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) لضمان سلامتك وسلامة أطفالك.",
    safe: isEn ? "Safe to Buy" : "آمن للشراء عبر نشتري",
  };

  return (
    <div className="bg-error/5 border border-error/20 rounded-2xl p-5 sm:p-6 mb-8 relative overflow-hidden group" dir={isEn ? "ltr" : "rtl"}>
      {/* Background Icon */}
      <ShieldAlert className="absolute -right-8 -top-8 h-40 w-40 text-error/5 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3 text-error">
          <AlertTriangle className="h-6 w-6 animate-pulse" />
          <h3 className="text-lg sm:text-xl font-black">{t.title}</h3>
        </div>
        
        <p className="text-text font-medium leading-relaxed mb-2">
          {t.text1}
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          {t.text2} <strong className="text-text font-bold bg-warning/20 px-1">{t.saso}</strong>
        </p>
        
        <div className="inline-flex items-center gap-2 bg-success/10 text-success font-bold px-4 py-2 rounded-lg border border-success/20">
          <CheckCircle className="h-5 w-5" />
          <span>{t.safe}</span>
        </div>
      </div>
    </div>
  );
}
