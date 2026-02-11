import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reasons = [
  {
    title: "Rare Combination",
    description: "Civil Engineering + MBA from RICS with hands-on luxury construction experience",
  },
  {
    title: "Global Mindset",
    description: "Infrastructure-driven decision-making with world-class standards perspective",
  },
  {
    title: "Wealth Creation Focus",
    description: "Not just property transactions, but strategic investments for maximum returns",
  },
  {
    title: "Premium Developer Experience",
    description: "Worked with DLF on golf courses, water bodies, and premium structures",
  },
];

export default function FounderSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src="/images/new-26.jpeg"
                alt="Why Work With Me"
                className="relative w-full aspect-[3/4] object-cover rounded-2xl border border-gold/20 shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              The Person Behind The Vision
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Why Work <span className="text-gradient-gold">With Me?</span>
            </h2>

            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-background/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Six-Step Process Image */}
        <div className={`mt-16 md:mt-24 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              My Six-Step <span className="text-gold">Process</span>
            </h3>
          </div>
          <img
            src="/images/new-38.jpeg"
            alt="Six-Step Process"
            className="w-full h-auto object-contain rounded-2xl border border-gold/20"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
