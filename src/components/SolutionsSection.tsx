import { Search, Calculator, FileText, HardHat, Users } from "lucide-react";
import globalStrategyIdea from "@/assets/global-strategy-idea.jpg";

const solutions = [
  { icon: Search, text: "Market research and site selection" },
  { icon: Calculator, text: "Financial structuring and capital sourcing" },
  { icon: FileText, text: "Development planning and approvals" },
  { icon: HardHat, text: "Construction management and quality control" },
  { icon: Users, text: "Marketing strategy and sales execution" },
];

export default function SolutionsSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-8 md:mb-12">
              <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
                Execution AND Planning
              </p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6">
                The Complete Solution
              </h2>
              <div className="divider-gold !mx-0 mb-6 md:mb-8" />
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                True wealth creation demands both visionary planning and meticulous execution. 
                We provide integrated services that span the entire investment lifecycle.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-300"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base lg:text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-elegant border border-border">
              <img
                src={globalStrategyIdea}
                alt="Global Strategic Vision"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}