import heroImage from "@/assets/hero-skyline.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background pt-20">
      <div className="container-luxury px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Left Side */}
          <div className="animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              From Land to Land Mark
            </h1>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight mb-8">
              From Investment to wealth
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Transforming premium real estate through strategic construction and investment advisory. 
              Luxury construction expertise meets global real estate strategy for maximum returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Image - Right Side */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Hero Image / Real Estate Skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
