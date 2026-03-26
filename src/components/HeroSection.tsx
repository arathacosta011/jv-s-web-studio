import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(ellipse at 50% 0%, hsl(270 85% 65% / 0.08) 0%, transparent 60%)",
      }} />

      <div className="relative container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[0.95] mb-4"
        >
          PREMIUM GROOMING
          <br />
          <span className="text-gradient-violet">BY JV</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground max-w-md mx-auto mb-8 text-base"
        >
          Professional-grade hair products built by a barber, tested in the chair.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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
