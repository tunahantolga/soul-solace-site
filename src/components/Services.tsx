import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Users, Heart, Lightbulb, Calendar } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Dinamik Psikoterapi",
    description: "TLDP ve psikanalitik yaklaşımlarla derinlemesine terapi süreçleri",
    features: ["Zaman Sınırlı Dinamik Psikoterapi", "Aktarım Odaklı Psikoterapi", "Bağlanma Teorisi", "İntegratif Yaklaşım"],
    price: "1200₺",
    duration: "50 dk"
  },
  {
    icon: Users,
    title: "Kişilik Bozuklukları", 
    description: "Kişilik bozukluklarına özel yaklaşımlarla kapsamlı terapi",
    features: ["Borderline Kişilik", "Narsistik Kişilik", "Antisosyal Kişilik", "Kaçıngan Kişilik"],
    price: "1200₺",
    duration: "50 dk"
  },
  {
    icon: Heart,
    title: "Travma & Dissosiyasyon",
    description: "Travma ve çözülme bozukluklarına özel nörobilim destekli yaklaşım",
    features: ["PTSD Terapisi", "Dissosiyatif Bozukluklar", "Çoklu Kişilik", "Travma Entegrasyonu"],
    price: "1200₺", 
    duration: "50 dk"
  },
  {
    icon: Lightbulb,
    title: "Duygu Odaklı Terapi",
    description: "Duygusal işleme ve bağlanma odaklı terapi yaklaşımları",
    features: ["EFT", "Duygu Düzenleme", "Bağlanma Onarımı", "İlişkisel Terapi"],
    price: "1200₺",
    duration: "50 dk"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            🧠 Uzman Hizmetler
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            Psikanaliz & <span className="text-primary">Nörobilim Temelli</span> Terapi
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Modern psikanalitik yaklaşımlar ve nörobilim araştırmalarıyla desteklenen terapi süreçleri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card border-border rounded-2xl overflow-hidden"
            >
              <CardHeader className="text-center pb-4 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{service.duration}</span>
                  <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">{service.price}</span>
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
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Randevu Al
                  <Calendar className="h-4 w-4 ml-2" />
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