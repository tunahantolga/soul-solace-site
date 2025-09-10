import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart } from "lucide-react";
import psychologistPortrait from "@/assets/psychologist-portrait.jpg";

const About = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-warm-bg to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                👨‍⚕️ Merhaba, Ben Dr. İbrahim
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                Psikanaliz ve Nörobilim
                <span className="text-primary block">alanında uzman</span>
                <span className="text-accent">doktor</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                İstanbul Üniversitesi Tıp Fakültesi mezunu, Lyon'da psikanaliz eğitimi almış, 
                Klinik Psikoloji Yüksek Lisansı sahibi hekim olarak modern psikoanalitik yaklaşımlarla 
                her danışanıma özel terapi süreçleri sunuyorum.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Tıbbi Eğitim</h3>
                  <p className="text-text-secondary">İstanbul Üniversitesi Tıp Fakültesi mezunu. Lyon, Fransa'da psikanaliz eğitimi. Klinik Psikoloji Yüksek Lisansı.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Uzmanlık Alanları</h3>
                  <p className="text-text-secondary">TLDP (Zaman Sınırlı Dinamik Psikoterapi), Aktarım Odaklı Psikoterapi, Duygu Odaklı Psikoterapi uzmanı.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Araştırma</h3>
                  <p className="text-text-secondary">Nörobilim doktora tezi: "Kısa Süreli Dinamik Psikoterapinin beyin serotonin reseptörlerine etkisi"</p>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button">
              Daha Fazla Bilgi Al
            </Button>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-card">
              <img 
                src={psychologistPortrait} 
                alt="Dr. İbrahim Sarı MD., MSc. - Psikanaliz ve Nörobilim Uzmanı"
                className="w-full h-[600px] object-cover"
              />
            </Card>
            <div className="absolute -top-4 -left-4 bg-card p-6 rounded-lg shadow-lg border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-text-secondary">Mutlu Danışan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;