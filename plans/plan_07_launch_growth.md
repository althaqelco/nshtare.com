# 🚀 Plan 07 — بروتوكول الإطلاق والمراقبة والنمو
# Launch, Monitoring & Growth Protocol

---

## 1. جدول الإطلاق التدريجي (Fibonacci Anti-Sandbox)

> ⚠️ **قاعدة حاسمة**: لا تنشر كل الصفحات مرة واحدة!
> SpamBrain يعاقب Velocity Anomaly (السرعة غير المنطقية).

| المرحلة | الأسبوع | المهام | الصفحات | إجمالي |
|---|---|---|---|---|
| **Alpha** | 1-2 | بنية تقنية + Security Headers + Sitemap | 5 صفحات ثابتة (Home, About, Contact, Shipping, Return) | 5 |
| **Beta** | 3-4 | 6 أقسام رئيسية + أول 20 منتج | 26 صفحة (6 أقسام + 20 منتج) | 31 |
| **Launch** | 5-6 | أقسام فرعية + 3 مدن (Riyadh, Jeddah, Dammam) | ~45 صفحة | 76 |
| **Expand 1** | 7-10 | بقية المدن (6) + أول 5 مقالات + 20 منتج إضافي | ~50 صفحة | 126 |
| **Expand 2** | 11-16 | مقالات + صفحات مقارنة + منتجات جديدة | ~55 صفحة | 181 |
| **Scale** | 17-30 | توسع فيبوناتشي كامل + مدن المرحلة 2 | 100+ صفحة | 300+ |

> **متوالية فيبوناتشي**: 5 → 8 → 13 → 21 → 34 → 55 صفحة جديدة في كل دورة فهرسة

---

## 2. Pre-Launch Checklist (قبل الإطلاق)

### 2.1 Technical
- [ ] Next.js build بدون errors
- [ ] Security Headers فعّالة (test via securityheaders.com)
- [ ] SSL/HTTPS فعّال + HSTS
- [ ] Sitemap.xml يعمل + مقدم لـ GSC
- [ ] Robots.txt صحيح
- [ ] Hreflang ar-SA + en على كل الصفحات
- [ ] Canonical tags على كل الصفحات
- [ ] 404 page مخصصة
- [ ] Favicon + OG images
- [ ] .env.local — لا secrets في Git

### 2.2 SEO
- [ ] Organization Schema على Root Layout
- [ ] Product Schema على كل منتج
- [ ] BreadcrumbList على كل صفحة
- [ ] FAQ Schema (4+ أسئلة لكل قسم)
- [ ] alt text لكل صورة (عربي + إنجليزي)
- [ ] H1 فريد لكل صفحة
- [ ] Meta title + description فريدة
- [ ] Internal links بين الأقسام والمنتجات

### 2.3 Performance
- [ ] PageSpeed Insights: 90+ mobile
- [ ] LCP < 1.5s
- [ ] CLS < 0.05
- [ ] INP < 100ms
- [ ] Bundle size < 150KB first load JS

### 2.4 Business
- [ ] نظام الطلبات COD يعمل (test order)
- [ ] WhatsApp button يعمل
- [ ] GA4 tracking يعمل (S2S + client)
- [ ] Firestore rules محكمة
- [ ] Admin panel للمنتجات (أو Firestore UI)

---

## 3. Post-Launch Monitoring

### 3.1 أدوات المراقبة

| الأداة | الغرض | التردد |
|---|---|---|
| **Google Search Console** | Coverage, Performance, Indexing | يومي |
| **GA4** | Traffic, Events, Conversions | يومي |
| **PageSpeed Insights** | Core Web Vitals | أسبوعي |
| **Rich Results Test** | Schema validation | عند كل تغيير |
| **Ahrefs/Semrush** | Rankings, Backlinks | أسبوعي |
| **Uptime Robot** | Availability monitoring | دقيقة |

### 3.2 KPIs المستهدفة

