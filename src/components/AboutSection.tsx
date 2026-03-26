import { motion } from "framer-motion";
import { Star, Youtube, Instagram } from "lucide-react";
import aboutJv from "@/assets/about-jv.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-glow-radial opacity-15" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-glow-radial opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-card">
              <img
                src={aboutJv}
                alt="JV — founder of HEEM"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
              The Founder
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8">
              MEET <span className="text-gradient-violet">JV</span>
            </h2>
            <p className="text-muted-foreground font-body leading-[1.8] mb-6 text-[15px]">
              JV didn't build HEEM from a boardroom — he built it from the barber chair.
              Every product exists because he needed it for real clients getting real cuts.
              When you use HEEM, you're using exactly what JV uses on every client.
            </p>
            <p className="text-muted-foreground font-body leading-[1.8] mb-10 text-[15px]">
              From styling powder to aftershave, the HEEM line is crafted for results
              that last. JV's reputation as one of San Diego's top barbers isn't just talk.
              It's work. And HEEM is the proof.
            </p>

            <div className="divider-glow mb-10" />

            <div className="grid grid-cols-3 gap-8">
              {[
                { icon: Star, label: "Rated", value: "5.0★" },
                { icon: Instagram, label: "Follow", value: "@jvcutzz" },
                { icon: Youtube, label: "Watch", value: "JVCUTZZ" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-display text-base font-bold">{item.value}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
