// Taxonomy and pSEO Data

export const categories = [
  { slug: "electric-scooter", nameAr: "سكوتر كهربائي", nameEn: "Electric Scooter", icon: "⚡", descAr: "للمشاوير اليومية والتنقل السريع", descEn: "For daily commuting and fast transport" },
  { slug: "xiaomi-scooter", nameAr: "سكوترات شاومي", nameEn: "Xiaomi Scooters", icon: "📱", descAr: "أفضل سكوترات شاومي الأصلية بضمان الوكيل", descEn: "Original Xiaomi scooters with warranty" },
  { slug: "adult-scooter", nameAr: "سكوترات للكبار", nameEn: "Adult Scooters", icon: "🧑", descAr: "سكوترات قوية تتحمل الأوزان العالية ومناسبة للمشاوير", descEn: "Heavy-duty scooters for adults" },
  { slug: "drift-scooter", nameAr: "سكوتر درفت", nameEn: "Drift Scooter", icon: "🏎️", descAr: "وحش التفحيط والمتعة القصوى", descEn: "Extreme drifting and fun" },
  { slug: "kids-scooter", nameAr: "سكوتر أطفال", nameEn: "Kids Scooter", icon: "👶", descAr: "آمن وملون ومناسب للأعمار الصغيرة", descEn: "Safe, colorful, and perfect for kids" },
  { slug: "smart-scooter", nameAr: "سكوتر ذكي", nameEn: "Smart Scooter", icon: "🧠", descAr: "شاشات ديجيتال واتصال بالتطبيق", descEn: "Digital display and app connectivity" },
  { slug: "scooter-accessories", nameAr: "إكسسوارات سكوتر", nameEn: "Accessories", icon: "🔧", descAr: "خوذات، شنط، وإضاءات", descEn: "Helmets, bags, and lights" },
  { slug: "spare-parts", nameAr: "قطع غيار", nameEn: "Spare Parts", icon: "⚙️", descAr: "كفرات، فحمات، بطاريات", descEn: "Tires, brakes, batteries" },
];

export const subcategories = [
  // Electric Scooter Subcategories
  { slug: "kids", parentSlug: "electric-scooter", nameAr: "سكوتر كهربائي للأطفال", nameEn: "Kids Electric Scooters", icon: "👦" },
  { slug: "with-seat", parentSlug: "electric-scooter", nameAr: "سكوتر كهربائي بمقعد", nameEn: "Electric Scooters with Seat", icon: "💺" },
  { slug: "three-wheel", parentSlug: "electric-scooter", nameAr: "سكوتر كهربائي ثلاث عجلات", nameEn: "3-Wheel Electric Scooters", icon: "🔺" },
  { slug: "fast", parentSlug: "electric-scooter", nameAr: "سكوتر كهربائي سريع", nameEn: "Fast Electric Scooters", icon: "💨" },

  // Drift Scooter Subcategories
  { slug: "36v", parentSlug: "drift-scooter", nameAr: "درفت 36 فولت", nameEn: "36V Drift Scooter", icon: "🔋" },
  { slug: "48v", parentSlug: "drift-scooter", nameAr: "درفت 48 فولت (الوحش)", nameEn: "48V Drift Scooter (The Beast)", icon: "⚡" },
  { slug: "electric", parentSlug: "drift-scooter", nameAr: "درفت كهربائي", nameEn: "Electric Drift Scooter", icon: "🏎️" },
  { slug: "360", parentSlug: "drift-scooter", nameAr: "درفت 360 درجة", nameEn: "360° Drift Scooter", icon: "🔄" },
  { slug: "budget", parentSlug: "drift-scooter", nameAr: "درفت رخيص", nameEn: "Budget Drift Scooter", icon: "💰" },

  // Kids Scooter Subcategories
  { slug: "three-wheel-kids", parentSlug: "kids-scooter", nameAr: "سكوتر أطفال ثلاث عجلات", nameEn: "3-Wheel Kids Scooter", icon: "🔺" },
  { slug: "girls", parentSlug: "kids-scooter", nameAr: "سكوتر بنات", nameEn: "Girls Scooter", icon: "👧" },
  { slug: "spider-man", parentSlug: "kids-scooter", nameAr: "سكوتر سبايدرمان", nameEn: "Spider-Man Scooter", icon: "🕷️" },
  { slug: "budget-kids", parentSlug: "kids-scooter", nameAr: "سكوتر أطفال رخيص", nameEn: "Budget Kids Scooter", icon: "💰" },

  // Accessories Subcategories
  { slug: "chargers", parentSlug: "scooter-accessories", nameAr: "شواحن سكوتر", nameEn: "Scooter Chargers", icon: "🔌" },
  { slug: "batteries", parentSlug: "scooter-accessories", nameAr: "بطاريات سكوتر", nameEn: "Scooter Batteries", icon: "🔋" },
  { slug: "bags", parentSlug: "scooter-accessories", nameAr: "شنط سكوتر", nameEn: "Scooter Bags", icon: "🎒" },
  { slug: "helmets", parentSlug: "scooter-accessories", nameAr: "خوذ حماية", nameEn: "Safety Helmets", icon: "⛑️" },
  { slug: "lights", parentSlug: "scooter-accessories", nameAr: "إضاءة سكوتر", nameEn: "Scooter Lights", icon: "💡" },

  // Spare Parts Subcategories
  { slug: "wheels", parentSlug: "spare-parts", nameAr: "إطارات وعجلات", nameEn: "Wheels & Tires", icon: "🛞" },
  { slug: "brakes", parentSlug: "spare-parts", nameAr: "فرامل سكوتر", nameEn: "Scooter Brakes", icon: "🛑" },
  { slug: "controllers", parentSlug: "spare-parts", nameAr: "كنترولر سكوتر", nameEn: "Scooter Controllers", icon: "🎛️" },
  { slug: "motors", parentSlug: "spare-parts", nameAr: "موتورات سكوتر", nameEn: "Scooter Motors", icon: "⚙️" },
];