| المقياس | الشهر 1 | الشهر 3 | الشهر 6 |
|---|---|---|---|
| **Organic Sessions** | 500 | 3,000 | 15,000 |
| **Indexed Pages** | 80 | 180 | 300+ |
| **Avg Position** | 30 | 15 | 5 |
| **CTR** | 1% | 3% | 7% |
| **COD Orders** | 10 | 50 | 200 |
| **Bounce Rate** | 60% | 45% | 35% |
| **Dwell Time** | 1:30 | 2:30 | 3:30 |

---

## 4. Google Indexing API Integration

```typescript
// إطلاق فهرسة فورية عند إضافة/تحديث منتج
// src/actions/google-sync.ts

export async function pushToGoogleCore(url: string, type: 'URL_UPDATED' | 'URL_DELETED') {
  // 1. Authenticate with Service Account
  // 2. POST to https://indexing.googleapis.com/v3/urlNotifications:publish
  // 3. Log result
  // → New product appears in Google within 60 seconds!
}

// Called from admin panel when product is added/updated
```

---

## 5. Fibonacci Stealth Unlocking (City Release)

```typescript
// src/lib/constants.ts
export const CITY_TIERS: Record<number, string[]> = {
  0:  ['riyadh', 'jeddah', 'dammam'],     // Day 0 — الإطلاق
  7:  ['makkah', 'madinah', 'khobar'],     // Week 1
  14: ['tabuk', 'abha', 'taif'],           // Week 2
  30: ['buraidah', 'hail', 'najran',       // Month 1
       'jazan', 'yanbu', 'khamis-mushait'],
};

// Middleware checks daysSinceLaunch before serving city pages
// Before unlock: 503 with Retry-After header
// After unlock: normal 200 response
```

---

## 6. Content Calendar

### Month 1 (الشهر الأول)
| الأسبوع | المهمة |
|---|---|
| 1 | إطلاق 5 صفحات ثابتة + Organization Schema |
| 2 | إطلاق 6 أقسام + 20 منتج |
| 3 | إطلاق 3 مدن + أول مقالين |
| 4 | تحسين بناءً على GSC data + 10 منتجات إضافية |

### Month 2 (الشهر الثاني)
| الأسبوع | المهمة |
|---|---|
| 5 | إطلاق 3 مدن إضافية |
| 6 | 3 مقالات (دليل شراء + مقارنة + أسعار) |
| 7 | 15 منتج جديد + تحسين الصفحات الضعيفة |
| 8 | Entity Stacking (Google Sites, Wikidata, GitHub) |

### Month 3+ (الشهر الثالث فصاعداً)
- مقال واحد أسبوعياً
- 5-10 منتجات جديدة أسبوعياً
- فتح مدينة جديدة كل أسبوعين
- مراجعة Rankings + تحسين المحتوى

---

## 7. Emergency Protocols

### 7.1 إذا انخفض الترتيب فجأة
1. تحقق من GSC Manual Actions
2. تحقق من Indexing Coverage errors
3. راجع Core Web Vitals (هل تدهورت؟)
4. تحقق من التحديثات الأساسية لجوجل (Google Core Update)
5. لا تُجري تغييرات جذرية — انتظر 2 أسبوع

### 7.2 إذا تم نسخ المحتوى
1. تفعيل DMCA takedown فوراً
2. التأكد من Honeypot الفعّال
3. إرسال ملف Disavow إذا لزم الأمر

### 7.3 إذا فشلت Firestore
1. ISR cache يحمي الموقع (24h)
2. Static fallback pages للأقسام الرئيسية
3. Error boundary يعرض cached version

---

## 8. Growth Multipliers

### 8.1 TikTok SEO (الموجة القادمة)
- فيديوهات 15-30 ثانية: unboxing + test drive
- #سكوتر_كهربائي #سكوتر_درفت #نشتري
- رابط في Bio → nshtare.com

### 8.2 YouTube Shorts
- مقارنات سريعة بين المنتجات
- "أرخص vs أغلى سكوتر"
- Embedded في صفحات المنتجات

### 8.3 WhatsApp Marketing
- قناة واتساب لعروض الأسبوع
- Auto-reply bot لاستفسارات المنتجات
- Direct order via WhatsApp

### 8.4 Referral Program
- "شارك وخذ خصم 50 ريال على طلبك القادم"
- رابط مخصص لكل عميل
- Tracked via UTM parameters
