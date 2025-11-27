import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Heart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Bireysel Terapi",
    description: "Anksiyete, depresyon ve stres yönetimi için kişiselleştirilmiş terapi seansları."
  },
  {
    icon: Users,
    title: "Çift Terapisi", 
    description: "İletişimi güçlendirin ve ilişki zorluklarını birlikte aşın."
  },
  {
    icon: Heart,
    title: "Aile Terapisi",
    description: "Aile içi çatışmaları çözün ve daha sağlıklı ilişkiler kurun."
  },
  {
    icon: Lightbulb,
    title: "Genç Danışmanlığı",
    description: "Gençler için yaşa uygun destek ve yönlendirme."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Hizmetler
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Farklı terapi ihtiyaçlarınız için profesyonel destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
