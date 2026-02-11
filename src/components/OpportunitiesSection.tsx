import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const opportunities = [
  {
    title: "Development Projects",
    description: "Ground-up construction opportunities with proven returns through strategic planning and execution",
    image: "/images/new-13.jpeg",
  },
  {
    title: "Value-Add Assets",
    description: "Underperforming properties requiring operational improvements or physical enhancements to unlock hidden value",
    image: "/images/new-14.jpeg",
  },
  {
    title: "Joint Ventures",
    description: "Partnership structures that combine your capital with our execution expertise for shared success",
    image: "/images/new-16.jpeg",
  },
];

export default function OpportunitiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Explore Opportunities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Investment <span className="text-gold">Opportunities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {opportunities.map((item, i) => (
            <div
              key={i}
              className={`group bg-background rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
