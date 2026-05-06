import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/cart/CartSidebar";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import SpeculationRules from "@/components/performance/SpeculationRules";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Nshtare Scooters | The Best Store in Saudi Arabia",
    template: "%s | Nshtare",
  },
  description: "Discover the best electric and drift scooters in Saudi Arabia. 1 year warranty, free shipping, and cash on delivery. Delivery to all KSA cities.",
  metadataBase: new URL("https://nshtare.com"),
  alternates: {
    canonical: "/en",
    languages: {
      "ar-SA": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Nshtare",
    title: "Nshtare Scooters | The Best Store in Saudi Arabia",
    description: "Discover the best electric and drift scooters in Saudi Arabia. Free shipping & cash on delivery.",
    url: "https://nshtare.com/en",
    images: [
      {
        url: "/images/brand/nshtare_logo_1777997576506.png",
        width: 1200,
        height: 630,
        alt: "Nshtare - The #1 Electric Scooter Store in Saudi Arabia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nshtare",
    title: "Nshtare Scooters | The Best Store in Saudi Arabia",
    description: "Discover the best electric and drift scooters in Saudi Arabia.",
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
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <SpeculationRules />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
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
