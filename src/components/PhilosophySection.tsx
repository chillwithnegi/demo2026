import { MapPinned, Banknote, Lightbulb, Target, Zap, TrendingUp } from "lucide-react";
import { ClickableImage } from "@/components/ui/image-lightbox";
import corePortfolio from "@/assets/core-portfolio.png";
import strategicPlanning from "@/assets/strategic-planning.png";
import wealthCreationJourney from "@/assets/wealth-creation-journey.png";
import corePortfolioInvestor from "@/assets/core-portfolio-investor.png";

const philosophyItems = [
  {
    icon: MapPinned,
    number: "1",
    title: "Prime Land",
    subtitle: "Strategic Locations",
    description: "Strategic locations with development potential and market demand",
  },
  {
    icon: Banknote,
    number: "2",
    title: "Capital Deployment",
    subtitle: "Optimal Structuring",
    description: "Optimal investment structuring and financial engineering",
  },
  {
    icon: Lightbulb,
    number: "3",
    title: "Execution Strategy",
    subtitle: "Market Timing",
    description: "Market timing, development planning, and value maximization",
  },
];

const wealthStrategies = [
  {
    icon: Target,
    number: "1",
    title: "Strategic Planning",
    description: "Comprehensive market analysis and development feasibility studies that identify high-potential opportunities before they become obvious to the market.",
    image: strategicPlanning,
  },
  {
    icon: Zap,
    number: "2",
    title: "Execution Excellence",
    description: "Hands-on project management from concept to completion, ensuring every detail aligns with the wealth creation strategy and timeline.",
    image: wealthCreationJourney,
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Value Multiplication",
    description: "Systematic approach to enhancing asset value through strategic improvements, market positioning, and optimal exit timing.",
    image: corePortfolioInvestor,
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Our Approach
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Core Philosophy
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-foreground/80 max-w-2xl mx-auto">
            <span className="text-gold">Land</span> + <span className="text-gold">Money</span> + <span className="text-gold">Strategy</span> = Real Estate Success
          </p>
        </div>

        {/* Core Portfolio Image */}
        <div className="mb-10 md:mb-16">
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-card">
            <img
              src={corePortfolio}
              alt="The Investor Core Portfolio"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className="card-luxury text-center group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-primary-foreground">{item.number}</span>
              </div>
              <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1 md:mb-2">
                {item.subtitle}
              </p>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 rounded-lg bg-muted border border-border mb-10 md:mb-16">
          <h3 className="text-center font-serif text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
            Land + Money + Strategy
          </h3>
          <p className="text-center text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
            We're not brokers. We're <span className="font-serif font-bold text-gold">wealth creators</span> who execute strategic plans that transform real estate into generational prosperity.
          </p>
        </div>

        {/* Wealth Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {wealthStrategies.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 transition-all duration-300 shadow-card hover:shadow-elegant"
            >
              {/* Content First */}
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold text-base md:text-lg">{item.number}.</span>
                    <h4 className="font-serif text-base md:text-lg font-bold text-foreground">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image After */}
              <div className="aspect-[4/3] overflow-hidden">
                <ClickableImage
                  src={item.image}
                  alt={item.title}
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