import { MapPin, Globe } from "lucide-react";
import cityWireframeDark from "@/assets/city-wireframe-dark.png";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-12 md:py-20 lg:py-28 px-4 md:px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cityWireframeDark}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          🤝 Join Our Journey
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
          Let's Create Something That Outlasts Us
        </h2>
        <div className="divider-gold mb-6 md:mb-8" />
        
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
          This journey means everything to us — and we'd love for you to be part of it. 
          Together, we can transform vision into wealth that lasts generations.
        </p>
        
        <p className="text-muted-foreground text-xs md:text-sm lg:text-base leading-relaxed mb-8 md:mb-12">
          Whether you are a landowner, investor, developer, or brand — 
          we bring the same passion, the same emotion, the same fire to your project.
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gold" />
            <span className="text-xs md:text-sm font-medium text-foreground">Rooted in Delhi NCR</span>
          </div>
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border">
            <Globe className="w-3 h-3 md:w-4 md:h-4 text-gold" />
            <span className="text-xs md:text-sm font-medium text-foreground">Dreaming Globally</span>
          </div>
        </div>

        <p className="text-gold text-lg md:text-xl lg:text-2xl font-serif font-semibold mb-6 md:mb-8">
          Ready to feel the difference passion makes?
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a
            href="mailto:contact@wealthxmultiplier.com"
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-md shadow-gold hover:opacity-90 transition-all duration-300 text-center text-sm md:text-base"
          >
            Start Our Conversation
          </a>
          <a
            href="tel:+919999999999"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-gold/50 text-foreground font-semibold rounded-md hover:bg-gold/10 transition-all duration-300 text-center text-sm md:text-base"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
