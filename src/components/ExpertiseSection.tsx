import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="expertise" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Our Roots, Our Pride
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Delhi NCR{" "}
              <span className="text-gradient-gold">Expertise</span>
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Why Delhi NCR?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Infrastructure-driven appreciation logic across micro-markets: Golf Course Road, Golf Course Extension Road, New Gurugram, Manesar, Dwarka Expressway, and UER-II.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Market Intelligence</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Gurugram vs Noida vs Faridabad vs Ghaziabad analysis. Government spending patterns and development corridors identification for maximum returns.
                </p>
              </div>
            </div>

            {/* Additional Expertise */}
            <div className="border-t border-gold/20 pt-6 space-y-4">
              <h4 className="font-serif text-lg font-bold text-gold">Additional Expertise Areas</h4>
              <div>
                <p className="text-foreground font-semibold text-sm mb-1">Business Development & Franchise Consulting</p>
                <p className="text-muted-foreground text-sm">Franchise expansion planning, location strategy, outlet count optimisation, footfall and revenue modelling</p>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm mb-1">Digital Marketing for Real Estate</p>
                <p className="text-muted-foreground text-sm">Real estate-focused digital marketing strategy, lead generation systems, premium brand positioning</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/15 to-transparent rounded-2xl blur-xl" />
              <img
                src="/images/new-24.jpeg"
                alt="Delhi NCR Expertise"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
                loading="lazy"
              />
            </div>
            {/* Sub images grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img src="/images/new-27.jpeg" alt="Market Analysis" className="w-full aspect-square object-cover rounded-xl border border-gold/20" loading="lazy" />
              <img src="/images/new-29.jpeg" alt="Regional Strategy" className="w-full aspect-square object-cover rounded-xl border border-gold/20" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
