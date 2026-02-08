import { ClickableImage } from "@/components/ui/image-lightbox";

const expertiseImages = [
  { src: "/images/new-24.jpeg", alt: "Delhi NCR Strategy" },
  { src: "/images/new-27.jpeg", alt: "Our Canvas" },
  { src: "/images/new-29.jpeg", alt: "Market Analysis" },
  { src: "/images/new-31.jpeg", alt: "Regional Strategy" },
  { src: "/images/new-34.jpeg", alt: "Investment Strategy" },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-muted">
      <div className="py-8 md:py-12 text-center px-4">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          Our Roots, Our Pride
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Delhi NCR — Where Our Heart Beats
        </h2>
      </div>

      {/* Full-width branded slides */}
      <div className="flex flex-col">
        {expertiseImages.map((img, i) => (
          <div key={i} className="w-full">
            <ClickableImage
              src={img.src}
              alt={`Wealth X Multiplier — ${img.alt}`}
              className="w-full h-auto object-contain"
              showZoomIcon={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
