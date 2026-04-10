import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Bireysel Terapi",
    description: "Anksiyete, depresyon ve stres yönetimi için kişiselleştirilmiş terapi seansları.",
    link: "/bireysel-terapi"
  },
  {
    icon: Users,
    title: "Çift Terapisi", 
    description: "İletişimi güçlendirin ve ilişki zorluklarını birlikte aşın.",
    link: "/cift-terapisi"
  },
  {
    icon: Heart,
    title: "Aile Terapisi",
    description: "Aile içi çatışmaları çözün ve daha sağlıklı ilişkiler kurun.",
    link: "/aile-terapisi"
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Hizmetlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Farklı terapi ihtiyaçlarınız için profesyonel ve kişiselleştirilmiş destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="block">
              <Card 
                className="group border border-border hover:border-primary/50 transition-all duration-500 premium-card relative overflow-hidden h-full"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Calm blue overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-5 sm:p-6 relative z-10">
                  {/* Icon with fixed blue background */}
                  <div className="w-14 h-14 bg-primary/15 border border-primary/20 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-medium">Detayları Gör</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
