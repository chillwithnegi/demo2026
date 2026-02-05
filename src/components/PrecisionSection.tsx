import { MapPin, Building, Users, TrendingUp, ChevronRight, ChevronDown } from "lucide-react";
import cityWireframe from "@/assets/city-wireframe.png";
import worldGlobe from "@/assets/world-globe.png";
import worldMap from "@/assets/world-map.png";
import indiaMap from "@/assets/india-map.png";

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
  { label: "Exact Property", image: "/images/city-wireframe-dark.webp" },
];

export default function PrecisionSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-background text-foreground relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <img 
          src="/images/city-wireframe-dark.webp" 
          alt="" 
          width="1024"
          height="1024"
          className="w-full h-full object-cover" 
          loading="lazy" 
          decoding="async" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Strategic Approach
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 opacity-80 animate-fade-up">
            Land + Money ≠ Guaranteed Success
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6 md:mb-8" />
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-glow animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Real Estate Success Demands <span className="text-gradient-gold">Precision</span>
          </h3>
        </div>

        {/* Precision Points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-24">
          {precisionPoints.map((point, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 lg:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-gold hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gold/20 transition-colors border border-gold/20">
                <point.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-gold" />
              </div>
              <h3 className="font-serif text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Analysis Framework */}
        <div className="flex flex-col items-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gradient-gold">
            Market Analysis Framework
          </h3>
          
          {/* Desktop: Horizontal layout with right arrows */}
          <div className="hidden lg:flex items-center justify-center gap-4 w-full max-w-6xl">
            {marketTiles.map((tile, index) => (
              <div key={index} className="flex items-center">
                <div className="group relative w-40 h-40 xl:w-48 xl:h-48 rounded-2xl overflow-hidden border border-white/10 hover:border-gold hover:shadow-gold transition-all duration-500 transform hover:scale-105 bg-card">
                  <img 
                    src={tile.image} 
                    alt={tile.label}
                    width="192"
                    height="192"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-full h-full border border-gold/30 rounded-xl absolute inset-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="font-serif font-bold text-base xl:text-lg text-center text-foreground relative z-10 group-hover:text-gold transition-colors">
                      {tile.label}
                    </p>
                  </div>
                </div>
                {index < marketTiles.length - 1 && (
                  <div className="mx-2 xl:mx-4 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Vertical layout with down arrows */}
          <div className="lg:hidden flex flex-col items-center gap-0 w-full max-w-sm">
            {marketTiles.map((tile, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-gold hover:shadow-gold transition-all duration-500 bg-card">
                  <img 
                    src={tile.image} 
                    alt={tile.label}
                    width="380"
                    height="285"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-serif font-bold text-lg text-center text-foreground group-hover:text-gold transition-colors">
                      {tile.label}
                    </p>
                  </div>
                </div>
                {index < marketTiles.length - 1 && (
                  <div className="py-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <ChevronDown className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
