import { ClickableImage } from "@/components/ui/image-lightbox";

const galleryItems = [
  { src: "/images/new-36.jpeg", title: "The Passion of Building Excellence" },
  { src: "/images/new-41.jpeg", title: "Craftsmanship That Comes From Love" },
  { src: "/images/new-31.jpeg", title: "Skylines We Dream About" },
  { src: "/images/new-34.jpeg", title: "Blueprints Born From Imagination" },
  { src: "/images/new-29.jpeg", title: "Interiors That Reflect Our Soul" },
  { src: "/images/new-27.jpeg", title: "Details That Take Our Breath Away" },
  { src: "/images/new-24.jpeg", title: "Communities We're Proud To Create" },
];

export default function PortfolioGallery() {
  return (
    <section className="bg-card">
      <div className="py-8 md:py-12 text-center px-4">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          A Visual Love Letter
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Every Image Tells Our Story
        </h2>
      </div>

      {/* Full-width presentation slides */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {galleryItems.map((item, i) => (
          <div key={i} className="relative aspect-video overflow-hidden group">
            <ClickableImage
              src={item.src}
              alt={`Wealth X Multiplier — ${item.title}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              showZoomIcon={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
              <p className="text-white text-sm font-medium drop-shadow-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
