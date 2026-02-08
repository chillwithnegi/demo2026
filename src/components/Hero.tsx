export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end justify-center overflow-hidden">
      {/* Full Background Image — Maximum Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-main.jpeg"
          alt="Wealth X Multiplier — Premium Luxury Estate"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Very subtle bottom gradient only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Minimal Text — Presentation Style */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16 lg:pb-20">
        <div className="animate-fade-up text-center">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-2 md:mb-3 drop-shadow-lg">
            From Land to Landmark
          </h1>
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gold leading-tight drop-shadow-lg">
            From Investment to Wealth
          </h2>
        </div>
      </div>
    </section>
  );
}
