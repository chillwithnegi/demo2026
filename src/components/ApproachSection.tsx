import { MapPin, Search, HardHat, CheckCircle } from "lucide-react";
import sixStepProcess from "@/assets/six-step-process.png";

const approachSteps = [
  {
    icon: MapPin,
    title: "Site Selection",
    description: "Strategic identification of locations with maximum appreciation potential based on infrastructure, demographics, and market trends",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description: "Comprehensive analysis of legal, environmental, and financial aspects to ensure risk mitigation and compliance",
  },
  {
    icon: HardHat,
    title: "Development",
    description: "Managed execution with quality control, timeline adherence, and cost optimization throughout construction",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description: "Timely completion and strategic marketing that positions properties for premium pricing and rapid absorption",
  },
];

export default function ApproachSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Approach
          </h2>
          <div className="divider-gold mb-6" />
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold mb-4">
            Strategic Process
          </h3>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Our systematic methodology transforms land into landmark properties through carefully 
            orchestrated steps that maximize returns at every stage.
          </p>
        </div>

        {/* Six Step Process Infographic - Prominently Displayed */}
        <div className="mb-20">
          <div className="rounded-lg overflow-hidden shadow-card border border-border">
            <img 
              src={sixStepProcess} 
              alt="The Six-Step Process for Strategic Market Development" 
              className="w-full h-auto object-contain bg-white"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-serif text-lg font-bold text-foreground mb-3">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
