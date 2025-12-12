// export default Checkout;
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCurrency } from "@/context/CurrencyContext"; //
import { ChevronDown } from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price?: number; // legacy LKR price
  basePriceLkr?: number; // new LKR price field
  quantity: number;
};

const Checkout = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    accountHolderName: "",
    bankCode: "",
    nic: "",
    expiryDate: "",
  });

  // ✅ get currency + formatter
  const { currency, formatPrice } = useCurrency();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Helper: always work with base LKR price
  const getItemBasePriceLkr = (item: CartItem) =>
    item.basePriceLkr ?? item.price ?? 0;

  // Total in LKR (for payment)
  const totalAmountLkr = cart.reduce(
    (total, item) => total + getItemBasePriceLkr(item) * (item.quantity || 0),
    0
  );

  const handlePayNow = () => {
    if (!customer.name || !customer.phone || !customer.email) {
      toast.error("Please fill in customer name, phone and email.");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    // If total is 0, abort
    if (totalAmountLkr <= 0) {
      toast.error("Invalid total amount.");
      return;
    }

    // 🔐 PayHere handles card entry on their side.
    // We only send basic order + customer data.
    const payment = {
      sandbox: true, // change to false when going live
      merchant_id: "YOUR_MERCHANT_ID", // TODO: replace
      return_url: "http://localhost:8080/payment-success",
      cancel_url: "http://localhost:8080/payment-cancel",
      notify_url: "http://localhost:8080/payment-notify",

      order_id: "GN-" + Date.now(),
      items: "Golden Nature Products",
      amount: totalAmountLkr.toFixed(2), // ✅ always LKR for gateway
      currency: "LKR", // ✅ PayHere expects LKR here

      first_name: customer.name,
      last_name: "",
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      city: "Sri Lanka",
      country: "Sri Lanka",
    };

    try {
      // @ts-ignore - PayHere script is loaded globally
      payhere.startPayment(payment);
    } catch (e) {
      console.error("PayHere error:", e);
      toast.error("Unable to start payment. Please try again.");
    }
  };

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
              Nature&apos;s <span className="text-gold">Premium</span> Treasures
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
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-3xl">Secure Checkout</h2>
            <span className="text-xs text-muted-foreground">
              Showing prices in {currency}
            </span>
          </div>

          {/* CUSTOMER FORM */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
            />
          </div>

          {/* Bank / Card Details (UI only – PayHere will handle real card data) */}
          <div className="border rounded-xl p-6 bg-white shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-6 text-emerald">
              Bank Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bank Selection */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Select Bank
                </label>

                <div className="relative">
                  <select
                    className="border p-3 rounded-lg w-full pr-10 appearance-none"
                    onChange={(e) =>
                      setCustomer({ ...customer, bankName: e.target.value })
                    }
                  >
                    <option value="">Select Your Bank</option>
                    <option value="BOC">Bank of Ceylon</option>
                    <option value="People’s Bank">People’s Bank</option>
                    <option value="Commercial Bank">Commercial Bank</option>
                    <option value="Sampath Bank">Sampath Bank</option>
                    <option value="Hatton National Bank">
                      Hatton National Bank (HNB)
                    </option>
                    <option value="DFCC Bank">DFCC Bank</option>
                  </select>

                  {/* Custom dropdown icon, slightly away from the border */}
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Account Holder Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Account Holder Name"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      accountHolderName: e.target.value,
                    })
                  }
                />
              </div>

              {/* Branch Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Branch Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Branch Name"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({ ...customer, branchName: e.target.value })
                  }
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Card Number"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({ ...customer, accountNumber: e.target.value })
                  }
                />
              </div>

              {/* Expiry Date */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  type="month"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({ ...customer, expiryDate: e.target.value })
                  }
                />
              </div>

              {/* CVV Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  CVV Number
                </label>
                <input
                  type="text"
                  placeholder="Enter CVV Number"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({ ...customer, bankCode: e.target.value })
                  }
                />
              </div>

              {/* Bank Code / SWIFT (Optional) */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bank Code / SWIFT (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter Bank Code"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({ ...customer, bankCode: e.target.value })
                  }
                />
              </div>

              {/* NIC / ID */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  NIC / ID Number
                </label>
                <input
                  type="text"
                  placeholder="Enter NIC / ID Number"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setCustomer({ ...customer, nic: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="border rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            {cart.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cart.map((item) => {
                  const unitLkr = getItemBasePriceLkr(item);
                  const lineTotalLkr = unitLkr * (item.quantity || 0);

                  return (
                    <div
                      key={item.id}
                      className="flex justify-between border-b py-2"
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>{formatPrice(lineTotalLkr)}</span>
                    </div>
                  );
                })}

                <div className="flex justify-between mt-4 text-xl font-bold">
                  <span>Total</span>
                  <span className="text-emerald">
                    {formatPrice(totalAmountLkr)}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* PAY BUTTON */}
          <Button
            variant="emerald-outline"
            className="w-full text-lg"
            onClick={handlePayNow}
            disabled={cart.length === 0}
          >
            Pay Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Checkout;
