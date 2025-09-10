import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Play, Award, ExternalLink } from "lucide-react";

const educationPrograms = [
  {
    icon: BookOpen,
    title: "Psikodinamik Psikoterapi Eğitimi",
    description: "Derinlemesine psikoanalitik yaklaşımlar ve modern psikodinamik teknikleri",
    features: ["Teorik temeller", "Süpervizyon", "Klinik deneyim", "Sertifika programı"],
    duration: "12 ay",
    level: "İleri Seviye"
  },
  {
    icon: Users,
    title: "Grup Terapisi Uzmanlığı",
    description: "Grup dinamikleri ve terapötik süreçlerde uzmanlaşma",
    features: ["Grup liderliği", "Dinamik analiz", "Terapötik faktörler", "Pratik uygulamalar"],
    duration: "8 ay",
    level: "Orta Seviye"
  },
  {
    icon: Play,
    title: "Udemy Kanalı",
    description: "Online psikoloji eğitimleri ve kişisel gelişim kursları",
    features: ["Video dersler", "Pratik egzersizler", "Sertifika", "Yaşam boyu erişim"],
    duration: "Sürekli",
    level: "Tüm Seviyeler"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium animate-glow">
            📚 Eğitim & Gelişim
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            Profesyonel <span className="text-primary">Eğitim Programları</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Psikoloji alanında uzmanlaşmak isteyenler için kapsamlı eğitim ve sertifika programları.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {educationPrograms.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-border rounded-2xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4 pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float">
                  <program.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{program.level}</span>
                  <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">{program.duration}</span>
                </div>
                <CardTitle className="text-xl font-bold text-text-primary mb-3">{program.title}</CardTitle>
                <p className="text-sm text-text-secondary leading-relaxed">{program.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-text-secondary">
                      <Award className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all group-hover:scale-105"
                >
                  {program.title.includes('Udemy') ? 'Kurslara Git' : 'Başvur'}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Udemy Highlight Section */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-8 text-center animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4 animate-glow">
                <Play className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Udemy Kanalım</h3>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Binlerce öğrenciye ulaşan online kurslarımda psikoloji, kişisel gelişim ve mental sağlık konularında 
              kapsamlı eğitimler sunuyorum. Uzaktan öğrenme ile profesyonel gelişim fırsatları.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm">5000+ Öğrenci</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">20+ Kurs</span>
              <span className="bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm">4.8★ Puan</span>
            </div>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all animate-glow"
            >
              Udemy Kanalımı Ziyaret Et
              <ExternalLink className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;