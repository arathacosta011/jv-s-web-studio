import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";

const SHOP_URL = "https://heembyjv.com";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-radial opacity-60" />

      <div className="relative container pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4"
            >
              Premium Grooming by JV
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
            >
              YOUR LOOK.
              <br />
              <span className="text-gradient-violet">YOUR PRODUCT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-body text-lg text-muted-foreground max-w-md mb-8"
            >
              HEEM is the grooming line built by a barber who does the work.
              Real formulas. Real results. Made for the cut, not the shelf.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Shop HEEM
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#results">See the Results</a>
              </Button>
            </motion.div>
          </div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-glow-radial animate-pulse-glow" />
              <img
                src={heroProduct}
                alt="HEEM premium grooming product"
                width={1920}
                height={1080}
                className="relative w-full max-w-lg rounded-2xl shadow-card"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
