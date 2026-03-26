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
    <section id="reviews" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-glow-radial opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            Real Feedback
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            WHAT THEY <span className="text-gradient-violet">SAY</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card relative hover:border-primary/20 transition-colors duration-500"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="font-display text-base font-semibold text-gradient-violet">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
