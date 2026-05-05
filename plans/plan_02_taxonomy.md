# 🗂️ Plan 02 — محرك الأقسام والمنتجات
# Product Taxonomy & Category Engine

> **نظام الدفع**: الدفع عند الاستلام (COD)
> **العملة**: ريال سعودي (SAR)
> **الروابط**: إنجليزية موحدة في النسختين

---

## 1. Category Architecture

### 1.1 Main Categories (6 أقسام)

| Slug | الاسم (AR) | English Name | Icon | المنتجات المتوقعة |
|---|---|---|---|---|
| `electric-scooter` | سكوتر كهربائي | Electric Scooter | ⚡ | 30-50 |
| `drift-scooter` | سكوتر درفت | Drift Scooter | 🏎️ | 15-25 |
| `kids-scooter` | سكوتر أطفال | Kids Scooter | 👶 | 20-30 |
| `smart-scooter` | سكوتر ذكي | Smart Scooter | 🧠 | 10-15 |
| `scooter-accessories` | إكسسوارات سكوتر | Accessories | 🔧 | 30-40 |
| `spare-parts` | قطع غيار | Spare Parts | ⚙️ | 20-30 |

### 1.2 Sub-Categories

```
electric-scooter/
├── adults           → سكوتر كهربائي للكبار
├── kids             → سكوتر كهربائي للأطفال
├── with-seat        → سكوتر بمقعد
├── three-wheel      → سكوتر ثلاث عجلات
├── fast             → سكوتر كهربائي سريع
└── xiaomi           → سكوتر شاومي

drift-scooter/
├── 36v              → درفت 36 فولت
├── 48v              → درفت 48 فولت (الوحش)
├── electric         → درفت كهربائي
├── 360              → درفت 360 درجة
└── budget           → درفت رخيص

kids-scooter/
├── three-wheel      → ثلاث عجلات للأطفال
├── girls            → سكوتر بنات
├── spider-man       → سكوتر سبايدر مان
└── budget           → سكوتر أطفال رخيص

scooter-accessories/
├── chargers         → شواحن
├── batteries        → بطاريات
├── bags             → شنط سكوتر
├── helmets          → خوذ حماية
└── lights           → إضاءة

spare-parts/
├── wheels           → إطارات وعجلات
├── brakes           → فرامل
├── controllers      → كنترولر
└── motors           → موتورات
```

---

## 2. Data Models (TypeScript)

### 2.1 Product Interface

```typescript
// src/types/product.ts
import { Timestamp } from 'firebase/firestore';

export interface Product {
  id: string;
  slug: string;                    // xiaomi-m365-pro
  sku: string;                     // NSHT-ES-001

  // Bilingual content
  name_ar: string;                 // سكوتر شاومي M365 برو
  name_en: string;                 // Xiaomi M365 Pro Electric Scooter
  description_ar: string;          // وصف عربي شامل (200+ كلمة)
  description_en: string;          // English description

  // Pricing (SAR)
  price: number;                   // السعر الحالي
  originalPrice?: number;          // السعر قبل الخصم
  currency: 'SAR';

  // Taxonomy
  category: string;                // electric-scooter
  subcategory?: string;            // adults
  brand?: string;                  // Xiaomi

  // Media
  images: string[];                // URLs (min 3, max 8)
  thumbnail: string;               // الصورة المصغرة
  video?: string;                  // رابط فيديو يوتيوب

  // Specifications
  specs: ProductSpecs;

  // SEO
  metaTitle_ar?: string;
  metaTitle_en?: string;
  metaDescription_ar?: string;
  metaDescription_en?: string;

  // Status
  is_active: boolean;
  is_featured: boolean;            // يظهر في الصفحة الرئيسية
  stock: number;                   // 0 = نفذ
  
  // Reviews
  rating: number;                  // 4.8
  reviewCount: number;             // 127

  // Timestamps
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ProductSpecs {
  maxSpeed?: string;               // 25 km/h
  range?: string;                  // 30 km
  batteryCapacity?: string;        // 7800mAh
  chargingTime?: string;           // 5 hours
  maxLoad?: string;                // 100 kg
  weight?: string;                 // 12.5 kg
  wheelSize?: string;              // 8.5 inch
  motorPower?: string;             // 300W
  waterResistance?: string;        // IP54
  ageRange?: string;               // 14+
  voltage?: string;                // 36V / 48V
  [key: string]: string | undefined;
}
```

### 2.2 Category Interface

```typescript
// src/types/category.ts
export interface Category {
  slug: string;                    // electric-scooter
  name_ar: string;                 // سكوتر كهربائي
  name_en: string;                 // Electric Scooter
  description_ar: string;
  description_en: string;
  parent: string | null;           // null = main category
  image: string;
  icon: string;                    // emoji or icon name
  order: number;                   // display order
  is_active: boolean;
  productCount: number;            // cached count

  // SEO
  metaTitle_ar: string;
  metaTitle_en: string;
  metaDescription_ar: string;
  metaDescription_en: string;

  // Keywords targeted
  keywords_ar: string[];
  keywords_en: string[];
}
```

