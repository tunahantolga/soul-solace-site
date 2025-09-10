import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm shadow-card border-border">
          <div className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-text-primary">
                İlk adımı atmaya hazır mısınız?
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Psikolojik danışmanlık sürecinizi başlatmak için benimle iletişime geçebilirsiniz. 
                Size en uygun randevu saatini birlikte belirleyelim.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara: 0532 XXX XX XX
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-soft">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp ile İletişim
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <Phone className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-text-primary">Telefon</h3>
                <p className="text-text-secondary">0532 XXX XX XX</p>
              </div>
              
              <div className="text-center space-y-2">
                <Mail className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-text-primary">E-posta</h3>
                <p className="text-text-secondary">info@draysekaya.com</p>
              </div>
              
              <div className="text-center space-y-2">
                <MessageCircle className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-text-primary">WhatsApp</h3>
                <p className="text-text-secondary">7/24 Destek</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;