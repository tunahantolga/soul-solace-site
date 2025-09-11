import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Mutlu Danışan",
    description: "Başarılı terapi süreçleri"
  },
  {
    icon: Clock,
    number: "5+",
    label: "Yıl Deneyim",
    description: "Psikoloji alanında"
  },
  {
    icon: Award,
    number: "15+",
    label: "Sertifika",
    description: "Uzmanlık belgesi"
  },
  {
    icon: Heart,
    number: "%98",
    label: "Memnuniyet",
    description: "Danışan geri bildirimi"
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary opacity-90"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-primary-foreground/5 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Rakamlarla Başarı</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
            Yıllardır sürdürdüğüm profesyonel hizmetimin sonuçları
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-500 group"
            >
              <CardContent className="text-center p-8">
                <div className="w-20 h-20 bg-primary-foreground/15 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="text-5xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2 opacity-95">{stat.label}</div>
                <div className="text-sm opacity-75 leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;