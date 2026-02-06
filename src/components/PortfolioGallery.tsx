import { ClickableImage } from "@/components/ui/image-lightbox";
import luxuryConstruction from "@/assets/luxury-construction.png";
import luxuryConstruction2 from "@/assets/luxury-construction-2.jpg";
import commercial from "@/assets/commercial.jpg";
import primeLandVisual from "@/assets/prime-land-visual.png";
import exactProperty from "@/assets/exact-property.png";
import worldGlobeColorful from "@/assets/world-globe-colorful.png";
import worldMapColorful from "@/assets/world-map-colorful.png";
import cityWireframe from "@/assets/city-wireframe.png";
import heroSkyline from "@/assets/hero-skyline.png";
import waterfall from "@/assets/waterfall-bar.png";
import indiaMap from "@/assets/india-map.png";
import worldGlobe from "@/assets/world-globe.png";
import worldMap from "@/assets/world-map.png";
import residentialAerial from "@/assets/residential-aerial.png";
import luxuryInterior from "@/assets/luxury-interior.png";
import wealthJourney from "@/assets/wealth-journey.png";

const galleryItems = [
  { src: luxuryConstruction, alt: "Luxury Construction Excellence", category: "Construction" },
  { src: luxuryConstruction2, alt: "Premium Build Quality", category: "Construction" },
  { src: commercial, alt: "Commercial Development", category: "Commercial" },
  { src: primeLandVisual, alt: "Prime Land Opportunities", category: "Strategy" },
  { src: exactProperty, alt: "Exact Property Selection", category: "Strategy" },
  { src: worldGlobeColorful, alt: "Global Market Vision", category: "Global" },
  { src: worldMapColorful, alt: "Worldwide Investment Map", category: "Global" },
  { src: worldGlobe, alt: "Global Strategy", category: "Global" },
  { src: worldMap, alt: "World Markets", category: "Global" },
  { src: cityWireframe, alt: "City Development Blueprint", category: "Planning" },
  { src: heroSkyline, alt: "Premium Skyline Portfolio", category: "Portfolio" },
  { src: waterfall, alt: "Luxury Amenities - Waterfall Bar", category: "Luxury" },
  { src: indiaMap, alt: "India Market Analysis", category: "Strategy" },
  { src: residentialAerial, alt: "Residential Aerial View", category: "Residential" },
  { src: luxuryInterior, alt: "Luxury Interior Design", category: "Luxury" },
  { src: wealthJourney, alt: "Wealth Creation Journey", category: "Strategy" },
];

export default function PortfolioGallery() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Visual Portfolio
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Work & Vision Gallery
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            A curated collection showcasing our strategic vision, premium constructions, and global perspective.
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
                    {item.category}
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
