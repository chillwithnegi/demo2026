import { ClickableImage } from "@/components/ui/image-lightbox";

export default function ApproachSection() {
  return (
    <section className="bg-background">
      <div className="py-8 md:py-12 text-center px-4">
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
          The Formula We Live By
        </h2>
        <p className="text-gold text-sm md:text-base mt-2">
          Land + Money + Strategy = Wealth That Lasts Generations
        </p>
      </div>

      {/* Full-width clickable infographic */}
      <div className="w-full">
        <ClickableImage
          src="/images/new-17.jpeg"
          alt="Wealth X Multiplier — The Success Formula"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
