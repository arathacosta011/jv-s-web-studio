import { motion } from "framer-motion";
import { Star, Youtube, Instagram } from "lucide-react";
import aboutJv from "@/assets/about-jv.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={aboutJv}
                alt="JV — founder of HEEM"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-primary/20 rounded-xl p-4 shadow-violet">
              <p className="font-display text-xl font-bold text-gradient-violet">Barber. Founder. Creator.</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
              The Man Behind HEEM
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              MEET <span className="text-gradient-violet">JV</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              JV didn't build HEEM from a boardroom — he built it from the barber chair.
              Every product exists because he needed it for real clients getting real cuts.
              When you use HEEM, you're using exactly what JV uses on every client who
              sits in his chair.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              From styling powder to aftershave, the HEEM line is crafted for results
              that last — not products that sit on a shelf. JV's reputation as one of
              San Diego's top barbers isn't just talk. It's work. And HEEM is the proof.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Star, label: "Rated", value: "5.0 Stars" },
                { icon: Instagram, label: "Follow", value: "@jvcutzz" },
                { icon: Youtube, label: "Watch", value: "JVCUTZZ" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-base font-semibold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
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
