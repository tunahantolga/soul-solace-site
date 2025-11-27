import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users } from "lucide-react";

const Education = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Eğitim & Süpervizyon
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Profesyonel gelişim programları ve uzman süpervizyonu
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* TLDP Süpervizyon */}
          <Card className="border border-border hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                TLDP Süpervizyon Eğitimi
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Zaman Sınırlı Dinamik Psikoterapi uzman eğitimi. LIFT sertifikalı program.
              </p>
              <p className="text-xs text-muted-foreground">İstanbul & Online</p>
            </CardContent>
          </Card>

          {/* İntegratif Psikoterapi */}
          <Card className="border border-border hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                İntegratif Psikoterapi
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Çok yönlü terapi yaklaşımlarını bir arada kullanma sanatı.
              </p>
              <p className="text-xs text-muted-foreground">Master Programı</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
