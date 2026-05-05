# 🔍 Plan 03 — السيو البرمجي واستراتيجية المحتوى
# Programmatic SEO & Content Strategy

---

## 1. Keyword Matrix (161 كلمة مستهدفة)

### 1.1 High-Intent Commercial (الأولوية القصوى)

| الكلمة | Intent | الصفحة المستهدفة | Volume Est. |
|---|---|---|---|
| سكوتر كهربائي | Commercial | /electric-scooter/ | عالي جداً |
| سكوتر كهربائي للكبار | Commercial | /electric-scooter/adults/ | عالي |
| سكوتر كهربائي للاطفال | Commercial | /electric-scooter/kids/ | عالي |
| سكوتر درفت | Commercial | /drift-scooter/ | عالي |
| سكوتر اطفال | Commercial | /kids-scooter/ | عالي |
| سكوتر شاومي | Brand + Commercial | /electric-scooter/xiaomi/ | متوسط |
| سكوتر ذكي | Commercial | /smart-scooter/ | متوسط |
| سعر سكوتر كهربائي | Transactional | /electric-scooter/ (price table) | عالي |
| سكوتر كهربائي للبيع | Transactional | /electric-scooter/ | متوسط |

### 1.2 Geo-Modified (pSEO)

| Pattern | مثال | الصفحة |
|---|---|---|
| {خدمة} + {مدينة} | سكوتر كهربائي الرياض | /electric-scooter/riyadh/ |
| electric scooter {city} | electric scooter riyadh | /en/electric-scooter/riyadh/ |
| سكوتر + {مدينة} | سكوتر جدة | /electric-scooter/jeddah/ |

### 1.3 Long-tail / Informational

| الكلمة | Intent | الصفحة |
|---|---|---|
| صيانة سكوتر كهربائي | Info | /blog/electric-scooter-maintenance/ |
| بطارية سكوتر درفت 36 فولت | Commercial | /drift-scooter/36v/ |
| سكوتر درفت 48 فولت | Commercial | /drift-scooter/48v/ |
| قطع غيار سكوتر كهربائي | Commercial | /spare-parts/ |
| شاحن سكوتر | Commercial | /scooter-accessories/chargers/ |
| كم سعر السكوتر | Info/Trans | /blog/electric-scooter-prices-saudi/ |

---

## 2. pSEO Template Engine

### 2.1 Category × City = Unique Page

كل تقاطع (قسم × مدينة) ينتج صفحة فريدة بمحتوى مخصص:

```
/electric-scooter/riyadh/   → محتوى فريد عن السكوتر الكهربائي في الرياض
/drift-scooter/jeddah/      → محتوى فريد عن سكوتر درفت في جدة
/kids-scooter/dammam/        → محتوى فريد عن سكوتر أطفال في الدمام
```

**إجمالي الصفحات المولدة**:
- 6 أقسام رئيسية × 6 مدن = 36 صفحة pSEO (المرحلة 1)
- 6 أقسام × 11 مدينة = 66 صفحة (المرحلة 2)

### 2.2 Template Structure لصفحة (قسم + مدينة)

