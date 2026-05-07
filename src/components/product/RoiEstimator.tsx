"use client";

import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, CarFront, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function RoiEstimator({ productPrice }: { productPrice: number }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  
  const [dailyKm, setDailyKm] = useState(10);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Advanced KSA-specific ride-hailing estimation (Uber/Careem)
  const tripsPerDay = 2; // Assuming a standard round trip (e.g., home to work/metro and back)
  const kmPerTrip = dailyKm / tripsPerDay;
  
  const minFarePerTrip = 15; // Average minimum fare in SAR
  const baseFare = 8;
  const perKmRate = 2.5;
  
  // Calculate true ride cost factoring in the minimum fare trap for short distances
  const costPerTrip = Math.max(minFarePerTrip, baseFare + (kmPerTrip * perKmRate));
  const dailyRideCost = costPerTrip * tripsPerDay;
  const daysPerYear = 300; // Assuming 300 active usage days
  
  const annualRideCost = dailyRideCost * daysPerYear;
  
  // Precise Scooter Running Costs
  // KSA Tier 1 residential electricity = 0.18 SAR/kWh.
  // Avg scooter (e.g., Ninebot) consumes ~1.5 kWh per 100km -> 0.015 kWh/km -> 0.0027 SAR/km
  const electricityCostPerKm = 0.0027;
  const annualElectricityCost = dailyKm * daysPerYear * electricityCostPerKm;
  
  // Annual maintenance (tires, brake pads) estimated at 5% of scooter price
  const annualMaintenance = productPrice * 0.05;
  const annualScooterRunningCost = annualElectricityCost + annualMaintenance;

  // Real Net Savings for Year 1 (Subtracting the cost of buying the scooter itself and running it)
  const year1Savings = annualRideCost - (productPrice + annualScooterRunningCost);
  
  // Payback period based on daily net savings vs Uber
  const dailyNetSavings = dailyRideCost - (dailyKm * electricityCostPerKm);
  const paybackDays = Math.ceil(productPrice / dailyNetSavings);

  const t = {
    title: isEn ? "ROI & Savings Calculator" : "حاسبة التوفير الذكية 💰",
    subtitle: isEn ? "See how much you save vs Uber/Taxis" : "اكتشف حجم توفيرك مقارنة باستخدام أوبر أو سيارات الأجرة",
    dailyUsage: isEn ? "Daily Usage (KM)" : "استخدامك اليومي (كم)",
    annualSavings: isEn ? "Year 1 Net Savings" : "صافي التوفير (السنة الأولى)",
    payback: isEn ? "Payback Period" : "استرداد قيمة السكوتر خلال",
    days: isEn ? "Days" : "يوم",
    sar: isEn ? "SAR" : "ريال",
    vsUber: isEn ? "Uber/Taxi Cost (Yearly)" : "تكلفة المواصلات التقليدية سنوياً",
  };

  return (
    <div className="bg-gradient-to-br from-surface to-bg border border-border rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-1000"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-primary/10 p-2 rounded-lg text-primary">
            <Calculator className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-text">{t.title}</h3>
        </div>
        <p className="text-text-secondary text-sm mb-6">{t.subtitle}</p>

        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <label className="font-bold text-text">{t.dailyUsage}</label>
            <span className="text-primary font-black text-xl">{dailyKm} كم</span>
          </div>
          <input 
            type="range" 
            min="2" 
            max="30" 
            step="1" 
            value={dailyKm} 
            onChange={(e) => setDailyKm(parseInt(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to ${isEn ? 'right' : 'left'}, var(--color-primary) ${(dailyKm - 2) / 28 * 100}%, var(--color-border) ${(dailyKm - 2) / 28 * 100}%)`
            }}
          />
          <div className="flex justify-between text-xs text-text-secondary mt-2">
            <span>2 كم</span>
            <span>30 كم</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-error/5 border border-error/10 rounded-xl p-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-error mb-1">
              <CarFront className="h-4 w-4" />
              <span className="text-sm font-bold">{t.vsUber}</span>
            </div>
            <span className="text-2xl font-black text-text line-through opacity-70">
              {Math.round(annualRideCost).toLocaleString()} {t.sar}
            </span>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-xl p-4 flex flex-col justify-center transform transition-transform hover:scale-105">
            <div className="flex items-center gap-2 text-success mb-1">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-bold">{t.annualSavings}</span>
            </div>
            <span className="text-3xl font-black text-success">
              {year1Savings > 0 ? `+${Math.round(year1Savings).toLocaleString()}` : '0'} {t.sar}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm font-bold text-primary bg-primary/5 py-3 rounded-lg border border-primary/10">
          <Zap className="h-4 w-4 fill-current" />
          {t.payback}: <span className="text-text">{paybackDays} {t.days}</span>
        </div>
      </div>
    </div>
  );
}
