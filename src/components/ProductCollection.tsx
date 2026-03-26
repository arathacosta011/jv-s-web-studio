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
    <section id="collection" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full" style={{ background: "radial-gradient(ellipse, hsl(270 85% 60% / 0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, hsl(280 80% 55% / 0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, hsl(270 80% 58% / 0.10) 0%, transparent 70%)" }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            The Full Line
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            SHOP <span className="text-gradient-violet">HEEM</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto font-body leading-relaxed">
            Every product built by JV, tested in the chair, and made for results.
          </p>
        </motion.div>

        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category === cat.key);
          if (catProducts.length === 0) return null;

          return (
            <div key={cat.key} className="mb-20 last:mb-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-bold mb-8 flex items-center gap-4"
              >
                <span className="text-gradient-violet">{cat.label}</span>
                <span className="h-px flex-1 bg-border/40" />
              </motion.h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {catProducts.map((product, i) => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    index={i}
                    onViewDetail={() => setSelectedProduct(product as ProductDetail)}
                  />
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

const ProductCard = ({
  product,
  index,
  onViewDetail,
}: {
  product: (typeof products)[0];
  index: number;
  onViewDetail: () => void;
}) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-card hover:border-primary/20 hover:shadow-violet transition-all duration-700"
    >
      <div
        className="relative overflow-hidden bg-secondary/30 cursor-pointer"
        onClick={onViewDetail}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full aspect-square object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
            Sale
          </span>
        )}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-body text-foreground bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/40">
            <Eye className="w-3 h-3 inline mr-1.5" />
            View Product
          </span>
        </div>
      </div>

      <div className="p-5">
        <h4
          className="font-display text-base font-bold mb-2 leading-tight cursor-pointer hover:text-primary transition-colors"
          onClick={onViewDetail}
        >
          {product.name}
        </h4>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display text-xl font-extrabold text-gradient-violet">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>

        <Button
          variant="hero"
          size="sm"
          className="w-full"
          onClick={() =>
            addToCart({ name: product.name, price: product.price, image: product.image, url: product.url })
          }
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCollection;
