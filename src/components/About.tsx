import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Star } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            İntegratif Psikoterapi
          </h2>
          
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            Yaklaşımımız profesyonel ve kişiseldir. Her danışana özel, bilimsel temelli terapi yöntemleri uyguluyoruz.
          </p>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Şefkat</h3>
              <p className="text-sm text-muted-foreground">Derin anlayış ve empati</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Bağlantı</h3>
              <p className="text-sm text-muted-foreground">Güçlü terapötik ilişki</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Güven</h3>
              <p className="text-sm text-muted-foreground">Güvenli ve gizli ortam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
