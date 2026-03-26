import { motion } from "framer-motion";
import { Sparkles, Shield, Droplets, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import productCollection from "@/assets/product-collection.jpg";

const SHOP_URL = "https://heembyjv.com";

const benefits = [
  {
    icon: Sparkles,
    title: "Professional Grade",
    description: "Tested in the chair. Not a lab. Every formula earns its place in the lineup.",
  },
  {
    icon: Shield,
    title: "Clean Ingredients",
    description: "No fillers. No shortcuts. Performance-first formulas that actually work.",
  },
  {
    icon: Droplets,
    title: "Lightweight Hold",
    description: "Natural finish. All-day hold. No crunch, no buildup, no compromise.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "See the difference from the first use. Real products for real grooming.",
  },
];

const ProductBenefits = () => {
  return (
    <section id="products" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-radial opacity-25" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            WHY <span className="text-gradient-violet">HEEM</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto font-body leading-relaxed">
            Built by a barber. Backed by results. Every product exists because JV
            needed it in his own chair.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-7 hover:border-primary/20 transition-all duration-700 shadow-card hover:shadow-violet"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-glow-radial opacity-30" />
            <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-card">
              <img
                src={productCollection}
                alt="HEEM product collection"
                loading="lazy"
                width={1400}
                height={1000}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 left-6 right-6"
            >
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  Explore the Full Line
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
