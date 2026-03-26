import { motion } from "framer-motion";
import { Star, MapPin, Award } from "lucide-react";
import aboutJv from "@/assets/about-jv.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <img
                src={aboutJv}
                alt="JV — the barber behind JVCUTZZ"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-lg p-4 shadow-gold">
              <p className="font-display text-2xl text-gradient-gold">5.0 ★</p>
              <p className="text-xs text-muted-foreground">Perfect Rating</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              The Barber
            </p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              MEET <span className="text-gradient-gold">JV</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              JV isn't just a barber — he's a craftsman. With years of experience 
              and a relentless commitment to precision, JV has built JVCUTZZ into 
              one of San Diego's most trusted names in barbering. Every client 
              who sits in his chair leaves looking and feeling like a different person.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              From clean fades to creative designs, JV's work speaks for itself. 
              His approach is simple: listen, understand, and deliver results that 
              exceed expectations. No shortcuts. No compromise. Just craft.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Star, label: "Top Rated", value: "5.0 Stars" },
                { icon: MapPin, label: "Location", value: "San Diego, CA" },
                { icon: Award, label: "Brand", value: "HEEM Collection" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-lg">{item.value}</p>
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
