
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutClarissaSection from "@/components/AboutClarissaSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlansSection from "@/components/PlansSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Clarissa Mendes | Consultora Embracon";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <AboutClarissaSection />
      <HowItWorksSection />
      <PlansSection />
      <ContactFormSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
