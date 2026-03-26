import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

type Product = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  url: string;
  category: "styling" | "tools" | "bundles" | "accessories";
  description: string;
  videoUrl?: string;
};

const products: Product[] = [
  {
    name: "HEEM Styling Powder",
    price: "$15.00",
    image: "https://heembyjv.com/cdn/shop/files/stylingg_powdeeer_1.png?v=1763406613&width=533",
    url: "https://heembyjv.com/products/heem-styling-powder-1",
    category: "styling",
    description: "Are you tired of straight flat hair? Its time to level Up, with The New Heem Styling Powder you can switch up your hair style in multiple way's by adding volume and texture. Save time and money with The Heem Product's. If you get The Heem Powder might as well just get the Heem comb with it goes hand in hand like PB & J.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "HEEM Sea Salt Spray",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/cecial.png?v=1764273503&width=533",
    url: "https://heembyjv.com/products/heem-sea-salt-spray",
    category: "styling",
    description: "The HEEM Sea Salt Spray adds natural wave, texture, and body to any hair type. Spray it on damp or dry hair before styling for that beachy, lived-in movement that holds all day without stiffness.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "The Heem Pomade 2.0",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/POMADEEEE_1.png?v=1763615382&width=533",
    url: "https://heembyjv.com/products/the-heem-pomade",
    category: "styling",
    description: "Effortlessly refined. Embrace a natural allure with our New Heem Matt Finish Pomade. Premium formula delivers a medium weight hold and a sleek, non-shiny texture. Perfect for defining your style and maintaining a polished look throughout the day. Embrace sophistication. Embrace confidence. Embrace the Matt Finish Pomade, with HEEM.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "The HEEM Wax",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/584343BB-DD7F-45D7-B098-A8A180FBF48C.jpg?v=1773819881&width=533",
    url: "https://heembyjv.com/products/the-heem-gel-wax",
    category: "styling",
    description: "The Heem Wax brings refreshing smell and feel to your hair. Whether you want a wet look or a firm look this is the right choice for you. The wax is like putty, it can be used to texture, hold, and style in many different ways. This Products works on all hair types and is made with No Alcohol. The refreshing gel will bring positivity and good energy to overcome the day.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "The Heem ANTIFRIZZ",
    price: "$22.99",
    image: "https://heembyjv.com/cdn/shop/files/antifrizz.png?v=1763605414&width=533",
    url: "https://heembyjv.com/products/the-heem-antifrizz",
    category: "styling",
    description: "The Heem® ANTIFRIZZ will hydrate your hair and give it a soft wet look to bring your hair to life. Made to give the hair waviness and activate curls, enriched with krafina, controls frizz without leaving heavy hair and Intensifies the brightness. Protected, shiny and frizz-controlled hair, all day long.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "The Heem Aftershave Cologne",
    price: "$20.00",
    image: "https://heembyjv.com/cdn/shop/files/TOGETHER.png?v=1763406397&width=533",
    url: "https://heembyjv.com/products/the-heem-aftershave-cologne",
    category: "styling",
    description: "The Heem aftershave cologne brings a refreshing feel and smell when sprayed, apply after a fresh haircut or a clean shave for a crisp feeling. Made with quality for the best scents. Had to cook it up in the lab like Rick n Morty. Made from high-quality, natural ingredients that are safe and gentle on the skin. Free from harsh chemicals and synthetic fragrances.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "THE HEEM RAZOR",
    price: "$25.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-7143.png?v=1772685669&width=533",
    url: "https://heembyjv.com/products/heem-razor-holder",
    category: "tools",
    description: "Experience precision with the HEEM Straight Razor, designed for barbers who demand clean, sharp results. Crafted with high-quality materials and a razor-sharp blade, it delivers smooth, controlled detailing for lineups, tapers, and finishing touches. Built for balance, durability, and professional performance.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "THE HEEM CAPE",
    price: "$35.00",
    originalPrice: "$45.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-9783.png?v=1763353574&width=533",
    url: "https://heembyjv.com/products/the-heem-cape",
    category: "tools",
    description: "BEST SIZE, BEST COLORS, BEST FABRIC, ITS HEEM. Available in Purple, Blue, Black, and White. The cape JV uses on every single client. Water-resistant, hair-repellent, and easy to clean.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "The Gold HEEM Comb",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/Gcomb_compressed.png?v=1763406572&width=533",
    url: "https://heembyjv.com/products/the-gold-heem-comb",
    category: "tools",
    description: "The signature Gold HEEM Comb. Use to distribute product evenly and create clean parts or directional flow. Looks as good as it works.",
  },
  {
    name: "THE HEEM COMB 2.0",
    price: "$10.00",
    image: "https://heembyjv.com/cdn/shop/files/2.0_COMB.png?v=1763962660&width=533",
    url: "https://heembyjv.com/products/the-heem-comb-2-0",
    category: "tools",
    description: "Upgraded design for better grip and smoother glide. Works with all HEEM styling products on damp or dry hair. Balanced tooth spacing for snag-free results.",
  },
  {
    name: "The Heem Texture Comb",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/BCOMP.png?v=1763524317&width=533",
    url: "https://heembyjv.com/products/heem-texture-comb",
    category: "tools",
    description: "The comb JV uses to create his signature textured tops. Run through top sections to break up weight and add natural-looking movement. Goes hand in hand with the Styling Powder.",
    videoUrl: "https://www.youtube.com/watch?v=zG1tWVw1vvw",
  },
  {
    name: "The Heem Crush",
    price: "$7.99",
    image: "https://heembyjv.com/cdn/shop/files/2_curh_combs.png?v=1764002918&width=533",
    url: "https://heembyjv.com/products/the-heem-crush",
    category: "tools",
    description: "Comb and a brush. Crush through styled hair to break up uniform lines for that undone, editorial-style texture with modern movement.",
  },
  {
    name: "The HEEM Shear Pack",
    price: "$200.00",
    originalPrice: "$250.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-7141.jpg?v=1772684657&width=533",
    url: "https://heembyjv.com/products/the-heem-shear-pack",
    category: "tools",
    description: "The exact shears JV uses in his chair. Premium professional shears for point cutting, slide cutting, and precision work. Built for barbers who take their craft seriously.",
  },
  {
    name: "THE HEEM SKULLY",
    price: "$15.00",
    image: "https://heembyjv.com/cdn/shop/files/IMG-3725.png?v=1769144746&width=533",
    url: "https://heembyjv.com/products/the-heem-skully",
    category: "accessories",
    description: "Premium branded skully for the culture. Rep HEEM anywhere you go.",
  },
  {
    name: "Heem Powder Pack",
    price: "$80.00",
    originalPrice: "$150.00",
    image: "https://heembyjv.com/cdn/shop/files/hereeeem.png?v=1763406553&width=533",
    url: "https://heembyjv.com/products/heem-pack",
    category: "bundles",
    description: "Stock up on the #1 seller. Multiple bottles of HEEM Styling Powder at a discounted bundle price. Never run out of the product that finishes every cut. Perfect for barbers or daily users.",
  },
  {
    name: "The Flow Combo",
    price: "$42.99",
    originalPrice: "$50.00",
    image: "https://heembyjv.com/cdn/shop/files/FRIZZ_COMBOI.png?v=1764087076&width=533",
    url: "https://heembyjv.com/products/untitled-nov19_21-48",
    category: "bundles",
    description: "Curated by JV — everything you need in one box. Combo of products designed to work together for flow and texture. Complete styling system for natural, textured looks.",
  },
  {
    name: "The Heem Texture Combo",
    price: "$40.00",
    originalPrice: "$50.00",
    image: "https://heembyjv.com/cdn/shop/files/HEEM_COMBO.png?v=1763406332&width=533",
    url: "https://heembyjv.com/products/the-heem-texture-combo",
    category: "bundles",
    description: "The exact combo JV uses for his most popular textured cuts. Includes texture tools and styling products designed to work together for maximum texture and movement.",
  },
  {
    name: "The Heem Bundle",
    price: "$160.00",
    originalPrice: "$200.00",
    image: "https://heembyjv.com/cdn/shop/files/fixed_bundle_bf3d6c6d-9905-434a-8904-059f43ba4f87.jpg?v=1770447985&width=533",
    url: "https://heembyjv.com/products/the-heem-bundle",
    category: "bundles",
    description: "All products for a Heem Deal. HEEM POWDER, HEEM WAX, HEEM GEL, HEEM SEA SALT, HEEM ANTIFRIZZ, HEEM POMADE, HEEM AFTERSHAVE BLUE, HEEM AFTERSHAVE GREEN, HEEM GOLD COMB, HEEM BLACK COMB, HEEM CRUSH, HEEM COMB 2.0. Save $40 and get the entire lineup.",
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

        {/* Shop button — links to real Shopify store */}
        <Button variant="hero" size="sm" className="w-full mb-2" asChild>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-3.5 h-3.5" />
            Shop Now
          </a>
        </Button>

        {/* Watch video button — links to JV's YouTube */}
        {product.videoUrl && (
          <Button variant="outline" size="sm" className="w-full mb-3" asChild>
            <a href={product.videoUrl} target="_blank" rel="noopener noreferrer">
              <Play className="w-3.5 h-3.5" />
              Watch JV Use It
            </a>
          </Button>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-[11px] text-muted-foreground hover:text-primary transition-colors font-body uppercase tracking-wider py-1"
        >
          {showDetails ? "Hide Details ↑" : "Product Details ↓"}
        </button>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 pt-3 border-t border-border/40"
          >
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCollection;
