import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heemLogo from "@/assets/heem-logo.png";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-6 md:pt-28 md:pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="relative container flex flex-col items-center text-center">
        {/* 3D Rotating HEEM Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          {/* Glow layers behind logo */}
          <div className="absolute inset-0 blur-[60px] opacity-40 rounded-full" 
            style={{ background: "radial-gradient(circle, hsl(270 85% 60% / 0.6), transparent 70%)" }} 
          />
          <div className="absolute inset-0 blur-[100px] opacity-20 rounded-full scale-150" 
            style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.5), transparent 70%)" }} 
          />
          
          {/* 3D rotating container */}
          <motion.div
            animate={{ 
              rotateY: [0, 8, 0, -8, 0],
              rotateX: [0, -3, 0, 3, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            <img 
              src={heemLogo} 
              alt="HEEM" 
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto relative z-10 drop-shadow-[0_0_30px_hsl(270_85%_60%/0.4)]"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5)) drop-shadow(0 0 40px hsl(270 85% 60% / 0.3))",
              }}
            />
          </motion.div>
        </motion.div>

        {/* "Shop" text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase text-muted-foreground mb-2"
        >
          Shop the Collection
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground/70 font-body text-sm max-w-sm mx-auto mb-8"
        >
          Professional-grade grooming built by a barber, tested in the chair.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
