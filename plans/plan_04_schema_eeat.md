# 🧬 Plan 04 — JSON-LD Architecture و E-E-A-T
# Schema & Trust Signals Blueprint

---

## 1. Layered Schema Architecture (7 طبقات)

### Layer 1: Organization (Root Entity)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nshtare.com/#organization",
  "name": "نشتري | Nshtare",
  "alternateName": "متجر نشتري للسكوترات",
  "url": "https://nshtare.com",
  "logo": "https://nshtare.com/logo.png",
  "description": "المتجر الأول في السعودية المتخصص في بيع السكوترات الكهربائية والدرفت وسكوترات الأطفال. توصيل لجميع المدن + دفع عند الاستلام.",
  "sameAs": [
    "https://twitter.com/nshtare",
    "https://www.instagram.com/nshtare",
    "https://www.tiktok.com/@nshtare"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966-XX-XXX-XXXX",
    "contactType": "customer service",
    "areaServed": "SA",
    "availableLanguage": ["Arabic", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA",
    "addressLocality": "الرياض"
  }
}
```

### Layer 2: WebSite + SearchAction

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nshtare.com/#website",
  "name": "نشتري",
  "url": "https://nshtare.com",
  "publisher": { "@id": "https://nshtare.com/#organization" },
  "inLanguage": ["ar-SA", "en"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nshtare.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Layer 3: Product Schema

```typescript
// src/components/seo/ProductJsonLd.tsx
export function ProductJsonLd({ product, locale }: { product: Product, locale: 'ar' | 'en' }) {
  const name = locale === 'ar' ? product.name_ar : product.name_en;
  const desc = locale === 'ar' ? product.description_ar : product.description_en;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://nshtare.com/product/${product.slug}/#product`,
    "name": name,
    "description": desc,
    "image": product.images,
    "sku": product.sku,
    "brand": { "@type": "Brand", "name": product.brand || "نشتري" },
    "offers": {
      "@type": "Offer",
      "url": `https://nshtare.com/product/${product.slug}/`,
      "priceCurrency": "SAR",
      "price": product.price,
      ...(product.originalPrice && { "priceValidUntil": new Date(Date.now() + 30*86400000).toISOString().split('T')[0] }),
      "availability": product.stock > 0 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": { "@id": "https://nshtare.com/#organization" },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "SA" },
        "deliveryTime": { "@type": "ShippingDeliveryTime", "businessDays": { "minValue": 2, "maxValue": 5 } }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail"
      }
    },
    ...(product.rating > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": product.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      }
    })
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

### Layer 4: CollectionPage (Category)

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://nshtare.com/electric-scooter/#collection",
  "name": "أفضل سكوتر كهربائي في السعودية",
  "url": "https://nshtare.com/electric-scooter/",
  "isPartOf": { "@id": "https://nshtare.com/#website" },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 30,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "url": "https://nshtare.com/product/xiaomi-m365/" },
      { "@type": "ListItem", "position": 2, "url": "https://nshtare.com/product/ninebot-max/" }
    ]
  }
}
```

### Layer 5: FAQPage

```typescript
// src/components/seo/FAQJsonLd.tsx
export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

### Layer 6: BreadcrumbList

```typescript
// src/components/seo/BreadcrumbJsonLd.tsx
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

### Layer 7: Article (Blog)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "دليل شراء سكوتر كهربائي في السعودية 2026",
  "author": { "@type": "Organization", "@id": "https://nshtare.com/#organization" },
  "publisher": { "@id": "https://nshtare.com/#organization" },
  "datePublished": "2026-05-01T00:00:00Z",
  "dateModified": "2026-05-05T00:00:00Z",
  "image": "https://nshtare.com/images/blog/buying-guide.jpg",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".direct-answer"]
  }
}
```

---

## 2. Unified @graph Architecture

```typescript
// src/components/seo/UnifiedSchema.tsx
// يجمع كل الطبقات في @graph واحد لتقليل حجم HTML وتحسين فهم جوجل

export function UnifiedSchema({ organization, website, page, breadcrumbs, faqs }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,    // Layer 1
      website,         // Layer 2
      page,            // Layer 3/4 (Product or Collection)
      breadcrumbs,     // Layer 6
      ...(faqs ? [faqs] : []),  // Layer 5
    ].filter(Boolean)
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
```

---

## 3. E-E-A-T Trust Signals

### 3.1 Experience
- صور حقيقية للمنتجات (لا stock photos)
- فيديوهات unboxing ومراجعة
- مراجعات عملاء بالاسم والمدينة

### 3.2 Expertise
- مواصفات تقنية دقيقة لكل منتج
- جداول مقارنة احترافية
- مدونة تثقيفية (صيانة، قوانين، نصائح)

### 3.3 Authoritativeness
- ربط السجل التجاري (CRN) في Schema + صفحة "من نحن"
- sameAs للحسابات الاجتماعية الحقيقية
- Wikidata Entity للمتجر

### 3.4 Trustworthiness
- عنوان فيزيائي سعودي في Schema
- سياسة استبدال واضحة
- شارة "الدفع عند الاستلام" — Trust signal خاص بالسوق السعودي
- رقم واتساب مباشر للتواصل
- SSL + Security Headers

---

## 4. COD-Specific Trust Badges

```typescript
// شارات الثقة الخاصة بالدفع عند الاستلام
const TRUST_BADGES = [
  { icon: '💳', text_ar: 'دفع عند الاستلام', text_en: 'Cash on Delivery' },
  { icon: '🚚', text_ar: 'شحن لجميع المدن', text_en: 'Nationwide Delivery' },
  { icon: '↩️', text_ar: 'استبدال خلال 7 أيام', text_en: '7-Day Return' },
  { icon: '🛡️', text_ar: 'ضمان المنتج', text_en: 'Product Warranty' },
  { icon: '📱', text_ar: 'دعم واتساب مباشر', text_en: 'WhatsApp Support' },
];
```
