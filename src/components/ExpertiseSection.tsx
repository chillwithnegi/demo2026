import delhiNcr from "@/assets/delhi-ncr.jpg";
import { MapPin, Building, Award, TrendingUp } from "lucide-react";

const expertisePoints = [
  { icon: MapPin, text: "Strategic location intelligence" },
  { icon: Building, text: "Deep market understanding" },
  { icon: Award, text: "Established developer relationships" },
  { icon: TrendingUp, text: "Track record of successful investments" },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-muted">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-card">
              <img
                src={delhiNcr}
                alt="Delhi NCR Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-serif text-2xl font-bold">
                  Delhi NCR
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  India's Premier Real Estate Market
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Regional Focus
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Delhi NCR Expertise
            </h2>
            <div className="divider-gold !mx-0 mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Deep expertise in India's most dynamic real estate market. From Gurugram's 
              corporate corridors to Noida's emerging hotspots, we understand every 
              micro-market's potential.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertisePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Additional Expertise Areas
            </h3>
            <p className="text-muted-foreground">
              Expanding our reach across India's growth corridors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((num) => (
              <div
                key={num}
                className="aspect-video rounded-lg bg-gradient-to-br from-gold/10 to-charcoal/5 border border-border flex items-center justify-center"
              >
                <span className="text-muted-foreground/50 text-sm">
                  [Additional Expertise visual {num}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
