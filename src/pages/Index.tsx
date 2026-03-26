import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCollection from "@/components/ProductCollection";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <ProductCollection />
      <Footer />
      <MobileBookingBar />
      <CartDrawer />
    </div>
  );
};

export default Index;
