import { Building2, TrendingUp, Handshake } from "lucide-react";
import wealthMultiplierBuilding from "@/assets/wealth-multiplier-building.png";
import constructionSite from "@/assets/construction-site.png";
import businessMeeting from "@/assets/business-meeting.jpg";

const opportunities = [
  {
    icon: Building2,
    title: "Development Projects",
    description: "Ground-up development opportunities in prime locations with strong appreciation potential.",
    image: wealthMultiplierBuilding,
  },
  {
    icon: TrendingUp,
    title: "Value Add Assets",
    description: "Repositioning and renovation opportunities to unlock hidden value in existing properties.",
    image: constructionSite,
  },
  {
    icon: Handshake,
    title: "Joint Ventures",
    description: "Strategic partnerships for large-scale developments with shared risk and rewards.",
    image: businessMeeting,
  },
];

export default function OpportunitiesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Opportunities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Investment Opportunities
          </h2>
          <div className="divider-gold mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="card-luxury group text-center overflow-hidden p-0"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
