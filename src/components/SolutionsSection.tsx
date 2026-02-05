import { Search, Calculator, FileText, HardHat, Users } from "lucide-react";

const solutions = [
  { icon: Search, text: "Market research and site selection" },
  { icon: Calculator, text: "Financial structuring and capital sourcing" },
  { icon: FileText, text: "Development planning and approvals" },
  { icon: HardHat, text: "Construction management and quality control" },
  { icon: Users, text: "Marketing strategy and sales execution" },
];

export default function SolutionsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Execution AND Planning
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Complete Solution
            </h2>
            <div className="divider-gold !mx-0 mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              True wealth creation demands both visionary planning and meticulous execution. 
              We provide integrated services that span the entire investment lifecycle, 
              from initial concept through final realization.
            </p>

            <div className="space-y-4">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="aspect-square rounded-lg bg-card border border-border flex items-center justify-center hover:border-gold/50 transition-colors"
                >
                  <span className="text-muted-foreground/50 text-xs text-center px-4">
                    Philosophy Icon {num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
