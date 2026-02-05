import { ArrowRight } from "lucide-react";

const processSteps = [
  { number: "01", title: "Land Acquisition", placeholder: "Land to Landmark process image 1" },
  { number: "02", title: "Development Planning", placeholder: "Land to Landmark process image 2" },
  { number: "03", title: "Construction", placeholder: "Land to Landmark process image 3" },
  { number: "04", title: "Completion", placeholder: "Land to Landmark process image 4" },
];

export default function LandmarkSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Development Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Land to Landmark
          </h2>
          <div className="h-px w-24 mx-auto bg-gold mb-6" />
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our systematic approach transforms raw land into iconic developments
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="font-serif text-xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/50 text-center">
                    [{step.placeholder}]
                  </p>
                </div>
                
                {/* Arrow - Mobile/Tablet */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-gold rotate-90 sm:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
