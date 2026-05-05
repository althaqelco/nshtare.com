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
});

export const metadata = {
  title: "سكوترات نشتري | المتجر الأفضل في السعودية",
  description: "اكتشف أفضل السكوترات الكهربائية والدرفت في السعودية. الدفع عند الاستلام.",
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
