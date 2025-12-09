import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { Description } from "@radix-ui/react-toast";
//import { Link } from "react-router-dom";

const categories = [
  "All",
  // "Organic Flavors",
  "Calizta",
  "Hotbanero",
  "Gift Collections",
];

const products = [
  // {
  //   id: 1,
  //   name: "Bell Papper Powder",
  //   category: "Organic Flavors",
  //   description:
  //     "Discover the authentic taste of nature with our Organic Flavors, crafted from carefully selected ingredients grown without chemicals, pesticides, or synthetic additives. Each flavor is rich in nutrients, bursting with freshness, and designed to enhance your lifestyle with healthier, more sustainable choices.",
  //   image: "/images/organic.png",

  //   price: "lkr 500.00",
  //   //badge: "Best Seller",
  // },

  {
    id: 1,
    name: "Black Tea",
    category: "Calizta",
    description:
      "CALIZTA is more than just tea—it’s a journey through the lush green plantations of Sri Lanka, crafted with passion and purity. Each leaf is handpicked at its peak, carefully processed, and blended to bring out a rich aroma, golden color, and unforgettable taste.",
    image:"/goldennatureplantation/images/calizta.png",
    price: "lkr 1400.00",
  },
  {
    id: 2,
    name: "Soursop",
    category: "Calizta",
    description:
      "CALIZTA is more than just tea—it’s a journey through the lush green plantations of Sri Lanka, crafted with passion and purity. Each leaf is handpicked at its peak, carefully processed, and blended to bring out a rich aroma, golden color, and unforgettable taste.",
    image: "/goldennatureplantation/images/calizta.png",
    price: "lkr 1400.00",
  },
  {
    id: 3,
    name: "Heen Bovitiya",
    category: "Calizta",
    description:
      "CALIZTA is more than just tea—it’s a journey through the lush green plantations of Sri Lanka, crafted with passion and purity. Each leaf is handpicked at its peak, carefully processed, and blended to bring out a rich aroma, golden color, and unforgettable taste.",
    image: "/goldennatureplantation/images/calizta.png",
    price: "lkr 1400.00",
  },
  {
    id: 4,
    name: "Welpenela",
    category: "Calizta",
    description:
      "CALIZTA is more than just tea—it’s a journey through the lush green plantations of Sri Lanka, crafted with passion and purity. Each leaf is handpicked at its peak, carefully processed, and blended to bring out a rich aroma, golden color, and unforgettable taste.",
    image: "/goldennatureplantation/images/calizta.png",
    price: "lkr 1400.00",
  },
  {
    id: 5,
    name: "Chilli Papper Sauce",
    category: "Hotbanero",
    description:
      "HOTBANERO is not just a sauce—it’s an experience of bold, fiery flavor crafted from the finest habanero and Sri Lankan chilies. Each bottle delivers the perfect balance of heat and taste, elevating your meals with a kick that lingers in the best way.",
    image: "/goldennatureplantation/images/hotbanero.png",
    price: "lkr 1300.00",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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

      {/* Filter Section */}
      <section className="py-8 bg-ivory-warm sticky top-0 z-40 shadow-soft">
        <div className="container mx-auto px-4 lg:px-8">
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
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-ivory rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm rounded-full px-4 py-1">
                      <span className="font-body text-xs text-emerald-dark font-medium">
                        {product.badge}
                      </span>
                    </div>
                  )} */}

                  {/* Category */}
                  <div className="absolute top-4 right-4 bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-body text-xs text-foreground">
                      {product.category}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="font-display text-2xl text-emerald">
                      {product.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-emerald transition-colors">
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

      {/* Wholesale CTA */}
      <section className="py-24 bg-emerald">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="font-body text-sm tracking-widest uppercase text-gold">
            For Business
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-6">
            Wholesale & <span className="text-gold">Private Label</span>
          </h2>
          <p className="font-body text-lg text-ivory/80 max-w-2xl mx-auto mb-10">
            Partner with us to bring Golden Nature's premium products to your
            customers. We offer flexible wholesale arrangements and custom
            private label solutions.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request Catalog
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
