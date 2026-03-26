import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductBenefits from "@/components/ProductBenefits";
import ProductCollection from "@/components/ProductCollection";
import VideoProductSection from "@/components/VideoProductSection";
import TransformationsSection from "@/components/TransformationsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingCTA from "@/components/BookingCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <ProductBenefits />
      <ProductCollection />
      <VideoProductSection />
      <TransformationsSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingCTA />
      <FAQSection />
      <Footer />
      <MobileBookingBar />
    </div>
  );
};

export default Index;
