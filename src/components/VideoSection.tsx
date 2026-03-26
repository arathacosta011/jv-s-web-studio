import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Latest Transformation" },
  { id: "dQw4w9WgXcQ", title: "Fade Tutorial" },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Watch the Craft
          </p>
          <h2 className="font-display text-5xl md:text-6xl">
            SEE IT <span className="text-gradient-gold">IN ACTION</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Watch JV work on the{" "}
            <a
              href="https://www.youtube.com/@JVCUTZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              JVCUTZZ YouTube channel
            </a>
            . Transformations, tutorials, and behind-the-chair content.
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-card bg-card">
            <iframe
              src="https://www.youtube.com/embed/?listType=user_uploads&list=JVCUTZZ"
              title="JVCUTZZ YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
            {/* Fallback overlay for when iframe doesn't load */}
            <div className="absolute inset-0 bg-card/90 flex flex-col items-center justify-center pointer-events-none opacity-0 hover:opacity-0">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
              <p className="font-display text-2xl">Watch on YouTube</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.youtube.com/@JVCUTZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-body text-sm"
            >
              <Play className="w-4 h-4" />
              Visit the full JVCUTZZ YouTube Channel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
