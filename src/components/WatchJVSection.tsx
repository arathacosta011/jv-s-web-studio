import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink, Play } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductDetailModal, { type ProductDetail } from "@/components/ProductDetailModal";
import { products } from "@/data/products";

const videoProductPairings = [
  {
    videoId: "zG1tWVw1vvw",
    title: "The Cleanest Low Fade You'll See TODAY",
    productName: "HEEM Styling Powder",
    howUsed: "Applied as the final step after the low fade is cut and blow dried. JV taps the powder into his hands and works it through the top for volume and natural texture.",
    result: "Hair goes from flat to full, textured, and styled — with zero visible product. The fade looks sharper because the top has shape.",
  },
  {
    videoId: "UOr66Bv390k",
    title: "Day in the Life of a Barber — Full Haircut Breakdown",
    productName: "The Heem Pomade 2.0",
    howUsed: "JV applies the matte pomade for a clean, polished finish with medium hold. Worked through evenly for a sleek, non-shiny texture.",
    result: "Refined, matte finish that looks natural all day. No shine, no crunch — just clean style.",
  },
  {
    videoId: "hADm7QRGaJs",
    title: "Day in the Life of a Barber Making 6 Figures",
    productName: "The HEEM Wax",
    howUsed: "JV scoops the putty-like wax, warms it between his palms, and works it through styled hair for a wet or firm textured hold depending on the client's look.",
    result: "Flexible, reworkable hold that lasts all day. No alcohol, refreshing scent, and a versatile finish from slick to textured.",
  },
  {
    videoId: "zG1tWVw1vvw",
    title: "Low Fade Lineup — Precision Finishing",
    productName: "The Heem Aftershave Cologne",
    howUsed: "Sprayed on the neck and hairline as the final touch after the cut. Clean, refreshing finish that soothes and smells premium.",
    result: "Crisp, cool finish with a premium scent. No irritation, natural ingredients. The finishing signature.",
  },
];

const WatchJVSection = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const getProduct = (name: string) => products.find((p) => p.name === name);

  return (
    <section id="video-product" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-glow-radial-strong opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            From the Chair
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            SEEN IN <span className="text-gradient-violet">ACTION</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto font-body leading-relaxed">
            Every product matched to a real video. See exactly how JV uses HEEM in the chair.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {videoProductPairings.map((pairing, i) => {
            const product = getProduct(pairing.productName);
            if (!product) return null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-card hover:border-primary/20 transition-all duration-700"
              >
                {/* Video */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${pairing.videoId}`}
                    title={pairing.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Product pairing */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded-xl bg-secondary/30 border border-border/30 shrink-0 p-1 cursor-pointer hover:border-primary/30 transition-colors"
                      onClick={() => setSelectedProduct(product as ProductDetail)}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-1">Product Used</p>
                      <h3 className="font-display text-lg font-bold leading-tight">{product.name}</h3>
                      <p className="text-sm font-bold text-gradient-violet">{product.price}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <div>
                      <p className="text-[10px] text-primary uppercase tracking-[0.15em] font-body mb-1">How It's Used</p>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed">{pairing.howUsed}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-primary uppercase tracking-[0.15em] font-body mb-1">The Result</p>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed">{pairing.result}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="hero"
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        addToCart({ name: product.name, price: product.price, image: product.image, url: product.url })
                      }
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProduct(product as ProductDetail)}
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@JVCUTZZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
          >
            <Play className="w-4 h-4" />
            Watch more on YouTube
          </a>
        </motion.div>
      </div>

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default WatchJVSection;
