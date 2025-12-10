import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-ivory-warm">
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
            {/* <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Investor Pack
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                Download Annual Report
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white p-10 rounded-2xl shadow-elevated">
          <h1 className="font-display text-3xl mb-6">Terms & Conditions</h1>

          <p className="text-muted-foreground leading-relaxed mb-4">
            By accessing or using the Golden Nature Plantation website, you
            agree to be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Use of Website
          </h2>
          <p className="text-muted-foreground">
            You agree to use this website for lawful purposes only and in a way
            that does not infringe on the rights of others.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Investment Disclaimer
          </h2>
          <p className="text-muted-foreground">
            All investment returns described are estimated and depend on market
            conditions, climate factors, and operational activities.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Intellectual Property
          </h2>
          <p className="text-muted-foreground">
            All content, logos, designs, and trademarks displayed on this
            website are the property of Golden Nature Plantation (Pvt) Ltd.
          </p>

          <p className="text-muted-foreground mt-6">
            These terms may be updated at any time without notice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsConditions;
