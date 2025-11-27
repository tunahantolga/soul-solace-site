import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Sparkles } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "TLDP Süpervizyon",
    description: "Zaman Sınırlı Dinamik Psikoterapi uzman eğitimi. LIFT sertifikalı program.",
    badge: "Uzman Seviye",
    color: "from-blue-600 to-cyan-500"
  },
  {
    icon: Users,
    title: "İntegratif Psikoterapi",
    description: "Çok yönlü terapi yaklaşımlarını entegre eden master programı.",
    badge: "Master Program",
    color: "from-purple-600 to-pink-500"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Eğitim Programları</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Profesyonel Gelişim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uluslararası standartlarda süpervizyon ve eğitim programları
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-premium hover:shadow-glow transition-all duration-700"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              {/* Glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{program.badge}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Sertifikalı</span>
                  </div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Kayıt Açık</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                  <span className="text-sm font-medium">Detaylı Bilgi</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
