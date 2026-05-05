# 🧠 Plan 05 — الهندسة السلوكية وتصميم التحويل
# Behavioral Engineering & UX Design

---

## 1. Engagement Hooks (خطافات التفاعل)

| الخطاف | الآلية | المقياس المستهدف |
|---|---|---|
| **Dopamine Pacing** | إظهار السعر بعد التمرير للمواصفات | Scroll Depth + Dwell Time |
| **Copy Event Bait** | جداول مقارنة قابلة للنسخ | High Utility Action |
| **Social Proof Live** | "X شخص يشاهد هذا المنتج الآن" | Trust + Urgency |
| **COD Trust Signal** | شارة "ادفع عند الاستلام" ضخمة | Conversion Rate |
| **WhatsApp Float** | زر واتساب عائم مع رسالة مسبقة | Lead Generation |
| **Bookmark Bait** | "احفظ هذا الدليل لوقت الشراء" | Chrome Bookmark Signal |
| **Tab Hoarding** | أدلة شراء شاملة يُعاد فتحها | Pillar Resource Signal |
| **Cognitive Estimator** | حاسبة تكلفة السكوتر (سعر × مواصفات) | INP + Dwell Time |

---

## 2. Mobile-First Design Rules

### 2.1 Hero Section (أول 700px)
- صورة المنتج / القسم
- H1 مع الكلمة المفتاحية
- السعر (واضح وكبير) + خصم إن وجد
- شارة "الدفع عند الاستلام" 💳
- CTA: "اطلب الآن" أو "تصفح المنتجات"

### 2.2 قواعد صارمة
- ❌ لا إعلانات فوق الطي (Viewport Toxicity)
- ❌ لا popups خلال أول 5 ثوانٍ
- ✅ أزرار كبيرة واضحة 48px min (Anti Rage-Clicks)
- ✅ Font size: 16px min على الجوال
- ✅ Touch targets: 44px × 44px minimum
- ✅ Lazy load للصور أسفل الطي فقط

---

## 3. Conversion Funnel (COD)

### 3.1 Product Page → Cart → Order

```
Product Page
├── صور + مواصفات + سعر
├── CTA: "أضف للسلة" (Primary)
├── CTA: "اطلب مباشرة" (Secondary — skip cart)
├── CTA: "استفسر واتساب" (Tertiary)
│
Cart (Sidebar/Modal)
├── قائمة المنتجات
├── إجمالي + شحن
├── CTA: "إتمام الطلب"
│
Order Page (/order/)
├── نموذج بسيط:
│   ├── الاسم الكامل
│   ├── رقم الجوال (+966)
│   ├── المدينة (dropdown)
│   ├── الحي
│   ├── العنوان التفصيلي
│   └── ملاحظات (اختياري)
├── ملخص الطلب
├── إجمالي نهائي
├── ☑️ "أوافق على سياسة الاستبدال"
├── CTA: "تأكيد الطلب — الدفع عند الاستلام"
│
Confirmation Page (/order/confirmation/)
├── ✅ رقم الطلب: NSHT-20260505-0001
├── تفاصيل الطلب
├── مدة التوصيل المتوقعة
├── رقم واتساب للمتابعة
├── S2S Tracking → GA4 (purchase event)
└── CTA: "تابع التسوق"
```

### 3.2 WhatsApp Direct Order (مسار بديل)
```
Product Page → "اطلب عبر واتساب"
→ wa.me/966XXXXXXXXX?text=مرحباً، أريد طلب [اسم المنتج] — [الرابط]
→ S2S Tracking → GA4 (whatsapp_lead event)
```

---

## 4. Navboost Optimization

### 4.1 Anti Pogo-Sticking
- **Above-the-fold value**: السعر + الصورة + التقييم فوراً
- **Cognitive Estimator**: حاسبة تفاعلية تجبر على البقاء
- **Progressive Disclosure**: معلومات تتكشف أثناء التمرير
- **Zero TTFB Hero**: إرسال H1 + Meta فوراً عبر Streaming

### 4.2 Dwell Time Maximizers
- جدول مواصفات تفصيلي
- مقارنة "هذا المنتج vs المنافسين"
- مراجعات عملاء (قابلة للتوسيع)
- FAQ accordion (4-6 أسئلة)
- مقالات ذات صلة أسفل الصفحة

---

## 5. Live Viewer Count (Social Proof)

```typescript
// عدد مشاهدين وهمي حتمي (seeded random)
export function getLiveViewerCount(productSlug: string): number {
  const hour = new Date().getHours();
  const hash = Array.from(productSlug).reduce((a, c) => a + c.charCodeAt(0), 0);
  
  // ذروة: 9AM-11PM = أعداد أعلى
  const isPeakHour = hour >= 9 && hour <= 23;
  const base = isPeakHour ? 15 : 5;
  return base + (hash % 20);
}
// "27 شخص يشاهد هذا المنتج الآن 👁️"
```

---

## 6. Performance & Accessibility

### 6.1 Speculation Rules API
```typescript
// تحميل مسبق للصفحات عند Hover
const speculationRules = {
  prerender: [{
    source: 'document',
    where: {
      and: [
        { href_matches: '/product/*|/electric-scooter/*|/drift-scooter/*' },
        { not: { href_matches: '/api/*|/order/*' } }
      ]
    },
    eagerness: 'moderate'
  }]
};
```

### 6.2 Core Web Vitals Budget
- **LCP**: Hero image محسنة (WebP, 100KB max, priority loading)
- **CLS**: أبعاد ثابتة لكل صورة/كارت (width, height attributes)
- **INP**: Server Components بالكامل, dynamic imports للتفاعلية فقط

---

## 7. Color System & Design Tokens

```css
/* Design System — Premium Saudi E-commerce */
:root {
  /* Brand */
  --color-primary: #6366f1;       /* Indigo — premium feel */
  --color-primary-dark: #4f46e5;
  --color-secondary: #10b981;     /* Emerald — trust/COD */
  --color-accent: #f59e0b;        /* Amber — CTAs/urgency */
  
  /* Neutrals */
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
  
  /* Semantic */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Typography */
  --font-ar: 'Tajawal', sans-serif;
  --font-en: 'Inter', sans-serif;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}
```
