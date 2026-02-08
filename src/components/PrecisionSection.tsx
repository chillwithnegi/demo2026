import { ChevronRight, ChevronDown } from "lucide-react";
import { ClickableImage } from "@/components/ui/image-lightbox";

const marketTiles = [
  { label: "World", image: "/images/new-02.jpeg" },
  { label: "Country", image: "/images/new-03.jpeg" },
  { label: "City", image: "/images/new-04.jpeg" },
  { label: "Micro Market", image: "/images/new-05.jpeg" },
  { label: "Exact Property", image: "/images/new-06.jpeg" },
];

export default function PrecisionSection() {
  return (
    <section className="bg-background">
      {/* Full-width Strategy Image */}
      <div className="relative w-full">
        <ClickableImage
          src="/images/new-01.jpeg"
          alt="Wealth X Multiplier — Strategic Vision"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Market Framework */}
      <div className="py-8 md:py-12 px-4 md:px-6">
        <div className="text-center mb-6 md:mb-10">
          <h3 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Market Analysis Framework
          </h3>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-3 max-w-6xl mx-auto">
          {marketTiles.map((tile, index) => (
            <div key={index} className="flex items-center">
              <div className="group relative w-44 h-52 xl:w-52 xl:h-60 rounded-xl overflow-hidden border-2 border-gold/40 hover:border-gold transition-all duration-500 hover:scale-105">
                <ClickableImage
                  src={tile.image}
                  alt={tile.label}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  showZoomIcon={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-1">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="font-serif font-bold text-sm text-white">{tile.label}</p>
                </div>
              </div>
              {index < marketTiles.length - 1 && (
                <div className="mx-2 w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse">
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
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-gold/40">
                <ClickableImage
                  src={tile.image}
                  alt={tile.label}
                  className="w-full h-full object-cover"
                  showZoomIcon={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-1">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="font-serif font-bold text-base text-white">{tile.label}</p>
                </div>
              </div>
              {index < marketTiles.length - 1 && (
                <div className="py-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse">
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
