import delhiNcrMap from "@/assets/delhi-ncr-map.png";
import businessMeeting from "@/assets/business-meeting.jpg";
import investingLand from "@/assets/investing-land.png";
import { MapPin, Building, Award, TrendingUp } from "lucide-react";

const expertisePoints = [
  { icon: MapPin, text: "Golf Course Road, Golf Course Extension Road" },
  { icon: Building, text: "New Gurugram, Manesar, Dwarka Expressway" },
  { icon: Award, text: "UER-II and emerging corridors" },
  { icon: TrendingUp, text: "Gurugram vs Noida vs Faridabad analysis" },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-muted">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Regional Focus
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Delhi NCR Expertise
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        {/* Main Image - Delhi NCR Map */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-card">
            <img
              src={delhiNcrMap}
              alt="Delhi NCR Infrastructure Map - UER-II, Dwarka Expressway"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Delhi NCR?
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Infrastructure-driven appreciation logic across micro-markets: Golf Course Road, 
              Golf Course Extension Road, New Gurugram, Manesar, Dwarka Expressway, and UER-II.
            </p>
            
            <h4 className="font-serif text-xl font-bold text-gold mb-4">
              Market Intelligence
            </h4>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Gurugram vs Noida vs Faridabad vs Ghaziabad analysis. Government spending patterns 
              and development corridors identification for maximum returns.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertisePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border"
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

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-card">
              <img
                src={businessMeeting}
                alt="Strategic Business Planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Additional Expertise Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-luxury">
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                Business Development & Franchise Consulting
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Franchise expansion planning, location strategy for national and international brands, 
                outlet count optimisation, footfall and revenue modelling
              </p>
            </div>
            <div className="card-luxury">
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                Digital Marketing for Real Estate
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real estate-focused digital marketing strategy, lead generation systems, 
                premium brand positioning, integrated online-offline marketing approach
              </p>
            </div>
          </div>

          {/* Investing in Land Infographic */}
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-card">
              <img
                src={investingLand}
                alt="Investing in Land - Virtual and Physical"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
