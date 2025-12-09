import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Leaf,
  Award,
  Users,
  Globe,
  Heart,
  TreePine,
  Sparkles,
  Target,
} from "lucide-react";

const timeline = [

  
  
  {
    year: "1998",
    title: "The Beginning",
    description:
      "Founded with a vision to bring Sri Lanka's finest to the world",
  },
  {
    year: "2005",
    title: "Organic Certification",
    description: "Achieved full organic certification across all plantations",
  },
  {
    year: "2012",
    title: "Global Expansion",
    description: "Entered European and Asian markets with premium range",
  },
  {
    year: "2018",
    title: "Sustainability Award",
    description: "Recognized for environmental leadership in agriculture",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched R&D center for herbal wellness products",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every leaf carries our love for perfection",
  },
  {
    icon: TreePine,
    title: "Sustainability",
    description: "Protecting nature for future generations",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Uncompromising quality in everything we do",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Honest, transparent, and trustworthy always",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="public\images\potted-plant-scissors-table-arrangement.jpg"
            alt="Tea plantation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6 leading-tight">
              A Legacy of
              <span className="text-gold"> Excellence</span>, Rooted in Nature
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
              For over two decades, Golden Nature Plantation has been more than
              a company— we are stewards of Sri Lanka's agricultural heritage,
              custodians of ancient wisdom, and pioneers of sustainable luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Vision */}
      <section id="leadership" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="public\images\side-view-gardener-holding-little-tree.jpg"
                  alt="Chairman portrait"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-green">
                <img
                  src="public/logo2.png"
                  alt="Golden Nature Logo"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            <div>
              <span className="font-body text-sm tracking-widest uppercase text-gold">
                Chairman's Message
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
                "Our Promise to You"
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed italic">
                  "When my grandfather first planted tea on these hills, he
                  whispered a promise to the soil—that we would honor nature's
                  gifts with reverence and responsibility.
                </p>
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed italic">
                  Today, that promise guides everything we do. Every golden leaf
                  that leaves our estates carries not just exceptional flavor,
                  but a legacy of care, craftsmanship, and an unbreakable bond
                  with the land that nurtures us.
                </p>
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed italic">
                  To our customers, partners, and investors—thank you for being
                  part of this journey. Together, we're not just building a
                  business; we're cultivating a future where nature and
                  prosperity bloom side by side."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald flex items-center justify-center">
                  <span className="font-display text-xl text-gold">JD</span>
                </div>
                <div>
                  <p className="font-display text-xl text-foreground">
                    John Doe
                  </p>
                  <p className="font-body text-muted-foreground">
                    Founder & Chairman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Purpose
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Mission & <span className="text-emerald">Vision</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Guided by nature. Driven by excellence. Inspired by generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-elevated p-10 hover:shadow-green transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our mission is to produce and export high-quality organic
                products using eco-friendly methods, offer flexible green
                investment opportunities, and deliver strong returns that
                benefit both investors and the environment.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-elevated p-10 hover:shadow-green transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Our Vision
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be the Global leader in the sustainable agricultural sector
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-24 bg-ivory-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Milestones of <span className="text-emerald">Growth</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald flex items-center justify-center shrink-0">
                    <span className="font-display text-xl text-gold">
                      {item.year}
                    </span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-emerald to-emerald/20 mt-4" />
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-emerald">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-6">
              The Pillars of Our <span className="text-gold">Promise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-gold group-hover:text-emerald-dark transition-colors" />
                </div>
                <h3 className="font-display text-xl text-ivory mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-ivory/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm tracking-widest uppercase text-gold">
                Sustainability
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                Nurturing Tomorrow, <span className="text-emerald">Today</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Our commitment to sustainability isn't just a business
                strategy—it's a sacred responsibility to the land, our
                communities, and future generations.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Carbon Neutral Operations",
                    desc: "100% renewable energy across all facilities",
                  },
                  {
                    title: "Water Conservation",
                    desc: "Advanced rainwater harvesting and recycling systems",
                  },
                  {
                    title: "Biodiversity Protection",
                    desc: "Preserving 500+ hectares of native forest",
                  },
                  {
                    title: "Community Empowerment",
                    desc: "Education and healthcare for 5,000+ families",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <div>
                      <h4 className="font-display text-lg text-foreground">
                        {item.title}
                      </h4>
                      <p className="font-body text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80"
                alt="Forest conservation"
                className="rounded-2xl h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=400&q=80"
                alt="Community program"
                className="rounded-2xl h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80"
                alt="Sustainable farming"
                className="rounded-2xl h-64 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=400&q=80"
                alt="Solar panels"
                className="rounded-2xl h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
