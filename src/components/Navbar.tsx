import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const SHOP_URL = "https://heembyjv.com/collections/all";

const navLinks = [
  { label: "Why HEEM", href: "#products" },
  { label: "Shop", href: "#collection" },
  { label: "Watch JV Use It", href: "#video-product" },
  { label: "Results", href: "#results" },
  { label: "About JV", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-extrabold tracking-tight text-gradient-violet">
          HEEM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4.5 h-4.5 min-w-[18px] bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Button variant="hero" size="sm" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">Shop Now</a>
          </Button>
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
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border pb-8">
          <div className="container flex flex-col gap-5 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-body text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">Shop HEEM</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
