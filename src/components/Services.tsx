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
    <section className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
            🎯 Özel Hizmetler
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            Size Özel <span className="text-primary">Terapi Çözümleri</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Modern psikoloji yaklaşımları ve kanıta dayalı terapi yöntemleriyle, 
            her danışanıma özel çözümler sunuyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card border-border rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-text-primary mb-3">{service.title}</CardTitle>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-2xl py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Hemen Başla
                  <ArrowRight className="h-5 w-5 ml-2" />
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