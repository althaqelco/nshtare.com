import React from 'react';
import { notFound } from 'next/navigation';
import { categories, cities, getCategoryBySlug, getCityBySlug, getSubcategoryBySlug, getSubcategoriesByParent, getProductsByCategory, getProductsBySubcategory, getProductBySlug } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Zap, MapPin, Truck, ChevronRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductDetails from '@/components/product/ProductDetails';
import RelatedProducts from '@/components/product/RelatedProducts';
import DirectAnswerBox from '@/components/seo/DirectAnswerBox';
import LocalMarketStats from '@/components/seo/LocalMarketStats';
import PriceComparisonTable from '@/components/product/PriceComparisonTable';
import DynamicFAQ from '@/components/seo/DynamicFAQ';

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  const { subcategories, products } = await import('@/lib/data');

  // Cities
  categories.forEach((cat) => {
    cities.forEach((city) => {
      params.push({ category: cat.slug, slug: city.slug });
    });
  });

  // Subcategories
  for (const sub of subcategories) {
    params.push({ category: sub.parentSlug, slug: sub.slug });
  }

  // Products
  for (const product of products) {
    params.push({ category: product.categorySlug, slug: product.slug });
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: catSlug, slug } = await params;
  const category = getCategoryBySlug(catSlug);
  if (!category) return {};

  const product = getProductBySlug(slug);
  if (product && product.categorySlug === catSlug) {
    const ogUrl = new URL('https://nshtare.com/api/og');
    ogUrl.searchParams.set('title', product.name);
    ogUrl.searchParams.set('price', product.price.toString());
    ogUrl.searchParams.set('image', product.image);

    return {
      title: `${product.name} | نشتري`,
      description: `تسوق ${product.name} بأفضل سعر. ضمان سنة، شحن سريع لجميع مدن السعودية، والدفع عند الاستلام.`,
      openGraph: {
        images: [
          {
            url: ogUrl.toString(),
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [ogUrl.toString()],
      },
    };
  }

  const city = getCityBySlug(slug);
  if (city) {
    const month = new Date().toLocaleString('ar-SA', { month: 'long' });
    const year = new Date().getFullYear();
    return {
      title: `أفضل ${category.nameAr} في ${city.nameAr} | أسعار ${month} ${year} 🥇`,
      description: `قارن بين أفضل ${category.nameAr} في ${city.nameAr}. أسعار محدثة لشهر ${month} ${year}. توصيل لباب بيتك + دفع عند الاستلام.`,
    };
  }

  const sub = getSubcategoryBySlug(catSlug, slug);
  if (sub) {
    return {
      title: `${sub.nameAr} — أفضل الأسعار والعروض | نشتري`,
      description: `تسوق ${sub.nameAr} من متجر نشتري. ضمان سنة كاملة، شحن سريع لجميع مدن السعودية، والدفع عند الاستلام.`,
    };
  }

  return {};
}

export default async function CategorySlugPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: catSlug, slug } = await params;
  const category = getCategoryBySlug(catSlug);
  if (!category) notFound();

  const product = getProductBySlug(slug);
  if (product && product.categorySlug === catSlug) {
    const productBreadcrumbs = [
      { name: "الرئيسية", url: "/" },
      { name: category.nameAr, url: `/${category.slug}` },
      { name: product.name, url: `/${product.categorySlug}/${product.slug}` },
    ];
    return (
      <>
        <BreadcrumbSchema items={productBreadcrumbs} />
        <ProductDetails product={product} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedProducts currentProductId={product.id} categorySlug={product.categorySlug} />
        </div>
      </>
    );
  }

  const city = getCityBySlug(slug);
  const sub = getSubcategoryBySlug(catSlug, slug);

  if (city) return <CityPage category={category} city={city} />;
  if (sub) return <SubcategoryPage category={category} sub={sub} />;

  notFound();
}


