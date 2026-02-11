import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const processSteps = [
  { title: "Site Selection", description: "Strategic identification of locations with maximum appreciation potential based on infrastructure, demographics, and market trends" },
  { title: "Due Diligence", description: "Comprehensive analysis of legal, environmental, and financial aspects to ensure risk mitigation and compliance" },
  { title: "Development", description: "Managed execution with quality control, timeline adherence, and cost optimization throughout construction" },
  { title: "Delivery", description: "Timely completion and strategic marketing that positions properties for premium pricing and rapid absorption" },
];

export default function StrategicApproach() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src="/images/new-19.jpeg"
              alt="Strategic Process"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-gold/20 shadow-elegant"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic <span className="text-gradient-gold">Process</span>
            </h2>
            <p className="text-muted-foreground text-base mb-8">
              Our systematic methodology transforms land into landmark properties through carefully orchestrated steps.
            </p>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{i + 1}</span>
                    </div>
                    {i < processSteps.length - 1 && <div className="w-[2px] h-full bg-gold/20 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-serif text-lg font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
