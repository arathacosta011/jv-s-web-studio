import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const SHOP_URL = "https://heembyjv.com";

const VideoSection = () => {
  return (
    <section id="videos" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glow-radial opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            Watch It Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            SEE <span className="text-gradient-violet">HEEM</span> IN ACTION
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Watch JV use HEEM products in real cuts on the{" "}
            <a
              href="https://www.youtube.com/@JVCUTZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              JVCUTZZ YouTube channel
            </a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-card bg-card">
            <iframe
              src="https://www.youtube.com/embed/?listType=user_uploads&list=JVCUTZZ"
              title="JVCUTZZ YouTube — HEEM Products in Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Product callout under video */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <p className="font-display text-lg font-semibold">Like what you see?</p>
              <p className="text-sm text-muted-foreground font-body">
                Every result in the video starts with HEEM products.
              </p>
            </div>
            <Button variant="hero" size="default" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Shop HEEM
              </a>
            </Button>
          </motion.div>

          <div className="text-center mt-6">
            <a
              href="https://www.youtube.com/@JVCUTZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-body text-sm"
            >
              <Play className="w-4 h-4" />
              Watch more on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
