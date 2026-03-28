import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { products as allProducts } from "@/data/products";

const results = [
  {
    image: "https://heembyjv.com/cdn/shop/files/49E87ABB-30B8-4D5F-80B2-567F5272722F.jpg?v=1772685669&width=1200",
    label: "Precision Lineup with THE HEEM RAZOR",
    tag: "Precision",
    products: "HEEM Razor · Aftershave Cologne · Styling Powder",
    productName: "THE HEEM RAZOR",
  },
  {
    image: "https://heembyjv.com/cdn/shop/files/IMG-7143.png?v=1772685669&width=1200",
    label: "THE HEEM RAZOR",
    tag: "Tools",
    products: "Professional Straight Razor · Precision Lineups · Clean Edges",
    productName: "THE HEEM RAZOR",
  },
];

const TransformationsSection = () => {
  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-3">
            The Proof
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold">
            SEE THE <span className="text-gradient-gold">RESULT</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-md mx-auto font-body leading-relaxed">
            Every cut finished with HEEM. The product is part of the result.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {results.map((item, i) => (
            <ResultCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "https://heembyjv.com/cdn/shop/files/FF6D4E16-3B2A-4D1F-8AA6-F457F3539F7E.jpg?v=1773819881&width=600", alt: "HEEM Wax in use" },
              { src: "https://heembyjv.com/cdn/shop/products/image_602e2397-7b79-4e07-8a81-53fe7f15e44b.jpg?v=1763524274&width=600", alt: "HEEM Texture Comb in hand" },
              { src: "https://heembyjv.com/cdn/shop/files/IMG-7109.jpg?v=1772673360&width=600", alt: "JV cutting with HEEM Cape" },
              { src: "https://heembyjv.com/cdn/shop/files/2_SIDE_COMB.png?v=1764002918&width=600", alt: "HEEM Crush Comb detail" },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border/20 aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="#collection">Shop the Products Behind the Results</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ResultCard = ({ item, index }: { item: typeof results[0]; index: number }) => {
  const { addToCart } = useCart();
  const product = allProducts.find((p) => p.name === item.productName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-card hover:shadow-gold transition-shadow duration-700"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.label}
          loading="lazy"
          width={900}
          height={900}
          className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute top-5 left-5">
        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-[11px] text-primary uppercase tracking-widest font-body">
          {item.tag}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-2">Products Used</p>
        <p className="text-foreground font-display text-2xl font-bold mb-1">{item.label}</p>
        <p className="text-xs text-muted-foreground font-body mb-3">{item.products}</p>
        {product && (
          <Button
            variant="hero"
            size="sm"
            onClick={() => addToCart({ name: product.name, price: product.price, image: product.image, url: product.url })}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default TransformationsSection;
