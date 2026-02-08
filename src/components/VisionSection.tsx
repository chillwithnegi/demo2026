export default function VisionSection() {
  return (
    <section id="about" className="relative w-full min-h-[80vh] md:min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/slide-02.jpeg"
          alt="Wealth X Multiplier — Vision Meets Precision"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-16 lg:pb-20">
        <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          Where It All Began
        </p>
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
          Where Vision Meets Precision
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-xl">
          A Civil Engineer by passion, MBA (RICS) by conviction — turning raw land into living dreams.
        </p>
      </div>
    </section>
  );
}
