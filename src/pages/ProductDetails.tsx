// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { Button } from "@/components/ui/button";

// type Currency = "LKR" | "USD";

// const FALLBACK_LKR_PER_USD = 310; // used if API fails

// // TEMP product data (later replace with API)
// const products = [
//   {
//     id: 1,
//     name: "Black Tea",
//     description:
//       "Calizta Black Tea is a refined expression of Sri Lanka’s legendary tea heritage, grown in the misty highlands where climate, soil, and elevation create unmatched quality. Each leaf is hand-picked at peak maturity, naturally withered, and expertly oxidized to develop its rich aroma, deep amber color, and bold yet smooth flavor. Naturally high in antioxidants, this premium black tea supports heart health, boosts energy, and enhances mental focus without artificial additives. Free from preservatives and chemicals, Calizta Black Tea offers a pure, refreshing experience that nourishes the body while awakening the senses in every cup.",
//     price: 1400,
//     image:
//       "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365318/3_kzevum.png",
//   },
//   {
//     id: 2,
//     name: "Soursop",
//     description:
//       "Calizta Soursop Tea is a powerful herbal infusion made from carefully selected, naturally grown soursop leaves known for their exceptional wellness benefits. Traditionally valued for supporting immunity, digestion, and cellular health, soursop leaves are gently cleaned, sun-dried, and preserved without chemicals to retain their full therapeutic value. This tea delivers a mild, earthy taste with a naturally calming aroma, making it ideal for daily detox, stress relief, and inner balance. Free from caffeine, artificial flavoring, and synthetic processing, Calizta Soursop Tea is a pure plant-based wellness drink rooted in nature and tradition.",
//     price: 1400,
//     image:
//       "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365437/1_uqfmoe.png",
//   },
//   {
//     id: 3,
//     name: "Heen Bovitiya",
//     description:
//       "Calizta Heen Bovitiya Tea is a treasured Ayurvedic herbal tea traditionally used in Sri Lanka for liver cleansing, blood purification, and body cooling. Harvested from naturally grown Heen Bovitiya plants in clean forest environments, the leaves are gently dried using traditional methods to preserve their powerful medicinal properties. Rich in natural antioxidants and detoxifying compounds, this tea supports digestion, improves metabolism, and promotes overall internal balance. With its vibrant natural color and refreshing herbal taste, Calizta Heen Bovitiya offers a pure, chemical-free wellness solution for modern lifestyles.",
//     price: 1400,
//     image:
//       "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365384/4_mcu9ru.png",
//   },
//   {
//     id: 4,
//     name: "Welpenela",
//     description:
//       "Calizta Welpenela Herbal Tea is a time-honored detoxifying herb sourced from Sri Lanka’s untouched forest regions, widely revered in traditional medicine for its blood-cleansing and rejuvenating benefits. Naturally hand-harvested and carefully sun-dried, Welpenela retains its full medicinal strength without artificial processing. This herbal infusion supports weight balance, liver health, digestion, and toxin elimination while delivering a clean, soothing taste. Free from caffeine, preservatives, and additives, Calizta Welpenela Tea offers a deeply nourishing detox drink that harmonizes the body with nature’s healing power.",
//     price: 1400,
//     image:
//       "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365406/2_idpsua.png",
//   },
//   {
//     id: 5,
//     name: "Chilli Papper Sauce",
//     description:
//       "Hotbanero Chilli Pepper Sauce is a bold, all-natural fusion of premium Sri Lankan chilies and fiery habanero peppers, crafted for those who love intense flavor with authentic freshness. Made without artificial coloring or preservatives, each batch is slow-processed to preserve natural heat, rich color, and full nutritional value. Chilies are a natural source of vitamins A, C, and capsaicin, known to boost metabolism, support immunity, and improve circulation. With its perfect balance of spice, tang, and depth, Hotbanero transforms everyday meals into exciting, flavor-packed culinary experiences while staying true to nature.",
//     price: 1300,
//     image:
//       "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365394/5_ojcin9.png",
//   },
// ];

