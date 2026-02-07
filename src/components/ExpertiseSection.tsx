import { MapPin, Building, Award, TrendingUp } from "lucide-react";

const expertisePoints = [
  { icon: MapPin, text: "Golf Course Road, Extension Road" },
  { icon: Building, text: "New Gurugram, Manesar, Dwarka Exp." },
  { icon: Award, text: "UER-II and emerging corridors" },
  { icon: TrendingUp, text: "Gurugram vs Noida vs Faridabad" },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            🏠 Our Roots, Our Pride
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Delhi NCR — Where Our Heart Beats
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
        </div>

        {/* Main Image - WXM Branded */}
        <div className="mb-10 md:mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-card">
            <img
              src="/images/new-24.jpeg"
              alt="Wealth X Multiplier — Delhi NCR Strategy"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-10 md:mb-16">
          {/* Content */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Why Delhi NCR Moves Us
            </h3>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              This is more than a market — it's our hometown, the place where our journey began. 
              We know every corridor, every micro-market, every heartbeat of this city.
            </p>
            
            <h4 className="font-serif text-lg md:text-xl font-bold text-gold mb-3 md:mb-4">
              Local Knowledge, Deep Emotion
            </h4>
            <p className="text-muted-foreground text-xs md:text-sm lg:text-base leading-relaxed mb-6 md:mb-8">
              Our regional expertise isn't just data — it's decades of walking these streets, feeling the pulse of development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {expertisePoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-background border border-border"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  </div>
                  <span className="text-foreground text-xs md:text-sm font-medium">
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
                src="/images/new-27.jpeg"
                alt="Wealth X Multiplier — Our Canvas"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Additional WXM Branded Images */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
          <div className="rounded-lg overflow-hidden shadow-card border border-border">
            <img
              src="/images/new-29.jpeg"
              alt="Wealth X Multiplier — Market Analysis"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-card border border-border">
            <img
              src="/images/new-31.jpeg"
              alt="Wealth X Multiplier — Regional Strategy"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="pt-10 md:pt-16 border-t border-border">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              More Ways We Express Our Passion
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="card-luxury">
              <h4 className="font-serif text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">
                Business Development & Franchise
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Helping brands find their perfect home — because we believe every great business 
                deserves a space that matches its ambition.
              </p>
            </div>
            <div className="card-luxury">
              <h4 className="font-serif text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">
                Digital Marketing for Real Estate
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Telling our story and our partners' stories through powerful digital presence — 
                because great work deserves to be seen.
              </p>
            </div>
          </div>

          {/* Investing Strategy Image */}
          <div className="mt-8 md:mt-12">
            <div className="rounded-lg overflow-hidden shadow-card">
              <img
                src="/images/new-34.jpeg"
                alt="Wealth X Multiplier — Investment Strategy"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
