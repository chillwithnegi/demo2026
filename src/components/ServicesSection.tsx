import { Ruler, Search, PiggyBank, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Luxury Construction & Design",
    description: "High-end residential, commercial, golf courses, and premium landscape structures with cost optimisation without compromising standards",
  },
  {
    icon: Search,
    title: "Development Strategy",
    description: "Highest & Best Use analysis, mixed-use planning, government approvals roadmap, and end-to-end feasibility planning",
  },
  {
    icon: PiggyBank,
    title: "Market Research & Valuation",
    description: "Macro-micro analysis, demand-supply assessment, project feasibility studies, and true market worth evaluation",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Real estate investment strategy, commodity-linked opportunities, global markets perspective, and infrastructure-led growth identification",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services That Build Wealth
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive real estate strategy from concept to execution, combining technical expertise with investment acumen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-luxury group"
            >
              <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
