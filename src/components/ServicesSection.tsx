const services = [
  { image: "/images/new-18.jpeg", label: "🏛️ Craftsmanship", title: "Luxury Construction & Design" },
  { image: "/images/new-21.jpeg", label: "🧠 Strategy", title: "Development Strategy" },
  { image: "/images/new-22.jpeg", label: "🔬 Research", title: "Market Research & Valuation" },
  { image: "/images/new-23.jpeg", label: "🌍 Advisory", title: "Investment Advisory" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-card">
      <div className="py-8 md:py-12 text-center px-4">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          What We Pour Our Hearts Into
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Services Born From Passion
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {services.map((s, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden group">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="text-gold text-xs font-semibold tracking-wider mb-1">{s.label}</p>
              <h3 className="font-serif text-lg md:text-2xl font-bold text-white drop-shadow-lg">{s.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
