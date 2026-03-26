import { motion } from "framer-motion";
import { Sparkles, Shield, Droplets, Zap } from "lucide-react";
import productCollection from "@/assets/product-collection.jpg";

const benefits = [
  {
    icon: Sparkles,
    title: "Professional Grade",
    description: "Formulated by a working barber. Every product is tested in the chair before it hits the shelf.",
  },
  {
    icon: Shield,
    title: "Clean Ingredients",
    description: "No fillers. No shortcuts. Built for performance and results you can actually see.",
  },
  {
    icon: Droplets,
    title: "Lightweight Hold",
    description: "Natural finish without the weight. Styled all day, no crunch, no buildup.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "See the difference from the first use. Real products for real grooming routines.",
  },
];

const SHOP_URL = "https://heembyjv.com";

const ProductBenefits = () => {
  return (
    <section id="products" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-glow-radial opacity-30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            The HEEM Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            WHY <span className="text-gradient-violet">HEEM</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Built by a barber. Backed by results. Every product in the HEEM line
            exists because JV needed it in his own chair.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-500 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={productCollection}
                alt="HEEM product collection"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-primary/20 rounded-xl p-4 shadow-violet">
              <p className="font-display text-sm font-semibold text-gradient-violet">Shop the Full Line →</p>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="Shop HEEM" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