// ──── City Page ────
function CityPage({ category, city }: { category: any; city: any }) {
  const products = getProductsByCategory(category.slug);
  const breadcrumbItems = [
    { name: "الرئيسية", url: "/" },
    { name: category.nameAr, url: `/${category.slug}` },
    { name: city.nameAr, url: `/${category.slug}/${city.slug}` }
  ];

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12">
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl gap-8">
          <div className="absolute inset-0 bg-[url('/images/ui/banner_flash_sale.webp')] bg-cover bg-center opacity-10"></div>
          <div className="flex-1 relative z-10 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="h-4 w-4" />
              توصيل متاح إلى {city.nameAr}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
              أفضل {category.nameAr} في {city.nameAr}
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              اكتشف التشكيلة الأكبر من {category.nameAr} المعتمدة. نوفر توصيل سريع إلى كافة أحياء {city.nameAr} مع خيار الدفع عند الاستلام.
            </p>
          </div>
          <div className="relative z-10 text-8xl md:text-[120px] opacity-80 filter drop-shadow-2xl">
            {category.icon}
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-secondary/10 p-4 rounded-full text-secondary">
            <Truck className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text mb-2">معلومات التوصيل إلى {city.nameAr}</h2>
            <p className="text-text-secondary">
              يستغرق توصيل <strong>{category.nameAr}</strong> إلى مدينة <strong>{city.nameAr}</strong> عادةً من 2 إلى 4 أيام عمل. جميع الطلبات مؤهلة لخدمة الدفع عند الاستلام، وتشمل ضمان الوكيل المحلي لمدة عام كامل.
            </p>
          </div>
        </div>

        <DirectAnswerBox 
          categoryAr={category.nameAr}
          cityAr={city.nameAr}
          productCount={products.length}
          minPrice={products.length > 0 ? Math.min(...products.map(p => p.price)) : 0}
        />

        <LocalMarketStats cityAr={city.nameAr} serviceAr={category.nameAr} />

        <ProductGrid products={products} lang="ar" />

        <PriceComparisonTable 
          products={products}
          categoryAr={category.nameAr}
          cityAr={city.nameAr}
        />

        <DynamicFAQ
          categoryAr={category.nameAr}
          categoryEn={category.nameEn}
          cityAr={city.nameAr}
          minPrice={products.length > 0 ? Math.min(...products.map(p => p.price)) : 0}
          maxPrice={products.length > 0 ? Math.max(...products.map(p => p.price)) : 0}
        />
      </div>
    </div>
  );
}

// ──── Subcategory Page ────
function SubcategoryPage({ category, sub }: { category: any; sub: any }) {
  const products = getProductsBySubcategory(category.slug, sub.slug);
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: category.nameAr, url: `/${category.slug}` },
    { name: sub.nameAr, url: `/${category.slug}/${sub.slug}` },
  ];

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <ChevronRight className="h-3 w-3 rotate-180" />
          <Link href={`/${category.slug}`} className="hover:text-primary transition-colors">{category.nameAr}</Link>
          <ChevronRight className="h-3 w-3 rotate-180" />
          <span className="text-text font-bold">{sub.nameAr}</span>
        </nav>

        <div className="bg-gradient-to-l from-primary to-primary-dark text-white rounded-3xl p-8 md:p-16 mb-12 text-center relative overflow-hidden shadow-xl">
          <span className="text-5xl md:text-7xl mb-6 block">{sub.icon}</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{sub.nameAr}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            اكتشف أفضل {sub.nameAr} بأسعار تنافسية. ضمان الوكيل + الدفع عند الاستلام.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text mb-6">منتجات {sub.nameAr} ({products.length})</h2>

        {products.length === 0 ? (
          <div className="bg-surface p-12 rounded-2xl text-center border border-border">
            <p className="text-text-secondary text-lg mb-4">قريباً سيتم إضافة منتجات في هذا القسم.</p>
            <Link href={`/${category.slug}`} className="text-primary font-bold hover:underline">
              تصفح جميع {category.nameAr} ←
            </Link>
          </div>
        ) : (
          <ProductGrid products={products} lang="ar" />
        )}

        <div className="mt-12 bg-surface p-8 rounded-3xl border border-border text-center">
          <p className="text-text-secondary mb-4">هل تبحث عن أقسام أخرى في {category.nameAr}؟</p>
          <Link href={`/${category.slug}`} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors">
            عرض جميع {category.nameAr}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ──── Shared Product Grid ────
function ProductGrid({ products, lang }: { products: any[]; lang: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      {products.map((product: any) => (
        <div key={product.id} className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
          <Link href={`/${product.categorySlug}/${product.slug}`} className="relative h-64 bg-bg w-full p-6 block overflow-hidden">
            {product.originalPrice && (
              <div className="absolute top-3 right-3 z-10 bg-error text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                <Zap className="h-3 w-3 fill-current" />
                خصم
              </div>
            )}
            <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
          </Link>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-1 text-accent mb-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-bold text-text">{product.rating}</span>
              <span className="text-xs text-text-secondary">({product.reviewsCount})</span>
            </div>
            <Link href={`/${product.categorySlug}/${product.slug}`} className="hover:text-primary transition-colors">
              <h3 className="font-bold text-text text-lg mb-2 line-clamp-2 leading-tight">{product.name}</h3>
            </Link>
            <div className="mt-auto pt-4 flex items-center justify-between">
              <div>
                <div className="font-black text-primary text-xl">{product.price.toLocaleString()} ر.س</div>
                {product.originalPrice && (
                  <div className="text-sm text-text-secondary line-through">{product.originalPrice.toLocaleString()} ر.س</div>
                )}
              </div>
              <div className="bg-success/10 text-success rounded p-2" title="دفع عند الاستلام">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
