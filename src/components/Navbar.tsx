import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Button variant="hero" size="sm" asChild>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">Shop Now</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
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
