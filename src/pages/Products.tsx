import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/context/CurrencyContext"; // ✅ NEW

const categories = ["All", "Calizta", "Hotbanero", "Gift Collections"];

const products = [
  {
    id: 1,
    name: "Black Tea",
    category: "Calizta",
    description:
      "Calizta Black Tea is a refined expression of Sri Lanka’s legendary tea heritage, grown in the misty highlands where climate, soil, and elevation create unmatched quality. Each leaf is hand-picked at peak maturity, naturally withered, and expertly oxidized to develop its rich aroma, deep amber color, and bold yet smooth flavor. Naturally high in antioxidants, this premium black tea supports heart health, boosts energy, and enhances mental focus without artificial additives. Free from preservatives and chemicals, Calizta Black Tea offers a pure, refreshing experience that nourishes the body while awakening the senses in every cup.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765521963/3_ob0ypy.png",
    priceLkr: 1400,
  },
  {
    id: 2,
    name: "Soursop",
    category: "Calizta",
    description:
      "Calizta Soursop Tea is a powerful herbal infusion made from carefully selected, naturally grown soursop leaves known for their exceptional wellness benefits. Traditionally valued for supporting immunity, digestion, and cellular health, soursop leaves are gently cleaned, sun-dried, and preserved without chemicals to retain their full therapeutic value. This tea delivers a mild, earthy taste with a naturally calming aroma, making it ideal for daily detox, stress relief, and inner balance. Free from caffeine, artificial flavoring, and synthetic processing, Calizta Soursop Tea is a pure plant-based wellness drink rooted in nature and tradition.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365437/1_uqfmoe.png",
    priceLkr: 1400,
  },
  {
    id: 3,
    name: "Heen Bovitiya",
    category: "Calizta",
    description:
      "Calizta Heen Bovitiya Tea is a treasured Ayurvedic herbal tea traditionally used in Sri Lanka for liver cleansing, blood purification, and body cooling. Harvested from naturally grown Heen Bovitiya plants in clean forest environments, the leaves are gently dried using traditional methods to preserve their powerful medicinal properties. Rich in natural antioxidants and detoxifying compounds, this tea supports digestion, improves metabolism, and promotes overall internal balance. With its vibrant natural color and refreshing herbal taste, Calizta Heen Bovitiya offers a pure, chemical-free wellness solution for modern lifestyles.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365384/4_mcu9ru.png",
    priceLkr: 1400,
  },
  {
    id: 4,
    name: "Welpenela",
    category: "Calizta",
    description:
      "Calizta Welpenela Herbal Tea is a time-honored detoxifying herb sourced from Sri Lanka’s untouched forest regions, widely revered in traditional medicine for its blood-cleansing and rejuvenating benefits. Naturally hand-harvested and carefully sun-dried, Welpenela retains its full medicinal strength without artificial processing. This herbal infusion supports weight balance, liver health, digestion, and toxin elimination while delivering a clean, soothing taste. Free from caffeine, preservatives, and additives, Calizta Welpenela Tea offers a deeply nourishing detox drink that harmonizes the body with nature’s healing power.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365406/2_idpsua.png",
    priceLkr: 1400,
  },
  {
    id: 5,
    name: "Chilli Papper Sauce",
    category: "Hotbanero",
    description:
      "Hotbanero Chilli Pepper Sauce is a bold, all-natural fusion of premium Sri Lankan chilies and fiery habanero peppers, crafted for those who love intense flavor with authentic freshness. Made without artificial coloring or preservatives, each batch is slow-processed to preserve natural heat, rich color, and full nutritional value. Chilies are a natural source of vitamins A, C, and capsaicin, known to boost metabolism, support immunity, and improve circulation. With its perfect balance of spice, tang, and depth, Hotbanero transforms everyday meals into exciting, flavor-packed culinary experiences while staying true to nature.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448791/Calizta_bhsyzc.png",
    priceLkr: 1300,
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Get currency state & helpers from global context
  const { currency, setCurrency, lkrPerUsd, rateLoaded, formatPrice } =
    useCurrency();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765529679/2ffce9ab7bcda2132dc5b37d90f3d74c_cvpoad.jpg"
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

      {/* Filter + Currency Section */}
      <section className="py-8 bg-ivory-warm sticky top-0 z-40 shadow-soft">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Filters */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full font-body text-sm whitespace-nowrap transition-all",
                  activeCategory === category
                    ? "bg-emerald text-ivory"
                    : "bg-ivory text-foreground hover:bg-emerald/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ✅ Currency Toggle (ONLY here) */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-body text-muted-foreground">
                Currency:
              </span>
              <div className="inline-flex rounded-full bg-ivory border border-emerald/20 p-1">
                <button
                  onClick={() => setCurrency("LKR")}
                  className={cn(
                    "px-3 py-1 text-xs rounded-full transition-all",
                    currency === "LKR"
                      ? "bg-emerald text-ivory"
                      : "text-foreground hover:bg-emerald/10"
                  )}
                >
                  LKR
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={cn(
                    "px-3 py-1 text-xs rounded-full transition-all",
                    currency === "USD"
                      ? "bg-emerald text-ivory"
                      : "text-foreground hover:bg-emerald/10"
                  )}
                >
                  USD
                </button>
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground">
              {rateLoaded
                ? `Approx. 1 USD ≈ ${lkrPerUsd.toFixed(2)} LKR`
                : "Loading live rate… (fallback 300 LKR/USD)"}
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={
              activeCategory === "Calizta"
                ? "flex gap-8 overflow-x-auto pb-4"
                : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-ivory rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 min-w-[260px]"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category */}
                  <div className="absolute top-4 right-4 bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-body text-xs text-foreground">
                      {product.category}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="font-display text-xl text-emerald">
                      {formatPrice(product.priceLkr)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-emerald transition-colors truncate">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <Button
                    variant="emerald-outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to={`/product/${product.id}`}>
                      Purchase
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
