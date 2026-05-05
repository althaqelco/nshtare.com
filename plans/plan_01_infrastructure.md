# 🏗️ Plan 01 — البنية التحتية الكاملة
# Infrastructure & Architecture Blueprint

> **المشروع**: nshtare.com — متجر سكوترات احترافي للسعودية
> **نظام الدفع**: الدفع عند الاستلام (COD) حصرياً
> **اللغات**: عربية (أساسية `/`) + إنجليزية (`/en/`) — روابط إنجليزية موحدة

---

## 1. Technology Stack

| المكون | التقنية | السبب |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR/ISR, Metadata API, Server Actions, Edge Runtime |
| Language | **TypeScript** | Type safety, better DX, error prevention |
| Hosting | **Firebase App Hosting** | Edge Functions, CDN عالمي, تكامل مع Firestore |
| Database | **Firestore** | Real-time, ISR revalidation, serverless |
| CDN/WAF | **Cloudflare** (Free) | Edge Caching, Bot Protection, SSL, DDoS |
| Analytics | **GA4 + Server-Side (S2S)** | تجاوز AdBlockers, بيانات نقية 100% |
| Images | **Next/Image + WebP/AVIF** | Automatic optimization, lazy loading |
| Styling | **CSS Modules + CSS Variables** | Zero runtime, maximum performance |
| Fonts | **Google Fonts (Tajawal + Inter)** | عربي احترافي + إنجليزي نظيف |
| Icons | **Lucide React** | Tree-shakeable, lightweight |
| Forms | **React Hook Form + Zod** | Validation, COD order form |
| State | **React Context + Server Components** | Minimal client JS |

---

## 2. Project Directory Structure

```
nshtare.com/
├── src/
│   ├── app/
│   │   ├── (ar)/                          # Route Group — العربية
│   │   │   ├── layout.tsx                 # dir="rtl", lang="ar-SA"
│   │   │   ├── page.tsx                   # الصفحة الرئيسية
│   │   │   ├── electric-scooter/
│   │   │   │   ├── page.tsx               # قسم السكوتر الكهربائي
│   │   │   │   ├── adults/page.tsx
│   │   │   │   ├── kids/page.tsx
│   │   │   │   ├── with-seat/page.tsx
│   │   │   │   ├── three-wheel/page.tsx
│   │   │   │   ├── fast/page.tsx
│   │   │   │   ├── xiaomi/page.tsx
│   │   │   │   └── [city]/page.tsx        # pSEO: /electric-scooter/riyadh/
│   │   │   ├── drift-scooter/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── 36v/page.tsx
│   │   │   │   ├── 48v/page.tsx
│   │   │   │   ├── electric/page.tsx
│   │   │   │   ├── 360/page.tsx
│   │   │   │   ├── budget/page.tsx
│   │   │   │   └── [city]/page.tsx
│   │   │   ├── kids-scooter/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── three-wheel/page.tsx
│   │   │   │   ├── girls/page.tsx
│   │   │   │   ├── spider-man/page.tsx
│   │   │   │   ├── budget/page.tsx
│   │   │   │   └── [city]/page.tsx
│   │   │   ├── smart-scooter/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [city]/page.tsx
│   │   │   ├── scooter-accessories/page.tsx
│   │   │   ├── spare-parts/page.tsx
│   │   │   ├── scooter-repair/page.tsx
│   │   │   ├── compare/page.tsx
│   │   │   ├── product/[slug]/page.tsx    # صفحة المنتج الفردي
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── shipping/page.tsx
│   │   │   ├── return-policy/page.tsx
│   │   │   ├── order/page.tsx             # صفحة إتمام الطلب (COD)
│   │   │   └── order/confirmation/page.tsx # تأكيد الطلب
│   │   │
│   │   ├── en/                            # الإنجليزية — نفس البنية
│   │   │   ├── layout.tsx                 # dir="ltr", lang="en"
│   │   │   ├── page.tsx
│   │   │   ├── electric-scooter/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [city]/page.tsx
│   │   │   ├── product/[slug]/page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── order/page.tsx
│   │   │   └── ...
│   │   │
│   │   ├── api/
│   │   │   ├── revalidate/route.ts        # On-demand ISR revalidation
│   │   │   ├── order/route.ts             # COD Order API
│   │   │   ├── ai-feed/
│   │   │   │   └── [city]/route.ts        # AI Bot RAG Endpoint
│   │   │   └── system-core/
│   │   │       └── abyss/route.ts         # Honeypot trap
│   │   │
│   │   ├── layout.tsx                     # Root Layout
│   │   ├── not-found.tsx                  # 404 page
│   │   ├── sitemap.ts                     # Dynamic sitemap
│   │   └── robots.ts                      # Dynamic robots.txt
│   │
│   ├── components/
│   │   ├── ui/                            # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   ├── CODOrderForm.tsx           # نموذج الطلب عند الاستلام
│   │   │   └── SkeletonLoader.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── seo/
│   │   │   ├── JsonLd.tsx                 # Unified @graph Schema
│   │   │   ├── ProductJsonLd.tsx
│   │   │   ├── BreadcrumbJsonLd.tsx
│   │   │   ├── FAQJsonLd.tsx
│   │   │   └── HreflangTags.tsx
│   │   ├── product/
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductSpecs.tsx
│   │   │   ├── ProductReviews.tsx
│   │   │   └── RelatedProducts.tsx
│   │   ├── behavior/
│   │   │   ├── CognitiveEstimator.tsx     # حاسبة التكلفة
│   │   │   └── LiveViewerCount.tsx        # Social proof
│   │   ├── security/
│   │   │   └── PhantomTrap.tsx            # Honeypot component
│   │   └── performance/
│   │       └── SpeculativeRouter.tsx      # Chrome Speculation Rules
│   │
│   ├── lib/
│   │   ├── firebase.ts                    # Firebase client SDK init
│   │   ├── firebase-admin.ts              # Firebase Admin SDK (server)
│   │   ├── firestore.ts                   # Firestore queries
│   │   ├── hreflang.ts                    # Hreflang generator
│   │   ├── i18n.ts                        # Translation system
│   │   ├── seo-utils.ts                   # SEO helpers
│   │   └── constants.ts                   # Cities, categories, config
│   │
│   ├── actions/
│   │   ├── telemetry.ts                   # Server-side GA4 tracking (S2S)
│   │   ├── order.ts                       # COD order processing
│   │   └── google-sync.ts                 # Google Indexing API
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── category.ts
│   │   ├── order.ts                       # COD order types
│   │   └── city.ts
│   │
│   ├── data/
│   │   ├── categories.ts                  # Category definitions
│   │   ├── cities.ts                      # Saudi cities data + GPS
│   │   └── translations/
│   │       ├── ar.ts
│   │       └── en.ts
│   │
│   └── styles/
│       ├── globals.css                    # Design system + CSS variables
│       └── rtl.css                        # RTL-specific overrides
│
├── public/
│   ├── favicon.ico
│   ├── apple-icon.png
│   ├── icon-512.png
│   ├── logo.svg
│   ├── og-default.jpg                     # Default OG image
│   └── images/
│       └── products/                      # Product images
│
├── .env.local                             # Secrets (NEVER commit)
├── .env.example                           # Template for team
├── next.config.ts
├── tsconfig.json
├── package.json
└── firebase.json                          # Firebase hosting config
```

