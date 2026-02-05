import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";

const investmentTypes = [
  {
    image: residentialImg,
    title: "Residential Excellence",
    description: "Premium developments that command premium prices and generate superior returns through strategic location selection and superior design.",
    placeholder: "Residential visual",
  },
  {
    image: commercialImg,
    title: "Commercial Growth",
    description: "Office and retail spaces positioned in emerging corridors that appreciate significantly as infrastructure develops and demand increases.",
    placeholder: "Commercial visual",
  },
  {
    image: hospitalityImg,
    title: "Hospitality Returns",
    description: "High-end hospitality projects that capitalize on tourism growth and lifestyle trends, delivering consistent revenue streams and capital appreciation.",
    placeholder: "Hospitality visual",
  },
];

export default function InvestmentSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Investment to Wealth
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {investmentTypes.map((type, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border border-border"
            >
              <div className="aspect-[4/3]">
                <img
                  src={type.image}
                  alt={type.placeholder}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
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
