// Taxonomy and pSEO Data

export const categories = [
  { slug: "electric-scooter", nameAr: "سكوتر كهربائي", nameEn: "Electric Scooter", icon: "⚡" },
  { slug: "drift-scooter", nameAr: "سكوتر درفت", nameEn: "Drift Scooter", icon: "🏎️" },
  { slug: "kids-scooter", nameAr: "سكوتر أطفال", nameEn: "Kids Scooter", icon: "👶" },
  { slug: "smart-scooter", nameAr: "سكوتر ذكي", nameEn: "Smart Scooter", icon: "🧠" },
  { slug: "scooter-accessories", nameAr: "إكسسوارات سكوتر", nameEn: "Accessories", icon: "🔧" },
  { slug: "spare-parts", nameAr: "قطع غيار", nameEn: "Spare Parts", icon: "⚙️" },
];

export const cities = [
  { slug: "riyadh", nameAr: "الرياض", nameEn: "Riyadh" },
  { slug: "jeddah", nameAr: "جدة", nameEn: "Jeddah" },
  { slug: "makkah", nameAr: "مكة المكرمة", nameEn: "Makkah" },
  { slug: "dammam", nameAr: "الدمام", nameEn: "Dammam" },
];

export const products = [
  {
    id: "p_1",
    slug: "ninebot-max",
    categorySlug: "electric-scooter",
    name: "سكوتر كهربائي للكبار ناينبوت ماكس احترافي",
    nameEn: "Ninebot Max Professional Electric Scooter",
    price: 1899,
    originalPrice: 2499,
    image: "/images/products/product_ninebot_max_1777998751040.png",
    rating: 4.8,
    reviewsCount: 124,
  },
  {
    id: "p_2",
    slug: "xiaomi-m365",
    categorySlug: "electric-scooter",
    name: "سكوتر شاومي مي M365 العملي المطور",
    nameEn: "Xiaomi Mi M365 Commuter Scooter",
    price: 1299,
    originalPrice: 1599,
    image: "/images/products/product_xiaomi_m365_1777998736815.png",
    rating: 4.5,
    reviewsCount: 342,
  },
  {
    id: "p_3",
    slug: "drift-36v",
    categorySlug: "drift-scooter",
    name: "سكوتر درفت 36 فولت المطور",
    nameEn: "Drift Scooter 36V Upgraded",
    price: 599,
    originalPrice: 799,
    image: "/images/categories/category_drift_kick_1777998376795.png",
    rating: 4.7,
    reviewsCount: 89,
  },
  {
    id: "p_4",
    slug: "kids-spider",
    categorySlug: "kids-scooter",
    name: "سكوتر أطفال سبايدرمان 3 عجلات",
    nameEn: "Spider-Man Kids 3-Wheel Scooter",
    price: 149,
    image: "/images/categories/category_kids_kick_1777998444797.png",
    rating: 4.9,
    reviewsCount: 512,
  }
];

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find(c => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter(p => p.categorySlug === categorySlug);
}
