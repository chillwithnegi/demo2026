import { ClickableImage } from "@/components/ui/image-lightbox";

const galleryItems = [
  // THE PASSION — Our love for building
  { src: "/images/new-36.jpeg", alt: "Wealth X Multiplier — The Passion of Building Excellence", emotion: "🔥 The Passion" },
  { src: "/images/new-41.jpeg", alt: "Wealth X Multiplier — Craftsmanship That Comes From Love", emotion: "🔥 The Passion" },
  
  // THE DREAM — Our vision for the future
  { src: "/images/new-31.jpeg", alt: "Wealth X Multiplier — Skylines We Dream About", emotion: "🌆 The Dream" },
  { src: "/images/new-34.jpeg", alt: "Wealth X Multiplier — Blueprints Born From Imagination", emotion: "🌆 The Dream" },
  
  // THE PRIDE — What makes us proud
  { src: "/images/new-29.jpeg", alt: "Wealth X Multiplier — Interiors That Reflect Our Soul", emotion: "✨ The Pride" },
  { src: "/images/new-27.jpeg", alt: "Wealth X Multiplier — Details That Take Our Breath Away", emotion: "✨ The Pride" },
  { src: "/images/new-24.jpeg", alt: "Wealth X Multiplier — Communities We're Proud To Create", emotion: "✨ The Pride" },
];

export default function PortfolioGallery() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            📸 A Visual Love Letter
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Every Image Tells Our Story
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            These aren't just photographs — they're windows into our emotions, our dreams, and the journey that defines us.
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {galleryItems.map((item, index) => {
            // Vary heights for visual interest
            const heightClass = index % 5 === 0 || index % 7 === 0 
              ? "row-span-2 aspect-[3/4]" 
              : "aspect-square";
            
            return (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 shadow-card hover:shadow-elegant ${heightClass}`}
              >
                <ClickableImage
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  showZoomIcon={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                  <span className="inline-block px-2 py-1 rounded-full bg-gold/20 text-gold text-[10px] md:text-xs font-semibold mb-1">
                    {item.emotion}
                  </span>
                  <p className="text-primary-foreground text-xs md:text-sm font-medium">
                    {item.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
