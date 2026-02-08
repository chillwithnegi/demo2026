const journeySlides = [
  { image: "/images/new-33.jpeg", label: "🏗️ The Passion", title: "We Build With Our Heart" },
  { image: "/images/new-40.jpeg", label: "✨ The Pride", title: "Creations That Make Us Proud" },
  { image: "/images/new-12.jpeg", label: "🌆 The Dream", title: "We Dream In Skylines" },
];

export default function JourneySection() {
  return (
    <section className="bg-background">
      {/* Section Header */}
      <div className="py-8 md:py-12 text-center px-4">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          Our Emotional Journey
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Built With Passion, Driven By Purpose
        </h2>
      </div>

      {/* Full-width image slides */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {journeySlides.map((slide, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="text-gold text-xs font-semibold tracking-wider mb-1">{slide.label}</p>
              <h3 className="font-serif text-lg md:text-xl font-bold text-white drop-shadow-lg">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
