import heroImage from "@/assets/hero-skyline.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content - Left Side */}
          <div className="animate-fade-up">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-3 md:mb-4">
              From Land to Land Mark
            </h1>
            
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gold leading-tight mb-6 md:mb-8">
              From Investment to wealth
            </h1>
            
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl">
              Transforming premium real estate through strategic construction and investment advisory. 
              Luxury construction expertise meets global real estate strategy for maximum returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#about"
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-md shadow-gold hover:opacity-90 transition-all duration-300 text-center text-sm md:text-base"
              >
                Discover More
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-gold/50 text-foreground font-semibold rounded-md hover:bg-gold/10 transition-all duration-300 text-center text-sm md:text-base"
              >
                Start Your Journey
              </a>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Premium Real Estate Skyline"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}