import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeBottomCTA from "@/components/home/HomeBottomCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar lang="ar" />
      <CategoryGrid lang="ar" />
      <FeaturedProducts lang="ar" />
      <HomeBottomCTA />
    </>
  );
}
