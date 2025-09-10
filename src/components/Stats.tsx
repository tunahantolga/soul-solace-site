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
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Rakamlarla Başarı</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Yıllardır sürdürdüğüm profesyonel hizmetimin sonuçları
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;