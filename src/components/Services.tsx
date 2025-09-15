import { Card, CardContent } from "@/components/ui/card";geo
import { Button } from "@/components/ui/button";
import { Brain, Users, Heart, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Bireysel Terapi",
    description: "Anksiyete, depresyon, stres veya yaşam geçişlerini yönetmenize yardımcı olmak için kişiselleştirilmiş birebir seanslar."
  },
  {
    icon: Users,
    title: "Çift Terapisi", 
    description: "İletişimi güçlendirin, güveni yeniden inşa edin ve deneyimli bir danışmanın yardımıyla ilişki zorluklarını aşın."
  },
  {
    icon: Heart,
    title: "Aile Terapisi",
    description: "Çatışma, değişim veya duygusal zorluklarla karşılaşan ailelere destek - daha sağlıklı, bağlantılı ilişkiler yaratın."
  },
  {
    icon: Lightbulb,
    title: "Genç Danışmanlığı",
    description: "Okul stresi, özgüven sorunları veya duygusal endişelerle başa çıkan çocuklar ve gençler için yaşa uygun destek."
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            <span className="block">Size Nasıl</span>
            <span className="block text-slate-600">Yardımcı Oluyoruz</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Yaşamın zorluklarında rehberlik etmek için şefkatli ve kişiselleştirilmiş ruh sağlığı desteği sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-slate-800 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
            Tüm Hizmetleri Görüntüle
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;