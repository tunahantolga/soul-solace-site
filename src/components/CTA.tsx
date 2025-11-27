import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-accent-blue">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            İlk Adımı Atmaya Hazır Mısınız?
          </h2>
          
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed drop-shadow-md">
            Daha iyi bir yaşam için bugün başlayın. Size özel terapi planınızı birlikte oluşturalım.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg shadow-2xl scale-on-hover"
            >
              Hemen Randevu Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
            >
              İletişime Geç
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a 
              href="tel:+905555555555"
              className="flex items-center gap-2 text-white hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold drop-shadow-md">+90 555 555 55 55</span>
            </a>
            <div className="w-px h-8 bg-white/30"></div>
            <a 
              href="mailto:info@dribrahimsari.com"
              className="flex items-center gap-2 text-white hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold drop-shadow-md">info@dribrahimsari.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
