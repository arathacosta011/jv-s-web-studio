import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";

const SHOP_URL = "https://heembyjv.com";

const results = [
  { image: result1, label: "Clean Fade + HEEM Styling Powder" },
  { image: result2, label: "Textured Top + HEEM Aftershave" },
];

const TransformationsSection = () => {
  return (
    <section id="results" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            Real Results
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            SEE THE <span className="text-gradient-violet">DIFFERENCE</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Every cut finished with HEEM. The product is part of the result —
            not an afterthought.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-primary uppercase tracking-widest font-body mb-2">Finished with HEEM</p>
                <p className="text-foreground font-display text-xl font-semibold">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">Explore the Products</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;
