import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Results", href: "#results" },
  { label: "About JV", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-gradient-violet">
          HEEM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">Shop HEEM</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-6">
          <div className="container flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-body text-muted-foreground hover:text-primary transition-colors"
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
