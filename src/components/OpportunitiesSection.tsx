import { Building2, TrendingUp, Handshake } from "lucide-react";

const opportunities = [
  {
    icon: Building2,
    title: "Development Projects",
    description: "Ground-up development opportunities in prime locations with strong appreciation potential.",
    placeholder: "Investment Opportunity visual 1",
  },
  {
    icon: TrendingUp,
    title: "Value Add Assets",
    description: "Repositioning and renovation opportunities to unlock hidden value in existing properties.",
    placeholder: "Investment Opportunity visual 2",
  },
  {
    icon: Handshake,
    title: "Joint Ventures",
    description: "Strategic partnerships for large-scale developments with shared risk and rewards.",
    placeholder: "Investment Opportunity visual 3",
  },
];

export default function OpportunitiesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Opportunities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Investment Opportunities
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="card-luxury group text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-xs text-muted-foreground/50">
                [{item.placeholder}]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
