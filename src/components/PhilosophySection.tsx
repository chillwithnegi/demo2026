import { ClickableImage } from "@/components/ui/image-lightbox";

const strategyImages = [
  { src: "/images/new-08.jpeg", title: "The Visionary's Eye" },
  { src: "/images/new-09.jpeg", title: "The Builder's Obsession" },
  { src: "/images/new-10.jpeg", title: "The Wealth Creator's Pride" },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-background">
      {/* Full-width Core Portfolio Image */}
      <div className="relative w-full">
        <img
          src="/images/new-07.jpeg"
          alt="The Investor Core Portfolio"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Minimal heading */}
      <div className="py-6 md:py-10 text-center px-4">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold text-foreground">
          <span className="text-gold">Land</span> + <span className="text-gold">Money</span> + <span className="text-gold">Strategy</span> = Wealth
        </h2>
      </div>

      {/* Strategy Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {strategyImages.map((item, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden group">
            <ClickableImage
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              showZoomIcon={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
              <h3 className="font-serif text-lg md:text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
