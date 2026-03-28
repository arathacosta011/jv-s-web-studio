import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductBenefits from "@/components/ProductBenefits";
import ProductCollection from "@/components/ProductCollection";
import WatchJVSection from "@/components/WatchJVSection";
import TransformationsSection from "@/components/TransformationsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import EmailCapture from "@/components/EmailCapture";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductBenefits />
      <ProductCollection />
      <WatchJVSection />
      <TransformationsSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <EmailCapture />
      <BookingCTA />
      <Footer />
      <MobileBookingBar />
      <CartDrawer />
    </div>
  );
};

export default Index;
