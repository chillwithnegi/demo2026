import residential from "@/assets/residential.jpg";
import commercialAtrium from "@/assets/commercial-atrium.png";
import hospitality from "@/assets/hospitality.jpg";

const investments = [
  {
    image: residential,
    title: "Residential Excellence",
    description: "Premium developments that command premium prices and generate superior returns.",
  },
  {
    image: commercialAtrium,
    title: "Commercial Growth",
    description: "Office and retail spaces positioned in emerging corridors for appreciation.",
  },
  {
    image: hospitality,
    title: "Hospitality Returns",
    description: "High-end hospitality projects with consistent revenue streams.",
  },
];

export default function InvestmentSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Investment Types
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            From Investment to Wealth
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {investments.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-primary-foreground">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
