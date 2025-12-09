import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const Checkout = () => {
  const [cart, setCart] = useState([]);
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

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayNow = () => {
    if (!customer.name || !customer.phone || !customer.email) {
      alert("Please fill customer details");
      return;
    }

    const payment = {
      sandbox: true, //  change to false when going live
      merchant_id: "YOUR_MERCHANT_ID", //  replace this
      return_url: "http://localhost:8080/payment-success",
      cancel_url: "http://localhost:8080/payment-cancel",
      notify_url: "http://localhost:8080/payment-notify",

      order_id: "GN-" + Date.now(),
      items: "Golden Nature Products",
      amount: totalAmount.toFixed(2),
      currency: "LKR",

      first_name: customer.name,
      last_name: "",
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      city: "Sri Lanka",
      country: "Sri Lanka",
    };

    //  REDIRECT TO PAYHERE
    // @ts-ignore
    payhere.startPayment(payment);
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
          <h2 className="font-display text-3xl mb-6 text-center">
            Secure Checkout
          </h2>

          {/* CUSTOMER FORM */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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

          {/*Card Details */}
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-emerald">
              Bank Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bank Selection */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Select Bank
                </label>
                <select
                  className="border p-3 rounded-lg w-full"
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

              {/* Account Number */}
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
                    setCustomer({ ...customer, accountNumber: e.target.value })
                  }
                />
              </div>

              {/* Bank Code / SWIFT (Optional but Professional) */}
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

              {/* NIC / ID for Verification */}
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

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-2">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}

            <div className="flex justify-between mt-4 text-xl font-bold">
              <span>Total</span>
              <span className="text-emerald">
                Rs. {totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* PAY BUTTON */}
          <Button
            variant="emerald-outline"
            className="w-full text-lg"
            onClick={handlePayNow}
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
