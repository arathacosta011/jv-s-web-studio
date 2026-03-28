import { motion } from "framer-motion";
import { Star, Youtube, Instagram } from "lucide-react";
import jvLaptop from "@/assets/jv-laptop.jpeg";
import jvShop from "@/assets/jv-shop.jpeg";
import jvWarehouse from "@/assets/jv-warehouse.jpeg";
import jvKid from "@/assets/jv-kid.jpeg";
import jvChair from "@/assets/jv-chair.jpeg";

const journey = [
  { image: jvKid, caption: "Where it started", year: "Day 1" },
  { image: jvShop, caption: "Building the brand", year: "The Shop" },
  { image: jvWarehouse, caption: "Stocking HEEM worldwide", year: "The Warehouse" },
  { image: jvChair, caption: "Still in the chair", year: "Today" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-card">
              <img
                src={jvLaptop}
                alt="JV — founder of HEEM, working on the brand"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-3">
              The Founder
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-8">
              MEET <span className="text-gradient-gold">JV</span>
            </h2>
            <p className="text-muted-foreground font-body leading-[1.8] mb-6 text-[15px]">
              Jose Velasco — known as JV — started cutting hair as a kid, learning the craft before most people
              pick up their first job. What began in a living room with a wooden chair
              became one of San Diego's most respected names in barbering.
            </p>
            <p className="text-muted-foreground font-body leading-[1.8] mb-10 text-[15px]">
              Every HEEM product was born in the chair, built for real clients getting
              real cuts. From a kid with clippers to running his own product line and
              warehouse — JV turned passion into a brand trusted by barbers worldwide.
            </p>

            <div className="divider-glow mb-10" />

            <div className="grid grid-cols-3 gap-8">
              {[
                { icon: Star, label: "Rated", value: "5.0★", href: undefined },
                { icon: Instagram, label: "Follow", value: "@jvcutzz", href: "https://www.instagram.com/jv_dabarber/" },
                { icon: Youtube, label: "Watch", value: "JVCUTZZ", href: "https://www.youtube.com/@JVCUTZZ" },
              ].map((item, i) => {
                const content = (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-display text-base font-bold">{item.value}</p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">{item.label}</p>
                  </>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <p className="text-center text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-10">
            The Journey
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative rounded-xl overflow-hidden border border-border/20 aspect-[3/4]"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-1">{item.year}</p>
                  <p className="text-sm font-display font-bold text-foreground">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
