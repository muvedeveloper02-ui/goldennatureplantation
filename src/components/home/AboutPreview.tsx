import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Award, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Pure Nature",
    description: "Every product is nurtured in harmony with nature's rhythms",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Uncompromising standards from plantation to packaging",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Sharing Sri Lanka's treasures with the world",
  },
  {
    icon: Heart,
    title: "Sustainable",
    description: "Committed to earth-friendly practices for future generations",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-nature relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="Tea plantation workers handpicking leaves"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-ivory rounded-xl p-6 shadow-elevated max-w-xs">
              <p className="font-elegant text-lg text-emerald italic leading-relaxed">
                "We don't just grow tea; we cultivate a legacy of excellence."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center">
                  <span className="font-display text-gold text-lg">JD</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">John Doe</p>
                  <p className="font-body text-sm text-muted-foreground">Chairman</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 -left-6 bg-gold rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-gold">
              <span className="font-display text-3xl text-emerald-dark">25+</span>
              <span className="font-body text-xs text-emerald-dark/80">Years</span>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="font-body text-sm tracking-widest uppercase text-gold">Our Heritage</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
              A Legacy Rooted in
              <span className="text-emerald"> Sri Lankan</span> Soil
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              For over two decades, Golden Nature Plantation has been nurturing the finest 
              teas and herbal products from the misty highlands of Sri Lanka. Our commitment 
              to purity, sustainability, and excellence has made us a trusted name across 
              continents.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {values.map((value) => (
                <div key={value.title} className="group">
                  <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center mb-3 group-hover:bg-emerald group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-emerald group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-1">{value.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Button variant="emerald" size="lg" asChild>
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
