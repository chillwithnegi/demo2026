import { MapPin, Building, Users, TrendingUp, Target } from "lucide-react";

const precisionPoints = [
  {
    icon: MapPin,
    title: "Right Location",
    description: "Choosing the right location with growth potential",
  },
  {
    icon: Building,
    title: "Right Product",
    description: "Developing the right product for market demand",
  },
  {
    icon: Users,
    title: "Right End-User",
    description: "Targeting the right end-user demographics",
  },
  {
    icon: TrendingUp,
    title: "Infrastructure Growth",
    description: "Aligning infrastructure-led growth patterns",
  },
];

const marketTiles = [
  { label: "World", placeholder: "World tile placeholder" },
  { label: "Country", placeholder: "Country tile placeholder" },
  { label: "City", placeholder: "City tile placeholder" },
  { label: "Micro Market", placeholder: "Micro Market tile placeholder" },
  { label: "Exact Property", placeholder: "Exact Property tile placeholder" },
];

export default function PrecisionSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Strategic Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Real Estate Success Demands Precision
          </h2>
          <div className="h-px w-24 mx-auto bg-gold mb-6" />
        </div>

        {/* Precision Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {precisionPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <point.icon className="w-6 h-6 text-gold-light" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                {point.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Analysis Tiles */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
            Market Analysis Framework
          </h3>
          <p className="text-primary-foreground/70">
            From global perspective to hyper-local precision
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {marketTiles.map((tile, index) => (
            <div
              key={index}
              className="group relative w-36 h-36 md:w-44 md:h-44 rounded-lg overflow-hidden border border-gold/30 hover:border-gold transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-primary-foreground/5" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <Target className="w-8 h-8 text-gold-light mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-sm md:text-base">{tile.label}</p>
                <p className="text-[10px] text-primary-foreground/50 mt-1">
                  {tile.placeholder}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
