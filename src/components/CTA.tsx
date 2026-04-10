import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  const whatsappUrl =
    "https://wa.me/905326098044?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-hero-gradient">
      {/* Background decorations like Hero section */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            İlk Adımı Atmaya Hazır Mısınız?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Daha iyi bir yaşam için bugün başlayın. Size özel terapi planınızı birlikte oluşturalım.
          </p>
          
          {/* CTA Button */}
          <div className="flex items-center justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary-hover h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-button hover:shadow-glow transition-all duration-300"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Hemen Randevu Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <a 
              href="tel:+905326098044"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold">0532 609 80 44</span>
            </a>
            <div className="hidden sm:block w-px h-8 bg-border"></div>
            <a 
              href="mailto:dribrahimsari@gmail.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold break-all">dribrahimsari@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
