import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1920&q=80"
          alt="Sri Lankan tea plantation in the misty highlands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-emerald-dark/30" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-gold/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-ivory/10 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-sm text-gold tracking-wide">
              Premium Sri Lankan Plantation
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where Nature's Finest
            <span className="block mt-2">
              <span className="text-gradient-gold">Golden</span> Treasures Bloom
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-elegant text-xl md:text-2xl text-ivory/85 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            From the pristine highlands of Sri Lanka, we bring you centuries of
            plantation heritage crafted into premium teas, herbal wellness, and
            pure organic products.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/about">
                <Play className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
            </Button>
          </div>

          {/*Trust Indicators */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-white mb-1">
                50+
              </p>
              <p className="font-body text-sm text-ivory/70">Team Menmbers </p>
            </div>
            <div className="text-center border-x border-ivory/20">
              <p className="font-display text-3xl md:text-4xl text-white mb-1">
                100%
              </p>
              <p className="font-body text-sm text-ivory/70">Organic</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-white mb-1">
                50+
              </p>
              <p className="font-body text-sm text-ivory/70">Happy Clients </p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------- Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-ivory/60 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
