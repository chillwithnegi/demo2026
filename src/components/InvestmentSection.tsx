const investments = [
  { image: "/images/new-32.jpeg", label: "🏡 Residential", title: "Where Families Find Happiness" },
  { image: "/images/new-25.jpeg", label: "📈 Commercial", title: "Spaces That Empower Ambition" },
  { image: "/images/new-20.jpeg", label: "🌟 Hospitality", title: "Experiences That Touch Hearts" },
];

export default function InvestmentSection() {
  return (
    <section className="bg-background">
      <div className="py-8 md:py-12 text-center px-4">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          What Drives Us
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Every Investment Carries Emotion
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {investments.map((item, i) => (
          <div key={i} className="relative aspect-[3/4] overflow-hidden group">
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
