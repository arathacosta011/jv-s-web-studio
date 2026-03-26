import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

type Product = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  url: string;
  category: "styling" | "tools" | "bundles" | "accessories";
  howUsed: {
    when: string;
    how: string;
    result: string;
    why: string;
  };
};

const products: Product[] = [
  {
    name: "HEEM Styling Powder",
    price: "$15.00",
    image: "https://heembyjv.com/cdn/shop/files/stylingg_powdeeer_1.png?v=1763406613&width=533",
    url: "https://heembyjv.com/products/heem-styling-powder-1",
    category: "styling",
    howUsed: {
      when: "After the cut is done, as the final styling step.",
      how: "Tap a small amount into your hands, rub together, and work through the top and sides for volume and texture.",
      result: "Matte finish with natural volume. Hair looks fuller, textured, and styled without looking 'product-heavy.'",
      why: "It's the secret weapon behind JV's signature textured finishes. Lightweight, invisible hold.",
    },
  },
  {
    name: "HEEM Sea Salt Spray",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/cecial.png?v=1764273503&width=533",
    url: "https://heembyjv.com/products/heem-sea-salt-spray",
    category: "styling",
    howUsed: {
      when: "On damp or dry hair before styling.",
      how: "Spray 3-5 pumps evenly through hair, then style with your hands or a blow dryer.",
      result: "Natural wave and texture with beachy, lived-in movement.",
      why: "Adds grip and body so hair holds shape all day without stiffness.",
    },
  },
  {
    name: "The Heem Pomade 2.0",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/POMADEEEE_1.png?v=1763615382&width=533",
    url: "https://heembyjv.com/products/the-heem-pomade",
    category: "styling",
    howUsed: {
      when: "After blow drying or on towel-dried hair.",
      how: "Scoop a dime-sized amount, emulsify between palms, and work through hair back to front.",
      result: "Medium-to-strong hold with a clean, natural shine.",
      why: "Perfect for slick-backs, side parts, and polished looks that need to stay put.",
    },
  },
  {
    name: "The HEEM Wax",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/584343BB-DD7F-45D7-B098-A8A180FBF48C.jpg?v=1773819881&width=533",
    url: "https://heembyjv.com/products/the-heem-gel-wax",
    category: "styling",
    howUsed: {
      when: "On dry or slightly damp hair for maximum control.",
      how: "Warm a small amount between fingers and apply to areas that need definition and hold.",
      result: "Strong hold with a subtle sheen. Locks texture and shape in place.",
      why: "When you need your style to last through the day without re-touching.",
    },
  },
  {
    name: "The Heem ANTIFRIZZ",
    price: "$22.99",
    image: "https://heembyjv.com/cdn/shop/files/antifrizz.png?v=1763605414&width=533",
    url: "https://heembyjv.com/products/the-heem-antifrizz",
    category: "styling",
    howUsed: {
      when: "On damp hair before blow drying, or as a finishing serum.",
      how: "Apply a small amount through mid-lengths and ends. Can be used daily.",
      result: "Smooth, frizz-free hair with natural movement and shine.",
      why: "Tames flyaways and rough texture without weighing hair down.",
    },
  },
  {
    name: "The Heem Aftershave Cologne",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/TOGETHER.png?v=1763406397&width=533",
    url: "https://heembyjv.com/products/the-heem-aftershave-cologne",
    category: "styling",
    howUsed: {
      when: "Right after a fresh fade or shave.",
      how: "Splash or dab onto freshly cut skin — neck, sideburns, and hairline.",
      result: "Cools, soothes, and leaves a clean, premium scent.",
      why: "Closes pores, reduces irritation, and finishes the cut with that barbershop-fresh feeling.",
    },
  },
  {
    name: "THE HEEM RAZOR",
    price: "$25.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-7143.png?v=1772685669&width=533",
    url: "https://heembyjv.com/products/heem-razor-holder",
    category: "tools",
    howUsed: {
      when: "During the lineup and detail work on every cut.",
      how: "Load a fresh blade, hold at an angle, and use for precision edges and clean outlines.",
      result: "Razor-sharp lines and surgical-clean edges.",
      why: "JV's go-to for every lineup. Built for precision and daily professional use.",
    },
  },
  {
    name: "THE HEEM CAPE",
    price: "$35.00",
    originalPrice: "$45.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-9783.png?v=1763353574&width=533",
    url: "https://heembyjv.com/products/the-heem-cape",
    category: "tools",
    howUsed: {
      when: "Every cut, every client.",
      how: "Snap it on before the cut. Water-resistant, hair-repellent, and easy to clean.",
      result: "Professional look and feel. Keeps clients clean and comfortable.",
      why: "The cape JV uses on every single client. Durable, premium, and branded.",
    },
  },
  {
    name: "The Gold HEEM Comb",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/Gcomb_compressed.png?v=1763406572&width=533",
    url: "https://heembyjv.com/products/the-gold-heem-comb",
    category: "tools",
    howUsed: {
      when: "During and after styling.",
      how: "Use to distribute product evenly and create clean parts or directional flow.",
      result: "Smooth, even styling with precision control.",
      why: "A signature gold finish comb that looks as good as it works.",
    },
  },
  {
    name: "THE HEEM COMB 2.0",
    price: "$10.00",
    image: "https://heembyjv.com/cdn/shop/files/2.0_COMB.png?v=1763962660&width=533",
    url: "https://heembyjv.com/products/the-heem-comb-2-0",
    category: "tools",
    howUsed: {
      when: "For everyday styling and detangling.",
      how: "Comb through damp or dry hair. Works with all HEEM styling products.",
      result: "Smooth, snag-free results with balanced tooth spacing.",
      why: "Upgraded design for better grip and smoother glide.",
    },
  },
  {
    name: "The Heem Texture Comb",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/BCOMP.png?v=1763524317&width=533",
    url: "https://heembyjv.com/products/heem-texture-comb",
    category: "tools",
    howUsed: {
      when: "After cutting, during the texturizing step.",
      how: "Run through top sections to break up weight and add movement.",
      result: "Natural-looking texture and flow that feels effortless.",
      why: "The comb JV uses to create his signature textured tops.",
    },
  },
  {
    name: "The Heem Crush",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/2_curh_combs.png?v=1764002918&width=533",
    url: "https://heembyjv.com/products/the-heem-crush",
    category: "tools",
    howUsed: {
      when: "Post-cut to add choppy, deconstructed texture.",
      how: "Crush through styled hair to break up uniform lines.",
      result: "Undone, editorial-style texture with modern movement.",
      why: "Adds that lived-in look that's impossible to fake with just scissors.",
    },
  },
  {
    name: "The HEEM Shear Pack",
    price: "$200.00",
    originalPrice: "$250.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-7141.jpg?v=1772684657&width=533",
    url: "https://heembyjv.com/products/the-heem-shear-pack",
    category: "tools",
    howUsed: {
      when: "For professional cutting — the main tool of the trade.",
      how: "Premium shears for point cutting, slide cutting, and precision work.",
      result: "Clean, sharp cuts with professional-grade control.",
      why: "The exact shears JV uses in his chair. Built for barbers who take their craft seriously.",
    },
  },
  {
    name: "THE HEEM SKULLY",
    price: "$15.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-3725.png?v=1769144746&width=533",
    url: "https://heembyjv.com/products/the-heem-skully",
    category: "accessories",
    howUsed: {
      when: "Anytime — rep the brand.",
      how: "Pull it on. Simple.",
      result: "Clean look that represents the HEEM lifestyle.",
      why: "Premium branded skully for the culture.",
    },
  },
  {
    name: "Heem Powder Pack",
    price: "$80.00",
    originalPrice: "$150.00",
    image: "https://heembyjv.com/cdn/shop/files/hereeeem.png?v=1763406553&width=533",
    url: "https://heembyjv.com/products/heem-pack",
    category: "bundles",
    howUsed: {
      when: "When you want to stock up on the #1 seller.",
      how: "Multiple bottles of HEEM Styling Powder at a discounted bundle price.",
      result: "Never run out of the product that finishes every cut.",
      why: "Best value for the product JV uses most. Perfect for barbers or daily users.",
    },
  },
  {
    name: "The Flow Combo",
    price: "$42.99",
    originalPrice: "$50.00",
    image: "https://heembyjv.com/cdn/shop/files/FRIZZ_COMBOI.png?v=1764087076&width=533",
    url: "https://heembyjv.com/products/untitled-nov19_21-48",
    category: "bundles",
    howUsed: {
      when: "For the full styling routine in one pack.",
      how: "Combo of products designed to work together for flow and texture.",
      result: "Complete styling system for natural, textured looks.",
      why: "Curated by JV — everything you need in one box.",
    },
  },
  {
    name: "The Heem Texture Combo",
    price: "$40.00",
    originalPrice: "$50.00",
    image: "https://heembyjv.com/cdn/shop/files/HEEM_COMBO.png?v=1763406332&width=533",
    url: "https://heembyjv.com/products/the-heem-texture-combo",
    category: "bundles",
    howUsed: {
      when: "When you want the full texture toolkit.",
      how: "Includes texture tools and styling products designed to work together.",
      result: "Maximum texture and movement with professional results.",
      why: "The exact combo JV uses for his most popular textured cuts.",
    },
  },
  {
    name: "The Heem Bundle",
    price: "$160.00",
    originalPrice: "$200.00",
    image: "https://heembyjv.com/cdn/shop/files/fixed_bundle_bf3d6c6d-9905-434a-8904-059f43ba4f87.jpg?v=1770447985&width=533",
    url: "https://heembyjv.com/products/the-heem-bundle",
    category: "bundles",
    howUsed: {
      when: "When you want everything. The full HEEM experience.",
      how: "Complete collection of HEEM's core products at the best possible price.",
      result: "Every product JV uses, in one pack. Full professional setup.",
      why: "The ultimate value pack. Save $40 and get the entire lineup.",
    },
  },
];

