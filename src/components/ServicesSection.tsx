import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Building2, Brain, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Luxury Construction & Design",
    description: "High-end residential, commercial, golf courses, and premium landscape structures with cost optimisation without compromising standards",
    image: "/images/new-18.jpeg",
  },
  {
    icon: Brain,
    title: "Development Strategy",
    description: "Highest & Best Use analysis, mixed-use planning, government approvals roadmap, and end-to-end feasibility planning",
    image: "/images/new-21.jpeg",
  },
  {
    icon: BarChart3,
    title: "Market Research & Valuation",
    description: "Macro-micro analysis, demand-supply assessment, project feasibility studies, and true market worth evaluation",
    image: "/images/new-22.jpeg",
  },
  {
    icon: Globe,
    title: "Investment Advisory",
    description: "Real estate investment strategy, commodity-linked opportunities, global markets perspective, and infrastructure-led growth identification",
    image: "/images/new-23.jpeg",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services That Build <span className="text-gold">Wealth</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive real estate strategy from concept to execution, combining technical expertise with investment acumen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
