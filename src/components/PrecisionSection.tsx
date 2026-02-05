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
    <section className="section-padding bg-background text-foreground relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img src={cityWireframeDark} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="text-center mb-20">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Strategic Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 opacity-80 animate-fade-up">
            Land + Money ≠ Guaranteed Success
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-glow animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Real Estate Success Demands <span className="text-gradient-gold">Precision</span>
          </h3>
        </div>

        {/* Precision Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {precisionPoints.map((point, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors border border-gold/20">
                <point.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Analysis Tiles with Arrows */}
        <div className="flex flex-col items-center">
           <h3 className="font-serif text-3xl font-bold mb-12 text-center text-gradient-gold">
            Market Analysis Framework
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 w-full max-w-6xl">
            {marketTiles.map((tile, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="group relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10 hover:border-gold hover:shadow-gold transition-all duration-500 transform hover:scale-105 bg-card"
                >
                  <img 
                    src={tile.image} 
                    alt={tile.label}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-full h-full border border-gold/30 rounded-xl absolute inset-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="font-serif font-bold text-sm md:text-lg text-center text-foreground relative z-10 group-hover:text-gold transition-colors text-shadow-lg">
                      {tile.label}
                    </p>
                  </div>
                </div>
                {index < marketTiles.length - 1 && (
                  <img 
                    src={arrowDown} 
                    alt="Arrow" 
                    className="w-6 h-6 md:w-10 md:h-10 mx-1 md:mx-2 rotate-[-90deg] opacity-50"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
