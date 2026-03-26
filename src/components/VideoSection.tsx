import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const SHOP_URL = "https://heembyjv.com";

const VideoSection = () => {
  return (
    <section id="videos" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-glow-radial opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            In Action
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            WATCH <span className="text-gradient-violet">HEEM</span> WORK
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto font-body leading-relaxed">
            See JV use HEEM products on real clients. Every result starts with the right product.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-card bg-card">
            <iframe
              src="https://www.youtube.com/embed/?listType=user_uploads&list=JVCUTZZ"
              title="JVCUTZZ YouTube — HEEM Products in Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Product callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="font-display text-xl font-bold mb-1">Like what you see?</p>
              <p className="text-sm text-muted-foreground font-body">
                Every result in the video starts with HEEM.
              </p>
            </div>
            <Button variant="hero" size="lg" className="shrink-0" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Shop HEEM
              </a>
            </Button>
          </motion.div>

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@JVCUTZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              <Play className="w-4 h-4" />
              More on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
