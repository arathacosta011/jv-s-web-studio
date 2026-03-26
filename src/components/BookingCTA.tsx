import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const ShopCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, hsl(270 80% 65% / 0.08) 0%, transparent 60%)",
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-violet">
            <ShoppingBag className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-7xl font-bold mb-4">
            READY TO
            <br />
            <span className="text-gradient-violet">LEVEL UP?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-md mx-auto">
            Your grooming routine deserves better. Shop the HEEM collection and
            see the difference real products make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Shop HEEM Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.youtube.com/@JVCUTZZ" target="_blank" rel="noopener noreferrer">
                Watch It In Use
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopCTA;
