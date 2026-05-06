import { Tajawal } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/cart/CartSidebar";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import SpeculationRules from "@/components/performance/SpeculationRules";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata = {
  title: {
    default: "سكوترات نشتري | المتجر الأفضل في السعودية",
    template: "%s | نشتري",
  },
  description: "اكتشف أفضل السكوترات الكهربائية والدرفت في السعودية. ضمان سنة، شحن مجاني، والدفع عند الاستلام. توصيل لجميع مدن المملكة.",
  metadataBase: new URL("https://nshtare.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    siteName: "نشتري - Nshtare",
    title: "سكوترات نشتري | المتجر الأفضل في السعودية",
    description: "اكتشف أفضل السكوترات الكهربائية والدرفت في السعودية. ضمان سنة، شحن مجاني، والدفع عند الاستلام.",
    url: "https://nshtare.com",
    images: [
      {
        url: "/images/brand/nshtare_logo_1777997576506.png",
        width: 1200,
        height: 630,
        alt: "نشتري - المتجر الأول للسكوترات الكهربائية في السعودية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nshtare",
    title: "سكوترات نشتري | المتجر الأفضل في السعودية",
    description: "اكتشف أفضل السكوترات الكهربائية والدرفت في السعودية.",
    images: ["/images/brand/nshtare_logo_1777997576506.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: "your-verification-code",
  },
};

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-SA" dir="rtl">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <SpeculationRules />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${tajawal.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <CartProvider>
          <Header />
          <CartSidebar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
