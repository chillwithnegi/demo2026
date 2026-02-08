const opportunities = [
  { image: "/images/new-13.jpeg", label: "🌱 Creation", title: "Building From Ground Up" },
  { image: "/images/new-14.jpeg", label: "🔍 Discovery", title: "Unlocking Hidden Potential" },
  { image: "/images/new-16.jpeg", label: "🤝 Trust", title: "Partnerships Built On Faith" },
];

export default function OpportunitiesSection() {
  return (
    <section className="bg-muted">
      <div className="py-8 md:py-12 text-center px-4">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          What Excites Us
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          The Emotions Behind Every Opportunity
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {opportunities.map((item, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="text-gold text-xs font-semibold tracking-wider mb-1">{item.label}</p>
              <h3 className="font-serif text-lg md:text-2xl font-bold text-white drop-shadow-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
