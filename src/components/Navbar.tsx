import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import heemLogo from "@/assets/heem-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={heemLogo} alt="HEEM" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#collection" className="text-[13px] font-body text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </a>
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[18px] bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-foreground"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[18px] bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border pb-6">
          <div className="container flex flex-col gap-4 pt-4">
            <a href="#collection" className="text-base font-body text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
              Shop
            </a>
            <Button variant="hero" size="default" asChild>
              <a href="#collection" onClick={() => setIsOpen(false)}>Shop Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
