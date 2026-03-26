import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";

const SHOP_URL = "https://heembyjv.com";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-glow-radial-strong opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow-radial opacity-40" />

      <div className="relative container pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-body text-primary tracking-wider uppercase">Premium Grooming by JV</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.92] mb-8"
            >
              YOUR LOOK.
              <br />
              <span className="text-gradient-violet">YOUR PRODUCT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-body text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              HEEM is the grooming line built by a barber who does the work.
              Real formulas. Real results. Made for the cut, not the shelf.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
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

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-8 mt-14 pt-8 border-t border-border"
            >
              {[
                { value: "5.0★", label: "Rated" },
                { value: "100%", label: "Real Results" },
                { value: "Pro", label: "Grade" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-gradient-violet">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-12 bg-glow-radial-strong animate-pulse-glow rounded-full" />
              <img
                src={heroProduct}
                alt="HEEM premium grooming product"
                width={1920}
                height={1080}
                className="relative w-full max-w-lg rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
