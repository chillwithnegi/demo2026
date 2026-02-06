import { MapPin, Building, Users, TrendingUp, ChevronRight, ChevronDown } from "lucide-react";
import { ClickableImage } from "@/components/ui/image-lightbox";
import StrategicDashboard from "@/components/StrategicDashboard";
import worldGlobeColorful from "@/assets/world-globe-colorful.png";
import worldMapColorful from "@/assets/world-map-colorful.png";
import indiaMapColorful from "@/assets/india-map-colorful.png";
import cityMicromarket from "@/assets/city-micromarket.png";
import exactProperty from "@/assets/exact-property.png";

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
  { label: "World", image: worldGlobeColorful },
  { label: "Country", image: worldMapColorful },
  { label: "City", image: indiaMapColorful },
  { label: "Micro Market", image: cityMicromarket },
  { label: "Exact Property", image: exactProperty },
];

export default function PrecisionSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-background text-foreground relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
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

        {/* Strategic Analysis Infographic */}
        <div className="mb-16 md:mb-20">
          <StrategicDashboard />
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
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-gradient-gold">
            Market Analysis Framework
          </h3>
          
          {/* Desktop: Horizontal layout with right arrows */}
          <div className="hidden lg:flex items-center justify-center gap-3 w-full max-w-6xl">
            {marketTiles.map((tile, index) => (
              <div key={index} className="flex items-center">
                <div className="group relative w-44 h-44 xl:w-52 xl:h-52 rounded-2xl overflow-hidden border-2 border-gold/30 hover:border-gold hover:shadow-gold transition-all duration-500 transform hover:scale-105 bg-card">
                  <ClickableImage 
                    src={tile.image} 
                    alt={tile.label}
                    width="208"
                    height="208"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    showZoomIcon={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center mb-2">
                      <span className="text-gold font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="font-serif font-bold text-base xl:text-lg text-center text-foreground group-hover:text-gold transition-colors">
                      {tile.label}
                    </p>
                  </div>
                </div>
                {index < marketTiles.length - 1 && (
                  <div className="mx-2 xl:mx-3 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <ChevronRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Vertical layout with down arrows */}
          <div className="lg:hidden flex flex-col items-center gap-0 w-full max-w-sm">
            {marketTiles.map((tile, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div className="group relative w-full aspect-square rounded-xl overflow-hidden border-2 border-gold/30 hover:border-gold hover:shadow-gold transition-all duration-500 bg-card">
                  <ClickableImage 
                    src={tile.image} 
                    alt={tile.label}
                    width="380"
                    height="380"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    showZoomIcon={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center mb-2">
                      <span className="text-gold font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="font-serif font-bold text-lg text-center text-foreground group-hover:text-gold transition-colors">
                      {tile.label}
                    </p>
                  </div>
                </div>
                {index < marketTiles.length - 1 && (
                  <div className="py-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                      <ChevronDown className="w-5 h-5 text-primary-foreground" />
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
