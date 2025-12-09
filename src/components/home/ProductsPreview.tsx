import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bell Papper Powder",
    category: "Organic Flavors",
    description:
      "Discover the authentic taste of nature with our Organic Flavors, crafted from carefully selected ingredients grown without chemicals, pesticides, or synthetic additives. Each flavor is rich in nutrients, bursting with freshness, and designed to enhance your lifestyle with healthier, more sustainable choices.",
    image: `${import.meta.env.BASE_URL}images/calizta.png`,
    price: "lkr 500.00",
    //badge: "Best Seller",
  },

  {
    id: 2,
    name: "Calizta Tea",
    category: "Calizta",
    description:
      "CALIZTA is more than just tea—it’s a journey through the lush green plantations of Sri Lanka, crafted with passion and purity. Each leaf is handpicked at its peak, carefully processed, and blended to bring out a rich aroma, golden color, and unforgettable taste.",
    image: `${import.meta.env.BASE_URL}images/calizta.png`,
    price: "lkr 400.00",
  },
  {
    id: 3,
    name: "Chilli Papper Sauce",
    category: "Hotbanero",
    description:
      "HOTBANERO is not just a sauce—it’s an experience of bold, fiery flavor crafted from the finest habanero and Sri Lankan chilies. Each bottle delivers the perfect balance of heat and taste, elevating your meals with a kick that lingers in the best way.",
    image: `${import.meta.env.BASE_URL}images/hotbanero.png`,
    price: "lkr 300.00",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-24 bg-ivory-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-widest uppercase text-gold">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Nature's <span className="text-emerald">Premium</span> Offerings
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each product tells a story of careful cultivation, traditional
            craftsmanship, and an unwavering commitment to purity.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-ivory rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm rounded-full px-4 py-1">
                  <span className="font-body text-xs text-emerald-dark font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="font-display text-xl text-emerald">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-emerald transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 font-body text-sm text-emerald hover:text-gold transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="emerald-outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
