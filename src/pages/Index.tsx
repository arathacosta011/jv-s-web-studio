import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TransformationsSection from "@/components/TransformationsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
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
      <TransformationsSection />
      <ServicesSection />
      <AboutSection />
      <VideoSection />
      <TestimonialsSection />
      <BookingCTA />
      <FAQSection />
      <Footer />
      <MobileBookingBar />
    </div>
  );
};

export default Index;
