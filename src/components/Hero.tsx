import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-therapy-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                ✨ Profesyonel Psikolojik Danışmanlık
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary leading-[1.1]">
                Zihinsel
                <span className="text-primary block">Sağlığınız</span>
                <span className="text-accent">Önceliğimiz</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-lg leading-relaxed">
                Modern terapi yöntemleriyle, kişisel gelişiminizi destekliyor ve yaşam kalitenizi artırmanıza yardımcı oluyorum.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button text-lg px-10 py-4 rounded-full">
                <Calendar className="mr-3 h-5 w-5" />
                Ücretsiz Konsültasyon
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Hizmetleri İncele
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-text-secondary">Yıl Deneyim</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-text-secondary">Mutlu Danışan</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-text-secondary">Destek</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern psikolojik danışmanlık ofisi - güvenli ve rahat ortam"
                className="w-full h-[600px] lg:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-text-primary">%100 Gizlilik</div>
                  <div className="text-sm text-text-secondary">Güvenli Ortam</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent/95 backdrop-blur-sm text-accent-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xl font-bold">Empatik</div>
                <div className="text-sm opacity-90">Yaklaşım</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;