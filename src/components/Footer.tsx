import { Instagram, Youtube, MapPin, Scissors } from "lucide-react";

const BOOKING_URL = "https://booksy.com/en-us/73285_jvkutzzz_barber-shop_san-diego";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl text-gradient-gold mb-3">JVCUTZZ</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Lyfestyle not a brand. Premium barbering in San Diego. 
              Precision, confidence, and craft — every single cut.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-lg mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Book Appointment", href: BOOKING_URL, external: true },
                { label: "Transformations", href: "#transformations" },
                { label: "Services", href: "#services" },
                { label: "HEEM Products", href: "https://jvcutzz.com", external: true },
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
            <p className="font-display text-lg mb-4">Connect</p>
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
              <p className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4" /> 4252 40th St, San Diego, CA 92105
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} JVCUTZZ. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Scissors className="w-3 h-3 text-primary" />
            <span className="font-body">Lyfestyle Not A Brand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
