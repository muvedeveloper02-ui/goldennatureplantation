import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

// TEMP product data (later replace with API)
const products = [
  {
    id: 1,
    name: "Ceylon Golden Tea",
    description: "Premium organic tea from highland estates.",
    price: 1400,
    image:"/goldennatureplantation/images/calizta.png",
  },
  {
    id: 2,
    name: "Heen Bovitiya Herbal Tea",
    description: "Natural detox herbal tea for healthy life.",
    price: 1400,
    image: "/goldennatureplantation/images/calizta.png",
  },
  {
    id: 3,
    name: "Hot Banero",
    description: "Spicy natural agricultural product.",
    price: 1400,
    image: "/goldennatureplantation/images/calizta.png",
  },
  {
    id: 4,
    name: "Hot Banero",
    description: "Spicy natural agricultural product.",
    price: 1400,
    image: "/goldennatureplantation/images/calizta.png",
  },
  {
    id: 5,
    name: "Hot Banero",
    description: "Spicy natural agricultural product.",
    price: 1300,
    image: "/goldennatureplantation/images/hotbanero.png",
  },
];
//const navigate = useNavigate();

const ProductDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  //  Quantity State
  const [quantity, setQuantity] = useState(1);

  // Add to Cart Function
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  if (!product) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="py-32 text-center text-red-600 font-bold">
          Product Not Found
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
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

      <section className="py-24 bg-ivory-warm">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* PRODUCT IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
          />

          {/* PRODUCT INFO */}
          <div className="bg-white p-10 rounded-2xl shadow-soft">
            <h2 className="font-display text-3xl mb-4">{product.name}</h2>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <p className="text-2xl font-bold text-emerald mb-6">
              Rs. {product.price.toLocaleString()}
            </p>

            {/*  QUANTITY CONTROLLER */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold">Quantity:</span>

              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  −
                </button>

                <span className="px-6 py-2 font-semibold">{quantity}</span>

                <button
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/*  TOTAL PRICE */}
            <p className="text-lg font-semibold text-gray-700 mb-6">
              Total: Rs. {(product.price * quantity).toLocaleString()}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <Button variant="emerald-outline"  onClick={handleAddToCart}>
                Buy Now</Button>

              <Button variant="emerald-outline" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetails;
