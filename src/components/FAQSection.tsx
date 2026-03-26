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
    a: "You can shop the full HEEM collection online at heembyjv.com. Shipping is available across the US.",
  },
  {
    q: "Are HEEM products professional-grade?",
    a: "Yes. Every HEEM product is formulated to perform at professional barber-level. JV uses them on every client — that's the standard.",
  },
  {
    q: "Can I also book a haircut with JV?",
    a: "Absolutely. JV still cuts daily in San Diego. Book through Booksy at the link on the site or follow @jvcutzz on Instagram for availability.",
  },
  {
    q: "How do I follow JV and HEEM?",
    a: "Follow @jvcutzz on Instagram and subscribe to the JVCUTZZ YouTube channel for cut content, product drops, and behind-the-scenes content.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-3">
            Questions?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="text-gradient-violet">FAQ</span>
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
