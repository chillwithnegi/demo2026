import { MapPinned, Banknote, Lightbulb } from "lucide-react";

const philosophyItems = [
  {
    icon: MapPinned,
    title: "Prime Land",
    subtitle: "Strategic Locations",
    description: "Strategic locations with proven appreciation potential and infrastructure advantages.",
    placeholder: "Core Philosophy Illustration 1",
  },
  {
    icon: Banknote,
    title: "Capital Deployment",
    subtitle: "Optimal Structuring",
    description: "Optimal investment structuring to maximize returns while managing risk effectively.",
    placeholder: "Core Philosophy Illustration 2",
  },
  {
    icon: Lightbulb,
    title: "Execution Strategy",
    subtitle: "Market Timing",
    description: "Market timing, development planning, and exit strategies for optimal outcomes.",
    placeholder: "Core Philosophy Illustration 3",
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className="card-luxury text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-10 h-10 text-gold" />
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
              <p className="text-xs text-muted-foreground/50 mt-4">
                [{item.placeholder}]
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-lg bg-muted border border-border">
          <p className="text-center text-lg md:text-xl text-foreground leading-relaxed">
            We're not brokers. We're <span className="font-serif font-bold text-gold">wealth creators</span> who understand that real estate success 
            comes from the perfect alignment of location intelligence, capital efficiency, and strategic execution.
          </p>
        </div>
      </div>
    </section>
  );
}
