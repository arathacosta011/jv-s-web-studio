import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Joel",
    text: "Fire like always never disappoints 🔥🔥 Best products too 👀👀",
    rating: 5,
    date: "Jul 2025",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "Da_Boi_Angel",
    text: "Tooooo heemmmm as always best in SD 🤙🏽🔥🔥",
    rating: 5,
    date: "Aug 2025",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "Noah",
    text: "Best barber",
    rating: 5,
    date: "Oct 2025",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "J",
    text: "Fucking Heem 🌟",
    rating: 5,
    date: "Oct 2025",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "Omar",
    text: "Great haircut and great service",
    rating: 5,
    date: "Jul 2025",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "Rodolfo",
    text: "Goat 🐐",
    rating: 5,
    date: "Jul 2025",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "Alexander",
    text: "Bro fr blessed me up!",
    rating: 5,
    date: "Feb 2026",
    source: "Booksy — Confirmed Client",
  },
  {
    name: "Abdulwahid S.",
    text: "10/10 haircut",
    rating: 5,
    date: "Mar 2026",
    source: "Booksy — Confirmed Client",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-glow-radial opacity-15" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            Real Reviews
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            WHAT THEY <span className="text-gradient-violet">SAY</span>
          </h2>
          <p className="text-muted-foreground mt-6 font-body text-sm">
            5.0 ★ — 35 verified reviews on Booksy
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-card relative hover:border-primary/15 transition-all duration-700 group"
            >
              <Quote className="w-8 h-8 text-primary/8 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 font-body text-sm leading-[1.7] mb-4">
                "{t.text}"
              </p>
              <div className="divider-glow mb-3" />
              <p className="font-display text-sm font-bold text-gradient-violet">{t.name}</p>
              <p className="text-[10px] text-muted-foreground font-body mt-1">{t.date} · {t.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
