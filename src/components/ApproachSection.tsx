import primeLandVisual from "@/assets/prime-land-visual.png";
import capitalDevelopmentVisual from "@/assets/capital-development-visual.png";
import executionStrategyVisual from "@/assets/execution-strategy-visual.png";
import landMoneyStrategy from "@/assets/land-money-strategy.png";

const approachSteps = [
  {
    title: "Prime Land",
    description: "Strategic identification and acquisition of high-potential land parcels in growth corridors",
    image: primeLandVisual,
  },
  {
    title: "Capital Development",
    description: "Smart investment structuring and capital deployment for maximum wealth multiplication",
    image: capitalDevelopmentVisual,
  },
  {
    title: "Execution Strategy",
    description: "End-to-end project execution from planning to completion with quality assurance",
    image: executionStrategyVisual,
  },
];

export default function ApproachSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            The Success Formula
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Approach
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
        </div>

        {/* Land + Money + Strategy Infographic */}
        <div className="mb-12 md:mb-16">
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-gold/20 bg-card">
            <img 
              src={landMoneyStrategy} 
              alt="Land Money Strategy - The Success Triangle" 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm md:text-base">
            The three pillars of real estate success: <span className="text-gold font-semibold">Land</span> + <span className="text-gold font-semibold">Money</span> + <span className="text-gold font-semibold">Strategy</span> = Guaranteed Returns
          </p>
        </div>

        {/* Three Pillars with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border border-gold/20 hover:border-gold/50"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <span className="font-serif text-lg font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
                    {step.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
