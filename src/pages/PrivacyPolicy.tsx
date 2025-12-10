import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6 leading-tight">
              Invest in
              <span className="text-gold"> Nature's</span> Future
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed mb-8">
              Golden Nature Plantation (Pvt) Ltd is committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and safeguard your data when you interact with our website,
              mobile applications, investment platform, or services.
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

      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-12">

          {/* Table of Contents */}
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              Table of Contents
            </h2>
            <ol className="list-decimal ml-6 space-y-2 text-muted-foreground font-body">
              <li><a href="#intro" className="hover:text-emerald">Introduction</a></li>
              <li><a href="#collect" className="hover:text-emerald">Information We Collect</a></li>
              <li><a href="#use" className="hover:text-emerald">How We Use Your Information</a></li>
              <li><a href="#share" className="hover:text-emerald">Sharing & Disclosure</a></li>
              <li><a href="#security" className="hover:text-emerald">Data Security</a></li>
              <li><a href="#rights" className="hover:text-emerald">Your Rights</a></li>
              <li><a href="#cookies" className="hover:text-emerald">Cookies & Website Tracking</a></li>
              <li><a href="#retention" className="hover:text-emerald">Retention of Data</a></li>
              <li><a href="#thirdparty" className="hover:text-emerald">Third-Party Links</a></li>
              <li><a href="#updates" className="hover:text-emerald">Updates to This Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-emerald">Contact Us</a></li>
            </ol>
          </div>

          {/* 1. Introduction */}
          <section id="intro">
            <h2 className="font-display text-3xl text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
             Golden Nature Plantation (Pvt) Ltd respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you interact with our services, websites, and business operations.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="collect">
            <h2 className="font-display text-3xl text-foreground mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Personal details (Name, Email, Phone Number)</li>
              <li>Investment-related data (amounts, plan selection, preferences)</li>
              <li>Contact & communication records</li>
              <li>Device & browser information</li>
              <li>Location data (approximate)</li>
              <li>Cookies & analytics data</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section id="use">
            <h2 className="font-display text-3xl text-foreground mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information is used to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Process your investment requests</li>
              <li>Improve customer service and support</li>
              <li>Personalize your user experience</li>
              <li>Send updates, promotions, and notifications</li>
              <li>Enhance platform performance and security</li>
            </ul>
          </section>

          {/* 4. Sharing & Disclosure */}
          <section id="share">
            <h2 className="font-display text-3xl text-foreground mb-4">
              4. Sharing & Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do <strong>not sell</strong> your data. However, we may share it with:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Authorized service providers (IT, payment processing)</li>
              <li>Regulatory authorities when legally required</li>
              <li>Internal departments for analytics & operations</li>
            </ul>
          </section>

          {/* 5. Data Security */}
          <section id="security">
            <h2 className="font-display text-3xl text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use industry-standard encryption, secure servers, firewalls, and
              continuous monitoring systems to safeguard your information.
              However, no online system can guarantee 100% security.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section id="rights">
            <h2 className="font-display text-3xl text-foreground mb-4">
              6. Your Rights
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Access and review your data</li>
              <li>Request corrections or updates</li>
              <li>Withdraw consent at any time</li>
              <li>Request deletion (subject to legal requirements)</li>
            </ul>
          </section>

          {/* 7. Cookies */}
          <section id="cookies">
            <h2 className="font-display text-3xl text-foreground mb-4">
              7. Cookies & Website Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to improve user experience, analyze traffic, and
              personalize content. You may disable cookies in your browser
              settings, though some features may not work correctly.
            </p>
          </section>

          {/* 8. Retention */}
          <section id="retention">
            <h2 className="font-display text-3xl text-foreground mb-4">
              8. Retention of Data
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your information only for as long as required for legal,
              accounting, or operational purposes.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section id="thirdparty">
            <h2 className="font-display text-3xl text-foreground mb-4">
              9. Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to external websites. We are not
              responsible for their privacy practices or content.
            </p>
          </section>

          {/* 10. Updates */}
          <section id="updates">
            <h2 className="font-display text-3xl text-foreground mb-4">
              10. Updates to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with a revised update date.
            </p>
          </section>

          {/* 11. Contact */}
          <section id="contact">
            <h2 className="font-display text-3xl text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions or requests regarding this Privacy Policy, please
              contact:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>📍 No 179/1, Katugastota Road, Kandy, Sri Lanka</p>
              <p>📞 +94 81 7798 555</p>
              <p>📧 info@goldennatureplantation.com</p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;