import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gothic cross pattern background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-rule='evenodd'%3E%3Cpath d='M36 30h8v-8h-2v-4h-4v4h-2v8zm0 20h8v8h-2v4h-4v-4h-2v-8zm-6-6v-8h-8v2h-4v4h4v2h8zm20 0v-8h8v2h4v4h-4v2h-8z'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='40' cy='40' r='6' fill='none' stroke='%23a855f7' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      <div className="absolute inset-0">
        <img
          src="https://heembyjv.com/cdn/shop/files/fixed_bundle_bf3d6c6d-9905-434a-8904-059f43ba4f87.jpg?v=1770447985&width=2000"
          alt="HEEM full product collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/70" />
      </div>

      {/* Pattern overlay on top of image */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-rule='evenodd'%3E%3Cpath d='M36 30h8v-8h-2v-4h-4v4h-2v8zm0 20h8v8h-2v4h-4v-4h-2v-8zm-6-6v-8h-8v2h-4v4h4v2h8zm20 0v-8h8v2h4v4h-4v2h-8z'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='40' cy='40' r='6' fill='none' stroke='%23a855f7' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

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
      </div>
    </section>
  );
};

export default HeroSection;
