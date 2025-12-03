import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Story", path: "/about#story" },
    { name: "Leadership", path: "/about#leadership" },
    { name: "Sustainability", path: "/about#sustainability" },
  ],
  products: [
    { name: "Premium Teas", path: "/products#tea" },
    { name: "Herbal Wellness", path: "/products#herbal" },
    { name: "Organic Range", path: "/products#organic" },
    { name: "Gift Collections", path: "/products#gifts" },
  ],
  investors: [
    { name: "Why Invest", path: "/investment" },
    { name: "Growth Story", path: "/investment#growth" },
    { name: "Partnership", path: "/investment#partnership" },
    { name: "Contact IR", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-emerald text-ivory">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-ivory">
                  Golden Nature
                </span>
                <span className="text-xs font-body tracking-widest uppercase text-gold">
                  Plantation (Pvt) Ltd
                </span>
              </div>
            </Link>
            <p className="font-elegant text-lg text-ivory/80 leading-relaxed mb-6 max-w-sm">
              Nurturing nature's finest gifts from the pristine highlands of Sri Lanka. 
              Where tradition meets excellence in every leaf.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold hover:text-emerald-dark transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-6">Investors</h4>
            <ul className="space-y-3">
              {footerLinks.investors.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-ivory/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-ivory/70">Address</p>
                <p className="font-body text-ivory">Colombo, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-ivory/70">Phone</p>
                <p className="font-body text-ivory">+94 11 234 5678</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-ivory/70">Email</p>
                <p className="font-body text-ivory">info@goldennature.lk</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-ivory/60">
              © {new Date().getFullYear()} Golden Nature Plantation (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="font-body text-sm text-ivory/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-body text-sm text-ivory/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
