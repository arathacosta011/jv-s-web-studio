import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Droplets, Zap } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Built by a Barber", description: "Every formula created and tested by JV in his own chair — not a lab, not a boardroom." },
  { icon: Shield, title: "Professional Grade", description: "The same products JV uses on every client. If it's not good enough for the chair, it's not HEEM." },
  { icon: Droplets, title: "Real Performance", description: "No fillers, no gimmicks. Clean ingredients engineered for hold, texture, and finish that lasts." },
  { icon: Zap, title: "Visible Results", description: "See the difference from the first use. HEEM products are part of the final look — not an afterthought." },
];

const ProductBenefits = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-radial opacity-25" />

      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-3">Why HEEM</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
            NOT ANOTHER <span className="text-gradient-violet">PRODUCT LINE</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            HEEM exists because JV needed products that actually perform in the chair.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl p-7 hover:border-primary/20 transition-all duration-700 shadow-card hover:shadow-violet text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-14">
          <Button variant="outline" size="lg" asChild><a href="#collection">Explore the Collection</a></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductBenefits;
