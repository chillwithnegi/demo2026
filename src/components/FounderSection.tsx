import visionPortrait from "@/assets/vision-portrait.png";
import executionStrategyVisual from "@/assets/execution-strategy-visual.png";
import { Award, GraduationCap, Briefcase, Globe } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "Civil Engineering Background" },
  { icon: Award, text: "MBA - Real Estate & Urban Infrastructure (RICS)" },
  { icon: Briefcase, text: "Hands-on Luxury Construction Experience" },
  { icon: Globe, text: "Global Investment & Development Strategy" },
];

export default function FounderSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold-light text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
            Why Work With Me
          </h2>
          <div className="h-px w-24 mx-auto bg-gold mb-4 md:mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-10 md:mb-16">
          {/* Content */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
              Founder Expertise
            </h3>
            <p className="text-primary-foreground/80 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              A unique combination of technical construction knowledge and strategic 
              investment acumen. I bridge the gap between on-ground execution and 
              high-level strategy to deliver exceptional results.
            </p>

            <div className="space-y-3 md:space-y-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-light" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-gold/20 shadow-elegant">
              <img
                src={visionPortrait}
                alt="Founder Vision & Expertise"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Decorative */}
            <div className="hidden md:block absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
          </div>
        </div>

        {/* Execution Strategy Visual */}
        <div className="rounded-lg overflow-hidden shadow-elegant border border-gold/20">
          <img
            src={executionStrategyVisual}
            alt="Execution Strategy Framework"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
