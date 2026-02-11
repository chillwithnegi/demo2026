import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const completeSolution = [
  "Market research and site selection",
  "Financial structuring and capital sourcing",
  "Development planning and approvals",
  "Construction management and quality control",
  "Marketing strategy and sales execution",
];

export default function ApproachSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Right - Text */}
          <div className={`lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Execution & Planning
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Complete{" "}
              <span className="text-gradient-gold">Solution</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              True wealth creation demands both visionary planning and meticulous execution. We provide integrated services that span the entire investment lifecycle.
            </p>
            <ul className="space-y-4">
              {completeSolution.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <p className="text-foreground text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Left - Image */}
          <div className={`lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold/15 to-transparent rounded-2xl blur-xl" />
              <img
                src="/images/new-17.jpeg"
                alt="The Complete Solution"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
