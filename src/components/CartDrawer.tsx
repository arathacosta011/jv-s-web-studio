import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, ShoppingBag, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SHOP_URL = "https://heembyjv.com";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-card border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/40">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg font-bold">Your Cart</h2>
                <span className="text-xs text-muted-foreground font-body">({totalItems})</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mb-4" />
                  <p className="font-display text-lg font-bold mb-2">Cart is empty</p>
                  <p className="text-sm text-muted-foreground font-body">Add some HEEM products to get started.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.name} className="flex gap-4 bg-secondary/30 rounded-xl p-4 border border-border/30">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg bg-secondary/50 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-bold truncate">{item.name}</p>
                      <p className="text-sm font-bold text-gradient-violet">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-secondary/60 border border-border/40 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-body w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-secondary/60 border border-border/40 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors font-body"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground">Subtotal</span>
                  <span className="font-display text-xl font-extrabold text-gradient-violet">${totalPrice.toFixed(2)}</span>
                </div>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Checkout on HEEM Store
                  </a>
                </Button>
                <button onClick={clearCart} className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors font-body py-1">
                  Clear Cart
                </button>
                <p className="text-[10px] text-muted-foreground/60 text-center font-body">
                  You'll complete your purchase on heembyjv.com
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
