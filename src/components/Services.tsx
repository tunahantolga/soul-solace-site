import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Bireysel Terapi",
    description: "Anksiyete, depresyon ve stres yönetimi için kişiselleştirilmiş terapi seansları.",
    color: "from-blue-500 to-cyan-500",
    link: "/bireysel-terapi"
  },
  {
    icon: Users,
    title: "Çift Terapisi", 
    description: "İletişimi güçlendirin ve ilişki zorluklarını birlikte aşın.",
    color: "from-purple-500 to-pink-500",
    link: "/cift-terapisi"
  },
  {
    icon: Heart,
    title: "Aile Terapisi",
    description: "Aile içi çatışmaları çözün ve daha sağlıklı ilişkiler kurun.",
    color: "from-pink-500 to-rose-500",
    link: "/aile-terapisi"
  },
  {
    icon: Lightbulb,
    title: "Genç Danışmanlığı",
    description: "Gençler için yaşa uygun destek ve yönlendirme.",
    color: "from-amber-500 to-orange-500",
    link: "/genc-danismanligi"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Farklı terapi ihtiyaçlarınız için profesyonel ve kişiselleştirilmiş destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="block">
              <Card 
                className="group border border-border hover:border-primary/50 transition-all duration-500 premium-card relative overflow-hidden h-full"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <service.icon className="h-7 w-7 text-white" />
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
