import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import heemLogo from "@/assets/heem-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={heemLogo} alt="HEEM" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Shop", href: "#collection" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#reviews" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-body text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border/30 pb-6">
          <div className="container flex flex-col gap-4 pt-4">
            {[
              { label: "Shop", href: "#collection" },
              { label: "About", href: "#about" },
              { label: "Reviews", href: "#reviews" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-body text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
