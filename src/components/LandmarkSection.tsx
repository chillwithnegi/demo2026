import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "01",
    title: "Land Acquisition",
    description: "Strategic identification and procurement of prime locations with development potential",
    image: "/images/new-37.jpeg",
  },
  {
    number: "02",
    title: "Development Planning",
    description: "Architectural design and regulatory approvals that maximize value",
    image: "/images/new-28.jpeg",
  },
  {
    number: "03",
    title: "Construction",
    description: "Quality execution with strict timelines and budget control",
    image: "/images/new-15.jpeg",
  },
  {
    number: "04",
    title: "Completion",
    description: "Transformation into iconic properties that define city skylines",
    image: "/images/new-30.jpeg",
  },
];

export default function LandmarkSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            The Transformation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From <span className="text-gold">Land</span> to <span className="text-gold">Landmark</span>
          </h2>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-12 md:space-y-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-video object-cover rounded-2xl border border-gold/20 shadow-elegant transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-serif text-5xl md:text-7xl font-bold text-gold/20">{step.number}</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
