import { Link } from "react-router-dom";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Story", path: "/about#story" },
    { name: "Leadership", path: "/about#leadership" },
    { name: "Sustainability", path: "/about#sustainability" },
  ],
  products: [
    { name: "Calizta", path: "/products#calizta" },
    { name: "Hotbanero", path: "/products#hotbanero" },
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
  { icon: Facebook, href: "https://www.facebook.com/p/Golden-Nature-Plantation-61576896447100/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/p/DOp9oJRk7mV/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/authwall?trkInfo=AQHzxtgQvoxE1QAAAZsHFPpwp_m4c4G2PGLhqx85pYNeF04SFmULJuo38hircAG8AOWpkgqed4jJXKVzSJ4Tca8B1gtlCuvRZsKXgcyAL1pqfSve0hhoM62SiIapfoRRdZ7fyhY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgoldennatureplantation%2F", label: "LinkedIn" },

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
              {/* <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-gold" />
              </div> */}
              <img
                src="https://res.cloudinary.com/dhxnoqtmf/image/upload/v1765520749/2_vghe1k.png"
                alt="Golden Nature Logo"
                className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-display text-2xl text-ivory">
                  Golden Nature Plantation (Pvt) Ltd
                </span>
                {/* <span className="text-xs font-body tracking-widest uppercase text-gold">
                  Plantation (Pvt) Ltd
                </span> */}
              </div>
            </Link>
            <p className="font-elegant text-lg text-ivory/80 leading-relaxed mb-6 max-w-sm">
              Nurturing nature's finest gifts from the pristine highlands of Sri
              Lanka. Where tradition meets excellence in every leaf.
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
                <p className="font-body text-ivory">
                 No 179/1 Katugastota
                Road, Kandy, Sri Lanka
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-ivory/70">Phone</p>
                <p className="font-body text-ivory">+94 817798 555</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-ivory/70">Email</p>
                <p className="font-body text-ivory">
                  info@goldennatureplantation.com
                </p>
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
              © {new Date().getFullYear()} Golden Nature Plantation (Pvt) Ltd.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="font-body text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-body text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
