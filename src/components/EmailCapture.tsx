import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, hsl(270 85% 65% / 0.06) 0%, transparent 60%)" }} />

      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-body text-[11px] tracking-[0.3em] uppercase mb-4">Stay in the Loop</p>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
            GET <span className="text-gradient-violet">EARLY ACCESS</span>
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
            New drops, restocks, and exclusive deals — delivered straight to your inbox.
          </p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 text-primary font-body">
              <CheckCircle className="w-5 h-5" /><span className="font-semibold">You're in. Watch your inbox.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary/50 border border-border/50 rounded-xl px-5 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors" />
              <Button variant="hero" size="default" type="submit">Join<ArrowRight className="w-4 h-4" /></Button>
            </form>
          )}
          <p className="text-[11px] text-muted-foreground/50 font-body mt-5">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;
