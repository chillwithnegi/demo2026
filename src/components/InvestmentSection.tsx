import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";

const investmentTypes = [
  {
    image: residentialImg,
    title: "Residential",
    description: "Luxury apartments, villas, and gated communities designed for premium living experiences.",
    placeholder: "Residential visual",
  },
  {
    image: commercialImg,
    title: "Commercial",
    description: "Grade A office spaces, retail centers, and mixed-use developments for optimal returns.",
    placeholder: "Commercial visual",
  },
  {
    image: hospitalityImg,
    title: "Hospitality",
    description: "Hotels, resorts, and serviced apartments catering to the discerning traveler.",
    placeholder: "Hospitality visual",
  },
];

export default function InvestmentSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Asset Classes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Investment to Wealth
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Strategic investments across premium real estate segments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {investmentTypes.map((type, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/3]">
                <img
                  src={type.image}
                  alt={type.placeholder}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
