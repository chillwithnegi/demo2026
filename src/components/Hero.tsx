import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--gold)/0.3),transparent_60%)]" />
      </div>

      <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4 md:mb-6">
              Wealth X Multiplier
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 md:mb-6">
              From Land to{" "}
              <span className="text-gradient-gold">Landmark</span>
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gold leading-tight mb-6 md:mb-8">
              From Investment to Wealth
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Transforming premium real estate through strategic construction and investment advisory. Luxury construction expertise meets global real estate strategy for maximum returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-full shadow-gold hover:scale-105 transition-all duration-300 text-center"
              >
                Start Your Journey
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-gold/40 text-foreground font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src="/images/hero-main.jpeg"
                alt="Premium Luxury Estate"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-elegant border border-gold/20"
                loading="eager"
                fetchPriority="high"
              />
              {/* Floating stat */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card/95 backdrop-blur-md border border-gold/30 rounded-xl p-4 shadow-elegant">
                <p className="text-gold text-2xl md:text-3xl font-bold font-serif">15+</p>
                <p className="text-muted-foreground text-xs">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
