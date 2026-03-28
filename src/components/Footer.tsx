import { Instagram, Youtube } from "lucide-react";
import heemLogo from "@/assets/heem-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-surface py-16 relative">
      <div className="absolute inset-0 bg-noise" />
      <div className="container relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={heemLogo} alt="HEEM" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Premium grooming products built by JV. Tested in the chair, made for results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] text-primary uppercase tracking-[0.2em] font-body mb-4">Shop</p>
              <div className="space-y-3">
                {["Styling", "Tools", "Bundles"].map((link) => (
                  <a key={link} href="#collection" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] text-primary uppercase tracking-[0.2em] font-body mb-4">Info</p>
              <div className="space-y-3">
                {[
                  { label: "About JV", href: "#about" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">{link.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] text-primary uppercase tracking-[0.2em] font-body mb-4">Follow</p>
            <div className="flex md:justify-end gap-4">
              <a href="https://www.instagram.com/jvcutzz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@JVCUTZZ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-glow" />
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/60 font-body">
            © {new Date().getFullYear()} HEEM by JV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
