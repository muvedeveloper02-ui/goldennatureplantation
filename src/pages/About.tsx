import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Heart,
  TreePine,
  Sparkles,
  Target,
  MapPin,
  Phone,
  Download,
} from "lucide-react";

// TIMELINE
const timeline = [
  {
    date: "Apr '25",
    title: "The Beginning",
    description:
      "Golden Nature Plantation was founded with a commitment to elevate Sri Lanka’s agricultural excellence through innovation, sustainability, and pure natural products.",
  },
  {
    date: "May '25",
    title: "Introduced Our First Plantation Mobile Application",
    description:
      "Launched a modern, user-friendly mobile app to connect customers, farmers, and investors—bringing transparency, accessibility, and real-time updates to plantation and investment management.",
  },
  {
    date: "Aug '25",
    title: "Golden Feather Award",
    description:
      "Honored with the prestigious Golden Feather Award in recognition of our contribution to sustainable agriculture, product quality, rural empowerment, and ethical business practices.",
  },
  {
    date: "Sep '25",
    title: "Organic Certification",
    description:
      "Officially certified as a fully organic plantation, ensuring that every product meets strict international standards for purity, safety, and eco-friendly cultivation.",
  },
  {
    date: "Dec '25",
    title: "Launch of New Products",
    description:
      "Expanded our wellness and herbal portfolio with a new collection of premium organic products, developed through research and global market insights while staying true to Sri Lankan roots.",
  },
];

// VALUES
const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every leaf, every bottle, and every blend is crafted with care, pride, and genuine love for natural excellence.",
  },
  {
    icon: TreePine,
    title: "Sustainability",
    description:
      "We protect soil, water, biodiversity, and communities to ensure long-term harmony between nature and business.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "From cultivation to packaging, we maintain uncompromising quality and global-standard processes.",
  },
  {
    icon: Target,
    title: "Integrity",
    description:
      "We operate with honesty, traceability, and transparency—earning the trust of partners and customers worldwide.",
  },
];

