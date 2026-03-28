import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What products does HEEM offer?", a: "The HEEM collection includes styling powder, sea salt spray, pomade 2.0, wax, antifrizz, aftershave cologne, professional shears, razors, combs, capes, and curated bundles. Everything for a complete grooming setup." },
  { q: "Who is behind HEEM?", a: "HEEM is created by Jose Velasco, known as JV — a professional barber based in San Diego. Every product is developed and tested in his own chair on real clients before it ships." },
  { q: "Where can I buy HEEM products?", a: "Shop the full HEEM collection at heembyjv.com. Shipping available across the US." },
  { q: "Are HEEM products professional-grade?", a: "Yes. Every product is formulated to perform at professional barber-level. JV uses them on every client — that's the standard." },
  { q: "What's the best product to start with?", a: "The HEEM Styling Powder is the #1 seller and the product JV uses on every single cut. If you're new to HEEM, start there." },
  { q: "Do you offer bundles?", a: "Yes — The Heem Bundle ($160, save $40), The Flow Combo ($42.99), The Texture Combo ($40), and The Powder Pack ($80) are all available." },
  { q: "Can I also book a haircut with JV?", a: "booksy" },
  { q: "How do I follow JV and HEEM?", a: "Follow @jvcutzz on Instagram and subscribe to JVCUTZZ on YouTube for cuts, product drops, and behind-the-scenes content." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-3">Questions</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold"><span className="text-gradient-violet">FAQ</span></h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl px-7 data-[state=open]:border-primary/20 transition-all duration-500">
                <AccordionTrigger className="font-body font-semibold text-left hover:no-underline text-foreground text-[15px] py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-[1.8] pb-6">
                  {faq.a === 'booksy' ? (
                    <>Absolutely. JV still cuts daily in San Diego.{' '}
                      <a href="https://booksy.com/en-us/391836_jv-cutzz_barber-shop_95498_san-diego" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">Book with JV on Booksy →</a>
                    </>
                  ) : faq.a}
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
