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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-primary">
            Sunduğum <span className="text-primary">Hizmetler</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Her bireyin ihtiyaçlarına özel olarak tasarlanmış, kanıta dayalı terapi yaklaşımları ile size destek oluyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-text-secondary text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary-soft">
                  Detayları Gör
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