import { ClickableImage } from "@/components/ui/image-lightbox";
import landMoneyStrategy from "@/assets/land-money-strategy.png";

export default function ApproachSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 md:mb-4">
            🧬 The DNA of Our Success
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
            The Formula We Live By
          </h2>
          <div className="divider-gold mb-4 md:mb-6" />
        </div>

        {/* Land + Money + Strategy Infographic */}
        <div className="mb-0">
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-gold/20 bg-card">
            <ClickableImage 
              src={landMoneyStrategy} 
              alt="Land Money Strategy - The Success Triangle" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm md:text-base">
            This isn't just a formula — it's the heartbeat of everything we do: <span className="text-gold font-semibold">Land</span> + <span className="text-gold font-semibold">Money</span> + <span className="text-gold font-semibold">Strategy</span> = Wealth That Lasts Generations
          </p>
          <p className="text-center text-muted-foreground text-xs mt-2">Click image to enlarge</p>
        </div>
      </div>
    </section>
  );
}
