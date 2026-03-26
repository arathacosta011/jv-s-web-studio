import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bayron",
    text: "Best barber I've ever been to. JV takes his time and makes sure everything is perfect. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Diego O.",
    text: "Fire cut and design 🔥 JV is the only barber I trust with my hair. The consistency is insane — every single time.",
    rating: 5,
  },
  {
    name: "Marcus R.",
    text: "Walked in looking rough, walked out looking like a different person. JV doesn't just cut hair, he transforms you.",
    rating: 5,
  },
  {
    name: "Alex T.",
    text: "Found JV through Instagram and the work speaks for itself. Clean, sharp, and professional every time. Can't recommend enough.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Client Reviews
          </p>
          <h2 className="font-display text-5xl md:text-6xl">
            WHAT THEY <span className="text-gradient-gold">SAY</span>
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
              className="bg-card border border-border rounded-xl p-6 shadow-card relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="font-display text-lg text-gradient-gold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
