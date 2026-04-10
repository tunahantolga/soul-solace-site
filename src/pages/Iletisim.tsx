import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Iletisim = () => {
  const whatsappUrl =
    "https://wa.me/905326098044?text=Merhaba%2C%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                İletişim
              </h1>
              <p className="text-base text-muted-foreground">
                Sorularınız için bana ulaşabilirsiniz
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Telefon</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          0532 609 80 44 (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">E-posta</p>
                      <a href="mailto:dribrahimsari@gmail.com" className="inline-block text-sm break-words text-muted-foreground hover:text-foreground">
                        dribrahimsari@gmail.com
                      </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Adres</p>
                        <p className="text-sm text-muted-foreground break-words">
                          Halaskargazi Cad. No:81 Cicek Apt. Kat:8 D:15, Istanbul
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Çalışma Saatleri</p>
                        <p className="text-sm text-muted-foreground">Pazartesi - Cumartesi: 09:00 - 20:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Iletisim;
