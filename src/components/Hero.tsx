import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-therapy-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-primary/[0.02] bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-8">
              <div className="inline-flex items-center px-5 py-2.5 bg-primary-light/50 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full mr-2.5"></span>
                Profesyonel Psikolojik Danışmanlık
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[0.95] tracking-tight">
                Zihinsel
                <span className="gradient-text block mt-1">Sağlığınız</span>
                <span className="text-accent block mt-1">Önceliğimiz</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary max-w-xl leading-relaxed font-light">
                Modern terapi yöntemleriyle, kişisel gelişiminizi destekliyor ve yaşam kalitenizi artırmanıza yardımcı oluyorum.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button text-lg px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Ücretsiz Konsültasyon
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 rounded-2xl border-2 border-primary/20 text-primary hover:bg-primary-light/30 font-medium transition-all duration-300"
              >
                Hizmetleri İncele
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
              {[
                { number: "5+", label: "Yıl Deneyim", desc: "Psikoloji alanında" },
                { number: "200+", label: "Mutlu Danışan", desc: "Başarılı terapi süreçleri" },
                { number: "24/7", label: "Destek", desc: "Güvenilir hizmet" }
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left group">
                  <div className="text-4xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-text-primary mb-1">{stat.label}</div>
                  <div className="text-sm text-text-muted">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img 
                src={heroImage} 
                alt="Modern psikolojik danışmanlık ofisi - güvenli ve rahat ortam"
                className="w-full h-[550px] lg:h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-effect p-6 rounded-2xl shadow-premium">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-2xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-text-primary mb-1">%100 Gizlilik</div>
                  <div className="text-sm text-text-muted">Güvenli Ortam</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-accent-light/90 backdrop-blur-sm text-accent-foreground p-6 rounded-2xl shadow-premium">
              <div className="text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="font-bold text-lg mb-1">Empatik</div>
                <div className="text-sm text-text-muted">Yaklaşım</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;