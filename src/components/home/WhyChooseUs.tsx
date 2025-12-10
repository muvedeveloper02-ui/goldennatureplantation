import { Sprout, Shield, Gem, Users, Globe2, Recycle } from "lucide-react";

const reasons = [
  {
    icon: Sprout,
    title: "Organic Excellence",
    description:
      "Every leaf is grown without synthetic chemicals, preserving nature's pure essence for your wellbeing.",
  },
  {
    icon: Shield,
    title: "Certified Quality",
    description:
      "International certifications including ISO, HACCP, and organic standards ensure uncompromising quality.",
  },
  {
    icon: Gem,
    title: "Premium Selection",
    description:
      "Only the finest 5% of our harvest makes it to your cup, hand-selected by master tea artisans.",
  },
  {
    icon: Users,
    title: "Fair Trade",
    description:
      "We empower our farming communities with fair wages, education, and sustainable livelihoods.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    description:
      "Meeting and exceeding international quality benchmarks trusted by discerning customers worldwide.",
  },
  {
    icon: Recycle,
    title: "Sustainable Future",
    description:
      "From biodegradable packaging to carbon-neutral operations, we protect our planet for generations.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-emerald relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* -------------------Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-widest uppercase text-gold">
            Why Golden Nature
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-6">
            The Promise of <span className="text-gold">Excellence</span>
          </h2>
          <p className="font-elegant text-xl text-ivory/80 max-w-2xl mx-auto italic">
            "In every golden leaf lies our commitment to purity, our respect for
            tradition, and our promise to deliver nothing but the finest nature
            has to offer."
          </p>
        </div>

        {/*------------------------------- Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-ivory/5 backdrop-blur-sm border border-ivory/10 rounded-2xl p-8 hover:bg-ivory/10 hover:border-gold/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-gold group-hover:text-emerald-dark transition-colors" />
              </div>
              <h3 className="font-display text-xl text-ivory mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-ivory/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-ivory/10">
          {[
            { value: "10,000+", label: "Hectares of Plantation" },
            { value: "5,000+", label: "Farming Families" },
            { value: "50+", label: "Export Countries" },
            { value: "100%", label: "Customer Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-ivory/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
