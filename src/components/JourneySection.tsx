import luxuryConstruction1 from "@/assets/luxury-construction-1.jpg";
import luxuryVillaPool from "@/assets/luxury-villa-pool.png";
import futureCity from "@/assets/future-city.png";

const journeyItems = [
  {
    image: luxuryConstruction1,
    emotion: "🏗️ The Passion",
    title: "We Build With Our Heart",
    description: "Every structure we raise carries the fire of our passion — hands-on, relentless, uncompromising craftsmanship.",
  },
  {
    image: luxuryVillaPool,
    emotion: "✨ The Pride",
    title: "Creations That Make Us Proud",
    description: "When we see families live in the beauty we imagined — that feeling is our greatest reward.",
  },
  {
    image: futureCity,
    emotion: "🌆 The Dream",
    title: "We Dream In Skylines",
    description: "Every city we envision starts as a feeling — a burning desire to reshape what's possible.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            💫 Our Emotional Journey
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Built With Passion, Driven By Purpose
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            This isn't just construction — it's our life's work, our obsession, our way of leaving a mark on the world.
          </p>
        </div>

        {/* Top row: 2 cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-8">
          {journeyItems.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 bg-card border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={item.image}
                  alt={item.title}
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-6">
                <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1 md:mb-2">
                  {item.emotion}
                </p>
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 1 large card full width */}
        <div className="w-full">
          <div className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 bg-card border border-border">
            <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
              <img
                src={journeyItems[2].image}
                alt={journeyItems[2].title}
                width="1200"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1 md:mb-2">
                {journeyItems[2].emotion}
              </p>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
                {journeyItems[2].title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-2xl">
                {journeyItems[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
