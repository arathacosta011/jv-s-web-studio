import { motion } from "framer-motion";
import transform1 from "@/assets/transform-1.jpg";
import transform2 from "@/assets/transform-2.jpg";
import transform3 from "@/assets/transform-3.jpg";

const transformations = [
  { image: transform1, label: "Skin Fade + Textured Top" },
  { image: transform2, label: "Curly to Clean Pompadour" },
  { image: transform3, label: "Long to Sharp Taper Fade" },
];

const TransformationsSection = () => {
  return (
    <section id="transformations" className="py-24 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Before & After
          </p>
          <h2 className="font-display text-5xl md:text-6xl">
            THE <span className="text-gradient-gold">TRANSFORMATION</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Real clients. Real results. Every cut is a complete transformation — 
            not just a trim.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-px flex-1 bg-primary/40" />
                  <span className="text-xs text-primary uppercase tracking-widest font-body">Before → After</span>
                  <span className="h-px flex-1 bg-primary/40" />
                </div>
                <p className="text-foreground font-display text-xl text-center">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
