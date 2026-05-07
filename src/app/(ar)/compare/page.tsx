"use client";

import React, { useState, useMemo } from 'react';
import { products, categories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, X, Plus, ArrowRight, Trophy, Zap, Search, Filter, ShoppingCart, Battery, Gauge, Weight, Timer, Circle, Award } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const { addToCart, openCart } = useCart();

  const addProduct = (slug: string) => {
    if (selected.length >= 4) return;
    if (!selected.includes(slug)) setSelected([...selected, slug]);
  };

  const removeProduct = (slug: string) => {
    setSelected(selected.filter(s => s !== slug));
  };

  const clearAll = () => setSelected([]);

  const selectedProducts = selected.map(s => products.find(p => p.slug === s)).filter(Boolean) as any[];
  
  const available = useMemo(() => {
    let filtered = products.filter(p => !selected.includes(p.slug));
    if (filterCategory !== 'all') {
      filtered = filtered.filter(p => p.categorySlug === filterCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.nameEn.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [selected, searchQuery, filterCategory]);

  // Smart analysis
  const analysis = useMemo(() => {
    if (selectedProducts.length < 2) return null;
    
    const cheapest = selectedProducts.reduce((a, b) => a.price < b.price ? a : b);
    const bestRated = selectedProducts.reduce((a, b) => a.rating > b.rating ? a : b);
    
    // Find best value (lowest price per rating point)
    const bestValue = selectedProducts.reduce((a, b) => {
      const aValue = a.price / a.rating;
      const bValue = b.price / b.rating;
      return aValue < bValue ? a : b;
    });

    // Find biggest discount
    const withDiscount = selectedProducts.filter(p => p.originalPrice);
    const biggestDiscount = withDiscount.length > 0 
      ? withDiscount.reduce((a, b) => {
          const aDisc = ((a.originalPrice - a.price) / a.originalPrice) * 100;
          const bDisc = ((b.originalPrice - b.price) / b.originalPrice) * 100;
          return aDisc > bDisc ? a : b;
        })
      : null;

    return { cheapest, bestRated, bestValue, biggestDiscount };
  }, [selectedProducts]);

  // Extract all unique spec labels across selected products
  const allSpecLabels = useMemo(() => {
    const labels: { labelAr: string; labelEn: string; icon: string }[] = [];
    const seen = new Set<string>();
    selectedProducts.forEach(p => {
      (p.specs || []).forEach((spec: any) => {
        if (!seen.has(spec.labelAr)) {
          seen.add(spec.labelAr);
          labels.push({ labelAr: spec.labelAr, labelEn: spec.labelEn, icon: spec.icon });
        }
      });
    });
    return labels;
  }, [selectedProducts]);

  const getSpecValue = (product: any, labelAr: string) => {
    const spec = (product.specs || []).find((s: any) => s.labelAr === labelAr);
    return spec ? spec.value : '—';
  };

  const getSpecIcon = (iconName: string) => {
    switch (iconName) {
      case 'battery': return <Battery className="h-4 w-4" />;
      case 'speed': return <Gauge className="h-4 w-4" />;
      case 'weight': return <Weight className="h-4 w-4" />;
      case 'time': return <Timer className="h-4 w-4" />;
      case 'power': return <Zap className="h-4 w-4" />;
      default: return <Circle className="h-4 w-4" />;
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      nameEn: product.nameEn,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    openCart();
  };

  const getBadge = (product: any) => {
    if (!analysis) return null;
    if (analysis.cheapest.id === product.id) return { text: 'الأرخص', color: 'bg-success', icon: '💰' };
    if (analysis.bestRated.id === product.id && analysis.bestRated.id !== analysis.cheapest.id) return { text: 'الأعلى تقييماً', color: 'bg-accent', icon: '⭐' };
    if (analysis.bestValue.id === product.id && analysis.bestValue.id !== analysis.cheapest.id && analysis.bestValue.id !== analysis.bestRated.id) return { text: 'أفضل قيمة', color: 'bg-primary', icon: '🏆' };
    return null;
  };

  return (
    <div className="bg-bg min-h-screen py-8 md:py-16" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Trophy className="h-4 w-4" />
            أداة مقارنة ذكية
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">قارن المنتجات جنباً إلى جنب</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            اختر حتى 4 منتجات لمقارنة شاملة للمواصفات والأسعار. نحلل لك تلقائياً الخيار الأفضل.
          </p>
        </div>

        {/* Selection Area */}
        {selected.length < 4 && (
          <div className="mb-12 bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-text flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                أضف منتج للمقارنة
                <span className="text-sm font-normal text-text-secondary mr-2">({selected.length}/4)</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن منتج..."
                    className="pr-10 pl-4 py-2.5 bg-bg border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full sm:w-64"
                  />
                </div>
                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="pr-10 pl-4 py-2.5 bg-bg border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none w-full sm:w-48"
                  >
                    <option value="all">جميع الأقسام</option>
                    {categories.map(cat => (
                      <option key={cat.slug} value={cat.slug}>{cat.icon} {cat.nameAr}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Selection Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {available.slice(0, 15).map((p) => (
                <button
                  key={p.slug}
                  onClick={() => addProduct(p.slug)}
                  className="group bg-bg hover:bg-primary/5 border border-border hover:border-primary rounded-2xl p-3 transition-all duration-300 text-center hover:shadow-md"
                >
                  <div className="relative w-full aspect-square mb-2 rounded-xl overflow-hidden bg-white">
                    <Image src={p.image} alt={p.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-xs font-bold text-text line-clamp-2 leading-tight mb-1">{p.name}</p>
                  <p className="text-xs font-black text-primary">{p.price.toLocaleString()} ر.س</p>
                </button>
              ))}
            </div>
            {available.length === 0 && (
              <p className="text-center text-text-secondary py-8">لا توجد منتجات مطابقة للبحث.</p>
            )}
            {available.length > 15 && (
              <p className="text-center text-text-secondary text-sm mt-4">يتم عرض أول 15 منتج — استخدم البحث لتصفية النتائج.</p>
            )}
          </div>
        )}

        {/* Selected Products Strip */}
        {selected.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-text-secondary">المنتجات المختارة:</span>
            {selectedProducts.map((p: any) => (
              <div key={p.slug} className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full pr-1 pl-3 py-1">
                <div className="relative w-6 h-6 rounded-full overflow-hidden bg-white">
                  <Image src={p.image} alt={p.name} fill className="object-contain" />
                </div>
                <span className="text-xs font-bold text-primary">{p.name.split(' ').slice(0, 3).join(' ')}</span>
                <button onClick={() => removeProduct(p.slug)} className="text-primary/60 hover:text-error transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            {selected.length > 1 && (
              <button onClick={clearAll} className="text-xs text-error hover:underline font-medium">مسح الكل</button>
            )}
          </div>
        )}

        {/* Smart Analysis Banner */}
        {analysis && (
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-2xl p-4 flex items-center gap-3">
              <div className="bg-success/20 p-2 rounded-xl">
                <span className="text-xl">💰</span>
              </div>
              <div>
                <p className="text-xs text-success font-bold">الأرخص سعراً</p>
                <p className="text-sm font-black text-text">{analysis.cheapest.name.split(' ').slice(0, 3).join(' ')}</p>
                <p className="text-xs text-success font-bold">{analysis.cheapest.price.toLocaleString()} ر.س</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-4 flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-xl">
                <span className="text-xl">⭐</span>
              </div>
              <div>
                <p className="text-xs text-accent font-bold">الأعلى تقييماً</p>
                <p className="text-sm font-black text-text">{analysis.bestRated.name.split(' ').slice(0, 3).join(' ')}</p>
                <p className="text-xs text-accent font-bold">{analysis.bestRated.rating} / 5</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-xl">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <p className="text-xs text-primary font-bold">أفضل قيمة مقابل السعر</p>
                <p className="text-sm font-black text-text">{analysis.bestValue.name.split(' ').slice(0, 3).join(' ')}</p>
              </div>
            </div>
            {analysis.biggestDiscount && (
              <div className="bg-gradient-to-br from-error/10 to-error/5 border border-error/20 rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-error/20 p-2 rounded-xl">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <p className="text-xs text-error font-bold">أكبر خصم</p>
                  <p className="text-sm font-black text-text">{analysis.biggestDiscount.name.split(' ').slice(0, 3).join(' ')}</p>
                  <p className="text-xs text-error font-bold">
                    وفر {(analysis.biggestDiscount.originalPrice - analysis.biggestDiscount.price).toLocaleString()} ر.س
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Comparison Table */}
        {selectedProducts.length > 0 ? (
          <div className="bg-surface rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Product Headers */}
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-5 bg-surface text-text font-bold text-start sticky right-0 z-10 min-w-[140px]">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        المقارنة
                      </div>
                    </th>
                    {selectedProducts.map((p: any) => {
                      const badge = getBadge(p);
                      return (
                        <th key={p.slug} className="p-5 bg-surface text-center min-w-[220px] border-r border-border relative">
                          <button 
                            onClick={() => removeProduct(p.slug)} 
                            className="absolute top-3 left-3 text-text-secondary/40 hover:text-error transition-colors bg-bg rounded-full p-1" 
                            title="إزالة"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          {badge && (
                            <div className={`${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1 mb-3`}>
                              <span>{badge.icon}</span> {badge.text}
                            </div>
                          )}
                          <Link href={`/${p.categorySlug}/${p.slug}`} className="block group">
                            <div className="relative w-28 h-28 mx-auto mb-3 bg-bg rounded-2xl p-2 group-hover:shadow-md transition-shadow">
                              <Image src={p.image} alt={p.name} fill className="object-contain p-1" />
                            </div>
                            <h3 className="text-text font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">{p.name}</h3>
                          </Link>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {/* Price Row */}
                  <tr className="border-b border-border bg-primary/3 hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-bold text-text sticky right-0 z-10 bg-primary/5">
                      <div className="flex items-center gap-2">💵 السعر</div>
                    </td>
                    {selectedProducts.map((p: any) => (
                      <td key={p.slug} className="p-4 text-center border-r border-border">
                        <div className="font-black text-primary text-2xl">{p.price.toLocaleString()}</div>
                        <div className="text-xs text-text-secondary">ر.س</div>
                        {p.originalPrice && (
                          <div className="mt-1">
                            <span className="text-sm text-text-secondary line-through ml-2">{p.originalPrice.toLocaleString()}</span>
                            <span className="text-xs bg-error/10 text-error px-2 py-0.5 rounded-full font-bold">
                              -{Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%
                            </span>
                          </div>
                        )}
                        {analysis?.cheapest.id === p.id && (
                          <div className="mt-1 text-xs text-success font-bold">✓ الأقل سعراً</div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Rating Row */}
                  <tr className="border-b border-border hover:bg-bg/50 transition-colors">
                    <td className="p-4 font-bold text-text sticky right-0 z-10 bg-surface">
                      <div className="flex items-center gap-2">⭐ التقييم</div>
                    </td>
                    {selectedProducts.map((p: any) => (
                      <td key={p.slug} className="p-4 text-center border-r border-border">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= Math.floor(p.rating) ? 'text-accent fill-accent' : 'text-border'}`}
                            />
                          ))}
                        </div>
                        <div className="font-bold text-text text-lg">{p.rating}</div>
                        <div className="text-xs text-text-secondary">({p.reviewsCount} تقييم)</div>
                        {analysis?.bestRated.id === p.id && selectedProducts.length > 1 && (
                          <div className="mt-1 text-xs text-accent font-bold">✓ الأعلى تقييماً</div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Dynamic Spec Rows */}
                  {allSpecLabels.map((spec, idx) => (
                    <tr key={spec.labelAr} className={`border-b border-border hover:bg-bg/50 transition-colors ${idx % 2 === 0 ? 'bg-bg/30' : ''}`}>
                      <td className="p-4 font-bold text-text sticky right-0 z-10 bg-surface">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-primary">{getSpecIcon(spec.icon)}</span>
                          {spec.labelAr}
                        </div>
                      </td>
                      {selectedProducts.map((p: any) => (
                        <td key={p.slug} className="p-4 text-center border-r border-border">
                          <span className="font-bold text-text text-sm">{getSpecValue(p, spec.labelAr)}</span>
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* COD Row */}
                  <tr className="border-b border-border hover:bg-bg/50 transition-colors">
                    <td className="p-4 font-bold text-text sticky right-0 z-10 bg-surface">
                      <div className="flex items-center gap-2">🛡️ الدفع عند الاستلام</div>
                    </td>
                    {selectedProducts.map((p: any) => (
                      <td key={p.slug} className="p-4 text-center border-r border-border">
                        <div className="flex flex-col items-center gap-1">
                          <ShieldCheck className="h-6 w-6 text-success" />
                          <span className="text-sm text-success font-bold">متاح</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Warranty Row */}
                  <tr className="border-b border-border hover:bg-bg/50 transition-colors bg-bg/30">
                    <td className="p-4 font-bold text-text sticky right-0 z-10 bg-surface">
                      <div className="flex items-center gap-2">📋 الضمان</div>
                    </td>
                    {selectedProducts.map((p: any) => (
                      <td key={p.slug} className="p-4 text-center border-r border-border">
                        <span className="font-bold text-text">سنة كاملة</span>
                        <div className="text-xs text-text-secondary mt-1">ضمان الوكيل المحلي</div>
                      </td>
                    ))}
                  </tr>

                  {/* Shipping Row */}
                  <tr className="border-b border-border hover:bg-bg/50 transition-colors">
                    <td className="p-4 font-bold text-text sticky right-0 z-10 bg-surface">
                      <div className="flex items-center gap-2">🚚 الشحن</div>
                    </td>
                    {selectedProducts.map((p: any) => (
                      <td key={p.slug} className="p-4 text-center border-r border-border">
                        <span className="font-bold text-secondary">مجاني</span>
                        <div className="text-xs text-text-secondary mt-1">2-4 أيام عمل</div>
                      </td>
                    ))}
                  </tr>

                  {/* CTA Row */}
                  <tr className="bg-surface">
                    <td className="p-5 font-bold text-text sticky right-0 z-10">
                      <div className="flex items-center gap-2 text-primary font-black">🛒 اطلب الآن</div>
                    </td>
                    {selectedProducts.map((p: any) => (
                      <td key={p.slug} className="p-5 text-center border-r border-border">
                        <div className="flex flex-col gap-2">
                          <button 
                            onClick={() => handleAddToCart(p)}
                            className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            أضف للسلة
                          </button>
                          <Link 
                            href={`/${p.categorySlug}/${p.slug}`}
                            className="w-full bg-bg hover:bg-primary hover:text-white border border-border text-text py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-1"
                          >
                            عرض التفاصيل
                            <ArrowRight className="h-4 w-4 rotate-180" />
                          </Link>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-surface border border-border rounded-3xl p-12 md:p-16 text-center">
            <div className="relative w-32 h-32 mx-auto mb-6 opacity-60">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-4 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-primary/40" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">ابدأ المقارنة الذكية</h3>
            <p className="text-text-secondary text-lg mb-6 max-w-md mx-auto">
              اختر منتجين أو أكثر من القائمة أعلاه لتحصل على مقارنة شاملة وتحليل ذكي يساعدك في اتخاذ القرار.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/electric-scooter" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2">
                <Zap className="h-5 w-5" />
                تصفح السكوترات الكهربائية
              </Link>
              <Link href="/adult-scooter" className="bg-bg hover:bg-surface border border-border text-text px-6 py-3 rounded-xl font-bold transition-colors">
                سكوترات للكبار
              </Link>
            </div>
          </div>
        )}

        {/* SEO Content */}
        <div className="mt-16 bg-surface rounded-3xl border border-border p-8 md:p-10">
          <h2 className="text-2xl font-bold text-text mb-4">كيف تختار السكوتر المناسب؟</h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
            <p>
              أداة المقارنة الذكية من نشتري تساعدك في اتخاذ قرار الشراء الصحيح. قارن بين المواصفات الفنية مثل المدى، السرعة القصوى، قوة الموتور، والوزن لتجد السكوتر الذي يناسب احتياجاتك ومشاويرك اليومية في السعودية.
            </p>
            <p>
              جميع المنتجات المعروضة تأتي مع ضمان سنة كاملة من الوكيل المحلي، شحن مجاني لجميع مدن المملكة، وخيار الدفع عند الاستلام لراحة بالك.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
