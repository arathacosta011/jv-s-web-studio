import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, Play } from "lucide-react";
import { useCart } from "@/context/CartContext";

export type ProductDetail = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  url: string;
  description: string;
  videoUrl?: string;
  usage?: {
    whatItIs: string;
    whatItDoes: string;
    howToUse: string;
    whenToUse: string;
    result: string;
    trust: string;
  };
};

type Props = {
  product: ProductDetail | null;
  onClose: () => void;
};

const ProductDetailModal = ({ product, onClose }: Props) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      url: product.url,
    });
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-x-[15%] lg:inset-y-8 z-[70] bg-card border border-border/60 rounded-2xl overflow-y-auto shadow-card"
          >
            <button
              onClick={onClose}
              className="sticky top-4 right-4 float-right z-10 m-4 w-10 h-10 rounded-full bg-secondary/80 border border-border/40 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative bg-secondary/20 p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-glow-radial opacity-15" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-full max-w-[280px] aspect-square object-contain"
                />
                {product.originalPrice && (
                  <span className="absolute top-6 left-6 px-3 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                    Sale
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="p-8 md:p-10">
                <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-2">{product.name}</h2>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-3xl font-extrabold text-gradient-violet">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>

                <p className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-8">
                  {product.description}
                </p>

                {product.usage && (
                  <div className="space-y-4 mb-8">
                    <div className="divider-glow" />
                    {[
                      { label: "What It Is", text: product.usage.whatItIs },
                      { label: "What It Does", text: product.usage.whatItDoes },
                      { label: "How to Use", text: product.usage.howToUse },
                      { label: "When to Use", text: product.usage.whenToUse },
                      { label: "The Result", text: product.usage.result },
                      { label: "Why Trust It", text: product.usage.trust },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-1">{item.label}</p>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  <Button variant="hero" size="lg" className="w-full" onClick={handleAddToCart}>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                  {product.videoUrl && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={product.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-3.5 h-3.5" />
                        See JV Use This
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
