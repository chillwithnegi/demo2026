import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "1",
    title: "Strategic Planning",
    description: "Comprehensive market analysis and development feasibility studies that identify high-potential opportunities before they become obvious to the market.",
    image: "/images/new-09.jpeg",
  },
  {
    number: "2",
    title: "Execution Excellence",
    description: "Hands-on project management from concept to completion, ensuring every detail aligns with the wealth creation strategy and timeline.",
    image: "/images/new-10.jpeg",
  },
  {
    number: "3",
    title: "Value Multiplication",
    description: "Systematic approach to enhancing asset value through strategic improvements, market positioning, and optimal exit timing.",
    image: "/images/new-11.jpeg",
  },
];

export default function SolutionsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            The Wealth Creation Formula
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Land + Money + Strategy
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            We're not brokers. We're wealth creators who execute strategic plans that transform real estate into generational prosperity.
          </p>
        </div>

        {/* Alternating Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(i + 1) * 300}ms` }}
            >
              {/* Image - alternating sides */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl blur-xl" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-bold text-xl font-serif">{step.number}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
