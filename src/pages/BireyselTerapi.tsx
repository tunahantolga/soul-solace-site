import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Clock, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const BireyselTerapi = () => {
  const benefits = [
    "Kişiselleştirilmiş terapi yaklaşımı",
    "Gizlilik ve güvenli ortam",
    "Kanıta dayalı yöntemler",
    "Esneklik ve destek",
    "Uzun vadeli iyileşme odaklı"
  ];

  const topics = [
    { icon: Brain, title: "Depresyon", description: "Duygu durum bozuklukları ve depresif belirtilerin tedavisi" },
    { icon: Heart, title: "Anksiyete Bozuklukları", description: "Panik atak, yaygın anksiyete, sosyal fobi tedavisi" },
    { icon: Shield, title: "Travma ve PTSD", description: "Travmatik yaşantıların işlenmesi ve iyileşme süreci" },
    { icon: Users, title: "Kişilerarası İlişkiler", description: "İlişki sorunları ve bağlanma problemleri" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent-blue/5 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Bireysel Terapi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Bireysel Psikoterapi
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Kişisel gelişim, duygusal zorluklar ve yaşam problemleriniz için profesyonel psikolojik destek. 
                Psikanalitik ve psikodinamik yaklaşımlarla derinlemesine iyileşme yolculuğu.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What is Individual Therapy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Bireysel Terapi Nedir?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4 leading-relaxed">
                    Bireysel psikoterapi, kişinin iç dünyasını, duygularını, düşüncelerini ve davranışlarını anlamak 
                    ve değiştirmek için terapist ile bire bir yapılan profesyonel bir süreçtir. Bu süreçte, güvenli 
                    ve gizli bir ortamda kendi deneyimlerinizi keşfeder, yaşam zorluklarınızla başa çıkma becerilerinizi 
                    geliştirirsiniz.
                  </p>
                  <p className="leading-relaxed">
                    TLDP (Time-Limited Dynamic Psychotherapy) yaklaşımı ile 16-20 seans süren odaklı terapi sürecinde, 
                    belirli hedefler doğrultusunda çalışırız. Psikanalitik ve psikodinamik temelli bu yaklaşım, 
                    bilinçdışı süreçleri anlama ve içgörü kazanma üzerine kuruludur.
                  </p>
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Çalışma Alanları</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {topics.map((topic, index) => (
                    <Card key={index} className="border border-border hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <topic.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Terapi Sürecinin Faydaları</h2>
                <Card className="border border-border">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Process Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border bg-primary/5">
                  <CardContent className="p-6">
                    <Clock className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">Seans Süresi</h3>
                    <p className="text-muted-foreground">
                      Her seans 50 dakika sürer ve genellikle haftada bir kez yapılır. TLDP yaklaşımında toplam 16-20 seans önerilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border bg-accent-blue/5">
                  <CardContent className="p-6">
                    <Shield className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">Gizlilik Garantisi</h3>
                    <p className="text-muted-foreground">
                      Tüm görüşmeler mutlak gizlilik içinde yapılır. Kişisel bilgileriniz yasal zorunluluklar dışında paylaşılmaz.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary via-primary-hover to-accent-blue rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">İlk Adımı Atmaya Hazır Mısınız?</h2>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  Size özel terapi sürecinizi birlikte planlayalım. Ücretsiz ön görüşme için hemen iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/iletisim">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-8">
                      Randevu Al
                    </Button>
                  </Link>
                  <Link to="/sss">
                    <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 h-12 px-8">
                      Sıkça Sorulan Sorular
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BireyselTerapi;