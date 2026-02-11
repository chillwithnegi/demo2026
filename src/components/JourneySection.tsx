import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const journeyItems = [
  {
    number: "01",
    title: "Premium Structures",
    description: "High-end residential and commercial developments with uncompromising standards",
    image: "/images/new-33.jpeg",
  },
  {
    number: "02",
    title: "Signature Landscapes",
    description: "Golf courses, water bodies, waterfalls, and premium landscape architecture",
    image: "/images/new-40.jpeg",
  },
  {
    number: "03",
    title: "Highest & Best Use",
    description: "Macro-to-micro analysis for optimal land development strategy",
    image: "/images/new-12.jpeg",
  },
];

export default function JourneySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Luxury Construction
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Journey Through Excellence
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Extensive on-ground experience with premium developers in DLF and the Delhi NCR region, where luxury construction means creating out-of-the-world experiences, not just buildings.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {journeyItems.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-700 ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-gold/50 font-serif text-4xl font-bold">{item.number}</span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
