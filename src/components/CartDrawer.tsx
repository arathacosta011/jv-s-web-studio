import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus, ShoppingBag, CreditCard, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

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
                <h2 className="font-display text-lg font-bold">{showCheckout ? "Checkout" : "Your Cart"}</h2>
                <span className="text-xs text-muted-foreground font-body">({totalItems})</span>
              </div>
              <button onClick={() => { setIsOpen(false); setShowCheckout(false); }} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {showCheckout ? (
              <CheckoutView
                items={items}
                totalPrice={totalPrice}
                onBack={() => setShowCheckout(false)}
              />
            ) : (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mb-4" />
                      <p className="font-display text-lg font-bold mb-2">Cart is empty</p>
                      <p className="text-sm text-muted-foreground font-body">Add some HEEM products to get started.</p>
                      <Button variant="outline" size="sm" className="mt-4" onClick={() => setIsOpen(false)}>
                        Continue Shopping
                      </Button>
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
                    <Button variant="hero" size="lg" className="w-full" onClick={() => setShowCheckout(true)}>
                      <CreditCard className="w-4 h-4" />
                      Checkout
                    </Button>
                    <button onClick={() => setIsOpen(false)} className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors font-body py-1">
                      Continue Shopping
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CheckoutView = ({
  items,
  totalPrice,
  onBack,
}: {
  items: { name: string; price: string; quantity: number; image: string }[];
  totalPrice: number;
  onBack: () => void;
}) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with Stripe/Shopify
    alert("Checkout coming soon! Payment processing will be connected shortly.");
  };

  const inputClass =
    "w-full bg-secondary/40 border border-border/50 rounded-xl px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-y-auto">
      <div className="flex-1 p-6 space-y-5">
        <button type="button" onClick={onBack} className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body">
          ← Back to cart
        </button>

        {/* Order summary */}
        <div className="bg-secondary/20 rounded-xl p-4 border border-border/30 space-y-2">
          <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-2">Order Summary</p>
          {items.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <span className="text-xs font-body text-muted-foreground truncate flex-1">
                {item.name} × {item.quantity}
              </span>
              <span className="text-xs font-bold text-foreground ml-2">
                ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="divider-glow my-2" />
          <div className="flex justify-between items-center">
            <span className="text-sm font-body font-bold">Total</span>
            <span className="text-lg font-display font-extrabold text-gradient-violet">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-3">Contact</p>
          <input
            type="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </div>

        {/* Shipping */}
        <div>
          <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-body mb-3">Shipping Address</p>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="First name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={inputClass}
              />
              <input
                placeholder="Last name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={inputClass}
              />
            </div>
            <input
              placeholder="Address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className={inputClass}
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                placeholder="City"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={inputClass}
              />
              <input
                placeholder="State"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className={inputClass}
              />
              <input
                placeholder="ZIP"
                required
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout button */}
      <div className="p-6 border-t border-border/40 space-y-3">
        <Button variant="hero" size="lg" className="w-full" type="submit">
          <Lock className="w-4 h-4" />
          Place Order — ${totalPrice.toFixed(2)}
        </Button>
        <p className="text-[10px] text-muted-foreground/60 text-center font-body flex items-center justify-center gap-1.5">
          <Lock className="w-3 h-3" />
          Secure checkout powered by HEEM
        </p>
      </div>
    </form>
  );
};

export default CartDrawer;
