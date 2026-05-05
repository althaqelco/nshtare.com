import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ChevronLeft, ArrowRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';

// Blog content data (shared with listing page)
const blogData: Record<string, any> = {
  'electric-scooter-buying-guide-saudi': {
    title: 'دليل شراء السكوتر الكهربائي في السعودية 2026',
    image: '/images/ui/seo_article_cover_1777998050466.png',
    category: 'دليل شراء',
    date: '2026-05-01',
    readTime: 8,
    ctaCategory: 'electric-scooter',
    ctaLabel: 'تصفح السكوترات الكهربائية',
    content: `
## ما هو السكوتر الكهربائي؟

السكوتر الكهربائي هو وسيلة نقل شخصية تعمل بالبطارية، مصممة للتنقل السريع في المدن والأحياء. يتميز بخفة الوزن، سهولة الطي، وصفر انبعاثات — مما يجعله الخيار الأمثل للتنقل اليومي في المملكة.

## كيف تختار السكوتر المناسب؟

### 1. حدد الاستخدام الأساسي
- **تنقل يومي**: اختر سكوتر بمدى 25-40 كم وسرعة 25-30 كم/س.
- **ترفيه ومغامرة**: ابحث عن سرعة 40+ كم/س وإطارات عريضة.
- **للأطفال**: السلامة أولاً — سرعة محدودة وفرامل مزدوجة.

### 2. المواصفات الأساسية التي يجب مراعاتها

| المواصفة | الحد الأدنى المقبول | المثالي |
|---|---|---|
| السرعة القصوى | 25 كم/س | 35-45 كم/س |
| المدى | 20 كم | 40-65 كم |
| الوزن | 15 كجم | 12-14 كجم |
| حجم العجلة | 8 إنش | 10 إنش |
| قوة المحرك | 250 واط | 350-500 واط |

### 3. الميزانية
- **اقتصادي (500-1000 ريال)**: سكوترات بسيطة للتنقل القصير.
- **متوسط (1000-2000 ريال)**: أداء متوازن وجودة عالية.
- **احترافي (2000+ ريال)**: مدى طويل وسرعة عالية ومقاومة للماء.

## نصيحة نشتري

لا تشتري أبداً سكوتر بدون ضمان. في متجر نشتري، نقدم **ضمان ذهبي لمدة سنة** على المحرك والبطارية واللوحة الأم — لأننا نثق بجودة ما نبيع.
    `,
  },
  'electric-scooter-vs-drift-scooter': {
    title: 'الفرق بين السكوتر الكهربائي وسكوتر الدرفت: أيهما يناسبك؟',
    image: '/images/ui/seo_article_kick_1777998364132.png',
    category: 'مقارنة',
    date: '2026-04-25',
    readTime: 6,
    ctaCategory: 'drift-scooter',
    ctaLabel: 'تصفح سكوترات الدرفت',
    content: `
## السكوتر الكهربائي vs سكوتر الدرفت

كلاهما يعمل بالكهرباء، لكن الفرق شاسع في التصميم والاستخدام. إليك المقارنة الشاملة.

### المقارنة التفصيلية

| المعيار | سكوتر كهربائي | سكوتر درفت |
|---|---|---|
| **الاستخدام** | تنقل يومي | ترفيه ومتعة |
| **السرعة** | 25-45 كم/س | 15-25 كم/س |
| **المدى** | 25-65 كم | 10-20 كم |
| **العمر المناسب** | 14+ | 8+ |
| **السعر** | 800-4000 ريال | 400-1200 ريال |
| **الوزن** | 12-20 كجم | 15-25 كجم |
| **الطي** | نعم (غالباً) | لا |

### متى تختار السكوتر الكهربائي؟
- إذا كنت تحتاج وسيلة تنقل يومية عملية.
- إذا كنت تريد مدى طويل وسرعة أعلى.
- إذا كنت تنقل يومياً للعمل أو الجامعة.

### متى تختار سكوتر الدرفت؟
- إذا كنت تبحث عن المتعة والترفيه.
- إذا كنت تريد هدية مميزة لابنك أو ابنتك.
- إذا كنت تحب الانزلاق والحركات الاستعراضية.

## الخلاصة
لا يوجد "أفضل" مطلق — الأفضل هو ما يناسب احتياجك. تصفح كلا القسمين واختر ما يلبي رغبتك.
    `,
  },
  'electric-scooter-maintenance-tips': {
    title: '7 نصائح ذهبية لصيانة السكوتر الكهربائي وإطالة عمره',
    image: '/images/ui/hero_kick_scooter_1777998272875.png',
    category: 'صيانة',
    date: '2026-04-18',
    readTime: 5,
    ctaCategory: 'spare-parts',
    ctaLabel: 'تصفح قطع الغيار',
    content: `
## كيف تحافظ على سكوترك الكهربائي؟

سكوترك الكهربائي استثمار يستحق العناية. اتبع هذه النصائح لإطالة عمره لسنوات.

### 1. لا تفرغ البطارية بالكامل أبداً
حافظ على مستوى الشحن بين 20% و 80%. التفريغ الكامل يقلل عمر البطارية بنسبة 30%.

### 2. تنظيف دوري (كل أسبوعين)
امسح الجسم بقطعة مبللة. لا تستخدم الماء المباشر أبداً — حتى لو كان السكوتر مقاوم للرذاذ.

### 3. فحص ضغط الإطارات
الإطارات المنفوخة بشكل صحيح تزيد المدى وتحسن الفرملة. افحصها كل أسبوع.

### 4. فحص الفرامل شهرياً
الفرامل هي نظام السلامة الأول. إذا لاحظت أي تأخر في الاستجابة، غيّر وسادات الفرامل فوراً.

### 5. خزّن في مكان جاف
الرطوبة عدو البطارية والإلكترونيات. خزّن سكوترك في مكان جاف بدرجة حرارة معتدلة.

### 6. شد المسامير والبراغي
الاهتزاز أثناء القيادة يفكك المسامير تدريجياً. افحص وشدّ جميع البراغي شهرياً.

### 7. استخدم قطع غيار أصلية فقط
القطع الرخيصة تضر بالسكوتر وتلغي الضمان. اشترِ دائماً من متجر معتمد مثل نشتري.
    `,
  },
  'electric-scooter-prices-saudi-2026': {
    title: 'أسعار السكوترات الكهربائية في السعودية 2026 — دليل محدّث',
    image: '/images/ui/og_kick_scooter_1777998286952.png',
    category: 'أسعار',
    date: '2026-04-10',
    readTime: 7,
    ctaCategory: 'electric-scooter',
    ctaLabel: 'تسوق السكوترات الآن',
    content: `
## أسعار السكوترات الكهربائية في السعودية 2026

إليك جدول محدّث بأسعار أشهر السكوترات المتوفرة في السوق السعودي.

### جدول الأسعار

| الموديل | السعر (ريال) | المدى | السرعة | التقييم |
|---|---|---|---|---|
| Xiaomi Mi M365 | 1,299 | 30 كم | 25 كم/س | ⭐ 4.5 |
| Ninebot Max | 1,899 | 65 كم | 45 كم/س | ⭐ 4.8 |
| سكوتر بمقعد | 2,199 | 40 كم | 35 كم/س | ⭐ 4.6 |
| Off-Road Pro | 3,499 | 50 كم | 55 كم/س | ⭐ 4.9 |
| درفت 36V | 599 | 15 كم | 20 كم/س | ⭐ 4.7 |
| درفت 48V | 899 | 20 كم | 25 كم/س | ⭐ 4.8 |

### ما الذي يؤثر على السعر؟

1. **سعة البطارية**: كلما زادت، زاد المدى والسعر.
2. **قوة المحرك**: 250 واط (اقتصادي) → 500+ واط (احترافي).
3. **العلامة التجارية**: Xiaomi و Ninebot أغلى من البراندات المحلية.
4. **الميزات الإضافية**: بلوتوث، شاشة، تطبيق ذكي.

### أين تشتري بأفضل سعر؟

متجر نشتري يوفر أسعار تنافسية مع **ضمان ذهبي سنة + شحن مجاني + دفع عند الاستلام** لجميع مدن المملكة.
    `,
  },
};

