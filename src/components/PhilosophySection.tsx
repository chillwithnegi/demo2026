import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pillars = [
  {
    number: "1",
    title: "Prime Land",
    description: "Strategic locations with development potential and market demand",
    image: "/images/new-08.jpeg",
  },
  {
    number: "2",
    title: "Capital Deployment",
    description: "Optimal investment structuring and financial engineering",
    image: "/images/new-09.jpeg",
  },
  {
    number: "3",
    title: "Execution Strategy",
    description: "Market timing, development planning, and value maximization",
    image: "/images/new-10.jpeg",
  },
];

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="philosophy" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Core Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gold">Land</span> + <span className="text-gold">Money</span> + <span className="text-gold">Strategy</span>
          </h2>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground">
            = Real Estate Success
          </p>
        </div>

        {/* Full-width image */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src="/images/new-07.jpeg"
            alt="Our Core Philosophy"
            className="w-full h-auto object-contain rounded-2xl border border-gold/20"
            loading="lazy"
          />
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(i + 2) * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-bold text-lg">{item.number}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
