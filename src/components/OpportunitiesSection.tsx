import { Building2, TrendingUp, Handshake } from "lucide-react";
import wealthMultiplierBuilding from "@/assets/wealth-multiplier-building.png";
import constructionSite from "@/assets/construction-site.png";
import businessMeeting from "@/assets/business-meeting.jpg";

const opportunities = [
  {
    icon: Building2,
    title: "Development Projects",
    description: "Ground-up development in prime locations with strong potential.",
    image: wealthMultiplierBuilding,
  },
  {
    icon: TrendingUp,
    title: "Value Add Assets",
    description: "Repositioning opportunities to unlock hidden value.",
    image: constructionSite,
  },
  {
    icon: Handshake,
    title: "Joint Ventures",
    description: "Strategic partnerships with shared risk and rewards.",
    image: businessMeeting,
  },
];

export default function OpportunitiesSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Opportunities
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Investment Opportunities
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="card-luxury group text-center overflow-hidden p-0"
            >
              {/* Image Header */}
              <div className="relative h-40 md:h-48 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gold/90 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm lg:text-base leading-relaxed">
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