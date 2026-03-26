import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What products does HEEM offer?",
    a: "The HEEM collection includes styling powder, aftershave, a premium barber cape, a custom razor, and more. Everything a real grooming routine needs.",
  },
  {
    q: "Who is behind HEEM?",
    a: "HEEM is created by JV — a professional barber based in San Diego. Every product is developed and tested in his own chair on real clients.",
  },
  {
    q: "Where can I buy HEEM products?",
    a: "Shop the full HEEM collection online at heembyjv.com. Shipping available across the US.",
  },
  {
    q: "Are HEEM products professional-grade?",
    a: "Yes. Every product is formulated to perform at professional barber-level. JV uses them on every client. That's the standard.",
  },
  {
    q: "Can I also book a haircut with JV?",
    a: "Absolutely. JV still cuts daily in San Diego. Book through Booksy or follow @jvcutzz on Instagram for availability.",
  },
  {
    q: "How do I follow JV and HEEM?",
    a: "Follow @jvcutzz on Instagram and subscribe to JVCUTZZ on YouTube for cuts, product drops, and behind-the-scenes content.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="text-gradient-violet">FAQ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl px-7 data-[state=open]:border-primary/20 transition-all duration-500"
              >
                <AccordionTrigger className="font-body font-semibold text-left hover:no-underline text-foreground text-[15px] py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-[1.8] pb-6">
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
