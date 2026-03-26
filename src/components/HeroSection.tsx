import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-4 md:pt-24 md:pb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="relative container text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-2"
        >
          The Full Line
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold"
        >
          SHOP <span className="text-gradient-violet">HEEM</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-4 max-w-md mx-auto font-body leading-relaxed"
        >
          Every product built by JV, tested in the chair, and made for results.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
