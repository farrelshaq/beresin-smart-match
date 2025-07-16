import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PopularCategories from "@/components/PopularCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustSection />
      <HowItWorksSection />
      <PopularCategories />
      <Footer />
    </div>
  );
};

export default Index;
