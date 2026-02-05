import founderPortrait from "@/assets/founder-portrait.jpg";

export default function VisionSection() {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-card">
              <img
                src={founderPortrait}
                alt="Where Vision Meets Precision Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="hidden md:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 border-2 border-gold/30 rounded-lg -z-10" />
            <div className="hidden md:block absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 h-16 lg:w-24 lg:h-24 bg-gold/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
              About the Founder
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Where Vision Meets Precision
            </h2>
            <div className="divider-gold !mx-0 mb-6 md:mb-8" />
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              Civil Engineer with an MBA in Real Estate & Urban Infrastructure from RICS, 
              combining hands-on luxury construction experience with global investment and 
              development strategy.
            </p>
            <p className="text-foreground text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              I don't just deal in property. I define <span className="text-gold">what</span> should be built on your land, 
              <span className="text-gold"> where</span> it should be built, <span className="text-gold">why</span> it should be built, 
              and <span className="text-gold">how</span> it should generate maximum returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}