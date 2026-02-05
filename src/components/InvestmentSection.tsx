import residentialAerial from "@/assets/residential-aerial.png";
import luxuryInterior from "@/assets/luxury-interior.png";
import wealthJourney from "@/assets/wealth-journey.png";

const investments = [
  {
    image: residentialAerial,
    title: "Residential Excellence",
    description: "Premium developments that command premium prices and generate superior returns through strategic location selection and superior design.",
  },
  {
    image: luxuryInterior,
    title: "Commercial Growth",
    description: "Office and retail spaces positioned in emerging corridors that appreciate significantly as infrastructure develops and demand increases.",
  },
  {
    image: wealthJourney,
    title: "Hospitality Returns",
    description: "High-end hospitality projects that capitalize on tourism growth and lifestyle trends, delivering consistent revenue streams and capital appreciation.",
  },
];

export default function InvestmentSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Investment Types
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Investment to Wealth
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
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
