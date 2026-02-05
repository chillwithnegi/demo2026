import { ChevronDown } from "lucide-react";
import landAcquisition from "@/assets/land-acquisition.png";
import blueprintDesk from "@/assets/blueprint-desk.png";
import constructionSite from "@/assets/construction-site.png";
import smartCityVision from "@/assets/smart-city-vision.png";

const processSteps = [
  { 
    number: "1", 
    title: "Land Acquisition", 
    description: "Strategic identification and procurement of prime locations with development potential",
    image: landAcquisition,
  },
  { 
    number: "2", 
    title: "Development Planning", 
    description: "Architectural design and regulatory approvals that maximize value",
    image: blueprintDesk,
  },
  { 
    number: "3", 
    title: "Construction", 
    description: "Quality execution with strict timelines and budget control",
    image: constructionSite,
  },
  { 
    number: "4", 
    title: "Completion", 
    description: "Transformation into iconic properties that define city skylines",
    image: smartCityVision,
  },
];

export default function LandmarkSection() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Land to Landmark
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        {/* Process Steps - Vertical with Arrows */}
        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Card */}
              <div className="w-full rounded-xl bg-background border border-border hover:border-gold/50 transition-all duration-300 overflow-hidden shadow-card hover:shadow-elegant">
                <div className="flex flex-col md:flex-row">
                  {/* Image Part */}
                  <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg">
                      <span className="font-serif text-xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Part */}
                  <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Gold Arrow Down */}
              {index < processSteps.length - 1 && (
                <div className="py-4 md:py-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}