```typescript
// src/app/(ar)/[category]/[city]/page.tsx

export default async function CategoryCityPage({ params }) {
  const { category, city } = params;
  const categoryData = getCategoryData(category);  // Static data
  const cityData = getCityData(city);               // Static data
  const products = await getProductsByCategory(category);
  
  return (
    <main>
      {/* 1. Hero Section — يُرسل فوراً (TTFB = 0) */}
      <h1>أفضل {categoryData.name_ar} في {cityData.name_ar} | نشتري 2026</h1>
      
      {/* 2. DirectAnswer Box — Featured Snippet Bait */}
      <DirectAnswerBox category={categoryData} city={cityData} />
      
      {/* 3. AI Bait Stats — Dataset Schema */}
      <AiBaitStats cityAr={cityData.name_ar} serviceAr={categoryData.name_ar} />
      
      {/* 4. Products Grid — Suspense Streaming */}
      <Suspense fallback={<SkeletonLoader count={8} />}>
        <ProductGrid products={products} />
      </Suspense>
      
      {/* 5. City-Specific Content */}
      <CityContent city={cityData} category={categoryData} />
      
      {/* 6. Price Comparison Table */}
      <PriceTable products={products} city={cityData} />
      
      {/* 7. FAQ Section — فريدة لكل تقاطع */}
      <DynamicFAQ category={categoryData} city={cityData} />
      
      {/* 8. Temporal Mutator — محتوى موسمي */}
      <TemporalMutator serviceAr={categoryData.name_ar} />
      
      {/* 9. Robin Hood Links — ضخ Link Juice للمدن الضعيفة */}
      <RobinHoodLinks currentCategory={category} />
    </main>
  );
}
```

### 2.3 Anti-SpamBrain Diversity (تنويع القوالب)

```typescript
// src/lib/seo-utils.ts
// قوالب عناوين مختلفة تُختار بناءً على hash الكلمة المفتاحية

const TITLE_TEMPLATES = [
  'أفضل {service} في {city} | أسعار {month} {year} 🥇',
  '{service} في {city}: مقارنة الأسعار والمواصفات ({year})',
  'دليل {service} في {city} — أسعار تبدأ من {minPrice} ريال',
  'أين تشتري {service} في {city}؟ | المعتمد من نشتري',
];

const DESC_TEMPLATES = [
  'قارن بين أفضل {service} في {city}. أسعار محدثة لشهر {month} {year}. توصيل لباب بيتك + دفع عند الاستلام.',
  'اكتشف {count}+ {service} في {city} بأسعار تبدأ من {minPrice} ريال. ضمان + شحن مجاني + دفع عند الاستلام.',
];

export function generateSEOTitle(service: string, city: string, seed: number): string {
  const template = TITLE_TEMPLATES[seed % TITLE_TEMPLATES.length];
  const month = new Date().toLocaleString('ar-SA', { month: 'long' });
  const year = new Date().getFullYear();
  return template
    .replace('{service}', service)
    .replace('{city}', city)
    .replace('{month}', month)
    .replace('{year}', String(year));
}
```

---

## 3. Content Templates

### 3.1 Category Page (القسم الرئيسي)

**المحتوى المطلوب:**
- H1 ديناميكي مع الشهر والسنة
- DirectAnswer paragraph (50-80 كلمة — Featured Snippet bait)
- جدول مقارنة المنتجات (أسعار، مواصفات)
- دليل شراء مصغر (300-500 كلمة)
- FAQ Schema (4-6 أسئلة فريدة)
- مراجعات العملاء

### 3.2 Product Page

**المحتوى المطلوب:**
- H1: اسم المنتج + الكلمة الرئيسية
- معرض صور (3-8 صور) مع alt text عربي وإنجليزي
- جدول المواصفات التقنية (structured)
- السعر + شارة "الدفع عند الاستلام" + Trust Badges
- FAQ خاص بالمنتج (3-4 أسئلة)
- منتجات مشابهة (Cross-sell — نفس القسم)
- مقالات ذات صلة (Internal linking)

### 3.3 City Page (صفحة المدينة)

**محتوى فريد لكل مدينة:**
- معلومات التوصيل في المدينة (أيام، تكلفة)
- أماكن مقترحة لاستخدام السكوتر (ممشى، كورنيش، حديقة)
- نصائح محلية (الطقس: حرارة الصيف ← بطارية)
- المنتجات الأنسب للمدينة (تضاريس، مناخ)

### 3.4 Blog Article

**المحتوى المطلوب:**
- H1 informational (لا يتعارض مع صفحات الأقسام)
- محتوى 1000-2000 كلمة (عميق، غير مكرر)
- صور أصلية أو مرخصة
- CTA يوجه لصفحة القسم (وليس المنتج) — **درع الكانيباليزيشن**
- Author Schema (الكاتب + صورة)

