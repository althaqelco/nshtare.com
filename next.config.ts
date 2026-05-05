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
      // 1. Core Pages
      { source: '/wishlist', destination: '/', permanent: true },
      { source: '/author/admin', destination: '/', permanent: true },
      { source: encodeURI('/اتصل-بنا'), destination: '/', permanent: true },
      { source: encodeURI('/سياسة-الشحن-والتوصيل'), destination: '/', permanent: true },
      { source: encodeURI('/الأسئلة-الشائعة-faq'), destination: '/', permanent: true },

      // 2. Old WooCommerce Categories
      { source: '/product-category/electric-scooters', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/xiaomi-scooter', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/monster-scooter', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/scooter-drift', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/electric-scooter-drift', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/electric-scooter-for-adults', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/smart-scooter', destination: '/smart-scooter', permanent: true },
      { source: '/product-category/cheap-electric-scooter', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/girls-scooter', destination: '/kids-scooter', permanent: true },

      // 3. Old Products
      { source: '/product/' + encodeURI('سكوتر-كهربائي-الأداء-القوي-والتصميم'), destination: '/product/ninebot-max', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-للأطفال-بتصميم-أنيق-وعم'), destination: '/product/kids-spider', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-ذكي-سكوتر-دريفت-آمن-وقو'), destination: '/product/drift-36v', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-m365-pro-قوة،-أداء،-وسهولة-حمل'), destination: '/product/xiaomi-m365', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-درفت-تريك-52-فولت-1500-واط-تج'), destination: '/product/drift-36v', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-بثلاث-عجلات'), destination: '/product/kids-spider', permanent: true },

      // 4. Old Blog Articles -> Pointing to root categories for Link Juice
      { source: encodeURI('/الدليل-الشامل-للسكوترات-الكهربائية-ث'), destination: '/electric-scooter', permanent: true },
      { source: encodeURI('/كيف-تختار-السكوتر-الكهربائي-المثالي؟').replace('?', '\\?'), destination: '/electric-scooter', permanent: true },
      { source: encodeURI('/أفضل-السكوترات-الكهربائية-للكبار-في-ا'), destination: '/electric-scooter', permanent: true },
      { source: encodeURI('/دليل-المشتري-كم-تكلفة-السكوترات-الكهرب'), destination: '/electric-scooter', permanent: true },
    ];
  },
};

export default nextConfig;