// CERTIFICATIONS
const certifications = [
  {
    title: "ISO 22000",
    subtitle: "Food Safety Management",
    img: "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448765/2_pzqujk.png",
    alt: "ISO 22000",
  },
  {
    title: "HACCP",
    subtitle: "Hazard Analysis & Critical Control Points",
    img: "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448768/3_sxx4ef.png",
    alt: "HACCP",
  },
  {
    title: "GMP",
    subtitle: "Good Manufacturing Practices",
    img: "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448773/4_vfqecc.png",
    alt: "GMP",
  },
  {
    title: "ECO Friendly",
    subtitle: "Eco Friendly Product Standards",
    img: "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448779/5_vwszka.png",
    alt: "Eco Friendly",
  },
  {
    title: "PREMIUM",
    subtitle: "Premium Product Standards",
    img: "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448784/6_s1dx35.png",
    alt: "Premium",
  },
  {
    title: "ORGANIC PRODUCTS",
    subtitle: "Organic Product Standards",
    img: "https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448787/7_rg2lzh.png",
    alt: "Organic Products",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/goldennatureplantation/images/potted-plant-scissors-table-arrangement.jpg"
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
              a company—we are stewards of Sri Lanka&apos;s agricultural
              heritage, custodians of ancient wisdom, and pioneers of
              sustainable luxury in tea, herbal wellness, and natural food
              products.
            </p>
          </div>
        </div>
      </section>

      {/* CHAIRMAN'S MESSAGE */}
      <section id="leadership" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/goldennatureplantation/images/side-view-gardener-holding-little-tree.jpg"
                  alt="Chairman portrait"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-green">
                <img
                  src="/goldennatureplantation/images/logo2.png"
                  alt="Golden Nature Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

            <div>
              <span className="font-body text-sm tracking-widest uppercase text-gold">
                Chairman&apos;s Message
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
                &quot;Our Promise to You&quot;
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed italic">
                  At Golden Nature Plantation (Pvt) Ltd, we operate with a deep
                  sense of responsibility toward our investors, customers,
                  employees, and the environment that sustains us. From the soil
                  we cultivate to the products we deliver, our company is built
                  on the principles of integrity, transparency, and long-term
                  value creation. We do not believe in shortcuts or
                  compromise—every decision we make is measured against quality,
                  ethics, and sustainability.
                </p>
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed italic">
                  To our investors and partners, I personally assure that your
                  trust is treated with the highest respect. Golden Nature is
                  founded on real agricultural assets, disciplined financial
                  management, and structured growth systems, ensuring that every
                  return is driven by genuine production and professional
                  governance. Our commitment is not to temporary success, but to
                  consistent, reliable, and ethical growth built for the future.
                </p>
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed italic">
                  To the public and future generations, we promise to remain a
                  responsible guardian of the land, supporting rural
                  communities, protecting natural resources, and strengthening
                  Sri Lanka’s global reputation in premium plantation products.
                  Golden Nature Plantation is not only a business—it is a
                  promise of trust, sustainability, and national pride, which we
                  will uphold with unwavering dedication.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald flex items-center justify-center">
                  <span className="font-display text-xl text-gold">DB</span>
                </div>
                <div>
                  <p className="font-display text-xl text-foreground">
                    Mr. Dhanushka Bandara
                  </p>
                  <p className="font-body text-muted-foreground">
                    Founder &amp; Chairman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission" className="py-24 bg-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Purpose
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Mission &amp; <span className="text-emerald">Vision</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Guided by nature. Driven by excellence. Inspired by generations of
              Sri Lankan plantation heritage.
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
                plantation products using eco-friendly methods, offer flexible
                green investment opportunities, and deliver strong, traceable
                returns that benefit investors, communities, and the
                environment—while uplifting Sri Lanka&apos;s position in the
                global value chain.
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
                To be the global leader in sustainable agricultural investments
                and premium natural products—where every crop, every product,
                and every partnership creates long-term value for people and
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
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
              <div key={item.date} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald flex items-center justify-center shrink-0">
                    <span className="font-display text-base text-gold">
                      {item.date}
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

      {/* MOBILE APPLICATION SECTION */}
      <section id="app" className="py-24 bg-ivory">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Digital Innovation
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Golden Nature Plantation{" "}
              <span className="text-emerald">Mobile App</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              The Golden Nature Plantation Mobile Application is one of the
              first dedicated digital platforms designed for plantation
              investments, product exploration, and real-time plantation
              insights. It connects investors, distributors, and customers on a
              single trusted platform.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
              <li>• Track your investment plans and harvest projections.</li>
              <li>
                • Explore our full range of Calizta and Hotbanero products.
              </li>
              <li>
                • Receive real-time updates, notifications, and company news.
              </li>
              <li>
                • Access verified company details and certifications in one
                place.
              </li>
            </ul>
            <a href="#" className="inline-block mr-3">
              <img
                src="/goldennatureplantation/images/App Store1.png"
                alt="Download on the App Store"
                className="h-12 sm:h-14 w-auto hover:opacity-90 transition"
              />
            </a>

            {/* Google Play button */}
            <a href="#" className="inline-block">
              <img
                src="/goldennatureplantation/images/Play Store1.png"
                alt="Get it on Google Play"
                className="h-12 sm:h-14 w-auto hover:opacity-90 transition"
              />
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              * App Store and Google Play links will be available after official
              store approval.
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            {/* <div className="bg-white rounded-3xl shadow-elevated p-6 max-w-sm w-full"> */}
            <img
              src="https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765453091/PONE_1_j7qgof.png"
              alt="Golden Nature mobile application"
              className="rounded-2xl w-full  object-cover"
            />
            {/* <p className="mt-4 text-center text-sm text-muted-foreground">
                A modern, secure and user-friendly mobile experience designed
                for the plantation and natural products ecosystem.
              </p> */}
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* REGISTRATION & CERTIFICATIONS */}
      <section id="certifications" className="py-24 bg-ivory-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Trust &amp; Compliance
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Registered, Certified &amp; Verified
            </h2>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Golden Nature Plantation (Pvt) Ltd operates as a fully registered
              and compliant Sri Lankan entity, backed by internationally
              recognized food safety and quality certifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Company registration + QR verification */}
            <div className="space-y-6">
              {/* Registration Card */}
              <div className="bg-white rounded-2xl shadow-elevated p-8 border border-emerald/10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl">
                    Company Registration
                  </h3>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium bg-emerald/5 text-emerald">
                    Official Records
                  </span>
                </div>

                <p className="font-body text-muted-foreground mb-6">
                  Golden Nature Plantation (Pvt) Ltd is legally registered under
                  the Registrar of Companies (ROC), Sri Lanka, and maintains
                  full tax compliance with relevant authorities.
                </p>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground min-w-[130px]">
                      Registered Name
                    </span>
                    <span>Golden Nature Plantation (Pvt) Ltd</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground min-w-[130px]">
                      Country
                    </span>
                    <span>Sri Lanka</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-foreground min-w-[130px]">
                      BR Number
                    </span>
                    <span>IT23436312</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full p-1.5 border border-emerald/30 text-emerald hover:text-emerald-dark hover:bg-emerald/5 transition-colors"
                      aria-label="Download Business Registration"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-foreground min-w-[130px]">
                      TIN
                    </span>
                    <span>IT23436312</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full p-1.5 border border-emerald/30 text-emerald hover:text-emerald-dark hover:bg-emerald/5 transition-colors"
                      aria-label="Download Tax Registration"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Verification Card */}
              <div className="bg-white rounded-2xl shadow-elevated p-8 border border-gold/20 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-full h-full rounded-xl bg-emerald/5 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765448808/1_xlvdfv.png"
                    alt="QR Code for company verification"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-2">
                    BR &amp; ROC Verification with QR
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    Our official documents include a QR code that links to the
                    ROC record and verification page. By scanning the QR, anyone
                    can validate our registration details and TIN via the
                    official government platform.
                  </p>
                  <p className="font-body text-[11px] text-muted-foreground/80">
                    * Always verify through the official government portal for
                    the latest status.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-elevated p-8 border border-emerald/10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl">
                    Quality &amp; Food Safety Certifications
                  </h3>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium bg-emerald/5 text-emerald">
                    Global Standards
                  </span>
                </div>

                <p className="font-body text-muted-foreground mb-6">
                  Our manufacturing and handling processes are aligned with
                  global standards to ensure food safety, product consistency,
                  and consumer confidence.
                </p>

                {/* Certifications Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex flex-col items-center text-center px-2"
                    >
                      <div className="w-25 h-25 rounded-full bg-emerald border border-emerald/30 flex items-center justify-center mb-3 shadow-sm">
                        <img
                          src={cert.img}
                          alt={cert.alt}
                          className="w-25 h-25 object-contain"
                        />
                      </div>
                      <p className="text-sm font-body text-foreground font-semibold">
                        {cert.title}
                        <span className="block text-xs text-muted-foreground mt-1 font-normal">
                          {cert.subtitle}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  * Logos and certification details above are for
                  representation. Ensure all certificates are officially
                  obtained, valid, and updated before public use in marketing,
                  packaging, or export documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
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

      {/* BRANCHES SECTION */}
      <section id="branches" className="py-24 bg-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Our Presence
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Branches in <span className="text-emerald">Kandy</span> &amp;{" "}
              <span className="text-emerald">Colombo</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Strategically located to serve local and international partners,
              our offices connect plantation operations, export channels, and
              investor relations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Kandy Branch */}
            <div className="bg-white rounded-2xl shadow-elevated p-8 border border-emerald/10">
              <h3 className="font-display text-2xl mb-4">Kandy Head Office</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-emerald mt-1" />
                <p className="font-body text-sm text-muted-foreground">
                  No. 179/1, Katugastota Road, Kandy, Sri Lanka
                </p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-emerald" />
                <p className="font-body text-sm text-muted-foreground">
                  +94 81 779 8555
                </p>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                The central hub for plantation operations, product development,
                and administration—located in the heart of the hill country.
              </p>
            </div>

            {/* Colombo Branch */}
            <div className="bg-white rounded-2xl shadow-elevated p-8 border border-emerald/10">
              <h3 className="font-display text-2xl mb-4">Colombo Branch</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-emerald mt-1" />
                <p className="font-body text-sm text-muted-foreground">
                  (Update official Colombo branch address here)
                </p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-emerald" />
                <p className="font-body text-sm text-muted-foreground">
                  (Update Colombo branch contact number)
                </p>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Positioned to coordinate exports, investor meetings, and
                international partnerships with easy access to ports and
                corporate networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="font-body text-sm tracking-widest uppercase text-gold">
                Sustainability
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                Growing with Nature,{" "}
                <span className="text-emerald">Protecting the Future</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                At Golden Nature Plantation (Pvt) Ltd, sustainability is the
                heart of everything we do. From responsible farming to community
                development, we operate with deep respect for nature, ensuring
                that today’s success never comes at the cost of tomorrow.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Eco-Friendly Cultivation",
                    desc: "Adopting natural and chemical-free farming practices that preserve soil health, protect biodiversity, and enhance long-term productivity.",
                  },
                  {
                    title: "Water & Resource Conservation",
                    desc: "Using smart irrigation, rainwater harvesting, and responsible land management to reduce waste and protect vital natural resources.",
                  },
                  {
                    title: "Forest & Wildlife Protection",
                    desc: "Maintaining green zones, buffer areas, and biodiversity-friendly plantation layouts that respect the surrounding ecosystem.",
                  },
                  {
                    title: "Community & Farmer Empowerment",
                    desc: "Creating fair employment, training programs, and welfare initiatives that uplift rural communities and future generations.",
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

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80"
                alt="Forest conservation"
                className="rounded-2xl h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=400&q=80"
                alt="Community agriculture"
                className="rounded-2xl h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80"
                alt="Organic farming"
                className="rounded-2xl h-64 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=400&q=80"
                alt="Renewable energy"
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
