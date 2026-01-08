import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const investmentPlans = [
  {
    id: 1,
    name: "Eco Flash",
    minAmount: 100000,
    duration: 6,
    durationUnit: "months",
    monthlyReturnRate: 0.25, // 25%
    features: [
      "Investment amount 500,000.00 25% Rate Monthly Harvest Accounting-Rs. 10,417.00",
      "Investment amount 1,000,000.00 25% Rate Monthly Harvest Accounting-Rs. 20,833.00",
      "Investment amount 2,000,000.00 25% Rate Monthly Harvest Accounting-Rs. 41,667.00",
      "Investment amount 5,000,000.00 25% Rate Monthly Harvest Accounting-Rs. 104,617.00",
      "25% Guaranteed Profit.",
    ],
  },
  {
    id: 2,
    name: "Supreme",
    minAmount: 100000,
    duration: 1,
    durationUnit: "year",
    monthlyReturnRate: 0.4, // 40%
    features: [
      "Investment amount 500,000.00 40% Rate Monthly Harvest Accounting-Rs. 16,667.00",
      "Investment amount 1,000,000.00 40% Rate Monthly Harvest Accounting-Rs. 33,333.00",
      "Investment amount 2,000,000.00 40% Rate Monthly Harvest Accounting-Rs. 66,667.00",
      "Investment amount 5,000,000.00 40% Rate Monthly Harvest Accounting-Rs. 166,667.00",
      "40% Guaranteed Profit.",
    ],
  },
  {
    id: 3,
    name: "Golden Harvest",
    minAmount: 100000,
    duration: 2,
    durationUnit: "years",
    monthlyReturnRate: 0.45, // 45%
    features: [
      "Investment amount 500,000.00 45% Rate Monthly Harvest Accounting-Rs. 18,750.00",
      "Investment amount 1,000,000.00 45% Rate Monthly Harvest Accounting-Rs. 37,500.00",
      "Investment amount 2,000,000.00 45% Rate Monthly Harvest Accounting-Rs. 75,000.00",
      "Investment amount 5,000,000.00 45% Rate Monthly Harvest Accounting-Rs. 187,500.00",
      "45% Guaranteed Profit (at maturity).",
    ],
  },
  {
    id: 4,
    name: "Diamond",
    minAmount: 100000,
    duration: 5,
    durationUnit: "years",
    monthlyReturnRate: 5, // 500% (TOTAL at maturity)
    features: [
      "Investment amount 500,000.00 500% Rate Total Harvest at Maturity - Rs. 2,500,000.00",
      "500% Guaranteed Profit (paid at maturity).",
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
            src="https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765529946/photo-1486406146926-c627a92ad1ab_fh4syv.avif"
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
              Invest in <span className="text-gold">Nature&apos;s</span> Future
            </h1>

            <p className="font-elegant text-xl text-ivory/85 leading-relaxed mb-8">
              Join us in cultivating a sustainable future. Golden Nature
              Plantation offers a unique opportunity to invest in premium
              agriculture with proven returns and positive environmental impact.
            </p>
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

          {/* FIX: equal height cards + aligned buttons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {investmentPlans.map((plan) => {
              const isDiamond = plan.name === "Diamond";

              return (
                <div
                  key={plan.id}
                  className="bg-ivory rounded-2xl p-8 shadow-soft hover:shadow-elevated
                             transition-all duration-500 flex flex-col h-full"
                >
                  {/* Plan Title */}
                  <h3 className="font-display text-2xl text-foreground mb-4 text-center">
                    {plan.name}
                  </h3>

                  {/* Features (flex-1 pushes summary + button down consistently) */}
                  <ul className="text-sm space-y-2 list-disc pl-5 text-muted-foreground flex-1 mb-6">
                    {plan.features.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>

                  {/* Summary block */}
                  <div className="border-t border-border pt-4 space-y-2 text-sm mb-6">
                    <p>💰 Minimum: Rs. {plan.minAmount.toLocaleString()}</p>

                    <p>
                      ⏳ Duration: {plan.duration}{" "}
                      {plan.durationUnit === "months"
                        ? "Months"
                        : plan.duration === 1
                        ? "Year"
                        : "Years"}
                    </p>

                    <p>
                      📈 {isDiamond ? "Total Harvest Return" : "Monthly Harvest Rate"}:{" "}
                      {plan.monthlyReturnRate * 100}%
                    </p>

                    {/* 
                    {isDiamond && (
                      <p className="text-xs text-muted-foreground">
                        * Diamond plan returns are paid at maturity (no monthly
                        harvest).
                      </p>
                    )} */}
                  </div>

                  {/* CTA Button (always bottom) */}
                  <Button variant="emerald" className="w-full mt-auto" asChild>
                    <Link to={`/quotation/${plan.id}`}>Generate Quotation</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Investment;
