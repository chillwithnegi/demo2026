import { Ruler, Search, PiggyBank, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Luxury Construction & Design",
    description: "High-end residential, commercial, golf courses, and premium landscape structures with cost optimisation",
  },
  {
    icon: Search,
    title: "Development Strategy",
    description: "Highest & Best Use analysis, mixed-use planning, government approvals, and feasibility planning",
  },
  {
    icon: PiggyBank,
    title: "Market Research & Valuation",
    description: "Macro-micro analysis, demand-supply assessment, project feasibility, and market worth evaluation",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Real estate investment strategy, global markets perspective, and infrastructure-led growth identification",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Services That Build Wealth
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Comprehensive real estate strategy from concept to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-5 md:p-6 lg:p-8 rounded-lg border border-border hover:border-gold/50 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-4 md:mb-6">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gold" />
              </div>
              <h3 className="font-serif text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}