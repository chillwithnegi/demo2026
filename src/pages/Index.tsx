import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import JourneySection from "@/components/JourneySection";
import PrecisionSection from "@/components/PrecisionSection";
import PhilosophySection from "@/components/PhilosophySection";
import SolutionsSection from "@/components/SolutionsSection";
import ApproachSection from "@/components/ApproachSection";
import LandmarkSection from "@/components/LandmarkSection";
import InvestmentSection from "@/components/InvestmentSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import StrategicApproach from "@/components/StrategicApproach";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FounderSection from "@/components/FounderSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VisionSection />
        <JourneySection />
        <PrecisionSection />
        <PhilosophySection />
        <SolutionsSection />
        <ApproachSection />
        <LandmarkSection />
        <InvestmentSection />
        <OpportunitiesSection />
        <StrategicApproach />
        <ServicesSection />
        <ExpertiseSection />
        <FounderSection />
        <PortfolioGallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
