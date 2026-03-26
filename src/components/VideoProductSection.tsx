import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const VideoProductSection = () => {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
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
            See It In Action
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            HEEM PRODUCTS USED
            <br />
            <span className="text-gradient-violet">IN THE VIDEO HERE</span>
          </h2>
        </motion.div>

        {/* Video + Product side by side */}
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-card bg-card">
              <iframe
                src="https://www.youtube.com/embed/?listType=user_uploads&list=JVCUTZZ"
                title="JV using HEEM Styling Powder during a cut"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.youtube.com/@JVCUTZZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
              >
                <Play className="w-4 h-4" />
                Watch more on YouTube
              </a>
            </div>
          </motion.div>

          {/* Featured Product */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden shadow-card"
          >
            {/* Product Image */}
            <div className="relative bg-secondary/20 p-8 flex justify-center">
              <div className="absolute inset-0 bg-glow-radial opacity-20" />
              <img
                src="https://heembyjv.com/cdn/shop/files/stylingg_powdeeer_1.png?v=1763406613&width=533"
                alt="HEEM Styling Powder"
                loading="lazy"
                className="relative w-48 h-48 object-contain"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary uppercase tracking-widest font-body">
                Featured
              </span>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <h3 className="font-display text-2xl font-extrabold mb-1">HEEM Styling Powder</h3>
              <p className="font-display text-3xl font-extrabold text-gradient-violet mb-4">$15.00</p>

              <p className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">
                This is the product JV reaches for on every single client. The HEEM Styling Powder
                creates natural volume, matte texture, and invisible hold. It's what makes the
                difference between a good cut and a cut that looks like it belongs on Instagram.
              </p>

              {/* How It's Used */}
              <div className="space-y-4 mb-8">
                <p className="font-display text-sm font-bold uppercase tracking-wider">How It's Used in the Video</p>
                <div className="divider-glow" />

                {[
                  { label: "When", text: "Applied as the final step after cutting and blow drying." },
                  { label: "How", text: "JV taps a small amount into his hands, rubs them together, and works the powder through the top for volume and texture." },
                  { label: "Result", text: "The hair goes from flat and freshly-cut to full, textured, and styled — with zero visible product." },
                  { label: "Why It Matters", text: "This is the finishing move that turns a haircut into a transformation. It's lightweight, invisible, and lasts all day." },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="https://heembyjv.com/products/heem-styling-powder-1" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Shop HEEM Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Additional products used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <p className="font-display text-sm font-bold uppercase tracking-wider text-center mb-6 text-muted-foreground">
            Also Used in This Cut
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "The Heem Aftershave Cologne",
                price: "$20.00",
                image: "https://heembyjv.com/cdn/shop/files/TOGETHER.png?v=1763406397&width=533",
                url: "https://heembyjv.com/products/the-heem-aftershave-cologne",
                role: "Applied to the neck and hairline after the cut for a clean, fresh finish.",
              },
              {
                name: "The Heem Texture Comb",
                price: "$7.99",
                image: "https://heembyjv.com/cdn/shop/files/BCOMP.png?v=1763524317&width=533",
                url: "https://heembyjv.com/products/heem-texture-comb",
                role: "Used to break up weight and create natural movement in the top sections.",
              },
              {
                name: "THE HEEM RAZOR",
                price: "$25.00",
                image: "https://heembyjv.com/cdn/shop/files/IMG-7143.png?v=1772685669&width=533",
                url: "https://heembyjv.com/products/heem-razor-holder",
                role: "Used for the precision lineup — clean edges and razor-sharp detail work.",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card/60 border border-border/30 rounded-2xl p-5 flex items-start gap-4 hover:border-primary/20 transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-16 h-16 object-contain shrink-0"
                />
                <div>
                  <p className="font-display text-sm font-bold mb-1 group-hover:text-primary transition-colors">{item.name}</p>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed mb-1">{item.role}</p>
                  <p className="text-xs font-bold text-gradient-violet">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoProductSection;
