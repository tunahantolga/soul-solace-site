import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Profesyonel Psikoterapi</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Zihinsel Sağlığınız İçin
            <span className="block gradient-text mt-2">Güvenilir Destek</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            İntegratif psikoterapi yaklaşımıyla kişiye özel, bilimsel temelli terapi hizmetleri. 
            Daha iyi bir yaşam için ilk adımı birlikte atalım.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-hover h-14 px-8 text-lg shadow-button hover:shadow-glow transition-all duration-300"
            >
              Randevu Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
            >
              Daha Fazla Bilgi
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Mutlu Danışan</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">%98</div>
              <div className="text-sm text-muted-foreground">Memnuniyet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
