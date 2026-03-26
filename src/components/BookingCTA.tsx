import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import heemLogo from "@/assets/heem-logo.png";

const ShopCTA = () => {
  const { setIsOpen } = useCart();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(ellipse at 50% 40%, hsl(270 85% 65% / 0.1) 0%, transparent 60%)",
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-10 glow-violet"
          >
            <ShoppingCart className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.92]">
            READY TO
            <br />
            <span className="text-gradient-violet">LEVEL UP?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Your grooming routine deserves better. Shop HEEM and see
            what real products do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#collection" className="flex items-center gap-2">Shop <img src={heemLogo} alt="HEEM" className="h-5 w-auto" style={{ filter: "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(260deg)" }} /></a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsOpen(true)}>
              <ShoppingCart className="w-4 h-4" />
              View Cart
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopCTA;
