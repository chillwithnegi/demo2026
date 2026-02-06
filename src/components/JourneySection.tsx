import { ClickableImage } from "@/components/ui/image-lightbox";

const journeyItems = [
  {
    image: "/images/luxury-villa-pool.webp",
    title: "Premium Structures",
    description: "High-end residential and commercial construction with uncompromising quality.",
  },
  {
    image: "/images/waterfall-bar.webp",
    title: "Signature Landscapes",
    description: "Golf courses, landscaped communities, and world-class amenities.",
  },
  {
    image: "/images/future-city.webp",
    title: "Iconic Towers",
    description: "Landmark high-rise developments that reshape skylines.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Our Portfolio
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            A Journey Through Luxury Construction
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Experience our legacy of crafting exceptional spaces that transcend expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <ClickableImage
                src={item.image}
                alt={item.title}
                width="380"
                height="475"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                showZoomIcon={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-primary-foreground pointer-events-none">
                <p className="text-gold-light text-xs font-semibold tracking-wider uppercase mb-1 md:mb-2">
                  0{index + 1}
                </p>
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
