import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-therapy-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Psikolojik
                <span className="text-primary block">Danışmanlık</span>
                <span className="text-accent">Hizmeti</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-lg">
                Güvenli bir ortamda, profesyonel destek ile hayatınızdaki zorlukları aşmanıza yardımcı oluyorum.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Randevu Al
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary text-primary hover:bg-primary-soft">
                Daha Fazla Bilgi
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-text-secondary">Gizlilik Garantisi</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                <span className="text-text-secondary">Profesyonel Destek</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Psikolojik danışmanlık ofisi - rahat ve güvenli ortam"
                className="w-full h-[500px] object-cover"
              />
            </Card>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Yıl Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;