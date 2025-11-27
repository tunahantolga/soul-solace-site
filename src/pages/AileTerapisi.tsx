import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Home, Users, Shield, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const AileTerapisi = () => {
  const benefits = [
    "Aile içi iletişimin güçlendirilmesi",
    "Çatışma çözme becerilerinin geliştirilmesi",
    "Sağlıklı sınırların belirlenmesi",
    "Aile dinamiklerinin anlaşılması",
    "Duygusal bağların yeniden kurulması"
  ];

  const topics = [
    { icon: Home, title: "Aile İçi Çatışmalar", description: "Nesiller arası anlaşmazlıkları çözme ve uyumu sağlama" },
    { icon: Users, title: "Ebeveynlik Sorunları", description: "Çocuk yetiştirme, disiplin ve sınır koyma konularında destek" },
    { icon: Shield, title: "Aile Travmaları", description: "Kayıp, boşanma veya kriz dönemlerinde aileyi destekleme" },
    { icon: Smile, title: "İletişim Dinamikleri", description: "Aile üyeleri arasında sağlıklı iletişim kurma" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-500/5 via-background to-rose-500/5 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 backdrop-blur-sm rounded-full border border-pink-500/20 mb-6">
                <Heart className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-600">Aile Terapisi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Aile Terapisi ve Aile Danışmanlığı
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Ailenizi bir araya getirin, iletişimi güçlendirin ve sağlıklı ilişkiler kurun. 
                Tüm aile üyelerinin ihtiyaçlarına odaklanan profesyonel terapi desteği.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What is Family Therapy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Aile Terapisi Nedir?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4 leading-relaxed">
                    Aile terapisi, aile üyeleri arasındaki ilişkileri iyileştirmek, iletişimi güçlendirmek ve 
                    aile içi sorunları çözmek için tasarlanmış bir psikoterapi yaklaşımıdır. Bu süreçte, aile bir 
                    sistem olarak ele alınır ve her üyenin katkısı ve deneyimi önemle dinlenir.
                  </p>
                  <p className="leading-relaxed">
                    Sistemik ve psikodinamik yaklaşımlar kullanılarak, aile içi roller, örüntüler ve dinamikler 
                    anlaşılır. Terapide, ailenin güçlü yönleri vurgulanır ve zorlukları birlikte aşmak için 
                    stratejiler geliştirilir. Her yaş grubundan aile üyesi sürece dahil edilebilir.
                  </p>
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Çalışma Alanları</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {topics.map((topic, index) => (
                    <Card key={index} className="border border-border hover:border-pink-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <topic.icon className="w-6 h-6 text-pink-600" />
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
                          <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Who Can Benefit */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Kimler Faydalanabilir?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border border-border bg-pink-500/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Aileler İçin</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Ebeveynler ve çocuklar arası iletişim sorunları</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Kardeşler arası çatışmalar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Ergenlik dönemi zorlukları</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Boşanma sürecinde aileler</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border bg-rose-500/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Özel Durumlar</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Kayıp ve yas sürecindeki aileler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Yeniden kurulan aileler (üvey aileler)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Kronik hastalık ile yaşayan aileler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600 font-bold mt-0.5">•</span>
                          <span>Nesiller arası travma ve çatışmalar</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-rose-500 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ailenizle Daha Güçlü Bağlar Kurun</h2>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  Aileniz için huzurlu ve sağlıklı bir ortam yaratın. Ücretsiz ön görüşme için iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/iletisim">
                    <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 h-12 px-8">
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

export default AileTerapisi;