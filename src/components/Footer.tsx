import { Instagram, Youtube } from "lucide-react";
import heemLogo from "@/assets/heem-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-12 relative">
      <div className="absolute inset-0 bg-noise" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={heemLogo} alt="HEEM" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground font-body">
              Premium grooming by JV.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/jvcutzz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@JVCUTZZ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/60 font-body">
            © {new Date().getFullYear()} HEEM by JV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
