import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-skyline.webp"
          alt="Premium Real Estate Skyline"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24 lg:py-32">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6 whitespace-nowrap">
            From Land to Landmark
          </h1>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold leading-tight mb-6 md:mb-8 whitespace-nowrap">
            From Investment to Wealth
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl">
            Transforming premium real estate through strategic construction and investment advisory. 
            Luxury construction expertise meets global real estate strategy for maximum returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12">
            <a
              href="#about"
              className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-md shadow-gold hover:opacity-90 transition-all duration-300 text-center"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gold/50 text-foreground font-semibold rounded-md hover:bg-gold/10 transition-all duration-300 text-center"
            >
              Start Your Journey
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">Connect with us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
