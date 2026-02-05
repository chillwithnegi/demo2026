import founderVisionSilhouette from "@/assets/founder-vision-silhouette.jpg";
import { Award, GraduationCap, Briefcase, Globe } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "Civil Engineering Background" },
  { icon: Award, text: "MBA - Real Estate & Urban Infrastructure (RICS)" },
  { icon: Briefcase, text: "Hands-on Luxury Construction Experience" },
  { icon: Globe, text: "Global Investment & Development Strategy" },
];

export default function FounderSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Work With Me
          </h2>
          <div className="h-px w-24 mx-auto bg-gold mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Founder Expertise
            </h3>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8">
              A unique combination of technical construction knowledge and strategic 
              investment acumen. I bridge the gap between on-ground execution and 
              high-level strategy to deliver exceptional results.
            </p>

            <div className="space-y-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold-light" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-gold/20 shadow-elegant">
              <img
                src={founderVisionSilhouette}
                alt="Founder Vision & Expertise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
