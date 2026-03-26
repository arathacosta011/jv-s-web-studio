import { motion } from "framer-motion";
import { Scissors, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://booksy.com/en-us/73285_jvkutzzz_barber-shop_san-diego";

const services = [
  {
    icon: Scissors,
    title: "Regular Haircut",
    price: "$35",
    duration: "1 hour",
    description: "Precision cut tailored to your style. Includes consultation, shampoo, and styling.",
  },
  {
    icon: Sparkles,
    title: "Haircut & Design",
    price: "$35",
    duration: "1 hour",
    description: "Custom haircut with creative design work. Stand out with sharp, detailed artistry.",
  },
  {
    icon: Crown,
    title: "Haircut & Beard",
    price: "$40",
    duration: "1 hour",
    description: "The full package. Clean cut paired with a sculpted, precise beard lineup.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-5xl md:text-6xl">
            THE <span className="text-gradient-gold">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-500 shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-1">{service.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl text-gradient-gold">{service.price}</span>
                <span className="text-xs text-muted-foreground">/ {service.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                {service.description}
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book This Service</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
