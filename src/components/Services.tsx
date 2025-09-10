import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Baby, Video, ArrowRight } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Bireysel Terapi",
    description: "Kişisel gelişim, depresyon, anksiyete, travma ve diğer psikolojik sorunlarla başa çıkma konularında profesyonel destek.",
    features: ["Bireysel seanslar", "Kişiye özel yaklaşım", "Güvenli ortam"],
  },
  {
    icon: Users,
    title: "Çift & Aile Terapisi", 
    description: "İlişki sorunları, iletişim problemleri ve aile dinamikleri konularında çiftlere ve ailelere yönelik terapi hizmeti.",
    features: ["İlişki danışmanlığı", "İletişim teknikleri", "Aile dinamikleri"],
  },
  {
    icon: Baby,
    title: "Çocuk & Ergen Terapisi",
    description: "Çocuk ve ergenlerin gelişim süreçlerindeki duygusal ve davranışsal sorunlarına yönelik özel yaklaşımlar.",
    features: ["Oyun terapisi", "Gelişim desteği", "Aile katılımı"],
  },
  {
    icon: Video,
    title: "Online Terapi",
    description: "Evden çıkmadan, güvenli video görüşme platformu üzerinden profesyonel psikolojik danışmanlık hizmeti.",
    features: ["Esnek saatler", "Güvenli platform", "Evden konfor"],
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-glow">
            🎯 Özel Hizmetler
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            Size Özel <span className="text-primary">Terapi Çözümleri</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Modern psikoloji yaklaşımları ve kanıta dayalı terapi yöntemleriyle özel çözümler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl overflow-hidden animate-slide-up h-fit"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4 pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-float">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-text-primary mb-2">{service.title}</CardTitle>
                <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  size="sm"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all group-hover:scale-105"
                >
                  Başla
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;