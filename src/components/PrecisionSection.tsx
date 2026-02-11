import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronRight, ChevronDown } from "lucide-react";

const bulletPoints = [
  "Choosing the right location at the right time",
  "Developing the right product for the right market",
  "Targeting the right end-user or investor segment",
  "Aligning infrastructure-led growth opportunities",
];

const marketTiles = [
  { label: "World", image: "/images/new-02.jpeg" },
  { label: "Country", image: "/images/new-03.jpeg" },
  { label: "City", image: "/images/new-04.jpeg" },
  { label: "Micro Market", image: "/images/new-05.jpeg" },
  { label: "Exact Property", image: "/images/new-06.jpeg" },
];

export default function PrecisionSection() {
  const { ref: topRef, isVisible: topVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      {/* Top: Text Right, Image Left */}
      <div ref={topRef} className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${topVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src="/images/new-01.jpeg"
              alt="Real Estate Success Demands Precision"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${topVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              The Truth
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Land + Money ≠{" "}
              <span className="text-gradient-gold">Guaranteed Success</span>
            </h2>
            <h3 className="font-serif text-xl md:text-2xl text-gold mb-6">
              Real Estate Success Demands Precision
            </h3>
            <ul className="space-y-4">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-muted-foreground text-base">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Market Analysis Framework */}
      <div ref={bottomRef} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-10 transition-all duration-1000 ${bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Market Analysis <span className="text-gradient-gold">Framework</span>
          </h3>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-3 max-w-6xl mx-auto">
          {marketTiles.map((tile, index) => (
            <div key={index} className={`flex items-center transition-all duration-700 ${bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="group relative w-44 xl:w-48 aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold/30 hover:border-gold transition-all duration-500 hover:scale-105">
                <img src={tile.image} alt={tile.label} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="font-serif font-bold text-sm text-white">{tile.label}</p>
                </div>
              </div>
              {index < marketTiles.length - 1 && (
                <div className="mx-3 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden flex flex-col items-center gap-0 max-w-sm mx-auto">
          {marketTiles.map((tile, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-gold/30">
                <img src={tile.image} alt={tile.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-1">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="font-serif font-bold text-base text-white">{tile.label}</p>
                </div>
              </div>
              {index < marketTiles.length - 1 && (
                <div className="py-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
