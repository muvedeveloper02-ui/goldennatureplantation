import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Investment", path: "/investment" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo from Public Folder */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-6 h-6 text-gold" />
            </div> */}
            <img
              src="/goldennatureplantation/images/logo3.png"
              alt="Golden Nature Logo"
              className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-display text-xl tracking-wide transition-colors",
                  isScrolled ? "text-emerald" : "text-ivory"
                )}
              >
                GOLDEN NATURE PLANTATION
              </span>
              {/* <span className={cn(
                "text-xs font-body tracking-widest uppercase transition-colors",
                isScrolled ? "text-emerald-light" : "text-gold"
              )}>
                Plantation
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm tracking-wide uppercase relative py-2 transition-colors",
                  isScrolled
                    ? "text-foreground hover:text-emerald"
                    : "text-ivory/90 hover:text-gold",
                  location.pathname === link.path &&
                    (isScrolled ? "text-emerald" : "text-gold"),
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left",
                  location.pathname === link.path && "after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant={isScrolled ? "gold" : "hero"} size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-emerald hover:bg-emerald/10"
                : "text-ivory hover:bg-ivory/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-ivory rounded-xl p-6 shadow-elevated space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block font-body text-base py-2 border-b border-border/50 transition-colors",
                  location.pathname === link.path
                    ? "text-emerald font-medium"
                    : "text-foreground hover:text-emerald"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="gold" className="w-full mt-4" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
