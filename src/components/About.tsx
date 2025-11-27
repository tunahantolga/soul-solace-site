import { Heart, Shield, Star, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Şefkat",
    description: "Derin anlayış ve empati ile yaklaşıyoruz",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Star,
    title: "Profesyonellik",
    description: "Bilimsel temelli, güncel terapi yöntemleri",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Tam gizlilik ve güvenli terapötik ortam",
    color: "from-purple-500 to-indigo-500"
  }
];

const features = [
  "Lisanslı ve deneyimli terapist",
  "Kanıta dayalı terapi yöntemleri",
  "Kişiye özel tedavi planı",
  "Esnek randevu saatleri",
  "Online ve yüz yüze seanslar",
  "%100 gizlilik garantisi"
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Neden Biz?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              İntegratif Psikoterapi Yaklaşımı
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Her danışana özel, bilimsel temelli ve güven veren profesyonel destek
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-premium"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent-blue rounded-full"></div>
              Neler Sunuyoruz?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
