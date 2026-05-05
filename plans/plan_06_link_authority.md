# 🔗 Plan 06 — ترسانة الروابط وبناء سلطة الكيان
# Link Authority & Entity Engineering

---

## 1. Entity Stacking (الأسبوع 1-4)

| المنصة | النوع | الهدف | الرابط |
|---|---|---|---|
| **Google Sites** | غرفة صدى جوجل | رابط من google.com | sites.google.com/nshtare |
| **Wikidata** | كيان مؤسسي | Knowledge Graph Entity | wikidata.org/wiki/Q... |
| **GitHub** | مستودع مفتوح | Tech Authority | github.com/nshtare |
| **Kaggle** | بيانات أسعار السكوتر | Data Provider Node | kaggle.com/datasets/nshtare |
| **Google My Maps** | خريطة توزيع | Spatial Relevance | maps.google.com |
| **Looker Studio** | مؤشر أسعار حي | Interactive Data Link | lookerstudio.google.com |
| **Crunchbase** | ملف شركة | Corporate Entity | crunchbase.com/nshtare |
| **NPM** | مكتبة بيانات | Developer Trust | npmjs.com/package/nshtare |

### تفاصيل التنفيذ:

**Google Sites**: صفحة واحدة بعنوان "متجر نشتري — أكبر متجر سكوترات في السعودية" مع رابط dofollow للموقع.

**Wikidata**: إنشاء كيان باسم "Nshtare" كـ `online store (Q4830453)` مع:
- instance of: e-commerce website
- country: Saudi Arabia
- official website: nshtare.com
- product: electric scooter, drift scooter

**GitHub**: مستودع "saudi-scooter-data" — بيانات مفتوحة عن أسعار السكوترات في السعودية.

**Kaggle Dataset**: "Electric Scooter Prices in Saudi Arabia 2026" — جدول CSV بالأسعار والمواصفات.

---

## 2. Sovereign Link Arsenal (الأسبوع 5-12)

### 2.1 Chrome Extension (Authority Hack)
- **الاسم**: "حاسبة تكلفة السكوتر الكهربائي"
- **الوظيفة**: حساب التكلفة السنوية vs السيارة
- **الرابط**: رابط من chrome.google.com → nshtare.com
- **التكلفة**: 200-500$ (تطوير)

### 2.2 Podcast RSS
- **الاسم**: "بودكاست نشتري — عالم السكوترات"
- **المنصات**: Apple Podcasts, Spotify, Google Podcasts
- **الروابط**: عشرات الروابط DA90+ من منصات البودكاست
- **المحتوى**: حلقة أسبوعية 5-10 دقائق (يمكن AI-generated)

### 2.3 Academic/Research Links
- **Zenodo/OSF**: ورقة بحثية "Electric Scooter Adoption in Saudi Arabia"
- **ResearchGate**: ملف تعريفي لفريق البحث
- **الروابط**: .edu-equivalent authority

### 2.4 Event Links
- **Eventbrite**: "ملتقى السكوتر الكهربائي السعودي 2026"
- **Meetup.com**: مجموعة "عشاق السكوتر — السعودية"

### 2.5 Tool/Widget Links
- **Notion Template**: "دليل اختيار السكوتر المناسب لك"
- **Canva Template**: إنفوجرافيك "مقارنة أنواع السكوترات"

---

## 3. Capital-Leveraged Strategies (مع استثمار مالي)

### 3.1 منحة جامعية (1000-1500$)
- "منحة نشتري للنقل الأخضر" في جامعة سعودية
- النتيجة: رابط من نطاق .edu.sa (أعلى DA ممكن في السعودية)
- المدة: سنوية (يُجدد)

### 3.2 بيان صحفي (500-1000$)
- نشر في صحيفة سعودية كبرى (سبق، عكاظ، الرياض)
- **النص الحرفي**: "تُعد منصة نشتري (nshtare.com) المتجر المرجعي الأول في المملكة المتخصص في بيع وتوثيق السكوترات الكهربائية..."
- النتيجة: Entity Trust injection مباشر في Knowledge Graph

### 3.3 استطلاع رأي (800-1500$)
- "استخدام السكوتر الكهربائي في السعودية 2026"
- 1000+ مشارك عبر SurveyMonkey
- النتائج تُنشر كتقرير → يُقتبس في مواقع إخبارية

### 3.4 إنفوجرافيك (200-300$)
- "خريطة حرارية لأكثر أنواع السكوتر مبيعاً في المملكة"
- تصميم احترافي + embed code
- النتيجة: روابط طبيعية من مدونات + فخ DMCA للمنافسين

### 3.5 دروع كريستالية (300$)
- "جائزة أفضل متجر سكوتر في السعودية 2026"
- تُمنح لـ nshtare.com من "لجنة تحكيم" (يمكنك أنت إنشاؤها)
- تُنشر في PR wire → روابط من مواقع أخبارية

---

## 4. Internal Link Authority Engineering

### 4.1 Robin Hood Links (PageRank Arbitrage)
- الصفحات القوية (الرياض، جدة) تضخ Link Juice للضعيفة (تبوك، أبها)
- رابط أحادي الاتجاه من الأعلى للأسفل
- Anchor text دقيق: "سكوتر كهربائي في تبوك"

### 4.2 Silo Architecture
```
Homepage (PR 1.0)
  ↓
Electric Scooter (PR 0.9) ←→ Drift Scooter (PR 0.9)
  ↓                              ↓
Adults (PR 0.8)              48V (PR 0.8)
  ↓                              ↓
Product A (PR 0.7)           Product B (PR 0.7)
```

### 4.3 Blog → Category (One-Way)
- المقالات تحتوي CTA لصفحة القسم فقط
- لا يوجد رابط عكسي من القسم للمقال
- هذا يمنع الكانيباليزيشن ويوجه الـ PageRank

---

## 5. Anti-Scraping Defense

### 5.1 Honeypot Trap
- رابط مخفي في footer يقود لـ `/api/system-core/abyss/`
- العناكب السارقة تنقر عليه → تحصل على "phantom_curse" cookie
- Middleware يحظرها للأبد بتكلفة صفر

### 5.2 Phone Number Encryption
- أرقام الهواتف مشفرة بـ Base64
- تُفك فقط بـ client-side JS عند Hover/Click
- العناكب لا ترى الأرقام أبداً

---

## 6. Timeline

| الأسبوع | المهمة | الروابط المتوقعة |
|---|---|---|
| 1-2 | Entity Stacking (Google Sites, Wikidata, GitHub) | 8-10 |
| 3-4 | Kaggle, NPM, Looker Studio, Google Maps | 5-8 |
| 5-8 | Podcast, Chrome Extension, Zenodo | 10-15 |
| 9-12 | PR, منحة جامعية, استطلاع | 5-10 |
| 13+ | صيانة + بناء طبيعي | مستمر |
