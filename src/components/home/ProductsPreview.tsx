import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ceylon Golden Tips",
    category: "Premium Tea",
    description: "Hand-picked golden tips from high-altitude estates, offering a smooth, delicate flavor with honey undertones.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    price: "$45",
  },
  {
    id: 2,
    name: "Herbal Harmony Blend",
    category: "Herbal Wellness",
    description: "A soothing fusion of native Sri Lankan herbs crafted for relaxation and inner balance.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    price: "$32",
  },
  {
    id: 3,
    name: "Pure Ceylon Cinnamon",
    category: "Organic Spices",
    description: "The world's finest true cinnamon, harvested from ancient groves using traditional methods.",
    image: "https://images.unsplash.com/photo-1599909533601-fc5b5e2c2c9c?auto=format&fit=crop&w=600&q=80",
    price: "$28",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-24 bg-ivory-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-widest uppercase text-gold">Our Collection</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Nature's <span className="text-emerald">Premium</span> Offerings
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each product tells a story of careful cultivation, traditional craftsmanship, 
            and an unwavering commitment to purity.
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
                  <span className="font-body text-xs text-emerald-dark font-medium">{product.category}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="font-display text-xl text-emerald">{product.price}</span>
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
