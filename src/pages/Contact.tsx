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

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Golden Nature Plantation (Pvt) Ltd",
      "No 179/1 Katugastota Road, Kandy, Sri Lanka",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+94 817798 555"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@goldennatureplantation.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:30 AM - 5:00 PM",
      "Saturday: Closed",
      "Sunday:Closed",
    ],
  },
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
              Let's Start a <span className="text-gold">Conversation</span>
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed">
              Whether you have questions about our products, partnership
              opportunities, or investment inquiries, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-emerald" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="font-body text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* Map */}
              <div className="mt-12 rounded-2xl overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.4913167037!2d79.7738039!3d6.8859753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2459c2f3f3b4f%3A0x3c2b3d94fb1b4c1e!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1730000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Golden Nature Plantation Location"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-ivory rounded-2xl p-8 md:p-12 shadow-elevated">
                <h2 className="font-display text-3xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-muted-foreground mb-8">
                  Fill out the form below and we'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                    variant="gold"
                    size="xl"
                    className="w-full"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-emerald">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl text-ivory mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="font-body text-ivory/80">
                Our team is available during business hours for urgent
                inquiries.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+94112345678">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="mailto:info@goldennature.lk">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
