import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, amount) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-ivory-warm">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1920&q=80"
            alt="Products background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Collection
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6">
              Nature's <span className="text-gold">Premium</span> Treasures
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
              Comprehensive plantation solutions designed to maximize yield,
              ensure quality, and promote sustainable agricultural practices for
              a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white p-10 rounded-2xl shadow-elevated">
          <h2 className="font-display text-3xl mb-8 text-center">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="hidden md:grid grid-cols-12 font-semibold text-sm text-muted-foreground border-b pb-3 mb-4">
                <div className="col-span-5">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
                <div className="col-span-2 text-right">Action</div>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 items-center border-b py-5 gap-4"
                >
                  {/* PRODUCT INFO */}
                  <div className="md:col-span-5 flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-xl object-cover border"
                      alt={item.name}
                    />
                    <div className="w-full">
                      <p className="font-semibold truncate whitespace-nowrap">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Rs. {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* QUANTITY */}
                  <div className="md:col-span-3 flex items-center justify-center gap-3">
                    <Button
                      size="sm"
                      variant="emerald-outline"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </Button>

                    <span className="font-semibold w-6 text-center">
                      {item.quantity}
                    </span>

                    <Button
                      size="sm"
                      variant="emerald-outline"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </Button>
                  </div>

                  {/* ITEM TOTAL */}
                  <div className="md:col-span-2 text-center font-bold text-emerald">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </div>

                  {/* REMOVE */}
                  <div className="md:col-span-2 text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              {/* TOTAL */}
              <div className="flex justify-between items-center mt-8">
                <h3 className="text-2xl font-display">Grand Total</h3>
                <p className="text-2xl font-bold text-emerald">
                  Rs. {grandTotal.toLocaleString()}
                </p>
              </div>

              {/* ACTION */}
              <div className="mt-8 flex justify-end gap-4">
                <Button
                  variant="emerald-outline"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                </Button>

                <Button
                  variant="emerald-outline"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Cart;
