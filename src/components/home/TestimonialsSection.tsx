import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Tea Sommelier, London",
    content:
      "Golden Nature's Ceylon Golden Tips is simply extraordinary. The delicate flavor profile and golden hue speak to their exceptional cultivation practices. A true gem for discerning tea lovers.",
    rating: 5,
    image: "/goldennatureplantation/images/calizta.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Wellness Practitioner, Singapore",
    content:
      "Their herbal blends have become an essential part of my wellness practice. The purity and potency are unmatched. My clients consistently report transformative results.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Emma Johansson",
    role: "Investment Partner, Sweden",
    content:
      "Beyond the exceptional product quality, Golden Nature represents a sound investment in sustainable agriculture. Their transparency and growth trajectory make them a standout partner.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-nature">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-widest uppercase text-gold">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Voices of <span className="text-emerald">Trust</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our global community of tea connoisseurs, wellness
            practitioners, and valued investment partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-ivory rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold">
                <Quote className="w-5 h-5 text-emerald-dark" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="font-elegant text-lg text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
