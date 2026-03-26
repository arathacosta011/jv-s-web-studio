import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import heemLogo from "@/assets/heem-logo.png";

const MobileShopBar = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-border p-3">
      <div className="flex gap-2">
        <Button variant="hero" size="lg" className="flex-1" asChild>
          <a href="#collection" className="flex items-center gap-1.5">Shop <img src={heemLogo} alt="HEEM" className="h-5 w-auto" style={{ filter: "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(260deg)" }} /></a>
        </Button>
        {totalItems > 0 && (
          <Button variant="outline" size="lg" onClick={() => setIsOpen(true)} className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 min-w-[18px] bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center px-1">
              {totalItems}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MobileShopBar;
