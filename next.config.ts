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
      { source: '/wishlist/:path*', destination: '/', permanent: true },
      { source: '/author/admin/:path*', destination: '/', permanent: true },
      { source: encodeURI('/اتصل-بنا'), destination: '/contact', permanent: true },
      { source: encodeURI('/سياسة-الضمان-الذهبي'), destination: '/warranty', permanent: true },
      { source: encodeURI('/سياسة-الشحن'), destination: '/shipping', permanent: true },
      { source: encodeURI('/سياسة-الاستبدال-و-الاسترجاع'), destination: '/faq', permanent: true },
      { source: encodeURI('/سياسة-الشحن-والتوصيل'), destination: '/shipping', permanent: true },
      { source: encodeURI('/الأسئلة-الشائعة-faq'), destination: '/faq', permanent: true },

      // 2. Old WooCommerce Categories (Catching Pagination with :path*)
      { source: '/product-category/electric-scooters/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/xiaomi-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/monster-scooter/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/scooter-drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/electric-scooter-drift/:path*', destination: '/drift-scooter', permanent: true },
      { source: '/product-category/electric-scooter-for-adults/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/smart-scooter/:path*', destination: '/smart-scooter', permanent: true },
      { source: '/product-category/cheap-electric-scooter/:path*', destination: '/electric-scooter', permanent: true },
      { source: '/product-category/girls-scooter/:path*', destination: '/kids-scooter', permanent: true },
      // Catch-all fallback for any other uncaught product categories
      { source: '/product-category/:path*', destination: '/', permanent: true },

      // 3. Old Products
      { source: '/product/' + encodeURI('سكوتر-كهربائي-الأداء-القوي-والتصميم') + '/:path*', destination: '/electric-scooter/ninebot-max', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-للأطفال-بتصميم-أنيق-وعم') + '/:path*', destination: '/kids-scooter/kids-spider', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-ذكي-سكوتر-دريفت-آمن-وقو') + '/:path*', destination: '/drift-scooter/drift-36v', permanent: true },
      { source: '/product/' + encodeURI('سكوتر-كهربائي-m365-pro-قوة،-أداء،-وسهولة-حمل') + '/:path*', destination: '/electric-scooter/xiaomi-m365', permanent: true },
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
