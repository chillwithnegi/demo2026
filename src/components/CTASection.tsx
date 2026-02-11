import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src="/images/new-39.jpeg"
              alt="Let's Build Something Iconic"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Start Today
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="text-gradient-gold">Iconic</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Partner with Wealth XMultiplier to transform your real estate investments into enduring wealth. Our proven approach combines strategic vision with flawless execution, delivering exceptional returns on every project.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Whether you are a landowner, investor, developer, business owner, or brand planning expansion, I help identify the highest and best use of your land, capital, or business idea.
            </p>

            <div className="flex items-center gap-3 text-muted-foreground text-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <p className="font-serif italic">Based in Delhi NCR | Global Perspective</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@wealthxmultiplier.com"
                className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-full shadow-gold hover:scale-105 transition-all duration-300 text-center"
              >
                Start Our Conversation
              </a>
              <a
                href="tel:+919999999999"
                className="px-8 py-4 border-2 border-gold/40 text-foreground font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
