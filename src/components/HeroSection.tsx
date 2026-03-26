import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heemLogo from "@/assets/heem-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://heembyjv.com/cdn/shop/files/fixed_bundle_bf3d6c6d-9905-434a-8904-059f43ba4f87.jpg?v=1770447985&width=2000"
          alt="HEEM full product collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>
      <div className="absolute inset-0 bg-noise" />

      <div className="relative container pt-24 pb-12">
        <div className="max-w-2xl">
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
            LYFESTYLE
            <br />
            <span className="text-gradient-violet">NOT A BRAND.</span>
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
              <a href="#collection">Shop HEEM</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#video-product">See It In Action</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-8 mt-14 pt-8 border-t border-border"
          >
            {[
              { value: "HEEM", label: "By JV" },
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
      </div>
    </section>
  );
};

export default HeroSection;
