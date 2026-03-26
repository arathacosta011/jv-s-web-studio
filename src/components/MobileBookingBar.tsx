import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const SHOP_URL = "https://heembyjv.com";

const MobileShopBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-border p-3">
      <Button variant="cta" size="lg" className="w-full" asChild>
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
          <ShoppingBag className="w-5 h-5" />
          Shop HEEM
        </a>
      </Button>
    </div>
  );
};

export default MobileShopBar;
