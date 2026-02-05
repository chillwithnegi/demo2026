import { MapPin, Building, Users, TrendingUp } from "lucide-react";
import cityWireframe from "@/assets/city-wireframe.png";
import cityWireframeDark from "@/assets/city-wireframe-dark.png";
import worldGlobe from "@/assets/world-globe.png";
import worldMap from "@/assets/world-map.png";
import indiaMap from "@/assets/india-map.png";
import arrowDown from "@/assets/arrow-down.png";

const precisionPoints = [
  {
    icon: MapPin,
    title: "Right Location",
    description: "Choosing the right location at the right time",
  },
  {
    icon: Building,
    title: "Right Product",
    description: "Developing the right product for the right market",
  },
  {
    icon: Users,
    title: "Right End-User",
    description: "Targeting the right end-user or investor segment",
  },
  {
    icon: TrendingUp,
    title: "Infrastructure Growth",
    description: "Aligning infrastructure-led growth opportunities",
  },
];

const marketTiles = [
  { label: "World", image: worldGlobe },
  { label: "Country", image: worldMap },
  { label: "City", image: indiaMap },
  { label: "Micro Market", image: cityWireframe },
  { label: "Exact Property", image: cityWireframeDark },
];

export default function PrecisionSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Strategic Approach
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Land + Money ≠ Guaranteed Success
          </h2>
          <div className="h-px w-24 mx-auto bg-gold mb-6" />
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Real Estate Success Demands Precision
          </h3>
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

        {/* Market Analysis Tiles with Arrows */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          {marketTiles.map((tile, index) => (
            <div key={index} className="flex items-center">
              <div
                className="group relative w-28 h-28 md:w-40 md:h-40 rounded-lg overflow-hidden border border-gold/30 hover:border-gold transition-all duration-300"
              >
                <img 
                  src={tile.image} 
                  alt={tile.label}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-semibold text-sm md:text-base text-center px-2">{tile.label}</p>
                </div>
              </div>
              {index < marketTiles.length - 1 && (
                <img 
                  src={arrowDown} 
                  alt="Arrow" 
                  className="w-6 h-6 md:w-8 md:h-8 mx-1 md:mx-2 rotate-[-90deg]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
