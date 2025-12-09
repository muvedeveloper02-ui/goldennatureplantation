import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Shield,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
  Building2,
  BarChart3,
  Leaf,
} from "lucide-react";

// const highlights = [
//   {
//     icon: TrendingUp,
//     value: "40%",
//     label: "Year-over-Year Growth",
//     description: "Consistent revenue growth driven by expanding global markets",
//   },
//   {
//     icon: Globe,
//     value: "50+",
//     label: "Export Countries",
//     description: "Strong international presence across premium markets",
//   },
//   {
//     icon: Building2,
//     value: "10,000+",
//     label: "Hectares",
//     description: "Prime plantation land in Sri Lanka's finest regions",
//   },
//   {
//     icon: Users,
//     value: "5,000+",
//     label: "Team Members",
//     description: "Skilled workforce with deep industry expertise",
//   },
// ];

// const investmentBenefits = [
//   "Proven track record of sustainable profitability",
//   "Strong brand equity in premium natural products",
//   "Vertically integrated operations for quality control",
//   "Growing demand for organic and wellness products",
//   "Strategic partnerships with global distributors",
//   "Experienced leadership with industry expertise",
//   "Commitment to ESG principles and reporting",
//   "Diversified product portfolio reducing market risk",
// ];
const investmentPlans = [
  {
    id: 1,
    name: "Eco Flash",
    minAmount: 100000,
    duration: 6,
    monthlyReturnRate: 0.25, // 25%
    features: [
      "Investment amount 500,000.00 25% Rate Monthly Harvest Accounting-Rs. 10,417.00",
      "Investment amount 1,000,000.00 25% Rate Monthly Harvest Accounting-Rs. 20,833.00",
      "Investment amount 2,000,000.00 25% Rate Monthly Harvest Accounting-Rs. 41,667,00",
      "Investment amount 5,000,000.00 25% Rate Monthly Harvest Accounting-Rs. 104,617.00",
      "25% Guarenteed Profit",
    ],
  },

  {
    id: 2,
    name: "Supreme",
    minAmount: 100000,
    duration: 1,
    monthlyReturnRate: 0.4, // 40%
    features: [
      "Investment amount 500,000.00 40% Rate Monthly Harvest Accounting-Rs. 16,667.00",
      "Investment amount 1,000,000.00 40% Rate Monthly Harvest Accounting-Rs. 33,333.00",
      "Investment amount 2,000,000.00 40% Rate Monthly Harvest Accounting-Rs. 66,667.00",
      "Investment amount 5,000,000.00 40% Rate Monthly Harvest Accounting-Rs. 166,667.00",
      "40% Guaranteed Profit",
    ],
  },
  {
    id: 3,
    name: "Golden Harvest",
    minAmount: 100000,
    duration: 2,
    monthlyReturnRate: 0.45, // 45%
    features: [
      "Investment amount 500,000.00 45% Rate Monthly Harvest Accounting-Rs. 18,750.00",
      "Investment amount 1,000.000.00 45% Rate Monthly Harvest Accounting-Rs. 37,500.00",
      "Investment amount 2,000,000.0045% Rate Monthly Harvest Accounting-Rs. 75,000.00",
      "Investment amount 5,000,000.00 45% Rate Monthly Harvest Accounting-Rs. 187,500.00",
      "45% Guarenteed Profit (at maturity)",
    ],
  },
  {
    id: 4,
    name: "Diamond",
    minAmount: 100000,
    duration: 5,
    monthlyReturnRate: 5, // 500%
    features: [
      "Investment amount 500,000.00 500% Rate Monthly Harvest Accounting-Rs. 2,500,000.00",
      "500%, Guaranteed Profit",
    ],
  },
];

const Investment = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Investment background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Investor Relations
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6 leading-tight">
              Invest in
              <span className="text-gold"> Nature's</span> Future
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed mb-8">
              Join us in cultivating a sustainable future. Golden Nature
              Plantation offers a unique opportunity to invest in premium
              agriculture with proven returns and positive environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Investor Pack
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                Download Annual Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Investment Plans
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Choose Your <span className="text-emerald">Growth Plan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {investmentPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-ivory rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* <p className="text-muted-foreground mb-4">{plan.description}</p> */}
                <ul className="text-sm mb-6 space-y-2 list-disc pl-5 text-muted-foreground">
                  {plan.features.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <ul className="text-sm mb-6 space-y-2">
                  <li>💰 Minimum: Rs. {plan.minAmount.toLocaleString()}</li>
                  <li>⏳ Duration: {plan.duration} Months</li>
                  <li>📈 Monthly Return: {plan.monthlyReturnRate * 100}%</li>
                </ul>

                <Button variant="emerald" className="w-full" asChild>
                  <Link to={`/quotation/${plan.id}`}>Generate Quotation</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis
      <section id="growth" className="py-24 bg-ivory-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm tracking-widest uppercase text-gold">Investment Thesis</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                Why <span className="text-emerald">Golden Nature</span>?
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                The global organic and wellness market is projected to reach $500 billion by 2030. 
                Golden Nature is uniquely positioned to capture this growth with our premium 
                positioning, sustainable operations, and proven market expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {investmentBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald rounded-2xl p-10">
              <h3 className="font-display text-2xl text-ivory mb-8">Growth Trajectory</h3>
              
              <div className="space-y-6">
                {[
                  { year: "2022", revenue: "$12M", growth: "+35%" },
                  { year: "2023", revenue: "$18M", growth: "+50%" },
                  { year: "2024", revenue: "$25M", growth: "+40%" },
                  { year: "2025 (Proj)", revenue: "$35M", growth: "+40%" },
                ].map((item, index) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <div className="w-20 shrink-0">
                      <p className="font-body text-sm text-ivory/70">{item.year}</p>
                    </div>
                    <div className="flex-1 bg-ivory/10 rounded-full h-8 overflow-hidden">
                      <div 
                        className="h-full bg-gold rounded-full flex items-center justify-end pr-4"
                        style={{ width: `${40 + index * 20}%` }}
                      >
                        <span className="font-body text-xs text-emerald-dark font-semibold">{item.revenue}</span>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="font-body text-sm text-gold">{item.growth}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-ivory/20">
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-10 h-10 text-gold" />
                  <div>
                    <p className="font-display text-2xl text-ivory">192%</p>
                    <p className="font-body text-sm text-ivory/70">3-Year Revenue Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-emerald">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Trust & Transparency
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-6">
              Built on <span className="text-gold">Integrity</span>
            </h2>
            <p className="font-body text-lg text-ivory/80 max-w-2xl mx-auto">
              Our commitment to transparency and ethical business practices has
              earned us the trust of investors and partners worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Audited Financials",
                description:
                  "Annual audits by Big Four accounting firms ensure complete financial transparency",
              },
              {
                icon: Leaf,
                title: "ESG Committed",
                description:
                  "Comprehensive environmental, social, and governance reporting aligned with global standards",
              },
              {
                icon: Users,
                title: "Governance Excellence",
                description:
                  "Independent board oversight with diverse expertise in agriculture, finance, and sustainability",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-ivory/5 backdrop-blur-sm border border-ivory/10 rounded-2xl p-8 hover:bg-ivory/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-ivory mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-ivory/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section id="partnership" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-ivory rounded-3xl p-12 md:p-16 shadow-elevated text-center max-w-4xl mx-auto">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Partnership Opportunities
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Let's Grow <span className="text-emerald">Together</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're an institutional investor, family office, or
              strategic partner, we welcome conversations about how we can
              create value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="emerald-outline" size="xl">
                Download Investor Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Investment;
