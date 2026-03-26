import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heemLogo from "@/assets/heem-logo.png";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-2 md:pt-28 md:pb-4 relative">
      <div className="absolute inset-0 bg-noise" />

      <div className="relative container flex flex-col items-center text-center">
        {/* SHOP HEEM heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 sm:gap-4 mb-2"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            SHOP
          </h1>

          {/* Spinning HEEM logo */}
          <div className="relative">
            <div
              className="absolute inset-0 blur-[40px] opacity-40 scale-150"
              style={{ background: "radial-gradient(circle, hsl(270 85% 60% / 0.6), transparent 70%)" }}
            />
            <motion.img
              src={heemLogo}
              alt="HEEM"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="h-[7.5rem] sm:h-[9.6rem] md:h-[11.4rem] lg:h-[13.5rem] w-auto relative z-10"
              style={{
                filter: "drop-shadow(0 0 20px hsl(270 85% 60% / 0.4))",
              }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground font-body text-base md:text-lg max-w-md mx-auto mb-5"
        >
          Every product built by JV, tested in the chair, and made for results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#collection">Shop Now</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
