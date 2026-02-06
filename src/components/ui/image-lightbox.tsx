import { useState, createContext, useContext, ReactNode } from "react";
import { X, ZoomIn } from "lucide-react";

interface LightboxContextType {
  openImage: (src: string, alt: string) => void;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const openImage = (src: string, alt: string) => {
    setImageSrc(src);
    setImageAlt(alt);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <LightboxContext.Provider value={{ openImage }}>
      {children}
      
      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Image Container */}
          <div 
            className="relative max-w-[95vw] max-h-[90vh] rounded-lg overflow-hidden shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[85vh] object-contain"
            />
            {imageAlt && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <p className="text-foreground text-center font-medium">{imageAlt}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
  showZoomIcon?: boolean;
}

export function ClickableImage({ 
  src, 
  alt, 
  className = "", 
  width,
  height,
  loading = "lazy",
  showZoomIcon = true 
}: ClickableImageProps) {
  const { openImage } = useLightbox();

  return (
    <div 
      className="relative cursor-pointer group"
      onClick={() => openImage(src, alt)}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
      />
      {showZoomIcon && (
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center shadow-gold">
            <ZoomIn className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      )}
    </div>
  );
}
