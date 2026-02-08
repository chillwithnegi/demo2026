export default function CTASection() {
  return (
    <section id="contact" className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/new-39.jpeg"
          alt="Wealth X Multiplier"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Let's Create Something That Outlasts Us
        </h2>
        <p className="text-gold text-base md:text-xl font-serif mb-8">
          Ready to feel the difference passion makes?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:contact@wealthxmultiplier.com"
            className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-md shadow-gold hover:opacity-90 transition-all duration-300"
          >
            Start Our Conversation
          </a>
          <a
            href="tel:+919999999999"
            className="px-8 py-4 border-2 border-gold/50 text-white font-semibold rounded-md hover:bg-gold/10 transition-all duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