export const cities = [
  { slug: "riyadh", nameAr: "الرياض", nameEn: "Riyadh" },
  { slug: "jeddah", nameAr: "جدة", nameEn: "Jeddah" },
  { slug: "makkah", nameAr: "مكة المكرمة", nameEn: "Makkah" },
  { slug: "dammam", nameAr: "الدمام", nameEn: "Dammam" },
];

export const products = [
  // ──── Electric Scooters ────
  {
    id: "p_1", slug: "ninebot-max", categorySlug: "adult-scooter",
    name: "سكوتر كهربائي للكبار ناينبوت ماكس احترافي", nameEn: "Ninebot Max Professional Electric Scooter",
    price: 1899, originalPrice: 2499, image: "/images/products/product_ninebot_max_1777998751040.png",
    rating: 4.8, reviewsCount: 124,
  },
  {
    id: "p_2", slug: "xiaomi-m365", categorySlug: "xiaomi-scooter",
    name: "سكوتر شاومي مي M365 العملي المطور", nameEn: "Xiaomi Mi M365 Commuter Scooter",
    price: 1299, originalPrice: 1599, image: "/images/products/product_xiaomi_m365_1777998736815.png",
    rating: 4.5, reviewsCount: 342,
  },
  {
    id: "p_5", slug: "ninebot-with-seat", categorySlug: "electric-scooter", subcategorySlug: "with-seat",
    name: "سكوتر كهربائي بمقعد ناينبوت المريح", nameEn: "Ninebot Comfort Seat Electric Scooter",
    price: 2199, originalPrice: 2799, image: "/images/products/product_scooter_with_seat_1777998764393.png",
    rating: 4.6, reviewsCount: 67,
  },
  {
    id: "p_6", slug: "offroad-pro", categorySlug: "electric-scooter", subcategorySlug: "fast",
    name: "سكوتر كهربائي سريع للطرق الوعرة احترافي", nameEn: "Pro Off-Road Fast Electric Scooter",
    price: 3499, originalPrice: 4299, image: "/images/products/product_offroad_scooter_1777998810643.png",
    rating: 4.9, reviewsCount: 45,
  },

  // ──── Drift Scooters ────
  {
    id: "p_3", slug: "drift-36v", categorySlug: "drift-scooter", subcategorySlug: "36v",
    name: "سكوتر درفت 36 فولت المطور", nameEn: "Drift Scooter 36V Upgraded",
    price: 599, originalPrice: 799, image: "/images/categories/category_drift_kick_1777998376795.png",
    rating: 4.7, reviewsCount: 89,
  },
  {
    id: "p_7", slug: "drift-48v-beast", categorySlug: "drift-scooter", subcategorySlug: "48v",
    name: "سكوتر درفت 48 فولت الوحش", nameEn: "48V Beast Drift Scooter",
    price: 899, originalPrice: 1199, image: "/images/categories/category_drift_scooter_1777997659190.png",
    rating: 4.8, reviewsCount: 156,
  },
  {
    id: "p_8", slug: "drift-360-spin", categorySlug: "drift-scooter", subcategorySlug: "360",
    name: "سكوتر درفت 360 درجة الدوار", nameEn: "360° Spin Drift Scooter",
    price: 449, image: "/images/categories/category_drift_kick_1777998376795.png",
    rating: 4.4, reviewsCount: 203,
  },

  // ──── Kids Scooters ────
  {
    id: "p_4", slug: "kids-spider", categorySlug: "kids-scooter", subcategorySlug: "spider-man",
    name: "سكوتر أطفال سبايدرمان 3 عجلات", nameEn: "Spider-Man Kids 3-Wheel Scooter",
    price: 149, image: "/images/categories/category_kids_kick_1777998444797.png",
    rating: 4.9, reviewsCount: 512,
  },
  {
    id: "p_9", slug: "kids-girls-pink", categorySlug: "kids-scooter", subcategorySlug: "girls",
    name: "سكوتر بنات وردي فراشة 3 عجلات", nameEn: "Pink Butterfly Girls 3-Wheel Scooter",
    price: 139, image: "/images/categories/category_kids_scooter_1777997673891.png",
    rating: 4.8, reviewsCount: 287,
  },
  {
    id: "p_10", slug: "kids-electric-mini", categorySlug: "kids-scooter", subcategorySlug: "budget-kids",
    name: "سكوتر أطفال كهربائي ميني اقتصادي", nameEn: "Mini Budget Kids Electric Scooter",
    price: 249, originalPrice: 349, image: "/images/categories/category_kids_kick_1777998444797.png",
    rating: 4.3, reviewsCount: 178,
  },

  // ──── Smart Scooters ────
  {
    id: "p_11", slug: "smart-gps-pro", categorySlug: "smart-scooter",
    name: "سكوتر ذكي بنظام GPS واتصال بلوتوث", nameEn: "Smart GPS Bluetooth Connected Scooter",
    price: 2499, originalPrice: 2999, image: "/images/categories/category_smart_scooter_1777997702235.png",
    rating: 4.7, reviewsCount: 34,
  },

  // ──── Accessories ────
  {
    id: "p_12", slug: "scooter-helmet-pro", categorySlug: "scooter-accessories", subcategorySlug: "helmets",
    name: "خوذة حماية احترافية للسكوتر", nameEn: "Professional Scooter Safety Helmet",
    price: 129, originalPrice: 179, image: "/images/products/product_scooter_helmet_1777998827007.png",
    rating: 4.6, reviewsCount: 98,
  },
  {
    id: "p_13", slug: "scooter-bag-carry", categorySlug: "scooter-accessories", subcategorySlug: "bags",
    name: "شنطة حمل سكوتر مقاومة للماء", nameEn: "Waterproof Scooter Carry Bag",
    price: 89, image: "/images/products/product_scooter_bag_1777998839570.png",
    rating: 4.5, reviewsCount: 156,
  },
  {
    id: "p_14", slug: "universal-charger", categorySlug: "scooter-accessories", subcategorySlug: "chargers",
    name: "شاحن سكوتر كهربائي عالمي سريع", nameEn: "Universal Fast Electric Scooter Charger",
    price: 79, originalPrice: 119, image: "/images/products/product_scooter_charger_1777998905795.png",
    rating: 4.4, reviewsCount: 234,
  },

  // ──── Spare Parts ────
  {
    id: "p_15", slug: "solid-tire-10inch", categorySlug: "spare-parts", subcategorySlug: "wheels",
    name: "إطار صلب 10 إنش مقاوم للثقب", nameEn: "10-inch Puncture-Proof Solid Tire",
    price: 49, image: "/images/products/product_solid_tire_1777998891232.png",
    rating: 4.7, reviewsCount: 423,
  },
  {
    id: "p_16", slug: "brake-pads-set", categorySlug: "spare-parts", subcategorySlug: "brakes",
    name: "طقم فرامل احترافي للسكوتر", nameEn: "Professional Scooter Brake Pads Set",
    price: 35, image: "/images/products/product_brake_pads_1777998921286.png",
    rating: 4.5, reviewsCount: 312,
  },
];

// ──── Utility Functions ────

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find(c => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getSubcategoriesByParent(parentSlug: string) {
  return subcategories.filter(s => s.parentSlug === parentSlug);
}

export function getSubcategoryBySlug(parentSlug: string, subSlug: string) {
  return subcategories.find(s => s.parentSlug === parentSlug && s.slug === subSlug);
}

export function getProductsBySubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter(p => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug);
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

