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
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    qualities: [80],
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
      // 1. Core Pages
      { source: '/wishlist/:path*', destination: '/', permanent: true },
      { source: '/author/admin/:path*', destination: '/', permanent: true },
      { source: encodeURI('/اتصل-بنا'), destination: '/contact', permanent: true },
      { source: encodeURI('/سياسة-الضمان-الذهبي'), destination: '/warranty', permanent: true },
      { source: encodeURI('/سياسة-الشحن'), destination: '/shipping', permanent: true },
      { source: encodeURI('/سياسة-الاستبدال-و-الاسترجاع'), destination: '/faq', permanent: true },
      { source: encodeURI('/سياسة-الشحن-والتوصيل'), destination: '/shipping', permanent: true },
      { source: encodeURI('/الأسئلة-الشائعة-faq'), destination: '/faq', permanent: true },

      // 2. Old WooCommerce Categories → Current Categories (301 Permanent)
      // ────────────────────────────────────────────────────────────────
      // Format: /product-category/{old-slug}/ → /{current-slug}
      // :path* catches pagination like /page/2/, /page/3/ etc.
      // ────────────────────────────────────────────────────────────────

      // ── electric-scooter (سكوتر كهربائي) ──
      { source: '/product-category/electric-scooters/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/electric-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/e-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/e-scooters/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/scooters/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/cheap-electric-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/cheap-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/electric-scooter-with-seat/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/three-wheel-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/3-wheel-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/fast-electric-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/offroad-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/off-road-scooter/:path*', destination: '/electric-scooter', permanent: true },

      // ── xiaomi-scooter (سكوترات شاومي) ──
      { source: '/product-category/xiaomi-scooter/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/xiaomi/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/xiaomi-scooters/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/mi-scooter/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/m365/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/ninebot/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/segway/:path*', destination: '/xiaomi-scooter', permanent: true },
      { source: '/product-category/segway-ninebot/:path*', destination: '/xiaomi-scooter', permanent: true },

      // ── adult-scooter (سكوترات للكبار) ──
      { source: '/product-category/electric-scooter-for-adults/:path*', destination: '/adult-scooter', permanent: true },
      { source: '/product-category/adult-scooter/:path*', destination: '/adult-scooter', permanent: true },
      { source: '/product-category/adult-scooters/:path*', destination: '/adult-scooter', permanent: true },
      { source: '/product-category/adults-scooter/:path*', destination: '/adult-scooter', permanent: true },
      { source: '/product-category/scooter-adults/:path*', destination: '/adult-scooter', permanent: true },
      { source: '/product-category/heavy-duty-scooter/:path*', destination: '/adult-scooter', permanent: true },
      { source: '/product-category/commuter-scooter/:path*', destination: '/adult-scooter', permanent: true },

      // ── drift-scooter (سكوتر درفت) ──
      { source: '/product-category/monster-scooter/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/scooter-drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/electric-scooter-drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/drift-scooter/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/drift-scooters/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/drift-trike/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/trike/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/monster/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/36v-drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/48v-drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/drift-36v/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/drift-48v/:path*', destination: '/drift-scooter', permanent: true },

      // ── kids-scooter (سكوتر أطفال) ──
      { source: '/product-category/girls-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/kids-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/kids-scooters/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/children-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/boys-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/spider-man-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/spiderman-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/kids-electric-scooter/:path*', destination: '/kids-scooter', permanent: true },
      { source: '/product-category/toddler-scooter/:path*', destination: '/kids-scooter', permanent: true },

      // ── smart-scooter (سكوتر ذكي) ──
      { source: '/product-category/smart-scooter/:path*', destination: '/smart-scooter', permanent: true },
      { source: '/product-category/smart-scooters/:path*', destination: '/smart-scooter', permanent: true },
      { source: '/product-category/bluetooth-scooter/:path*', destination: '/smart-scooter', permanent: true },
      { source: '/product-category/gps-scooter/:path*', destination: '/smart-scooter', permanent: true },
      { source: '/product-category/app-scooter/:path*', destination: '/smart-scooter', permanent: true },

      // ── scooter-accessories (إكسسوارات سكوتر) ──
      { source: '/product-category/accessories/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/scooter-accessories/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/helmets/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/scooter-helmets/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/scooter-bags/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/scooter-lights/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/chargers/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/scooter-charger/:path*', destination: '/scooter-accessories', permanent: true },
      { source: '/product-category/batteries/:path*', destination: '/scooter-accessories', permanent: true },

      // ── spare-parts (قطع غيار) ──
      { source: '/product-category/spare-parts/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/parts/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/scooter-parts/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/tires/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/scooter-tires/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/wheels/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/brakes/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/scooter-brakes/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/motors/:path*', destination: '/spare-parts', permanent: true },
      { source: '/product-category/controllers/:path*', destination: '/spare-parts', permanent: true },

      // ── Catch-all: any other /product-category/ → Homepage ──
      { source: '/product-category/:path*', destination: '/', permanent: true },

      // 3. Old Products
      { source: '/product/' + encodeURI('سكوتر-كهربائي-الأداء-القوي-والتصميم') + '/:path*', destination: '/adult-scooter/ninebot-max', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-للأطفال-بتصميم-أنيق-وعم') + '/:path*', destination: '/kids-scooter/kids-spider', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-ذكي-سكوتر-دريفت-آمن-وقو') + '/:path*', destination: '/drift-scooter/drift-36v', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-m365-pro-قوة،-أداء،-وسهولة-حمل') + '/:path*', destination: '/xiaomi-scooter/xiaomi-m365', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-درفت-تريك-52-فولت-1500-واط-تج') + '/:path*', destination: '/drift-scooter/drift-36v', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-بثلاث-عجلات') + '/:path*', destination: '/kids-scooter/kids-spider', permanent: true },
      { source: '/product/:path*', destination: '/', permanent: true },

      // 4. Old Blog Articles -> Pointing to root categories for Link Juice
      { source: encodeURI('/الدليل-الشامل-للسكوترات-الكهربائية-ث') + '/:path*', destination: '/electric-scooter', permanent: true },
      { source: encodeURI('/كيف-تختار-السكوتر-الكهربائي-المثالي؟').replace('?', '\\?') + '/:path*', destination: '/electric-scooter', permanent: true },
      { source: encodeURI('/أفضل-السكوترات-الكهربائية-للكبار-في-ا') + '/:path*', destination: '/electric-scooter', permanent: true },
      { source: encodeURI('/دليل-المشتري-كم-تكلفة-السكوترات-الكهرب') + '/:path*', destination: '/electric-scooter', permanent: true },
    ];
  },
};

export default nextConfig;
