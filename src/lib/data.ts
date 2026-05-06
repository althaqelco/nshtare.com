// Taxonomy and pSEO Data

export const categories = [
  { slug: "electric-scooter", nameAr: "سكوتر كهربائي", nameEn: "Electric Scooter", icon: "⚡", descAr: "للمشاوير اليومية والتنقل السريع", descEn: "For daily commuting and fast transport", banner: "/images/categories/main/electric-scooter-banner.png", thumbnail: "/images/categories/main/electric-scooter-thumb.png" },
  { slug: "xiaomi-scooter", nameAr: "سكوترات شاومي", nameEn: "Xiaomi Scooters", icon: "📱", descAr: "أفضل سكوترات شاومي الأصلية بضمان الوكيل", descEn: "Original Xiaomi scooters with warranty", banner: "/images/categories/main/xiaomi-scooter-banner.png", thumbnail: "/images/categories/main/xiaomi-scooter-thumb.png" },
  { slug: "adult-scooter", nameAr: "سكوترات للكبار", nameEn: "Adult Scooters", icon: "🧑", descAr: "سكوترات قوية تتحمل الأوزان العالية ومناسبة للمشاوير", descEn: "Heavy-duty scooters for adults", banner: "/images/categories/main/adult-scooter-banner.png", thumbnail: "/images/categories/main/adult-scooter-thumb.png" },
  { slug: "drift-scooter", nameAr: "سكوتر درفت", nameEn: "Drift Scooter", icon: "🏎️", descAr: "وحش التفحيط والمتعة القصوى", descEn: "Extreme drifting and fun", banner: "/images/categories/main/drift-scooter-banner.png", thumbnail: "/images/categories/main/drift-scooter-thumb.png" },
  { slug: "kids-scooter", nameAr: "سكوتر أطفال", nameEn: "Kids Scooter", icon: "👶", descAr: "آمن وملون ومناسب للأعمار الصغيرة", descEn: "Safe, colorful, and perfect for kids", banner: "/images/categories/main/kids-scooter-banner.png", thumbnail: "/images/categories/main/kids-scooter-thumb.png" },
  { slug: "smart-scooter", nameAr: "سكوتر ذكي", nameEn: "Smart Scooter", icon: "🧠", descAr: "شاشات ديجيتال واتصال بالتطبيق", descEn: "Digital display and app connectivity", banner: "/images/categories/main/smart-scooter-banner.png", thumbnail: "/images/categories/main/smart-scooter-thumb.png" },
  { slug: "scooter-accessories", nameAr: "إكسسوارات سكوتر", nameEn: "Accessories", icon: "🔧", descAr: "خوذات، شنط، وإضاءات", descEn: "Helmets, bags, and lights", banner: "/images/categories/main/accessories-banner.png", thumbnail: "/images/categories/main/accessories-thumb.png" },
  { slug: "spare-parts", nameAr: "قطع غيار", nameEn: "Spare Parts", icon: "⚙️", descAr: "كفرات، فحمات، بطاريات", descEn: "Tires, brakes, batteries", banner: "/images/categories/main/spare-parts-banner.png", thumbnail: "/images/categories/main/spare-parts-thumb.png" },
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
    price: 1899, originalPrice: 2499, 
    image: "/images/products/ninebot-max/main.png",
    gallery: [
      "/images/products/ninebot-max/main.png",
      "/images/products/ninebot-max/lifestyle.png",
      "/images/products/ninebot-max/features.png",
      "/images/products/ninebot-max/dimensions.png"
    ],
    rating: 4.8, reviewsCount: 124,
    specs: [
      { labelAr: "المدى", labelEn: "Range", value: "65 كم", icon: "battery" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "30 كم/س", icon: "speed" },
      { labelAr: "قوة الموتور", labelEn: "Motor Power", value: "350W", icon: "power" },
      { labelAr: "الوزن", labelEn: "Weight", value: "19.5 كجم", icon: "weight" },
      { labelAr: "البطارية", labelEn: "Battery", value: "551Wh ليثيوم", icon: "battery" },
      { labelAr: "وقت الشحن", labelEn: "Charge Time", value: "6 ساعات", icon: "time" },
      { labelAr: "حجم الإطار", labelEn: "Tire Size", value: "10 إنش", icon: "size" },
      { labelAr: "الضمان", labelEn: "Warranty", value: "سنة كاملة", icon: "shield" },
    ],
  },
  {
    id: "p_2", slug: "xiaomi-m365", categorySlug: "xiaomi-scooter",
    name: "سكوتر شاومي مي M365 العملي المطور", nameEn: "Xiaomi Mi M365 Commuter Scooter",
    price: 1299, originalPrice: 1599, 
    image: "/images/products/xiaomi-m365/main.png",
    gallery: [
      "/images/products/xiaomi-m365/main.png",
      "/images/products/xiaomi-m365/lifestyle.png",
      "/images/products/xiaomi-m365/features.png",
      "/images/products/xiaomi-m365/dimensions.png"
    ],
    rating: 4.5, reviewsCount: 342,
    specs: [
      { labelAr: "المدى", labelEn: "Range", value: "30 كم", icon: "battery" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "25 كم/س", icon: "speed" },
      { labelAr: "قوة الموتور", labelEn: "Motor Power", value: "250W", icon: "power" },
      { labelAr: "الوزن", labelEn: "Weight", value: "12.5 كجم", icon: "weight" },
      { labelAr: "البطارية", labelEn: "Battery", value: "280Wh ليثيوم", icon: "battery" },
      { labelAr: "وقت الشحن", labelEn: "Charge Time", value: "5.5 ساعات", icon: "time" },
      { labelAr: "قابل للطي", labelEn: "Foldable", value: "نعم", icon: "size" },
      { labelAr: "الضمان", labelEn: "Warranty", value: "سنة كاملة", icon: "shield" },
    ],
  },
  {
    id: "p_5", slug: "ninebot-with-seat", categorySlug: "electric-scooter", subcategorySlug: "with-seat",
    name: "سكوتر كهربائي بمقعد ناينبوت المريح", nameEn: "Ninebot Comfort Seat Electric Scooter",
    price: 2199, originalPrice: 2799, 
    image: "/images/products/ninebot-with-seat/main.png",
    gallery: [
      "/images/products/ninebot-with-seat/main.png",
      "/images/products/ninebot-with-seat/lifestyle.png",
      "/images/products/ninebot-with-seat/features.png",
      "/images/products/ninebot-with-seat/dimensions.png"
    ],
    rating: 4.6, reviewsCount: 67,
    specs: [
      { labelAr: "المدى", labelEn: "Range", value: "45 كم", icon: "battery" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "25 كم/س", icon: "speed" },
      { labelAr: "قوة الموتور", labelEn: "Motor Power", value: "350W", icon: "power" },
      { labelAr: "الوزن", labelEn: "Weight", value: "22 كجم", icon: "weight" },
      { labelAr: "نوع المقعد", labelEn: "Seat Type", value: "مقعد مبطن قابل للإزالة", icon: "size" },
      { labelAr: "وقت الشحن", labelEn: "Charge Time", value: "6 ساعات", icon: "time" },
      { labelAr: "الضمان", labelEn: "Warranty", value: "سنة كاملة", icon: "shield" },
    ],
  },
  {
    id: "p_6", slug: "offroad-pro", categorySlug: "electric-scooter", subcategorySlug: "fast",
    name: "سكوتر كهربائي سريع للطرق الوعرة احترافي", nameEn: "Pro Off-Road Fast Electric Scooter",
    price: 3499, originalPrice: 4299, 
    image: "/images/products/offroad-pro/main.png",
    gallery: [
      "/images/products/offroad-pro/main.png",
      "/images/products/offroad-pro/lifestyle.png",
      "/images/products/offroad-pro/features.png",
      "/images/products/offroad-pro/dimensions.png"
    ],
    rating: 4.9, reviewsCount: 45,
    specs: [
      { labelAr: "المدى", labelEn: "Range", value: "80 كم", icon: "battery" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "55 كم/س", icon: "speed" },
      { labelAr: "قوة الموتور", labelEn: "Motor Power", value: "800W", icon: "power" },
      { labelAr: "الوزن", labelEn: "Weight", value: "28 كجم", icon: "weight" },
      { labelAr: "البطارية", labelEn: "Battery", value: "960Wh ليثيوم", icon: "battery" },
      { labelAr: "الإطارات", labelEn: "Tires", value: "10 إنش أوف رود", icon: "size" },
      { labelAr: "الضمان", labelEn: "Warranty", value: "سنة كاملة", icon: "shield" },
    ],
  },

  // ──── Drift Scooters ────
  {
    id: "p_3", slug: "drift-36v", categorySlug: "drift-scooter", subcategorySlug: "36v",
    name: "سكوتر درفت 36 فولت المطور", nameEn: "Drift Scooter 36V Upgraded",
    price: 599, originalPrice: 799, 
    image: "/images/products/drift-36v/main.png",
    gallery: [
      "/images/products/drift-36v/main.png",
      "/images/products/drift-36v/lifestyle.png",
      "/images/products/drift-36v/features.png",
      "/images/products/drift-36v/dimensions.png"
    ],
    rating: 4.7, reviewsCount: 89,
    specs: [
      { labelAr: "الجهد", labelEn: "Voltage", value: "36 فولت", icon: "power" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "15 كم/س", icon: "speed" },
      { labelAr: "العمر المناسب", labelEn: "Age Range", value: "6+ سنوات", icon: "shield" },
      { labelAr: "الوزن الأقصى", labelEn: "Max Load", value: "65 كجم", icon: "weight" },
      { labelAr: "وقت الشحن", labelEn: "Charge Time", value: "3 ساعات", icon: "time" },
      { labelAr: "مدة التشغيل", labelEn: "Run Time", value: "40 دقيقة", icon: "battery" },
    ],
  },
  {
    id: "p_7", slug: "drift-48v-beast", categorySlug: "drift-scooter", subcategorySlug: "48v",
    name: "سكوتر درفت 48 فولت الوحش", nameEn: "48V Beast Drift Scooter",
    price: 899, originalPrice: 1199, 
    image: "/images/products/drift-48v-beast/main.png",
    gallery: [
      "/images/products/drift-48v-beast/main.png",
      "/images/products/drift-48v-beast/lifestyle.png",
      "/images/products/drift-48v-beast/features.png",
      "/images/products/drift-48v-beast/dimensions.png"
    ],
    rating: 4.8, reviewsCount: 156,
    specs: [
      { labelAr: "الجهد", labelEn: "Voltage", value: "48 فولت", icon: "power" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "25 كم/س", icon: "speed" },
      { labelAr: "قوة الموتور", labelEn: "Motor Power", value: "1000W", icon: "power" },
      { labelAr: "الوزن الأقصى", labelEn: "Max Load", value: "100 كجم", icon: "weight" },
      { labelAr: "وقت الشحن", labelEn: "Charge Time", value: "4 ساعات", icon: "time" },
      { labelAr: "مدة التشغيل", labelEn: "Run Time", value: "60 دقيقة", icon: "battery" },
      { labelAr: "الإطارات", labelEn: "Tires", value: "8 إنش درفت", icon: "size" },
      { labelAr: "الضمان", labelEn: "Warranty", value: "سنة كاملة", icon: "shield" },
    ],
  },
  {
    id: "p_8", slug: "drift-360-spin", categorySlug: "drift-scooter", subcategorySlug: "360",
    name: "سكوتر درفت 360 درجة الدوار", nameEn: "360° Spin Drift Scooter",
    price: 449, 
    image: "/images/products/drift-360-spin/main.png",
    gallery: [
      "/images/products/drift-360-spin/main.png",
      "/images/products/drift-360-spin/lifestyle.png",
      "/images/products/drift-360-spin/features.png",
      "/images/products/drift-360-spin/dimensions.png"
    ],
    rating: 4.4, reviewsCount: 203,
    specs: [
      { labelAr: "دوران", labelEn: "Rotation", value: "360 درجة", icon: "speed" },
      { labelAr: "الجهد", labelEn: "Voltage", value: "36 فولت", icon: "power" },
      { labelAr: "السرعة القصوى", labelEn: "Max Speed", value: "12 كم/س", icon: "speed" },
      { labelAr: "العمر المناسب", labelEn: "Age Range", value: "6+ سنوات", icon: "shield" },
      { labelAr: "الوزن الأقصى", labelEn: "Max Load", value: "60 كجم", icon: "weight" },
      { labelAr: "مدة التشغيل", labelEn: "Run Time", value: "30 دقيقة", icon: "battery" },
    ],
  },

  // ──── Kids Scooters ────
  {
    id: "p_4", slug: "kids-spider", categorySlug: "kids-scooter", subcategorySlug: "spider-man",
    name: "سكوتر أطفال سبايدرمان 3 عجلات", nameEn: "Spider-Man Kids 3-Wheel Scooter",
    price: 149, 
    image: "/images/products/kids-spider/main.png",
    gallery: [
      "/images/products/kids-spider/main.png",
      "/images/products/kids-spider/lifestyle.png",
      "/images/products/kids-spider/features.png",
      "/images/products/kids-spider/dimensions.png"
    ],
    rating: 4.9, reviewsCount: 512,
  },
  {
    id: "p_9", slug: "kids-girls-pink", categorySlug: "kids-scooter", subcategorySlug: "girls",
    name: "سكوتر بنات وردي فراشة 3 عجلات", nameEn: "Pink Butterfly Girls 3-Wheel Scooter",
    price: 139, 
    image: "/images/products/kids-girls-pink/main.png",
    gallery: [
      "/images/products/kids-girls-pink/main.png",
      "/images/products/kids-girls-pink/lifestyle.png",
      "/images/products/kids-girls-pink/features.png",
      "/images/products/kids-girls-pink/dimensions.png"
    ],
    rating: 4.8, reviewsCount: 287,
  },
  {
    id: "p_10", slug: "kids-electric-mini", categorySlug: "kids-scooter", subcategorySlug: "budget-kids",
    name: "سكوتر أطفال كهربائي ميني اقتصادي", nameEn: "Mini Budget Kids Electric Scooter",
    price: 249, originalPrice: 349, 
    image: "/images/products/kids-electric-mini/main.png",
    gallery: [
      "/images/products/kids-electric-mini/main.png",
      "/images/products/kids-electric-mini/lifestyle.png",
      "/images/products/kids-electric-mini/features.png",
      "/images/products/kids-electric-mini/dimensions.png"
    ],
    rating: 4.3, reviewsCount: 178,
  },

  // ──── Smart Scooters ────
  {
    id: "p_11", slug: "smart-gps-pro", categorySlug: "smart-scooter",
    name: "سكوتر ذكي بنظام GPS واتصال بلوتوث", nameEn: "Smart GPS Bluetooth Connected Scooter",
    price: 2499, originalPrice: 2999, 
    image: "/images/products/smart-gps-pro/main.png",
    gallery: [
      "/images/products/smart-gps-pro/main.png",
      "/images/products/smart-gps-pro/lifestyle.png",
      "/images/products/smart-gps-pro/features.png",
      "/images/products/smart-gps-pro/dimensions.png"
    ],
    rating: 4.7, reviewsCount: 34,
  },

  // ──── Accessories ────
  {
    id: "p_12", slug: "scooter-helmet-pro", categorySlug: "scooter-accessories", subcategorySlug: "helmets",
    name: "خوذة حماية احترافية للسكوتر", nameEn: "Professional Scooter Safety Helmet",
    price: 129, originalPrice: 179, 
    image: "/images/products/scooter-helmet-pro/main.png",
    gallery: [
      "/images/products/scooter-helmet-pro/main.png",
      "/images/products/scooter-helmet-pro/lifestyle.png",
      "/images/products/scooter-helmet-pro/features.png",
      "/images/products/scooter-helmet-pro/dimensions.png"
    ],
    rating: 4.6, reviewsCount: 98,
  },
  {
    id: "p_13", slug: "scooter-bag-carry", categorySlug: "scooter-accessories", subcategorySlug: "bags",
    name: "شنطة حمل سكوتر مقاومة للماء", nameEn: "Waterproof Scooter Carry Bag",
    price: 89, 
    image: "/images/products/scooter-bag-carry/main.png",
    gallery: [
      "/images/products/scooter-bag-carry/main.png",
      "/images/products/scooter-bag-carry/lifestyle.png",
      "/images/products/scooter-bag-carry/features.png",
      "/images/products/scooter-bag-carry/dimensions.png"
    ],
    rating: 4.5, reviewsCount: 156,
  },
  {
    id: "p_14", slug: "universal-charger", categorySlug: "scooter-accessories", subcategorySlug: "chargers",
    name: "شاحن سكوتر كهربائي عالمي سريع", nameEn: "Universal Fast Electric Scooter Charger",
    price: 79, originalPrice: 119, 
    image: "/images/products/universal-charger/main.png",
    gallery: [
      "/images/products/universal-charger/main.png",
      "/images/products/universal-charger/lifestyle.png",
      "/images/products/universal-charger/features.png",
      "/images/products/universal-charger/dimensions.png"
    ],
    rating: 4.4, reviewsCount: 234,
  },

  // ──── Spare Parts ────
  {
    id: "p_15", slug: "solid-tire-10inch", categorySlug: "spare-parts", subcategorySlug: "wheels",
    name: "إطار صلب 10 إنش مقاوم للثقب", nameEn: "10-inch Puncture-Proof Solid Tire",
    price: 49, 
    image: "/images/products/solid-tire-10inch/main.png",
    gallery: [
      "/images/products/solid-tire-10inch/main.png",
      "/images/products/solid-tire-10inch/lifestyle.png",
      "/images/products/solid-tire-10inch/features.png",
      "/images/products/solid-tire-10inch/dimensions.png"
    ],
    rating: 4.7, reviewsCount: 423,
  },
  {
    id: "p_16", slug: "brake-pads-set", categorySlug: "spare-parts", subcategorySlug: "brakes",
    name: "طقم فرامل احترافي للسكوتر", nameEn: "Professional Scooter Brake Pads Set",
    price: 35, 
    image: "/images/products/brake-pads-set/main.png",
    gallery: [
      "/images/products/brake-pads-set/main.png",
      "/images/products/brake-pads-set/lifestyle.png",
      "/images/products/brake-pads-set/features.png",
      "/images/products/brake-pads-set/dimensions.png"
    ],
    rating: 4.5, reviewsCount: 312,
  },

  // ──── NEW: Keyword Gap Products ────
  // These products fill keyword gaps identified from keywords.md

  // KW: سكوتر كهربائي ثلاث عجلات، سكوتر بثلاث عجلات، سكوتر ثلاث عجلات
  {
    id: "p_17", slug: "electric-three-wheel", categorySlug: "electric-scooter", subcategorySlug: "three-wheel",
    name: "سكوتر كهربائي ثلاث عجلات مع سلة للتسوق", nameEn: "3-Wheel Electric Scooter with Basket",
    price: 1599, originalPrice: 1999,
    image: "/images/products/electric-three-wheel/main.png",
    gallery: [
      "/images/products/electric-three-wheel/main.png",
      "/images/products/electric-three-wheel/lifestyle.png",
      "/images/products/electric-three-wheel/features.png",
      "/images/products/electric-three-wheel/dimensions.png"
    ],
    rating: 4.6, reviewsCount: 89,
  },

  // KW: سكوتر كهربائي صغير، سكوتر صغير، سكوتر عادي
  {
    id: "p_18", slug: "foldable-mini", categorySlug: "electric-scooter",
    name: "سكوتر كهربائي صغير قابل للطي خفيف الوزن", nameEn: "Compact Foldable Mini Electric Scooter",
    price: 799, originalPrice: 999,
    image: "/images/products/foldable-mini/main.png",
    gallery: [
      "/images/products/foldable-mini/main.png",
      "/images/products/foldable-mini/lifestyle.png",
      "/images/products/foldable-mini/features.png",
      "/images/products/foldable-mini/dimensions.png"
    ],
    rating: 4.4, reviewsCount: 213,
  },

  // KW: سكوتر كريزي
  {
    id: "p_19", slug: "crazy-stunts", categorySlug: "drift-scooter", subcategorySlug: "electric",
    name: "سكوتر كريزي للحركات الاستعراضية والتفحيط", nameEn: "Crazy Stunts Electric Drift Scooter",
    price: 749, originalPrice: 999,
    image: "/images/products/crazy-stunts/main.png",
    gallery: [
      "/images/products/crazy-stunts/main.png",
      "/images/products/crazy-stunts/lifestyle.png",
      "/images/products/crazy-stunts/features.png",
      "/images/products/crazy-stunts/dimensions.png"
    ],
    rating: 4.7, reviewsCount: 178,
  },

  // KW: سكوتر درفت رخيص، سكوتر درفت 100 ريال
  {
    id: "p_20", slug: "drift-budget-starter", categorySlug: "drift-scooter", subcategorySlug: "budget",
    name: "سكوتر درفت رخيص للمبتدئين اقتصادي", nameEn: "Budget Starter Drift Scooter",
    price: 299, originalPrice: 449,
    image: "/images/products/drift-budget-starter/main.png",
    gallery: [
      "/images/products/drift-budget-starter/main.png",
      "/images/products/drift-budget-starter/lifestyle.png",
      "/images/products/drift-budget-starter/features.png",
      "/images/products/drift-budget-starter/dimensions.png"
    ],
    rating: 4.2, reviewsCount: 345,
  },

  // KW: سكوتر اطفال ثلاث عجلات
  {
    id: "p_21", slug: "kids-three-wheel-led", categorySlug: "kids-scooter", subcategorySlug: "three-wheel-kids",
    name: "سكوتر أطفال ثلاث عجلات مضيء LED", nameEn: "LED Light-Up 3-Wheel Kids Scooter",
    price: 119, originalPrice: 179,
    image: "/images/products/kids-three-wheel-led/main.png",
    gallery: [
      "/images/products/kids-three-wheel-led/main.png",
      "/images/products/kids-three-wheel-led/lifestyle.png",
      "/images/products/kids-three-wheel-led/features.png",
      "/images/products/kids-three-wheel-led/dimensions.png"
    ],
    rating: 4.8, reviewsCount: 467,
  },

  // KW: سكوتر كهربائي بكرسي، كرسي سكوتر، سكوتر كرسي، سكوتر كبار السن، سكوتر مقعدين
  {
    id: "p_22", slug: "mobility-chair-scooter", categorySlug: "electric-scooter", subcategorySlug: "with-seat",
    name: "سكوتر كهربائي بكرسي متحرك لكبار السن والراحة", nameEn: "Electric Mobility Chair Scooter for Seniors",
    price: 2899, originalPrice: 3499,
    image: "/images/products/mobility-chair-scooter/main.png",
    gallery: [
      "/images/products/mobility-chair-scooter/main.png",
      "/images/products/mobility-chair-scooter/lifestyle.png",
      "/images/products/mobility-chair-scooter/features.png",
      "/images/products/mobility-chair-scooter/dimensions.png"
    ],
    rating: 4.9, reviewsCount: 56,
  },

  // KW: بطارية سكوتر، بطارية سكوتر درفت، بطارية سكوتر درفت 36 فولت، بطاريات سكوتر
  {
    id: "p_23", slug: "drift-battery-36v", categorySlug: "scooter-accessories", subcategorySlug: "batteries",
    name: "بطارية سكوتر درفت 36 فولت أصلية عالية الأداء", nameEn: "Original 36V Drift Scooter High-Performance Battery",
    price: 199, originalPrice: 279,
    image: "/images/products/drift-battery-36v/main.png",
    gallery: [
      "/images/products/drift-battery-36v/main.png",
      "/images/products/drift-battery-36v/lifestyle.png",
      "/images/products/drift-battery-36v/features.png",
      "/images/products/drift-battery-36v/dimensions.png"
    ],
    rating: 4.6, reviewsCount: 189,
  },

  // KW: شاحن سكوتر درفت، شاحن سكوتر كهربائي
  {
    id: "p_24", slug: "drift-charger-fast", categorySlug: "scooter-accessories", subcategorySlug: "chargers",
    name: "شاحن سكوتر درفت سريع 36V-48V متوافق مع جميع الموديلات", nameEn: "Fast Drift Scooter Charger 36V-48V Universal",
    price: 69, originalPrice: 99,
    image: "/images/products/drift-charger-fast/main.png",
    gallery: [
      "/images/products/drift-charger-fast/main.png",
      "/images/products/drift-charger-fast/lifestyle.png",
      "/images/products/drift-charger-fast/features.png",
      "/images/products/drift-charger-fast/dimensions.png"
    ],
    rating: 4.5, reviewsCount: 267,
  },

  // KW: إضاءة سكوتر (fills lights subcategory)
  {
    id: "p_25", slug: "led-lights-kit", categorySlug: "scooter-accessories", subcategorySlug: "lights",
    name: "طقم إضاءة LED للسكوتر مقاوم للماء ملون", nameEn: "Waterproof RGB LED Scooter Lights Kit",
    price: 59, originalPrice: 89,
    image: "/images/products/led-lights-kit/main.png",
    gallery: [
      "/images/products/led-lights-kit/main.png",
      "/images/products/led-lights-kit/lifestyle.png",
      "/images/products/led-lights-kit/features.png",
      "/images/products/led-lights-kit/dimensions.png"
    ],
    rating: 4.3, reviewsCount: 198,
  },

  // KW: كنترولر سكوتر (fills controllers subcategory)
  {
    id: "p_26", slug: "controller-universal", categorySlug: "spare-parts", subcategorySlug: "controllers",
    name: "كنترولر سكوتر كهربائي عالمي 36V-48V قابل للبرمجة", nameEn: "Universal Programmable Electric Scooter Controller 36V-48V",
    price: 149, originalPrice: 199,
    image: "/images/products/controller-universal/main.png",
    gallery: [
      "/images/products/controller-universal/main.png",
      "/images/products/controller-universal/lifestyle.png",
      "/images/products/controller-universal/features.png",
      "/images/products/controller-universal/dimensions.png"
    ],
    rating: 4.4, reviewsCount: 87,
  },

  // KW: موتور سكوتر (fills motors subcategory)
  {
    id: "p_27", slug: "motor-350w-hub", categorySlug: "spare-parts", subcategorySlug: "motors",
    name: "موتور سكوتر كهربائي 350 واط بدون فرش عالي الكفاءة", nameEn: "350W Brushless Hub Motor for Electric Scooter",
    price: 249, originalPrice: 349,
    image: "/images/products/motor-350w-hub/main.png",
    gallery: [
      "/images/products/motor-350w-hub/main.png",
      "/images/products/motor-350w-hub/lifestyle.png",
      "/images/products/motor-350w-hub/features.png",
      "/images/products/motor-350w-hub/dimensions.png"
    ],
    rating: 4.7, reviewsCount: 134,
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

