import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Calendar, Phone, ArrowRight, Star, Quote } from "lucide-react";

const Hakkimda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl font-bold text-text-primary">
                Hakkımda
              </h1>
              <p className="text-xl text-text-secondary">
                Psikoloji alanındaki deneyimimle size nasıl destek olabileceğimi keşfedin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Eğitim Hayatım
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Lisans:</strong> İstanbul Üniversitesi Psikoloji Bölümü (2018)</p>
                  <p><strong>Yüksek Lisans:</strong> Klinik Psikoloji (2020)</p>
                  <p><strong>Doktora:</strong> Klinik Psikoloji (Devam ediyor)</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Sertifikalar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Bilişsel Davranışçı Terapi Sertifikası</p>
                  <p>• EMDR Terapi Uzmanı</p>
                  <p>• Çift ve Aile Terapisi Sertifikası</p>
                  <p>• Çocuk ve Ergen Terapisi Uzmanı</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Terapi Yaklaşımım
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-text-secondary">
                <p>
                  Her danışanımın eşsiz bir hikayesi olduğuna inanıyorum. Bu nedenle terapi sürecinde 
                  kişiye özel yaklaşımlar geliştiriyorum. Temel amacım, danışanlarımın kendi iç 
                  güçlerini keşfetmelerine ve yaşam kalitelerini artırmalarına yardımcı olmaktır.
                </p>
                <p>
                  Kullandığım başlıca terapi yöntemleri:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bilişsel Davranışçı Terapi (BDT)</li>
                  <li>EMDR (Eye Movement Desensitization and Reprocessing)</li>
                  <li>Şema Terapi</li>
                  <li>Farkındalık Temelli Yaklaşımlar</li>
                  <li>Çözüm Odaklı Kısa Terapi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Çalışma Alanlarım
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4 text-text-secondary">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Bireysel Terapi</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Depresyon ve Anksiyete</li>
                    <li>• Travma ve PTSD</li>
                    <li>• Öfke Yönetimi</li>
                    <li>• Kişisel Gelişim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">İlişki Terapisi</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Evlilik Danışmanlığı</li>
                    <li>• İletişim Sorunları</li>
                    <li>• Aile İçi Çatışmalar</li>
                    <li>• Boşanma Süreci Desteği</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* References Section */}
            <Card className="shadow-card mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Referanslar ve Öneriler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-text-primary">Akademik Referanslar</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-medium text-text-primary">Prof. Dr. Ayşe Kaya</p>
                        <p className="text-sm text-text-secondary">İstanbul Üniversitesi Psikoloji Bölümü</p>
                        <p className="text-sm text-text-secondary">"Dr. İbrahim Sarı, klinik psikoloji alanında yetkin ve deneyimli bir uzmandır."</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-medium text-text-primary">Doç. Dr. Mehmet Özkan</p>
                        <p className="text-sm text-text-secondary">Klinik Psikoloji Uzmanı</p>
                        <p className="text-sm text-text-secondary">"Terapi yaklaşımı ve danışan odaklı çalışması örnek alınacak niteliktedir."</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-text-primary">Meslektaş Önerileri</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-medium text-text-primary">Dr. Elif Demir</p>
                        <p className="text-sm text-text-secondary">Psikiyatrist</p>
                        <p className="text-sm text-text-secondary">"İntegratif yaklaşımı ve sürekli kendini geliştirme çabası takdire şayandır."</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-medium text-text-primary">Uzm. Psk. Can Yılmaz</p>
                        <p className="text-sm text-text-secondary">Klinik Psikolog</p>
                        <p className="text-sm text-text-secondary">"Süpervizyon sürecinde öğrendiğim en değerli bilgileri kendisinden aldım."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h3 className="text-3xl font-bold text-text-primary">
                    Terapi Sürecinizi Başlatmaya Hazır mısınız?
                  </h3>
                  <p className="text-lg text-text-secondary">
                    Size en uygun terapi yaklaşımını belirlemek ve ihtiyaçlarınıza göre 
                    kişiselleştirilmiş bir süreç oluşturmak için benimle iletişime geçin.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Phone className="mr-2 h-5 w-5" />
                      Hemen Ara: 0532 123 45 67
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                      WhatsApp ile İletişim
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 pt-4">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-medium">4.7/5 Puan</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-medium">300+ Mutlu Danışan</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Award className="w-5 h-5 text-accent" />
                      <span className="font-medium">Uzman Sertifikalı</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hakkimda;