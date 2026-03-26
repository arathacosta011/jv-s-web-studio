import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BOOKING_URL = "https://booksy.com/en-us/73285_jvkutzzz_barber-shop_san-diego";

const BookingCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, hsl(43 100% 50% / 0.1) 0%, transparent 50%)",
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            READY FOR YOUR
            <br />
            <span className="text-gradient-gold">TRANSFORMATION?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-md mx-auto">
            Spots fill fast. Book your appointment now and walk out 
            sharper than you've ever been.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Your Appointment
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