// const ProductDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const product = products.find((p) => p.id === Number(id));

//   // 🧮 Quantity state
//   const [quantity, setQuantity] = useState(1);

//   // 💱 Currency & rate state
//   const [currency, setCurrency] = useState<Currency>(() => {
//     const saved = localStorage.getItem("currencyPreference");
//     return saved === "USD" || saved === "LKR" ? (saved as Currency) : "LKR";
//   });

//   const [lkrPerUsd, setLkrPerUsd] = useState<number>(FALLBACK_LKR_PER_USD);
//   const [rateLoaded, setRateLoaded] = useState(false);

//   // 🔄 Fetch live USD→LKR rate
//   useEffect(() => {
//     const fetchRate = async () => {
//       try {
//         const res = await fetch(
//           "https://api.exchangerate.host/latest?base=USD&symbols=LKR"
//         );
//         if (!res.ok) throw new Error("Failed to fetch rate");

//         const data = await res.json();
//         const rate = data?.rates?.LKR;

//         if (rate && typeof rate === "number") {
//           setLkrPerUsd(rate);
//         }
//       } catch (err) {
//         console.error(
//           "Failed to fetch live exchange rate. Using fallback 310 LKR/USD.",
//           err
//         );
//       } finally {
//         setRateLoaded(true);
//       }
//     };

//     fetchRate();
//   }, []);

//   // 💰 Helper: format price in selected currency
//   const formatPrice = (amountLkr: number): string => {
//     if (currency === "LKR") {
//       return `Rs. ${amountLkr.toLocaleString("en-LK", {
//         minimumFractionDigits: 2,
//       })}`;
//     }

//     const usd = amountLkr / lkrPerUsd;
//     return `$ ${usd.toLocaleString("en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     })}`;
//   };

//   // 🛒 Add to Cart
//   const handleAddToCart = () => {
//     if (!product) return;

//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const existingItem = cart.find((item: any) => item.id === product.id);

//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cart.push({
//         ...product,
//         quantity,
//         basePriceLkr: product.price,     // keep base price in LKR
//         chosenCurrency: currency,        // remember what client used
//         lkrPerUsdAtTime: lkrPerUsd,      // store rate used for this calc
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     navigate("/cart");
//   };

//   if (!product) {
//     return (
//       <main className="min-h-screen">
//         <Navbar />
//         <div className="py-32 text-center text-red-600 font-bold">
//           Product Not Found
//         </div>
//         <Footer />
//       </main>
//     );
//   }

//   const unitPriceLkr = product.price;
//   const totalLkr = unitPriceLkr * quantity;

//   return (
//     <main className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 bg-emerald overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <img
//             src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1920&q=80"
//             alt="Products background"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <span className="font-body text-sm tracking-widest uppercase text-gold">
//               Our Collection
//             </span>
//             <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6">
//               Nature&apos;s <span className="text-gold">Premium</span>{" "}
//               Treasures
//             </h1>
//             <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
//               Comprehensive plantation solutions designed to maximize yield,
//               ensure quality, and promote sustainable agricultural practices for
//               a better tomorrow.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="py-24 bg-ivory-warm">
//         <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
//           {/* PRODUCT IMAGE */}
//           <img
//             src={product.image}
//             alt={product.name}
//             className="rounded-2xl shadow-elevated w-full h-[600px] object-cover"
//           />

//           {/* PRODUCT INFO */}
//           <div className="bg-white p-10 rounded-2xl shadow-soft">
//             <div className="flex items-start justify-between gap-4 mb-4">
//               <h2 className="font-display text-3xl">{product.name}</h2>