const allSlugs = Object.keys(blogData);

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return {};
  return {
    title: `${post.title} | مدونة نشتري`,
    description: post.content.substring(0, 160).replace(/[#\n]/g, '').trim(),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-text">المقال غير موجود</div>;
  }

  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "المدونة", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ];

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="rtl">
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        headline={post.title}
        datePublished={post.date}
        image={post.image}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        {/* Header */}
        <Link href="/blog" className="inline-flex items-center gap-1 text-primary font-bold hover:underline mb-8">
          <ArrowRight className="h-4 w-4" />
          العودة للمدونة
        </Link>

        <div className="mb-8">
          <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-lg mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-text mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} دقائق قراءة
            </span>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-border">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-text leading-relaxed
          [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-text [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-text [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-text-secondary [&_p]:mb-4
          [&_ul]:text-text-secondary [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:mr-4
          [&_ol]:text-text-secondary [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:mr-4
          [&_li]:leading-relaxed
          [&_strong]:text-text [&_strong]:font-bold
          [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6
          [&_th]:bg-surface [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:text-text [&_th]:font-bold [&_th]:text-sm
          [&_td]:border [&_td]:border-border [&_td]:p-3 [&_td]:text-text-secondary [&_td]:text-sm
        ">
          {post.content.split('\n').map((line: string, i: number) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
            if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
            if (trimmed.startsWith('| ')) {
              // Simple table rendering
              const cells = trimmed.split('|').filter(Boolean).map(c => c.trim());
              if (trimmed.includes('---')) return null;
              const isHeader = i > 0 && post.content.split('\n')[i + 1]?.includes('---');
              const Tag = isHeader ? 'th' : 'td';
              return (
                <tr key={i}>
                  {cells.map((cell: string, j: number) => <Tag key={j}>{cell}</Tag>)}
                </tr>
              );
            }
            if (trimmed.startsWith('- **')) {
              const text = trimmed.replace('- ', '');
              return <li key={i} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
            }
            if (trimmed.startsWith('- ')) return <li key={i}>{trimmed.replace('- ', '')}</li>;
            if (trimmed.match(/^\d+\./)) return <li key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
            return <p key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
          })}
        </div>

        {/* CTA — One-way link to category page (Plan 06 §4.3 Anti-Cannibalization) */}
        <div className="mt-12 bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-black mb-3">جاهز للشراء؟</h3>
          <p className="text-white/80 mb-6">تصفح تشكيلتنا بأفضل الأسعار مع ضمان سنة والدفع عند الاستلام.</p>
          <Link href={`/${post.ctaCategory}`} className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
            {post.ctaLabel}
          </Link>
        </div>

      </div>
    </div>
  );
}
