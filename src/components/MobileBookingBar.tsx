import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BOOKING_URL = "https://booksy.com/en-us/73285_jvkutzzz_barber-shop_san-diego";

const MobileBookingBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-border p-3">
      <Button variant="cta" size="lg" className="w-full" asChild>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          <Calendar className="w-5 h-5" />
          Book Your Cut
        </a>
      </Button>
    </div>
  );
};

export default MobileBookingBar;