---

## 3. Firestore Query Patterns

### 3.1 Product Queries

```typescript
// src/lib/firestore.ts
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// Get products by category
export async function getProductsByCategory(
  category: string, 
  subcategory?: string,
  limitCount = 20
) {
  let q = query(
    collection(db, 'products'),
    where('category', '==', category),
    where('is_active', '==', true),
    orderBy('is_featured', 'desc'),
    orderBy('rating', 'desc'),
    limit(limitCount)
  );

  if (subcategory) {
    q = query(q, where('subcategory', '==', subcategory));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
}

// Get single product by slug
export async function getProductBySlug(slug: string) {
  const q = query(
    collection(db, 'products'),
    where('slug', '==', slug),
    where('is_active', '==', true),
    limit(1)
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as Product;
}

// Get featured products (homepage)
export async function getFeaturedProducts(limitCount = 8) {
  const q = query(
    collection(db, 'products'),
    where('is_featured', '==', true),
    where('is_active', '==', true),
    orderBy('updatedAt', 'desc'),
    limit(limitCount)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
}

// Search products
export async function searchProducts(searchTerm: string) {
  // Firestore doesn't support full-text search natively
  // Use client-side filtering or Algolia/Typesense for production
  const q = query(
    collection(db, 'products'),
    where('is_active', '==', true),
    orderBy('name_ar'),
    limit(50)
  );
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
  
  return products.filter(p => 
    p.name_ar.includes(searchTerm) || 
    p.name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
```

### 3.2 Indexing (Firestore composite indexes)

```
# firestore.indexes.json
{
  "indexes": [
    {
      "collectionGroup": "products",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "category", "order": "ASCENDING" },
        { "fieldPath": "is_active", "order": "ASCENDING" },
        { "fieldPath": "is_featured", "order": "DESCENDING" },
        { "fieldPath": "rating", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "products",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "is_featured", "order": "ASCENDING" },
        { "fieldPath": "is_active", "order": "ASCENDING" },
        { "fieldPath": "updatedAt", "order": "DESCENDING" }
      ]
    }
  ]
}
```

---

## 4. Filter & Sort System

### 4.1 Filter Options per Category

| Filter | Type | Values |
|---|---|---|
| السعر | Range Slider | 100 - 10,000 SAR |
| العلامة التجارية | Multi-select | Xiaomi, Ninebot, Generic, etc. |
| السرعة القصوى | Range | 10 - 60 km/h |
| المدى | Range | 10 - 100 km |
| الفولت | Select | 24V, 36V, 48V |
| العمر المناسب | Select | أطفال 3-6, أطفال 6-12, كبار 14+ |
| التوفر | Toggle | متوفر فقط |
| التقييم | Stars | 4+ نجوم |

### 4.2 Sort Options

```typescript
type SortOption = 
  | 'featured'      // الأكثر تميزاً (default)
  | 'price-asc'     // الأقل سعراً
  | 'price-desc'    // الأعلى سعراً
  | 'rating'        // الأعلى تقييماً
  | 'newest'        // الأحدث
  | 'bestseller';   // الأكثر مبيعاً
```

---

## 5. Cart System (Client-Side)

```typescript
// src/lib/cart.ts
// Cart stored in localStorage — no auth required for COD

export interface CartItem {
  productId: string;
  slug: string;
  name_ar: string;
  name_en: string;
  price: number;
  quantity: number;
  image: string;
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem('nshtare_cart');
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existing = cart.find(i => i.productId === item.productId);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  localStorage.setItem('nshtare_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```

---

## 6. Navigation Structure

### 6.1 Main Menu (Arabic)

```
🛴 نشتري
├── سكوتر كهربائي ▾
│   ├── للكبار
│   ├── للأطفال
│   ├── بمقعد
│   ├── ثلاث عجلات
│   ├── سريع
│   └── شاومي
├── سكوتر درفت ▾
│   ├── 36 فولت
│   ├── 48 فولت (الوحش)
│   ├── درفت 360
│   └── رخيص
├── سكوتر أطفال ▾
│   ├── بنات
│   ├── سبايدر مان
│   └── ثلاث عجلات
├── سكوتر ذكي
├── إكسسوارات
├── قطع غيار
├── المدونة
└── 🛒 السلة (X)
```

### 6.2 Breadcrumb Pattern

```
الرئيسية > سكوتر كهربائي > للكبار > Xiaomi M365 Pro
Home > Electric Scooter > Adults > Xiaomi M365 Pro
```

URL: `/electric-scooter/adults/` + product: `/product/xiaomi-m365-pro/`
