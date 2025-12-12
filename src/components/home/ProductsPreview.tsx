import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
 ,
   {
    id: 1,
    name: "Black Tea",
    category: "Calizta",
    description:
      "Calizta Black Tea is a refined expression of Sri Lanka’s legendary tea heritage, grown in the misty highlands where climate, soil, and elevation create unmatched quality. Each leaf is hand-picked at peak maturity, naturally withered, and expertly oxidized to develop its rich aroma, deep amber color, and bold yet smooth flavor. Naturally high in antioxidants, this premium black tea supports heart health, boosts energy, and enhances mental focus without artificial additives. Free from preservatives and chemicals, Calizta Black Tea offers a pure, refreshing experience that nourishes the body while awakening the senses in every cup.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765521963/3_ob0ypy.png",
    price: "lkr 1400.00",
  },
  {
    id: 2,
    name: "Soursop",
    category: "Calizta",
    description:
      "Calizta Soursop Tea is a powerful herbal infusion made from carefully selected, naturally grown soursop leaves known for their exceptional wellness benefits. Traditionally valued for supporting immunity, digestion, and cellular health, soursop leaves are gently cleaned, sun-dried, and preserved without chemicals to retain their full therapeutic value. This tea delivers a mild, earthy taste with a naturally calming aroma, making it ideal for daily detox, stress relief, and inner balance. Free from caffeine, artificial flavoring, and synthetic processing, Calizta Soursop Tea is a pure plant-based wellness drink rooted in nature and tradition.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365437/1_uqfmoe.png",
    price: "lkr 1400.00",
  },
  {
    id: 3,
    name: "Heen Bovitiya",
    category: "Calizta",
    description:
      "Calizta Heen Bovitiya Tea is a treasured Ayurvedic herbal tea traditionally used in Sri Lanka for liver cleansing, blood purification, and body cooling. Harvested from naturally grown Heen Bovitiya plants in clean forest environments, the leaves are gently dried using traditional methods to preserve their powerful medicinal properties. Rich in natural antioxidants and detoxifying compounds, this tea supports digestion, improves metabolism, and promotes overall internal balance. With its vibrant natural color and refreshing herbal taste, Calizta Heen Bovitiya offers a pure, chemical-free wellness solution for modern lifestyles.",
    image:
      "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765365384/4_mcu9ru.png",
    price: "lkr 1400.00",
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
