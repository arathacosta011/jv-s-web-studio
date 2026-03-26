import { Instagram, Youtube, ShoppingBag } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-bold text-gradient-violet mb-3">HEEM</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Premium grooming by JV. Built in the barber chair.
              Real products for real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-lg font-semibold mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Shop HEEM", href: SHOP_URL, external: true },
                { label: "Results", href: "#results" },
                { label: "About JV", href: "#about" },
                { label: "Book a Cut", href: "https://booksy.com/en-us/73285_jvkutzzz_barber-shop_san-diego", external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-display text-lg font-semibold mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/jvcutzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Instagram className="w-4 h-4" /> @jvcutzz
              </a>
              <a
                href="https://www.youtube.com/@JVCUTZZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Youtube className="w-4 h-4" /> JVCUTZZ
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <ShoppingBag className="w-4 h-4" /> heembyjv.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} HEEM by JV. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Lyfestyle Not A Brand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
