import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Heart, MessageCircle, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CiftTerapisi = () => {
  const benefits = [
    "İletişim becerilerini geliştirme",
    "Çatışma çözme stratejileri",
    "Duygusal bağ güçlendirme",
    "Güven ve intimite artırma",
    "Ortak hedefler belirleme"
  ];

  const topics = [
    { icon: MessageCircle, title: "İletişim Sorunları", description: "Etkili iletişim tekniklerini öğrenerek anlaşmazlıkları azaltma" },
    { icon: Heart, title: "Duygusal Bağ", description: "İlişkide intimite ve duygusal yakınlığı yeniden inşa etme" },
    { icon: Target, title: "Çatışma Çözümü", description: "Sağlıklı anlaşmazlık yönetimi ve problem çözme becerileri" },
    { icon: TrendingUp, title: "İlişki Gelişimi", description: "Birlikte büyüme ve ilişkiyi güçlendirme stratejileri" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Çift Terapisi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Çift Terapisi ve İlişki Danışmanlığı
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                İlişkinizi güçlendirin, iletişimi geliştirin ve birlikte daha mutlu bir gelecek inşa edin. 
                Profesyonel terapi desteği ile çatışmaları fırsata dönüştürün.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What is Couples Therapy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Çift Terapisi Nedir?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4 leading-relaxed">
                    Çift terapisi, romantik ilişkilerde yaşanan zorlukları aşmak, iletişimi güçlendirmek ve ilişkinin 
                    kalitesini artırmak için profesyonel destek sunan bir psikoterapi sürecidir. Bu süreçte, çiftler 
                    güvenli bir ortamda birlikte çalışarak ilişkilerindeki dinamikleri anlar ve değiştirir.
                  </p>
                  <p className="leading-relaxed">
                    Psikodinamik yaklaşım ile, ilişki örüntülerinin kökenlerini keşfeder, bilinçdışı süreçleri anlar 
                    ve daha sağlıklı bir ilişki dinamiği oluşturmak için birlikte çalışırız. Her iki partnerin ihtiyaçları 
                    ve perspektifleri eşit önemle ele alınır.
                  </p>
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Çalışma Alanları</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {topics.map((topic, index) => (
                    <Card key={index} className="border border-border hover:border-purple-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <topic.icon className="w-6 h-6 text-purple-600" />
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
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* When to Seek Therapy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Ne Zaman Çift Terapisine Başlanmalı?</h2>
                <Card className="border border-border bg-purple-500/5">
                  <CardContent className="p-8">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Sürekli tekrarlayan anlaşmazlıklar ve çatışmalar yaşıyorsanız</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>İletişim kopukluğu ve anlaşılamama hissi varsa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Güven kırılması veya sadakatsizlik yaşandıysa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Duygusal veya fiziksel yakınlık azaldıysa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>Önemli yaşam değişiklikleri (evlilik, bebek, taşınma) sürecindeyseniz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">•</span>
                        <span>İlişkinizi güçlendirmek ve gelişim için fırsatlar yaratmak istiyorsanız</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Birlikte Daha Güçlü Bir İlişki İnşa Edin</h2>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  İlişkiniz için bugün ilk adımı atın. Ücretsiz ön görüşme için iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/iletisim">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 h-12 px-8">
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

export default CiftTerapisi;