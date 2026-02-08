import { ClickableImage } from "@/components/ui/image-lightbox";

export default function FounderSection() {
  return (
    <section className="bg-primary">
      {/* Founder Portrait - Full width presentation */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/new-26.jpeg"
            alt="The Person Behind The Vision"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-16">
          <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            The Heart Behind It All
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            This Is Personal
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg">
            Civil Engineering · MBA (RICS) · Hands-on Construction · Global Vision
          </p>
        </div>
      </div>

      {/* Execution Strategy - Full width */}
      <div className="w-full">
        <ClickableImage
          src="/images/new-38.jpeg"
          alt="Wealth X Multiplier — Execution With Passion"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