const categories = [
  { key: "styling", label: "Styling Products" },
  { key: "tools", label: "Professional Tools" },
  { key: "bundles", label: "Bundles & Value Packs" },
  { key: "accessories", label: "Accessories" },
];

const ProductCollection = () => {
  return (
    <section id="collection" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
                  <ProductCard key={product.name} product={product} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-card hover:border-primary/20 hover:shadow-violet transition-all duration-700"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-secondary/30">
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
      </div>

      {/* Info */}
      <div className="p-5">
        <h4 className="font-display text-base font-bold mb-2 leading-tight">{product.name}</h4>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display text-xl font-extrabold text-gradient-violet">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>

        <Button variant="hero" size="sm" className="w-full mb-3" asChild>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-3.5 h-3.5" />
            Shop Now
          </a>
        </Button>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-[11px] text-muted-foreground hover:text-primary transition-colors font-body uppercase tracking-wider py-1"
        >
          {showDetails ? "Hide Details ↑" : "How It's Used ↓"}
        </button>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 pt-3 border-t border-border/40 space-y-3"
          >
            {[
              { label: "When", value: product.howUsed.when },
              { label: "How", value: product.howUsed.how },
              { label: "Result", value: product.howUsed.result },
              { label: "Why", value: product.howUsed.why },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] text-primary uppercase tracking-widest font-body mb-0.5">{item.label}</p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.value}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCollection;
