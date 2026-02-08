import { ChevronDown } from "lucide-react";
import { ClickableImage } from "@/components/ui/image-lightbox";

const steps = [
  { number: "01", title: "The Spark", image: "/images/new-37.jpeg" },
  { number: "02", title: "The Vision Takes Shape", image: "/images/new-28.jpeg" },
  { number: "03", title: "The Relentless Grind", image: "/images/new-15.jpeg" },
  { number: "04", title: "The Triumph", image: "/images/new-30.jpeg" },
];

export default function LandmarkSection() {
  return (
    <section id="process" className="bg-background">
      <div className="py-8 md:py-12 text-center px-4">
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          From <span className="text-gold">Raw Earth</span> to <span className="text-gold">Pure Emotion</span>
        </h2>
      </div>

      {/* Vertical Timeline of Full-width Images */}
      <div className="flex flex-col items-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <div className="relative w-full aspect-video overflow-hidden group">
              <ClickableImage
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                showZoomIcon={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 pointer-events-none">
                <span className="font-serif text-4xl md:text-6xl font-bold text-gold/40">{step.number}</span>
                <h3 className="font-serif text-xl md:text-3xl font-bold text-white drop-shadow-lg">{step.title}</h3>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="py-3 md:py-4">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center animate-bounce">
                  <ChevronDown className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
