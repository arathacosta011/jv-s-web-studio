import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book directly through Booksy using the 'Book Now' button on this site. Pick your service, choose your time, and you're locked in.",
  },
  {
    q: "Where is JVCUTZZ located?",
    a: "JV is based in San Diego, CA — 4252 40th St, San Diego, 92105. Easy to find, plenty of parking nearby.",
  },
  {
    q: "How long does a haircut take?",
    a: "Most services take about 1 hour. JV doesn't rush — every detail matters, and you'll leave looking right.",
  },
  {
    q: "Do you do designs?",
    a: "Yes. The Haircut & Design service includes custom design work. Bring a reference or let JV create something original.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash and all major cards are accepted. Payment is handled at the time of your appointment.",
  },
  {
    q: "Can I buy HEEM products?",
    a: "Absolutely. The HEEM Collection — cape, razor, styling powder, aftershave, and more — is available online at jvcutzz.com and heembyjv.com.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Questions?
          </p>
          <h2 className="font-display text-5xl md:text-6xl">
            <span className="text-gradient-gold">FAQ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-body font-semibold text-left hover:no-underline text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
