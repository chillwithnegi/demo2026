import { ChevronDown, Sparkles } from "lucide-react";
import landAcquisition from "@/assets/land-acquisition.png";
import blueprintDesk from "@/assets/blueprint-desk.png";
import constructionSite from "@/assets/construction-site.png";
import smartCityVision from "@/assets/smart-city-vision.png";

const processSteps = [
  { 
    number: "01", 
    title: "Land Acquisition", 
    subtitle: "Strategic Selection",
    description: "Identifying and securing prime locations with exceptional development potential and growth trajectory",
    image: landAcquisition,
    highlight: "Premium Locations Only"
  },
  { 
    number: "02", 
    title: "Development Planning", 
    subtitle: "Vision to Blueprint",
    description: "Crafting architectural masterpieces with regulatory excellence and value maximization",
    image: blueprintDesk,
    highlight: "World-Class Design"
  },
  { 
    number: "03", 
    title: "Construction", 
    subtitle: "Precision Execution",
    description: "Quality-driven construction with strict timelines, budget control, and luxury finishes",
    image: constructionSite,
    highlight: "Uncompromising Quality"
  },
  { 
    number: "04", 
    title: "Completion", 
    subtitle: "Iconic Delivery",
    description: "Transforming vision into landmark properties that define city skylines and set new benchmarks",
    image: smartCityVision,
    highlight: "Landmark Creation"
  },
];

export default function LandmarkSection() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold">The Transformation Journey</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            From <span className="text-gradient-gold">Land</span> to <span className="text-gradient-gold">Landmark</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-gold rounded-full mb-6" />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Witness the extraordinary journey of transforming raw land into iconic properties
          </p>
        </div>

        {/* Process Steps - Vertical Timeline */}
        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Card */}
              <div className="w-full rounded-2xl bg-card/80 backdrop-blur-sm border border-gold/20 hover:border-gold/50 transition-all duration-500 overflow-hidden shadow-elegant hover:shadow-gold group">
                <div className="flex flex-col md:flex-row">
                  {/* Image Part */}
                  <div className="w-full md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:bg-gradient-to-l" />
                    
                    {/* Large Step Number */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <span className="font-serif text-5xl md:text-6xl font-bold text-gold/30 group-hover:text-gold/50 transition-colors">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Part */}
                  <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold mb-3 w-fit">
                      {step.highlight}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gold/80 text-sm font-medium mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Gold Arrow Down */}
              {index < processSteps.length - 1 && (
                <div className="py-4 md:py-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold animate-bounce">
                    <ChevronDown className="w-7 h-7 text-primary-foreground" />
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
