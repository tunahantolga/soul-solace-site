import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-4">
            Profesyonel
            <br />
            Psikoterapi
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
            İntegratif yaklaşımla kişiye özel terapi. Yaşam kalitenizi artırmak için buradayım.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="default" 
            className="bg-primary text-primary-foreground hover:bg-primary-hover h-11 px-6"
          >
            Randevu Al
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;