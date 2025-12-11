import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  ShoppingBag,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";

const branches = [
  {
    name: "Kandy Head Office",
    address: [
      "Golden Nature Plantation (Pvt) Ltd",
      "No. 179/1, Katugastota Road,",
      "Kandy, Sri Lanka",
    ],
    phone: "+94 81 779 8555",
    email: "info@goldennatureplantation.com",
    hours: [
      "Monday - Friday: 8:30 AM - 5:00 PM",
      "Saturday: Closed",
      "Sunday: Closed",
    ],
    mapTitle: "Golden Nature Plantation - Kandy",
    mapSrc:
      "https://www.google.com/maps?q=Katugastota+Road+Kandy+Sri+Lanka&output=embed",
  },
  {
    name: "Colombo Office",
    address: [
      "Golden Nature Plantation (Pvt) Ltd",
      "Colombo, Sri Lanka",
      "Sales & Corporate Coordination",
    ],
    phone: "+94 11 000 0000", // update to real number if you have
    email: "colombo@goldennatureplantation.com", // update if needed
    hours: [
      "Monday - Friday: 9:00 AM - 5:30 PM",
      "Saturday: Closed",
      "Sunday: Closed",
    ],
    mapTitle: "Golden Nature Plantation - Colombo",
    mapSrc: "https://www.google.com/maps?q=Colombo+Sri+Lanka&output=embed",
  },
];

const branchOptions = [
  { label: "Kandy Head Office", value: "kandy" },
  { label: "Colombo Office", value: "colombo" },
];

const inquiryTypes = [
  { icon: ShoppingBag, label: "Product Inquiry", value: "product" },
  { icon: Building, label: "Business Partnership", value: "business" },
  { icon: MessageSquare, label: "Investor Relations", value: "investor" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    branch: "", // ✅ new field
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      branch: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-emerald overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6">
              Let&apos;s Start a <span className="text-gold">Conversation</span>
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
              Whether you have questions about our products, partnership
              opportunities, or investment inquiries, we&apos;re here to help
              from both our Kandy and Colombo offices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT: FORM */}
            <div className="order-2 lg:order-1">
              <div className="bg-ivory rounded-2xl p-8 md:p-10 shadow-elevated">
                <h2 className="font-display text-3xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll respond within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Branch selector */}
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Which branch would you like to contact? *
                    </label>

                    <div className="relative">
                      <select
                        className="border border-border rounded-lg w-full h-11 px-3 pr-10 text-sm bg-white 
                 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald"
                        value={formData.branch}
                        onChange={(e) =>
                          setFormData({ ...formData, branch: e.target.value })
                        }
                        required
                      >
                        <option value="">Select a branch</option>
                        {branchOptions.map((b) => (
                          <option key={b.value} value={b.value}>
                            {b.label}
                          </option>
                        ))}
                      </select>

                      {/* Custom dropdown arrow */}
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="font-body text-sm text-foreground mb-3 block">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              inquiryType: type.value,
                            })
                          }
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.inquiryType === type.value
                              ? "border-emerald bg-emerald/5"
                              : "border-border hover:border-emerald/50"
                          }`}
                        >
                          <type.icon
                            className={`w-6 h-6 mx-auto mb-2 ${
                              formData.inquiryType === type.value
                                ? "text-emerald"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span
                            className={`font-body text-xs block ${
                              formData.inquiryType === type.value
                                ? "text-emerald"
                                : "text-muted-foreground"
                            }`}
                          >
                            {type.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+94 77 123 4567"
                      className="h-12"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us how we can help..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="emerald"
                    size="xl"
                    className="w-full"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>

            {/* RIGHT: BRANCHES VERTICALLY */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-display text-3xl text-foreground">
                Branch Contact Details
              </h2>

              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="bg-ivory rounded-2xl p-6 shadow-soft border border-emerald/10 space-y-5"
                >
                  <h3 className="font-display text-xl text-emerald">
                    {branch.name}
                  </h3>

                  {/* Address */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-foreground font-semibold">
                        Address
                      </p>
                      {branch.address.map((line, i) => (
                        <p
                          key={i}
                          className="font-body text-xs text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-foreground font-semibold">
                        Phone
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {branch.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-foreground font-semibold">
                        Email
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {branch.email}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-foreground font-semibold">
                        Business Hours
                      </p>
                      {branch.hours.map((line, i) => (
                        <p
                          key={i}
                          className="font-body text-xs text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Map inside card */}
                  <div className="mt-2 rounded-xl overflow-hidden h-40 bg-muted">
                    <iframe
                      src={branch.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={branch.mapTitle}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA
      <section className="py-16 bg-emerald">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl text-ivory mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="font-body text-ivory/80">
                Our teams in Kandy and Colombo are available during business
                hours for urgent inquiries.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+94817798555">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Hotline
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="mailto:info@goldennatureplantation.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Contact;