---

## 3. Environment Variables (.env.local)

```bash
# Firebase Client
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDZ3QCymX1uYIQ-EUq_4LiGkqngwq3rl_M
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nshtare-f2f9b.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=nshtare-f2f9b
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nshtare-f2f9b.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=220147597108
NEXT_PUBLIC_FIREBASE_APP_ID=1:220147597108:web:62982bac327db495ad6f61
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-E9HRQX0WYD

# Firebase Admin (Server-side ONLY — never prefix with NEXT_PUBLIC_)
FIREBASE_SERVICE_ACCOUNT_KEY=<base64 encoded service account JSON>

# GA4 Server-Side Tracking
GA_MEASUREMENT_ID=G-E9HRQX0WYD
GA_API_SECRET=<from GA4 Data Streams settings>

# Security
REVALIDATION_SECRET=<random 64-char string>

# Google Indexing API
GOOGLE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@nshtare-f2f9b.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=<from service account>

# Site
NEXT_PUBLIC_SITE_URL=https://nshtare.com
NEXT_PUBLIC_WHATSAPP_NUMBER=966XXXXXXXXX
```

> ⚠️ **أمان حرج**: لا تضع المفاتيح السرية في firebase.md أو أي ملف يُرفع لـ Git. استخدم .env.local فقط.

---

## 4. Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // Trailing slash enforcement
      { source: '/:path((?!.*\\.).*[^/])', destination: '/:path/', permanent: true },
    ];
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
```

---

## 5. Middleware Architecture

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // 1. 🛡️ Honeypot Curse Check — Zero-compute bot blocking
  if (request.cookies.has('phantom_curse')) {
    return new NextResponse(null, {
      status: 403,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  // 2. 🛡️ API Protection — Block direct API access from scrapers
  if (url.startsWith('/api/') && !url.includes('/system-core/abyss')) {
    const referer = request.headers.get('referer') || '';
    if (!referer.includes('nshtare.com') && process.env.NODE_ENV === 'production') {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  // 3. 🌍 Edge Geo-Routing (optional — for generic service pages)
  // Reads x-vercel-ip-city or cf-ipcity to personalize content

  // 4. Continue to Next.js
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
```

---

## 6. Performance Targets

| المقياس | الهدف | السبب الخوارزمي |
|---|---|---|
| TTFB | < 200ms | تجنب Lethal Friction (Navboost penalty) |
| LCP | < 1.5s | Above-the-fold rendering |
| INP | < 100ms | تجنب Rage Clicks penalty |
| CLS | < 0.05 | Viewport Toxicity prevention |
| Bundle Size | < 150KB (First Load JS) | Battery Drain Index optimization |
| Image Format | WebP/AVIF | 50-80% size reduction |

