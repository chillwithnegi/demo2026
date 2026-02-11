import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ClickableImage } from "@/components/ui/image-lightbox";

const galleryItems = [
  { src: "/images/new-36.jpeg", title: "Premium Construction" },
  { src: "/images/new-41.jpeg", title: "Luxury Craftsmanship" },
  { src: "/images/new-31.jpeg", title: "Skyline Visions" },
  { src: "/images/new-34.jpeg", title: "Strategic Blueprints" },
  { src: "/images/new-35.jpeg", title: "Iconic Structures" },
  { src: "/images/new-39.jpeg", title: "Modern Architecture" },
];

export default function PortfolioGallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Every Image Tells a <span className="text-gold">Story</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <ClickableImage
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                showZoomIcon={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                <p className="text-white text-sm font-medium drop-shadow-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
