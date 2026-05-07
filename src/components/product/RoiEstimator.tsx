"use client";

import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, CarFront, Zap, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function RoiEstimator({ productPrice }: { productPrice: number }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  
  const [dailyKm, setDailyKm] = useState(8);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // ─── Realistic KSA Ride-Hailing Costs (Uber/Careem 2025-2026) ───
  // Based on real Saudi market data:
  // - Base fare: 7 SAR
  // - Per KM rate: ~2.0 SAR (average between economy/comfort)
  // - Minimum fare: 10 SAR
  // - Dynamic pricing factor: ~1.2x average (accounts for occasional surge)
  const baseFare = 7;
  const perKmRate = 2.0;
  const minFare = 10;
  const surgeFactor = 1.15; // Average surge across the year (not every trip surges)
  
  const rawTripCost = baseFare + (dailyKm * perKmRate);
  const tripCost = Math.max(minFare, rawTripCost) * surgeFactor;
  
  // Not everyone takes a ride EVERY single day
  // Realistic: ~22 working days/month × 11 months (vacations/holidays) = 242 days
  const activeDaysPerYear = 242;
  
  // Most commuters take 1 trip per day on average (some days round-trip, some days not)
  // We use dailyKm as the TOTAL daily distance, representing 1 equivalent trip
  const annualRideCost = tripCost * activeDaysPerYear;
  
  // ─── Scooter Running Costs ───
  // KSA Tier 1 residential: 0.18 SAR/kWh
  // Average scooter: ~1.5 kWh per 100km → 0.015 kWh/km → 0.0027 SAR/km
  const electricityCostPerKm = 0.0027;
  const annualElectricity = dailyKm * activeDaysPerYear * electricityCostPerKm;
  
  // Maintenance: tire replacements, brake pads, general wear
  // Realistic: ~8% of scooter price per year for daily commuters
  const maintenanceRate = productPrice > 1000 ? 0.06 : 0.08; // Higher-end scooters need less % maintenance
  const annualMaintenance = productPrice * maintenanceRate;
  
  const totalAnnualScooterCost = annualElectricity + annualMaintenance;
  
  // ─── Year 1 Savings (includes purchase cost) ───
  const year1Savings = annualRideCost - productPrice - totalAnnualScooterCost;
  
  // ─── Monthly Breakdown ───
  const monthlyRideCost = annualRideCost / 12;
  const monthlyScooterCost = totalAnnualScooterCost / 12;
  const monthlySavings = monthlyRideCost - monthlyScooterCost;
  
  // ─── Payback Period ───
  const dailyNetSavings = (tripCost - (dailyKm * electricityCostPerKm));
  const paybackDays = Math.ceil(productPrice / dailyNetSavings);
  const paybackMonths = Math.round(paybackDays / 30);

  const t = {
    title: isEn ? "Savings Calculator" : "حاسبة التوفير الذكية 💰",
    subtitle: isEn 
      ? "How much can you save compared to Uber/Careem?" 
      : "كم توفر مقارنة بأوبر وكريم؟",
    dailyUsage: isEn ? "Your daily commute distance" : "مسافة تنقلك اليومية",
    km: isEn ? "km" : "كم",
    annualSavings: isEn ? "Year 1 Net Savings" : "صافي التوفير (السنة الأولى)",
    payback: isEn ? "Investment payback" : "استرداد تكلفة السكوتر",
    days: isEn ? "days" : "يوم",
    months: isEn ? "months" : "شهر",
    sar: isEn ? "SAR" : "ر.س",
    vsUber: isEn ? "Uber/Careem annual cost" : "تكلفة أوبر/كريم سنوياً",
    monthlyLabel: isEn ? "Monthly savings (after payback)" : "التوفير الشهري (بعد سداد ثمن السكوتر)",
    note: isEn 
      ? "Based on 242 working days/year, real KSA ride-hailing rates" 
      : "محسوبة على 242 يوم عمل/سنة بأسعار أوبر وكريم الفعلية في السعودية",
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

        {/* Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <label className="font-bold text-text">{t.dailyUsage}</label>
            <span className="text-primary font-black text-xl">{dailyKm} {t.km}</span>
          </div>
          <input 
            type="range" 
            min="2" 
            max="25" 
            step="1" 
            value={dailyKm} 
            onChange={(e) => setDailyKm(parseInt(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to ${isEn ? 'right' : 'left'}, var(--color-primary) ${(dailyKm - 2) / 23 * 100}%, var(--color-border) ${(dailyKm - 2) / 23 * 100}%)`
            }}
          />
          <div className="flex justify-between text-xs text-text-secondary mt-2">
            <span>2 {t.km}</span>
            <span>25 {t.km}</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Uber/Careem Cost */}
          <div className="bg-error/5 border border-error/10 rounded-xl p-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-error mb-1">
              <CarFront className="h-4 w-4" />
              <span className="text-sm font-bold">{t.vsUber}</span>
            </div>
            <span className="text-2xl font-black text-text line-through opacity-70">
              {Math.round(annualRideCost).toLocaleString()} {t.sar}
            </span>
          </div>

          {/* Year 1 Savings */}
          <div className="bg-success/10 border border-success/20 rounded-xl p-4 flex flex-col justify-center transform transition-transform hover:scale-105">
            <div className="flex items-center gap-2 text-success mb-1">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-bold">{t.annualSavings}</span>
            </div>
            <span className="text-3xl font-black text-success">
              {year1Savings > 0 ? `+${Math.round(year1Savings).toLocaleString()}` : Math.round(year1Savings).toLocaleString()} {t.sar}
            </span>
          </div>
        </div>

        {/* Monthly Savings */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <Zap className="h-4 w-4 fill-current" />
            <span className="text-sm font-bold">{t.monthlyLabel}</span>
          </div>
          <span className="font-black text-primary text-lg">
            {Math.round(monthlySavings).toLocaleString()} {t.sar}/{isEn ? 'mo' : 'شهر'}
          </span>
        </div>

        {/* Payback Period */}
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-text-secondary bg-bg py-3 rounded-lg border border-border">
          <Clock className="h-4 w-4" />
          {t.payback}: <span className="text-text">{paybackMonths > 0 ? `~${paybackMonths} ${t.months}` : `${paybackDays} ${t.days}`}</span>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-text-secondary/60 mt-3 text-center">
          * {t.note}
        </p>
      </div>
    </div>
  );
}