---

## 4. Sitemap Strategy

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export const revalidate = 86400; // 24h cache

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nshtare.com';
  
  // Static pages
  const staticPages = [
    '', '/about/', '/contact/', '/shipping/', '/return-policy/',
    '/scooter-repair/', '/spare-parts/', '/compare/', '/blog/',
  ];

  // Categories  
  const categories = [
    'electric-scooter', 'drift-scooter', 'kids-scooter',
    'smart-scooter', 'scooter-accessories', 'spare-parts',
  ];

  // Sub-categories
  const subcategories = [
    'electric-scooter/adults', 'electric-scooter/kids',
    'electric-scooter/with-seat', 'electric-scooter/xiaomi',
    'drift-scooter/36v', 'drift-scooter/48v',
    'kids-scooter/girls', 'kids-scooter/spider-man',
    // ... etc
  ];

  // Cities (unlocked based on Fibonacci schedule)
  const cities = ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah', 'khobar'];

  // Products from Firestore
  const products = await getSitemapProducts(); // .select('slug', 'updatedAt')

  const urls: MetadataRoute.Sitemap = [];

  // Static pages (AR + EN)
  for (const page of staticPages) {
    urls.push(
      { url: `${baseUrl}${page}`, lastModified: new Date(), priority: page === '' ? 1.0 : 0.6 },
      { url: `${baseUrl}/en${page}`, lastModified: new Date(), priority: page === '' ? 0.9 : 0.5 },
    );
  }

  // Categories (AR + EN)
  for (const cat of categories) {
    urls.push(
      { url: `${baseUrl}/${cat}/`, priority: 0.9, changeFrequency: 'weekly' },
      { url: `${baseUrl}/en/${cat}/`, priority: 0.8, changeFrequency: 'weekly' },
    );
  }

  // Category × City (pSEO pages)
  for (const cat of categories) {
    for (const city of cities) {
      urls.push(
        { url: `${baseUrl}/${cat}/${city}/`, priority: 0.7, changeFrequency: 'monthly' },
        { url: `${baseUrl}/en/${cat}/${city}/`, priority: 0.6, changeFrequency: 'monthly' },
      );
    }
  }

  // Products
  for (const product of products) {
    urls.push(
      { url: `${baseUrl}/product/${product.slug}/`, lastModified: product.updatedAt, priority: 0.8 },
      { url: `${baseUrl}/en/product/${product.slug}/`, lastModified: product.updatedAt, priority: 0.7 },
    );
  }

  return urls;
}
```

---

## 5. Robots.txt

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/order/', '/order/confirmation/'],
      },
      // AI Bots — allowed for AI Overviews presence
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
    ],
    sitemap: 'https://nshtare.com/sitemap.xml',
  };
}
```

---

## 6. Internal Linking Architecture

### 6.1 Link Flow Rules

```
Homepage (Authority Hub)
  ↓ dofollow
Category Pages (Silo Heads)
  ↓ dofollow
Sub-Category Pages
  ↓ dofollow
Product Pages (Terminal Nodes)

Blog Articles → CTA to Category Page (one-way only)
Category Page → Related Categories (cross-link carefully)
City Pages → Same category in other cities (Robin Hood Links)
```

### 6.2 Anti-Cannibalization Rules

| نوع الصفحة | تستهدف | لا تستهدف أبداً |
|---|---|---|
| /electric-scooter/ | سكوتر كهربائي, electric scooter | أسعار سكوتر (blog) |
| /electric-scooter/riyadh/ | سكوتر كهربائي الرياض | سكوتر كهربائي (parent) |
| /blog/prices/ | اسعار سكوتر كهربائي السعودية | سكوتر كهربائي (category) |
| /product/xiaomi/ | سكوتر شاومي m365 | سكوتر شاومي (subcategory) |
