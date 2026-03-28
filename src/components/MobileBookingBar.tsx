import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const MobileShopBar = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-border/30 p-3">
      <div className="flex gap-2">
        <Button variant="hero" size="lg" className="flex-1" asChild>
          <a href="#collection">Shop Now</a>
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
