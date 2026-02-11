import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function VisionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold/15 to-transparent rounded-2xl blur-xl" />
              <img
                src="/images/slide-02.jpeg"
                alt="Where Vision Meets Precision"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Where It All Began
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Vision Meets{" "}
              <span className="text-gradient-gold">Precision</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Civil Engineer with an MBA in Real Estate & Urban Infrastructure from RICS, combining hands-on luxury construction experience with global investment and development strategy.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              I don't just deal in property. I define what should be built on your land, where it should be built, why it should be built, and how it should generate maximum returns.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gradient-gold" />
              <p className="text-gold font-serif text-sm italic">Civil Engineer · MBA (RICS) · Global Vision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
