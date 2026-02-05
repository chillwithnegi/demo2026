import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-gold/20">
      {/* Golden Top Border Effect */}
      <div className="w-full h-1 bg-gradient-to-r from-background via-gold to-background" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Wealth X Multiplier"
              className="h-14 md:h-16 lg:h-20 w-auto mb-6 md:mb-8 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-6 md:mb-8">
              Transforming premium real estate through strategic construction and 
              investment advisory. From <span className="text-gold">land to landmark</span>, 
              from <span className="text-gold">investment to wealth</span>.
            </p>
            
            {/* Social */}
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group">
                <Twitter className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold hover:translate-x-2 transition-all duration-300 inline-block text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-muted-foreground group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <span className="group-hover:text-foreground transition-colors">Based in Delhi NCR<br/>Global Perspective</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-muted-foreground group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <span className="group-hover:text-foreground transition-colors">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-muted-foreground group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                </div>
                <span className="group-hover:text-foreground transition-colors text-xs md:text-sm">contact@wealthxmultiplier.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-muted-foreground text-xs md:text-sm">
            © {new Date().getFullYear()} Wealth X Multiplier. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}