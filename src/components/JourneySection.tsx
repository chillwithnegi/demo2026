import luxuryConstruction1 from "@/assets/luxury-construction-1.jpg";
import luxuryConstruction2 from "@/assets/luxury-construction-2.jpg";
import luxuryConstruction3 from "@/assets/luxury-construction-3.jpg";

const journeyItems = [
  {
    image: luxuryConstruction1,
    title: "Premium Structures",
    description: "High-end residential and commercial construction with uncompromising quality and attention to detail.",
    placeholder: "Journey Luxury Construction Image 1",
  },
  {
    image: luxuryConstruction2,
    title: "Signature Landscapes",
    description: "Golf courses, landscaped communities, and world-class amenities that define luxury living.",
    placeholder: "Journey Luxury Construction Image 2",
  },
  {
    image: luxuryConstruction3,
    title: "Iconic Towers",
    description: "Landmark high-rise developments that reshape skylines and set new benchmarks in luxury.",
    placeholder: "Journey Luxury Construction Image 3",
  },
];

export default function JourneySection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Journey Through Luxury Construction
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Experience our legacy of crafting exceptional spaces that transcend expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.placeholder}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <p className="text-gold-light text-xs font-semibold tracking-wider uppercase mb-2">
                  0{index + 1}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
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
