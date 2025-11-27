import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, CheckCircle, Sparkles, BookOpen, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const GencDanismanligi = () => {
  const benefits = [
    "Güvenli ve anlayışlı bir ortam",
    "Yaşa uygun terapi yaklaşımları",
    "Akademik ve sosyal destek",
    "Duygusal düzenleme becerileri",
    "Kimlik gelişimi için rehberlik"
  ];

  const topics = [
    { icon: BookOpen, title: "Akademik Stres", description: "Sınav kaygısı, okul başarısızlığı ve motivasyon sorunları" },
    { icon: Heart, title: "Duygusal Zorluklar", description: "Anksiyete, depresyon ve öfke yönetimi konularında destek" },
    { icon: Sparkles, title: "Kimlik ve Benlik", description: "Ergenlik dönemi kimlik gelişimi ve öz güven inşası" },
    { icon: TrendingUp, title: "Sosyal İlişkiler", description: "Arkadaşlık sorunları, zorbalık ve sosyal uyum" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20 mb-6">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-600">Genç Danışmanlığı</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ergen ve Genç Yetişkin Danışmanlığı
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Ergenlik ve genç yetişkinlik döneminin zorluklarında profesyonel psikolojik destek. 
                Gençlerin duygusal, sosyal ve akademik gelişimini destekliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What is Adolescent Counseling */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Genç Danışmanlığı Nedir?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4 leading-relaxed">
                    Ergen ve genç yetişkin danışmanlığı, 13-25 yaş arası gençlerin yaşadığı duygusal, sosyal, 
                    akademik ve kimlik gelişimiyle ilgili zorlukları anlamak ve aşmak için sunulan profesyonel 
                    psikolojik destek hizmetidir. Bu kritik gelişim döneminde, gençler güvenli bir ortamda 
                    kendilerini ifade edebilir ve zorluklarla başa çıkma becerileri geliştirebilirler.
                  </p>
                  <p className="leading-relaxed">
                    Ergenlik dönemi, bedensel, duygusal ve sosyal değişimlerin yoğun yaşandığı bir süreçtir. 
                    Bu dönemde gençler kimlik arayışı, bağımsızlaşma, akran ilişkileri ve akademik baskılarla 
                    karşılaşırlar. Psikodinamik ve gelişim odaklı yaklaşımlarla, gençlerin içsel dünyalarını 
                    anlamalarına ve sağlıklı başa çıkma stratejileri geliştirmelerine yardımcı oluruz.
                  </p>
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Çalışma Alanları</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {topics.map((topic, index) => (
                    <Card key={index} className="border border-border hover:border-amber-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <topic.icon className="w-6 h-6 text-amber-600" />
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
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Common Issues */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Sık Karşılaşılan Konular</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border border-border bg-amber-500/5">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Duygusal</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Anksiyete ve kaygı</li>
                        <li>• Depresyon belirtileri</li>
                        <li>• Öfke kontrolü</li>
                        <li>• Stres yönetimi</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border bg-orange-500/5">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Sosyal</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Akran ilişkileri</li>
                        <li>• Zorbalık (mobbing)</li>
                        <li>• Sosyal medya etkileri</li>
                        <li>• İletişim sorunları</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border border-border bg-amber-600/5">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Gelişimsel</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Kimlik arayışı</li>
                        <li>• Özgüven eksikliği</li>
                        <li>• Kariyer belirsizliği</li>
                        <li>• Aile çatışmaları</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* For Parents */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Ebeveynler İçin</h2>
                <Card className="border border-border bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">
                      Ebeveynler olarak, çocuğunuzun bu zorlu dönemde size ihtiyacı var. Terapi sürecinde, 
                      gerekli durumlarda ebeveyn görüşmeleri yapılarak sizleri de sürece dahil ediyoruz.
                    </p>
                    <p className="text-muted-foreground">
                      Gençlerin gizliliği korunurken, ailenin desteğini güçlendirmek için ebeveyn rehberliği 
                      ve danışmanlık hizmetleri sunuyoruz. Birlikte, gencin sağlıklı gelişimi için en iyi 
                      yaklaşımı belirliyoruz.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Gençler İçin Güvenli Bir Alan</h2>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  Her genç, kendini ifade edebileceği ve anlaşılacağı bir desteği hak ediyor. 
                  Ücretsiz ön görüşme için iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/iletisim">
                    <Button size="lg" className="bg-white text-amber-600 hover:bg-white/90 h-12 px-8">
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

export default GencDanismanligi;