//               {/* Currency toggle */}
//               <div className="flex flex-col items-end gap-1">
//                 <span className="text-[11px] text-muted-foreground">
//                   Currency
//                 </span>
//                 <div className="inline-flex rounded-full bg-ivory border border-emerald/20 p-1">
//                   <button
//                     onClick={() => {
//                       setCurrency("LKR");
//                       localStorage.setItem("currencyPreference", "LKR");
//                     }}
//                     className={`px-3 py-1 text-xs rounded-full transition-all ${
//                       currency === "LKR"
//                         ? "bg-emerald text-ivory"
//                         : "text-foreground hover:bg-emerald/10"
//                     }`}
//                   >
//                     LKR
//                   </button>
//                   <button
//                     onClick={() => {
//                       setCurrency("USD");
//                       localStorage.setItem("currencyPreference", "USD");
//                     }}
//                     className={`px-3 py-1 text-xs rounded-full transition-all ${
//                       currency === "USD"
//                         ? "bg-emerald text-ivory"
//                         : "text-foreground hover:bg-emerald/10"
//                     }`}
//                   >
//                     USD
//                   </button>
//                 </div>
//                 <span className="text-[10px] text-muted-foreground">
//                   {rateLoaded
//                     ? `1 USD ≈ ${lkrPerUsd.toFixed(2)} LKR`
//                     : "Loading live rate…"}
//                 </span>
//               </div>
//             </div>

//             <p className="text-muted-foreground mb-6">{product.description}</p>

//             {/* Unit price in selected currency */}
//             <p className="text-2xl font-bold text-emerald mb-2">
//               {formatPrice(unitPriceLkr)}
//             </p>
//             <p className="text-xs text-muted-foreground mb-6">
//               * Calculated using live USD/LKR rate for display purposes only.
//             </p>

//             {/* QUANTITY CONTROLLER */}
//             <div className="flex items-center gap-4 mb-6">
//               <span className="font-semibold">Quantity:</span>

//               <div className="flex items-center border rounded-lg overflow-hidden">
//                 <button
//                   className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
//                   onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//                 >
//                   −
//                 </button>

//                 <span className="px-6 py-2 font-semibold">{quantity}</span>

//                 <button
//                   className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
//                   onClick={() => setQuantity(quantity + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* TOTAL PRICE in selected currency */}
//             <p className="text-lg font-semibold text-gray-700 mb-6">
//               Total: {formatPrice(totalLkr)}
//             </p>

//             {/* ACTION BUTTONS */}
//             <div className="flex gap-4">
//               <Button variant="emerald-outline" onClick={handleAddToCart}>
//                 Buy Now
//               </Button>

//               <Button variant="emerald-outline" onClick={handleAddToCart}>
//                 Add to Cart
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// };

// export default ProductDetails;
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext"; // ✅ use global currency

