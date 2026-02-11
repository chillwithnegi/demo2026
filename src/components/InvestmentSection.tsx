import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const investments = [
  {
    title: "Residential Excellence",
    description: "Premium developments that command premium prices and generate superior returns through strategic location selection and superior design.",
    image: "/images/new-32.jpeg",
  },
  {
    title: "Commercial Growth",
    description: "Office and retail spaces positioned in emerging corridors that appreciate significantly as infrastructure develops and demand increases.",
    image: "/images/new-25.jpeg",
  },
  {
    title: "Hospitality Returns",
    description: "High-end hospitality projects that capitalize on tourism growth and lifestyle trends, delivering consistent revenue streams and capital appreciation.",
    image: "/images/new-20.jpeg",
  },
];

export default function InvestmentSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Investment Sectors
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From <span className="text-gold">Investment</span> to <span className="text-gold">Wealth</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {investments.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
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
