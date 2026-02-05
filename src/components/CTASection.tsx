import { MapPin, Globe, Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Start Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Let's Build Something Iconic
          </h2>
          <div className="divider-gold mb-8" />
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
            Ready to transform your real estate vision into wealth? Let's discuss how 
            we can create exceptional value together.
          </p>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">Based in Delhi NCR</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
              <Globe className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">Global Perspective</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
              <Rocket className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">Ready to Transform</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@wealthxmultiplier.com"
              className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-md shadow-gold hover:opacity-90 transition-all duration-300 text-center"
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:+919999999999"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
