import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
