import { Instagram, Youtube, ShoppingBag } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-20 relative">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <p className="font-display text-2xl font-extrabold text-gradient-violet mb-4">HEEM</p>
            <p className="text-sm text-muted-foreground font-body leading-[1.8]">
              Premium grooming by JV. Built in the barber chair.
              Real products. Real results.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider mb-5">Links</p>
            <div className="flex flex-col gap-3">
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
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/jvcutzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <Instagram className="w-4 h-4 text-primary/60" /> @jvcutzz
              </a>
              <a
                href="https://www.youtube.com/@JVCUTZZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <Youtube className="w-4 h-4 text-primary/60" /> JVCUTZZ
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <ShoppingBag className="w-4 h-4 text-primary/60" /> heembyjv.com
              </a>
            </div>
          </div>
        </div>

        <div className="divider-glow mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 font-body">
            © {new Date().getFullYear()} HEEM by JV. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 font-body tracking-wider">
            LYFESTYLE NOT A BRAND
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