### Performance Tactics:
- **React Server Components** بالكامل (صفر JS للمحتوى الثابت)
- **Suspense Streaming** — إرسال HTML Head فوراً، البيانات تتدفق لاحقاً
- **Speculation Rules API** — تحميل مسبق للصفحات عند Hover
- **Font Display: swap** — عدم حجب الرسم بسبب الخطوط
- **Dynamic Imports** — تحميل الحاسبة والمكونات التفاعلية فقط عند الحاجة

---

## 7. COD (الدفع عند الاستلام) Architecture

### 7.1 Order Flow

```
المستخدم يتصفح → يضيف للسلة → صفحة الطلب /order/
                                    ↓
                    [نموذج COD: الاسم، الهاتف، المدينة، العنوان]
                                    ↓
                    Server Action: validateOrder() → Firestore
                                    ↓
                    /order/confirmation/ → WhatsApp notification
                                    ↓
                    S2S Telemetry → GA4 (generate_lead event)
```

### 7.2 Order Data Model

```typescript
// src/types/order.ts
export interface CODOrder {
  id: string;
  orderNumber: string;          // NSHT-YYYYMMDD-XXXX
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  
  // Customer
  customerName: string;
  phone: string;                // +966XXXXXXXXX
  city: string;                 // riyadh, jeddah, etc.
  district: string;
  address: string;
  
  // Items
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  
  // Totals
  subtotal: number;
  shippingCost: number;
  total: number;
  currency: 'SAR';
  paymentMethod: 'cod';
  
  // Timestamps
  createdAt: Timestamp;
  updatedAt: Timestamp;
  
  // Tracking
  source: string;               // utm_source
  locale: 'ar' | 'en';
}
```

### 7.3 Firestore Collections

```
firestore/
├── products/                   # المنتجات
│   └── {productId}/
│       ├── name_ar, name_en
│       ├── description_ar, description_en
│       ├── price, originalPrice
│       ├── category, subcategory
│       ├── images[]
│       ├── specs{}
│       ├── slug
│       ├── is_active
│       ├── stock
│       └── createdAt, updatedAt
│
├── categories/                 # الأقسام
│   └── {categorySlug}/
│       ├── name_ar, name_en
│       ├── slug
│       ├── parent (null for main)
│       ├── description_ar, description_en
│       ├── image
│       └── order
│
├── orders/                     # الطلبات (COD)
│   └── {orderId}/
│       └── ... (as per CODOrder type)
│
├── cities/                     # المدن
│   └── {citySlug}/
│       ├── name_ar, name_en
│       ├── slug
│       ├── tier (0, 7, 14, 30)
│       ├── lat, lng
│       ├── shippingCost
│       └── deliveryDays
│
└── blog/                       # المقالات
    └── {articleSlug}/
        ├── title_ar, title_en
        ├── content_ar, content_en
        ├── slug
        ├── category
        ├── publishedAt, updatedAt
        └── is_published
```

---

## 8. Hreflang System

```typescript
// src/lib/hreflang.ts
export function generateHreflang(path: string) {
  const baseUrl = 'https://nshtare.com';
  // path must start with / e.g. '/electric-scooter/'
  return [
    { rel: 'alternate', hreflang: 'ar-SA', href: `${baseUrl}${path}` },
    { rel: 'alternate', hreflang: 'en',    href: `${baseUrl}/en${path}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${baseUrl}${path}` },
  ];
}

// Usage in generateMetadata():
export async function generateMetadata(): Promise<Metadata> {
  const hreflang = generateHreflang('/electric-scooter/');
  return {
    alternates: {
      canonical: 'https://nshtare.com/electric-scooter/',
      languages: {
        'ar-SA': 'https://nshtare.com/electric-scooter/',
        'en': 'https://nshtare.com/en/electric-scooter/',
      },
    },
  };
}
```

---

## 9. i18n Strategy (بدون مكتبة)

```typescript
// src/lib/i18n.ts
export type Locale = 'ar' | 'en';

const translations = {
  ar: () => import('@/data/translations/ar'),
  en: () => import('@/data/translations/en'),
};

export async function getTranslations(locale: Locale) {
  const mod = await translations[locale]();
  return mod.default;
}

// In layout.tsx for (ar) group:
// const t = await getTranslations('ar');
// <html lang="ar-SA" dir="rtl">
```

---

## 10. Deployment Pipeline

```
Development → Staging → Production

1. npm run dev              → Local development (localhost:3000)
2. npm run build            → Production build + type checking
3. firebase deploy          → Deploy to Firebase App Hosting
4. Cloudflare DNS           → Proxy through Cloudflare CDN
```

### Firebase App Hosting Config:
```json
// firebase.json
{
  "hosting": {
    "source": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "frameworksBackend": {
      "region": "me-central1"  // Middle East region for Saudi latency
    }
  }
}
```
