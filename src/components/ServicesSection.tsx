import { Ruler, Search, PiggyBank, Users2, Shield } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Luxury Construction & Design",
    description: "Premium construction services with world-class design and finishing standards.",
    placeholder: "Services Icon 1",
  },
  {
    icon: Search,
    title: "Market Research & Analysis",
    description: "In-depth market studies and feasibility analysis for informed decision making.",
    placeholder: "Services Icon 2",
  },
  {
    icon: PiggyBank,
    title: "Investment Advisory",
    description: "Strategic investment guidance to maximize returns and minimize risks.",
    placeholder: "Services Icon 3",
  },
  {
    icon: Users2,
    title: "Development Management",
    description: "End-to-end project management from concept to completion.",
    placeholder: "Services Icon 4",
  },
  {
    icon: Shield,
    title: "Due Diligence",
    description: "Comprehensive legal and technical due diligence for secure investments.",
    placeholder: "Services Icon 5",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services That Build Wealth
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-luxury group ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-xs text-muted-foreground/50">
                [{service.placeholder}]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
