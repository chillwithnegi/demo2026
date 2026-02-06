import { ClickableImage } from "@/components/ui/image-lightbox";
import { Target, Zap, TrendingUp } from "lucide-react";
import strategicPlanning from "@/assets/strategic-planning.png";
import wealthCreationJourney from "@/assets/wealth-creation-journey.png";
import corePortfolioInvestor from "@/assets/core-portfolio-investor.png";
import landMoneyStrategy from "@/assets/land-money-strategy.png";

const approachSteps = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive market analysis and development feasibility studies that identify high-potential opportunities before they become obvious to the market.",
    image: strategicPlanning,
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "Hands-on project management from concept to completion, ensuring every detail aligns with the wealth creation strategy and timeline.",
    image: wealthCreationJourney,
  },
  {
    icon: TrendingUp,
    title: "Value Multiplication",
    description: "Systematic approach to enhancing asset value through strategic improvements, market positioning, and optimal exit timing.",
    image: corePortfolioInvestor,
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
            <ClickableImage 
              src={landMoneyStrategy} 
              alt="Land Money Strategy - The Success Triangle" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm md:text-base">
            The three pillars of real estate success: <span className="text-gold font-semibold">Land</span> + <span className="text-gold font-semibold">Money</span> + <span className="text-gold font-semibold">Strategy</span> = Guaranteed Returns
          </p>
          <p className="text-center text-muted-foreground text-xs mt-2">Click image to enlarge</p>
        </div>

        {/* Three Pillars with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border border-gold/20 hover:border-gold/50 bg-card"
            >
              {/* Content First */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-foreground">
                    <span className="text-gold mr-2">{index + 1}.</span>{step.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image After */}
              <div className="aspect-[4/3] overflow-hidden">
                <ClickableImage 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  showZoomIcon={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
