import { MapPin, Search, HardHat, CheckCircle } from "lucide-react";
import sixStepProcess from "@/assets/six-step-process.png";

const approachSteps = [
  {
    icon: MapPin,
    title: "Site Selection",
    description: "Strategic identification of locations with maximum appreciation potential",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description: "Comprehensive analysis of legal, environmental, and financial aspects",
  },
  {
    icon: HardHat,
    title: "Development",
    description: "Managed execution with quality control and cost optimization",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description: "Timely completion and strategic marketing for premium positioning",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Approach
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
          <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-semibold text-gold mb-3 md:mb-4">
            Strategic Process
          </h3>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Our systematic methodology transforms land into landmark properties.
          </p>
        </div>

        {/* Six Step Process Infographic */}
        <div className="mb-12 md:mb-20">
          <div className="rounded-lg overflow-hidden shadow-card border border-border">
            <img 
              src={sixStepProcess} 
              alt="The Six-Step Process for Strategic Market Development" 
              className="w-full h-auto object-contain bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card p-4 md:p-5 lg:p-6 rounded-lg border border-border hover:border-gold/50 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gold/10 flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gold" />
              </div>
              <h4 className="font-serif text-sm md:text-base lg:text-lg font-bold text-foreground mb-2 md:mb-3">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}