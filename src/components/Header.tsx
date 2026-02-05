import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20 px-4 md:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/images/logo.webp" 
              alt="Wealth X Multiplier" 
              width="96"
              height="56"
              className="h-8 md:h-10 lg:h-12 w-auto"
              fetchPriority="high"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-gold text-primary-foreground text-xs lg:text-sm font-semibold rounded-md shadow-gold hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elegant animate-fade-in">
            <div className="flex flex-col py-3 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-sm font-medium text-foreground/80 hover:text-gold transition-colors border-b border-border/50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-5 py-3 bg-gradient-gold text-primary-foreground text-center text-sm font-semibold rounded-md shadow-gold"
              >
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
