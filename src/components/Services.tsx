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
    <section className="py-24 bg-warm-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-primary/[0.01] bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center px-5 py-2.5 bg-primary-light/50 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full mr-2.5"></span>
            Uzman Hizmetlerimiz
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            <span className="gradient-text">Psikanaliz & Nörobilim</span>
            <br />Temelli Terapi Hizmetleri
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light">
            Modern psikanalitik yaklaşımlar ve nörobilim araştırmalarıyla desteklenen, kişiselleştirilmiş terapi süreçleri sunuyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="premium-card hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group border-0 overflow-hidden"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-primary-light/50 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-primary-light/60 text-primary px-3 py-1.5 rounded-full font-medium">{service.duration}</span>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 pt-0">
                  <Button 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-2xl py-4 text-base font-medium shadow-button hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Randevu Al
                    <Calendar className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;