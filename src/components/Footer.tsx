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
      
      <div className="container-luxury section-padding !py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Wealth X Multiplier"
              className="h-20 w-auto mb-8 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-8">
              Transforming premium real estate through strategic construction and 
              investment advisory. From <span className="text-gold">land to landmark</span>, 
              from <span className="text-gold">investment to wealth</span>.
            </p>
            
            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold hover:translate-x-2 transition-all duration-300 inline-block text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-base text-muted-foreground group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <span className="group-hover:text-foreground transition-colors">Based in Delhi NCR<br/>Global Perspective</span>
              </li>
              <li className="flex items-center gap-4 text-base text-muted-foreground group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <span className="group-hover:text-foreground transition-colors">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-4 text-base text-muted-foreground group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <span className="group-hover:text-foreground transition-colors">contact@wealthxmultiplier.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Wealth X Multiplier. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
