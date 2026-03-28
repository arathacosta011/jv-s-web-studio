import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const featured = [
  products.find((p) => p.name === "HEEM Styling Powder")!,
  products.find((p) => p.name === "The Heem Pomade 2.0")!,
  products.find((p) => p.name === "HEEM Sea Salt Spray")!,
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-3">
              Best Sellers
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold">
              THE <span className="text-gradient-gold">ESSENTIALS</span>
            </h2>
          </div>
          <a
            href="#collection"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative bg-card/60 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden shadow-card hover:border-primary/15 hover:shadow-gold transition-all duration-700"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-secondary/20 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                {product.originalPrice && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                    Sale
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4 leading-relaxed">
                  {product.usage?.whatItDoes || product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-extrabold text-gradient-gold">
                    {product.price}
                  </span>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() =>
                      addToCart({ name: product.name, price: product.price, image: product.image, url: product.url })
                    }
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
