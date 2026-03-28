import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heemLogo from "@/assets/heem-logo.png";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <video
        ref={(el) => {
          if (!el) return;
          el.muted = true;
          el.defaultMuted = true;
          const play = () => el.play().catch(() => {});
          el.addEventListener("canplay", play, { once: true });
          play();
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        controls={false}
        disablePictureInPicture
        {...({ "webkit-playsinline": "true" } as any)}
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden"
        src="/videos/hero-bg.mp4"
      />

      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative container flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-body text-[11px] tracking-[0.4em] uppercase mb-8"
        >
          Premium Grooming by JV
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 sm:gap-4 mb-6"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            SHOP
          </h1>
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
          transition={{ delay: 0.4 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Every product built by JV, tested in the chair, and made for results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#collection">Shop the Collection</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
