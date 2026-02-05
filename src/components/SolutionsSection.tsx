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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Execution AND Planning
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Complete Solution
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              True wealth creation demands both visionary planning and meticulous execution. 
              We provide integrated services that span the entire investment lifecycle, 
              from initial concept through final realization.
            </p>
          </div>

          <div className="space-y-4">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-foreground font-medium text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
