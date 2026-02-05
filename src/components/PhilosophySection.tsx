import { MapPinned, Banknote, Lightbulb, Target, Zap, TrendingUp } from "lucide-react";
import corePortfolio from "@/assets/core-portfolio.png";

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
  },
  {
    icon: Zap,
    number: "2",
    title: "Execution Excellence",
    description: "Hands-on project management from concept to completion, ensuring every detail aligns with the wealth creation strategy and timeline.",
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Value Multiplication",
    description: "Systematic approach to enhancing asset value through strategic improvements, market positioning, and optimal exit timing.",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Core Philosophy
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-xl md:text-2xl font-serif text-foreground/80 max-w-2xl mx-auto">
            <span className="text-gold">Land</span> + <span className="text-gold">Money</span> + <span className="text-gold">Strategy</span> = Real Estate Success
          </p>
        </div>

        {/* Core Portfolio Image */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-card">
            <img
              src={corePortfolio}
              alt="The Investor Core Portfolio"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className="card-luxury text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl font-bold text-primary-foreground">{item.number}</span>
              </div>
              <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">
                {item.subtitle}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-lg bg-muted border border-border mb-16">
          <h3 className="text-center font-serif text-2xl font-bold text-foreground mb-4">
            Land + Money + Strategy
          </h3>
          <p className="text-center text-lg md:text-xl text-foreground leading-relaxed">
            We're not brokers. We're <span className="font-serif font-bold text-gold">wealth creators</span> who execute strategic plans that transform real estate into generational prosperity. Our approach combines market intelligence with flawless execution to deliver exceptional returns.
          </p>
        </div>

        {/* Wealth Strategies */}
        <div className="grid md:grid-cols-3 gap-8">
          {wealthStrategies.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-gold font-bold text-lg">{item.number}.</span>
                <h4 className="font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
