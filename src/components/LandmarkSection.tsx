import arrowDown from "@/assets/arrow-down.png";

const processSteps = [
  { 
    number: "1", 
    title: "Land Acquisition", 
    description: "Strategic identification and procurement of prime locations with development potential",
  },
  { 
    number: "2", 
    title: "Development Planning", 
    description: "Architectural design and regulatory approvals that maximize value",
  },
  { 
    number: "3", 
    title: "Construction", 
    description: "Quality execution with strict timelines and budget control",
  },
  { 
    number: "4", 
    title: "Completion", 
    description: "Transformation into iconic properties that define city skylines",
  },
];

export default function LandmarkSection() {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Land to Landmark
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        {/* Process Steps - Vertical with Arrows */}
        <div className="max-w-2xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Card */}
              <div className="w-full p-6 rounded-lg bg-background border border-border hover:border-gold/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              {index < processSteps.length - 1 && (
                <div className="my-4">
                  <img 
                    src={arrowDown} 
                    alt="Arrow" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
