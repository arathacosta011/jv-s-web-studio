import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bayron",
    text: "The styling powder from HEEM is unreal. My cut lasted clean for days. JV really knows what he's doing — both in the chair and with his products.",
    rating: 5,
  },
  {
    name: "Diego O.",
    text: "I grabbed the aftershave after my cut and it's the best I've used. No irritation, smells clean, and my skin felt right. This is real quality.",
    rating: 5,
  },
  {
    name: "Marcus R.",
    text: "Bought the full HEEM collection. Everything from the powder to the cape is premium. You can tell a barber made this — not some random brand.",
    rating: 5,
  },
  {
    name: "Alex T.",
    text: "Found JV through Instagram and his products are just as good as his cuts. HEEM is the real deal — no gimmicks, just results.",
    rating: 5,
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
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            Social Proof
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            WHAT THEY <span className="text-gradient-violet">SAY</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-card relative hover:border-primary/15 transition-all duration-700 group"
            >
              <Quote className="w-10 h-10 text-primary/8 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 font-body text-[15px] leading-[1.8] mb-6">
                "{t.text}"
              </p>
              <div className="divider-glow mb-4" />
              <p className="font-display text-sm font-bold text-gradient-violet tracking-wide">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
