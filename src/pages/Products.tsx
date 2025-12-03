import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Premium Tea", "Herbal Wellness", "Organic Spices", "Gift Collections"];

const products = [
  {
    id: 1,
    name: "Ceylon Golden Tips",
    category: "Premium Tea",
    description: "Hand-picked golden tips from high-altitude estates, offering a smooth, delicate flavor with honey undertones. The pinnacle of Ceylon tea craftsmanship.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    price: "$45",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Silver Needle White Tea",
    category: "Premium Tea",
    description: "Rare white tea buds, sun-dried to perfection. A subtle, sweet infusion with notes of melon and a silky finish.",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=80",
    price: "$68",
    badge: "Limited Edition",
  },
  {
    id: 3,
    name: "Earl Grey Reserve",
    category: "Premium Tea",
    description: "Our signature black tea infused with premium bergamot. A bold yet sophisticated brew for the discerning palate.",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=600&q=80",
    price: "$38",
  },
  {
    id: 4,
    name: "Herbal Harmony Blend",
    category: "Herbal Wellness",
    description: "A soothing fusion of native Sri Lankan herbs including Gotukola, Cinnamon, and Lemongrass for relaxation and inner balance.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    price: "$32",
  },
  {
    id: 5,
    name: "Immunity Boost Infusion",
    category: "Herbal Wellness",
    description: "Powerful blend of ginger, turmeric, and black pepper designed to strengthen natural defenses and promote vitality.",
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=600&q=80",
    price: "$28",
  },
  {
    id: 6,
    name: "Calm Mind Chamomile",
    category: "Herbal Wellness",
    description: "Organic chamomile flowers with hints of lavender. Perfect for unwinding after a long day and promoting restful sleep.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    price: "$24",
  },
  {
    id: 7,
    name: "Pure Ceylon Cinnamon",
    category: "Organic Spices",
    description: "The world's finest true cinnamon, harvested from ancient groves using traditional methods. Sweet, delicate, and aromatic.",
    image: "https://images.unsplash.com/photo-1599909533601-fc5b5e2c2c9c?auto=format&fit=crop&w=600&q=80",
    price: "$28",
    badge: "Award Winner",
  },
  {
    id: 8,
    name: "Black Pepper Tellicherry",
    category: "Organic Spices",
    description: "Premium large-grain black pepper with complex, pungent flavor and aromatic notes. Perfect for gourmet cooking.",
    image: "https://images.unsplash.com/photo-1599909533604-fc5b5e2c2c9c?auto=format&fit=crop&w=600&q=80",
    price: "$22",
  },
  {
    id: 9,
    name: "Executive Gift Box",
    category: "Gift Collections",
    description: "Curated collection of our finest teas and spices in a handcrafted wooden presentation box. Perfect for corporate gifting.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=600&q=80",
    price: "$150",
    badge: "Gift Ready",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

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
            <span className="font-body text-sm tracking-widest uppercase text-gold">Our Collection</span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6">
              Nature's <span className="text-gold">Premium</span> Treasures
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
              Each product is a testament to our commitment to purity, craftsmanship, 
              and the exceptional bounty of Sri Lanka's pristine highlands.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm rounded-full px-4 py-1">
                      <span className="font-body text-xs text-emerald-dark font-medium">{product.badge}</span>
                    </div>
                  )}

                  {/* Category */}
                  <div className="absolute top-4 right-4 bg-ivory/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-body text-xs text-foreground">{product.category}</span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="font-display text-2xl text-emerald">{product.price}</span>
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
                  <Button variant="emerald-outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
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
          <span className="font-body text-sm tracking-widest uppercase text-gold">For Business</span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-6">
            Wholesale & <span className="text-gold">Private Label</span>
          </h2>
          <p className="font-body text-lg text-ivory/80 max-w-2xl mx-auto mb-10">
            Partner with us to bring Golden Nature's premium products to your customers. 
            We offer flexible wholesale arrangements and custom private label solutions.
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
