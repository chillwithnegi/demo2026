import founderPortrait from "@/assets/founder-portrait.jpg";

export default function VisionSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              About the Founder
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Vision Meets Precision
            </h2>
            <div className="divider-gold !mx-0 mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Civil Engineer with an MBA in Real Estate & Urban Infrastructure from RICS, 
              combining hands-on luxury construction experience with global investment and 
              development strategy.
            </p>
            <p className="text-foreground text-base md:text-lg leading-relaxed font-medium">
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