// TEMP product data (later replace with API)
const products = [
  {
    id: 1,
    name: "Black Tea",
    description:
      "Calizta Black Tea is a refined expression of Sri Lanka’s legendary tea heritage, grown in the misty highlands where climate, soil, and elevation create unmatched quality. Each leaf is hand-picked at peak maturity, naturally withered, and expertly oxidized to develop its rich aroma, deep amber color, and bold yet smooth flavor. Naturally high in antioxidants, this premium black tea supports heart health, boosts energy, and enhances mental focus without artificial additives. Free from preservatives and chemicals, Calizta Black Tea offers a pure, refreshing experience that nourishes the body while awakening the senses in every cup.",
    price: 1400,
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765521963/3_ob0ypy.png",
  },
  {
    id: 2,
    name: "Soursop",
    description:
      "Calizta Soursop Tea is a powerful herbal infusion made from carefully selected, naturally grown soursop leaves known for their exceptional wellness benefits. Traditionally valued for supporting immunity, digestion, and cellular health, soursop leaves are gently cleaned, sun-dried, and preserved without chemicals to retain their full therapeutic value. This tea delivers a mild, earthy taste with a naturally calming aroma, making it ideal for daily detox, stress relief, and inner balance. Free from caffeine, artificial flavoring, and synthetic processing, Calizta Soursop Tea is a pure plant-based wellness drink rooted in nature and tradition.",
    price: 1400,
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365437/1_uqfmoe.png",
  },
  {
    id: 3,
    name: "Heen Bovitiya",
    description:
      "Calizta Heen Bovitiya Tea is a treasured Ayurvedic herbal tea traditionally used in Sri Lanka for liver cleansing, blood purification, and body cooling. Harvested from naturally grown Heen Bovitiya plants in clean forest environments, the leaves are gently dried using traditional methods to preserve their powerful medicinal properties. Rich in natural antioxidants and detoxifying compounds, this tea supports digestion, improves metabolism, and promotes overall internal balance. With its vibrant natural color and refreshing herbal taste, Calizta Heen Bovitiya offers a pure, chemical-free wellness solution for modern lifestyles.",
    price: 1400,
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365384/4_mcu9ru.png",
  },
  {
    id: 4,
    name: "Welpenela",
    description:
      "Calizta Welpenela Herbal Tea is a time-honored detoxifying herb sourced from Sri Lanka’s untouched forest regions, widely revered in traditional medicine for its blood-cleansing and rejuvenating benefits. Naturally hand-harvested and carefully sun-dried, Welpenela retains its full medicinal strength without artificial processing. This herbal infusion supports weight balance, liver health, digestion, and toxin elimination while delivering a clean, soothing taste. Free from caffeine, preservatives, and additives, Calizta Welpenela Tea offers a deeply nourishing detox drink that harmonizes the body with nature’s healing power.",
    price: 1400,
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365406/2_idpsua.png",
  },
  {
    id: 5,
    name: "Chilli Papper Sauce",
    description:
      "Hotbanero Chilli Pepper Sauce is a bold, all-natural fusion of premium Sri Lankan chilies and fiery habanero peppers, crafted for those who love intense flavor with authentic freshness. Made without artificial coloring or preservatives, each batch is slow-processed to preserve natural heat, rich color, and full nutritional value. Chilies are a natural source of vitamins A, C, and capsaicin, known to boost metabolism, support immunity, and improve circulation. With its perfect balance of spice, tang, and depth, Hotbanero transforms everyday meals into exciting, flavor-packed culinary experiences while staying true to nature.",
    price: 1300,
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448791/Calizta_bhsyzc.png",
  },
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  // 🧮 Quantity state
  const [quantity, setQuantity] = useState(1);

  // 💱 Get global currency & helpers
  const { currency, formatPrice, lkrPerUsd } = useCurrency();

  // 🛒 Add to Cart
  const handleAddToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = cart.find((item: any) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
        basePriceLkr: product.price, // keep base LKR price
        chosenCurrency: currency,    // currency user is using now
        lkrPerUsdAtTime: lkrPerUsd,  // store rate used for this decision
      });
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

  const unitPriceLkr = product.price;
  const totalLkr = unitPriceLkr * quantity;

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
              Nature&apos;s <span className="text-gold">Premium</span>{" "}
              Treasures
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
              Comprehensive plantation solutions designed to maximize yield,
              ensure quality, and promote sustainable agricultural practices for
              a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 bg-ivory-warm">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* PRODUCT IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-elevated w-full h-[600px] object-cover"
          />

          {/* PRODUCT INFO */}
          <div className="bg-white p-10 rounded-2xl shadow-soft">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-display text-3xl">{product.name}</h2>
              {/* ❌ Currency toggle removed – uses global selection only */}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Unit price in selected currency */}
            <p className="text-2xl font-bold text-emerald mb-2">
              {formatPrice(unitPriceLkr)}
            </p>
            <p className="text-xs text-muted-foreground mb-6">
              * Displayed in your selected currency.
            </p>

            {/* QUANTITY CONTROLLER */}
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

            {/* TOTAL PRICE in selected currency */}
            <p className="text-lg font-semibold text-gray-700 mb-6">
              Total: {formatPrice(totalLkr)}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <Button variant="emerald-outline" onClick={handleAddToCart}>
                Buy Now
              </Button>

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
