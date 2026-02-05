import { Home, Building2, Hotel } from "lucide-react";

const investmentTypes = [
  {
    icon: Home,
    title: "Residential Excellence",
    description: "Premium developments that command premium prices and generate superior returns through strategic location selection and superior design.",
  },
  {
    icon: Building2,
    title: "Commercial Growth",
    description: "Office and retail spaces positioned in emerging corridors that appreciate significantly as infrastructure develops and demand increases.",
  },
  {
    icon: Hotel,
    title: "Hospitality Returns",
    description: "High-end hospitality projects that capitalize on tourism growth and lifestyle trends, delivering consistent revenue streams and capital appreciation.",
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
              className="bg-card p-8 rounded-lg border border-border hover:border-gold/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <type.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
