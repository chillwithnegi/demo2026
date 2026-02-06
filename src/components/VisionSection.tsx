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
                alt="The Beginning of a Dream"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
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
              🔥 Where It All Began
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight whitespace-nowrap">
              Where Vision Meets Precision
            </h2>
            <div className="divider-gold !mx-0 mb-6 md:mb-8" />
            
            {/* MBA Emphasis */}
            <div className="mb-6 p-4 md:p-6 rounded-lg bg-gold/5 border border-gold/20">
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-gold mb-2">
                MBA in Real Estate & Urban Infrastructure
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                from RICS School of Built Environment
              </p>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              <span className="text-foreground font-medium">A Civil Engineer by passion</span>, shaped by hands-on luxury construction — 
              every brick laid taught me the art of turning raw land into living dreams.
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
