import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductDetailModal, { type ProductDetail } from "@/components/ProductDetailModal";
import { products, categories } from "@/data/products";

const ProductCollection = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  return (
    <section id="collection" className="py-6 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full" style={{ background: "radial-gradient(ellipse, hsl(270 85% 60% / 0.15) 0%, transparent 70%)" }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-10"
        >
          <p className="text-primary font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-2 md:mb-3">Full Catalog</p>
          <h2 className="font-display text-2xl md:text-5xl font-extrabold">
            THE <span className="text-gradient-violet">COLLECTION</span>
          </h2>
        </motion.div>

        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat.key);
          if (catProducts.length === 0) return null;

          return (
            <div key={cat.key} className="mb-14 last:mb-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-lg font-bold mb-6 flex items-center gap-4"
              >
                <span className="text-gradient-violet">{cat.label}</span>
                <span className="h-px flex-1 bg-border/40" />
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {catProducts.map((product, i) => (
                  <ProductCard key={product.name} product={product} index={i} onViewDetail={() => setSelectedProduct(product as ProductDetail)} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

const ProductCard = ({ product, index, onViewDetail }: { product: (typeof products)[0]; index: number; onViewDetail: () => void }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden shadow-card hover:border-primary/20 hover:shadow-violet transition-all duration-500"
    >
      {/* Bigger, tappable image area */}
      <div className="relative overflow-hidden bg-secondary/20 cursor-pointer" onClick={onViewDetail}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full aspect-[3/4] object-contain p-3 md:p-5 transition-transform duration-700 group-hover:scale-110"
        />
        {product.originalPrice && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-primary/90 text-primary-foreground text-[9px] font-bold uppercase tracking-wider rounded-full">Sale</span>
        )}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/15 transition-colors duration-400 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-body text-foreground bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/40">
            <Eye className="w-3 h-3 inline mr-1" />Details
          </span>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <h4
          className="font-display text-xs md:text-sm font-bold mb-1 leading-tight cursor-pointer hover:text-primary transition-colors truncate"
          onClick={onViewDetail}
        >
          {product.name}
        </h4>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-sm md:text-lg font-extrabold text-gradient-violet">{product.price}</span>
            {product.originalPrice && <span className="text-[9px] md:text-[10px] text-muted-foreground line-through">{product.originalPrice}</span>}
          </div>
          <Button
            variant="hero"
            size="sm"
            className="h-8 px-3 text-[10px] md:text-xs"
            onClick={() => addToCart({ name: product.name, price: product.price, image: product.image, url: product.url })}
          >
            <ShoppingCart className="w-3 h-3" />
            <span className="hidden sm:inline">Add</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCollection;
