import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-skyline.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero Image / Real Estate Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto pt-20">
        <div className="animate-fade-up">
          <p className="text-gold-light text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            Premium Real Estate Advisory
          </p>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4">
            From Land to Land Mark
          </h1>
          
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-gold-light leading-tight mb-8">
            From Investment to Wealth
          </h1>
          
          <p className="text-primary-foreground/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Transforming premium real estate through strategic construction and investment advisory. 
            Luxury construction expertise meets global real estate strategy for maximum returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-md shadow-gold hover:opacity-90 transition-all duration-300"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-gold transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
